<script>
    import GradingButton from "./GradingButton.svelte"
    import { onMount } from 'svelte';
    import Loading from "./Loading.svelte"
    import { userUuid } from "../stores/stores.js";

    export let id;
    export let questionTitle;
    export let questionContent;
    export let feedback
    let intervalId;
    let code = '';
    let submissions;
    let correct = false;
    let active;
    let pageStatus;
    
    const handleTab = (event) => {
        // Check if Tab key is pressed
        if (event.key === "Tab") {
            event.preventDefault(); // Prevent moving focus to the next element

            const textarea = event.target;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;

            // Insert the tab character at the cursor position
            textarea.setRangeText("\t", start, end, "end");
        }
    }

    const polling = async () => {
        try{
            // check if we need to poll
            if(pageStatus !== "pending") {
                console.log("no poll");
                return;
            }
            console.log("polling");
            const response = await fetch(`/api/submission/${id}/${$userUuid}`);
            const data = await response.json();
            
            if(data.length === 0) {
                return;
            }

            const submit = data[0];
            // update if there is incoming change
            if(submit.status !== "pending") {
                pageStatus = submit.status;
                correct = correct || submit.correct;
                feedback = submit.grader_feedback;
                active = submit;
            }
        }
        catch(e) {
            alert(e);
        }
    }

    
    // check for any submissions
    onMount(async () => {
        const response = await fetch(`/api/submissions/${id}/${$userUuid}`);
        submissions = await response.json();
        // check the last submission for pending, wrong, correct
        if(submissions.length > 0) {
            active = submissions[submissions.length - 1];
            code = active.code;
            feedback = active.grader_feedback;
            pageStatus = active.status;

            correct = submissions.reduce(
                (accumulator, sub) => accumulator || sub.correct,
                false,
            );
        }

        // add in short polling
        intervalId = setInterval(polling, 1000);
	});
</script>


<div class="container max-w-screen-lg mx-auto p-5">
    <div class ="flex flex-col left-0 w-max">
        <a
            id="prev-question-button"
            class="button bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded m-4"
            href="{parseInt(id) - 1}"
          >
          Prev
        </a>
    </div>
    <div class="mx-auto flex flex-row">
        <div class="bg-gray-900 md:col-span-4 p-5 text-white basis-1/3">
            <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                Question: {id}
            </h3>
            <p class="mt-4 leading-7 text-gray-200">
                Title: {questionTitle}
            </p>   
            <p class="mt-4 leading-7 text-gray-200">
                Description: {questionContent}
            </p>            
        </div>
        <div class=" flex justify-between relative basis-2/3">
            <textarea id="code" rows="20" bind:value={code} on:keydown={handleTab} readonly={pageStatus === "pending" || correct}
                class="resize-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 read-only"></textarea>
            {#if pageStatus === "pending"}
                <Loading />
            {:else if correct}
                <a id="next-question-button" class="mt-8 absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                    href="{parseInt(id) + 1}">
                    Proceed to next question
                </a>
            {/if}
        </div>
    </div>
    
    <div class="grid grid-cols-1">
        <div class ="flex flex-col items-center">
            <h3 class="text-xl sm:text-2xl leading-normal font-extrabold tracking-tight">
                Output
            </h3>
            <textarea id="content" rows="6" 
                class="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 resize-none bg-gray-50"
                readonly=true>
                {feedback?feedback:""}
            </textarea>
        </div>
    </div>
    <GradingButton bind:code={code} {id} bind:pageStatus={pageStatus} bind:active={active} />
</div>
  