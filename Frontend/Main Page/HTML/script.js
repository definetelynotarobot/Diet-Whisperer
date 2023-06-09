const API_KEY = "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"; // OpenAI API anahtarınızı buraya yerleştirin

async function fetchData() {
    try {
        const userInput = document.getElementById("userInput").value;

        const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: userInput,
                max_tokens: 7
            })
        });

        const data = await response.json();
        const responseInput = document.getElementById("response");
        responseInput.value = data.choices[0].text; // Konsolda yazılı veriyi input alanına atama
    } catch (error) {
        console.error("Bir hata oluştu:", error);
    }
}