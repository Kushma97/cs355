const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent";
async function getRecipe(){
    const apikey = document.getElementById("api-key-input").value.trim();
    const ingredients = document.getElementById("ingredients-input").value.trim();
    if (apikey === "" || ingredients === "") {
    alert("Please enter both API key and ingredients.");
    return;
    }
    document.getElementById("recipe-display").innerText = "Cooking up something special... 🍲";
    const prompt = `I have these ingredients: ${ingredients}. Please provide a creative recipe name, a list of instructions, and estimated cooking time. Format the output in clean HTML (using <h2> and <li> tags). Return only the inner HTML content. Do not include markdown code blocks, and do not include <html>, <head>, or <body> tags. Start directly with an <h2> tag`;

try {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-goog-api-key": apikey
        },
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        { text: prompt }
                    ]
                }
            ]
        })
    });

    const data = await response.json();

    document.getElementById("recipe-display").innerHTML =
        data.candidates[0].content.parts[0].text;

} catch (error) {
    document.getElementById("recipe-display").innerHTML =
        "Error fetching recipe. Check your API key or connection.";
}
}