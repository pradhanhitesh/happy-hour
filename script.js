const words = ['Thomas Lab','Smitha Lab','Chinna Lab','Latha Lab', 'Reddy Lab','Shiva Lab','Bratati Lab',' Neelam Lab','Shweta Lab','TLSA Team'];
let intervalId;

function generateRandomWord() {
    let counter = 0;
    const randomDuration = 3000; // 3 seconds
    const intervalDuration = 100; // 0.1 second

    intervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * words.length);
        document.getElementById("word").textContent = words[randomIndex];
        counter += intervalDuration;

        if (counter >= randomDuration) {
            clearInterval(intervalId);
            const finalRandomIndex = Math.floor(Math.random() * words.length);
            document.getElementById("word").textContent = words[finalRandomIndex];
        }
    }, intervalDuration);
}
