<script>
    import "./style.css";

    const questions = new Questions();
    let currQuestion = questions.getQuestion();

    const letters = "ABCD"
</script>

<section class="flex justify-center items-center h-screen bg-light-blue">
    <main class="flex justify-evenly bg-white border-2 border-off-white rounded-xl">
        <div class="block h-full w-full p-[20px]">
            <div class="bg-white border-2 border-off-white rounded-xl overflow-hidden w-[400px] h-[300px]">
                <img class="w-full h-full" src="../images/{currQuestion.getImage()}" alt="">
            </div>
        </div>
        <div class="flex flex-col items-center gap-5 h-full w-full px-[60px] py-[30px]">
            <h1>{currQuestion.getQuestion()}</h1>
            <div class="flex flex-col justify-between h-full w-full gap-y-5">
                {#each currQuestion.getOptions() as option, i}
                    <button on:click={() => currQuestion = questions.getQuestion()} class="flex items-center bg-white border-2 border-off-white w-full h-[50px] p-[5px] rounded-xl">
                        <span class="flex items-center justify-center bg-white border-2 border-off-white w-[36px] h-[36px] mr-[10px] rounded-md">
                            <p>{letters[i]}</p>
                        </span>
                        <p>{option}</p>
                    </button>
                {/each}
            </div>
        </div>
    </main>
</section>