import { connect } from "../deps.js";
import { grade } from "./gradingService.js";

const connection = await connect({ hostname: "rabbitmq", port: 5672 });
const channel = await connection.openChannel();
channel.qos({prefetchCount:1}); // ONLY ALLOW ONE TO PROCESS AT THE SAME TIME.

const queueName = "my.queue";
await channel.declareQueue({ queue: queueName });

const addToQueue = async (task) => {
    console.log("added to queue");
    return await channel.publish(
        { routingKey: queueName },
        { contentType: "application/json" },
        new TextEncoder().encode(JSON.stringify(task)),
    );
}

const consume = () => {
    return channel.consume(
        { queue: queueName },
        async (args, props, data) => {
            try{
                const task = JSON.parse(new TextDecoder().decode(data));
                const result = await grade(task.code, task.test_code);

                // after grade then ack the message so maintain sequential processing
                await channel.ack({ deliveryTag: args.deliveryTag }); 

                const updateObj = {
                    grader_feedback : result,
                    correct : (result.includes("OK"))? true:false,
                }
                // creates a package to update the assignment status
                const response = await fetch(`http://programming-api:7777/assignments/${task.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updateObj),
                });
                return result;
            }
            catch(e) {
                console.log(e);
            }
        },
    );
}

export {addToQueue, consume}