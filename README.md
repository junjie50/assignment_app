# Designing and Building Scalable Web Applications / Course Project I Template

## Running the system
Run the command below in the root folder to start the application.
**docker compose -f docker-compose.prod.yml up --build -d**

## Testing the functionality of system
With the application running in the back gound, run the following command.
**docker compose run --rm --entrypoint=npx e2e-playwright playwright test**

## Testing the performance of system
With the application running in the back gound, run the follow command in k6 folder.
**k6 run get-assignment-test.js**
**k6 run submit-assignment-test.js**


# Service will be launch at localhost:7800