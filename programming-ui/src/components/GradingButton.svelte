<script>
  import { userUuid } from "../stores/stores.js";
  export let code;
  export let id;
  export let pageStatus;
  
  const doSimpleGrading = async () => {
    if(pageStatus === "pending") {
      alert("Submission pending");
      return;
    }

    const data = {
      user: $userUuid,
      code: code,
      id: id
    };

    try{
      const response = await fetch("/api/grade", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if(response.status !== 200) {
        alert("A previous question is pending/incomplete.");
        return;
      }
      const jsonData = await response.json();
      pageStatus = "pending";
    }
    catch(e){
      alert("submission failed");
    }
  };
</script>

<div class="grid grid-cols-1">
  <div class ="flex flex-col items-center">
    <button
      id="grading-button"
      class="bg-green-500 hover:bg-green-700 text-white font-bold p-4 rounded m-4"
      on:click={doSimpleGrading}
    >
      Submit Assignment
    </button>
  </div>
</div>