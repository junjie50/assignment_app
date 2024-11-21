<script>
    let code = '';
</script>
  
<div class="flex flex-col items-center space-y-4 p-6 max-w-md mx-auto border border-gray-300 rounded-lg shadow-md">
    <h1 class="text-2xl font-semibold text-gray-800">What is your question?</h1>
    <input
        type="text"
        bind:value={code}
        class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
        placeholder="Type your answer here..."
    />
</div>
  