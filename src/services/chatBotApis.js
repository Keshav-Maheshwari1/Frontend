const BASE_URL = 'https://rbi-api.talentverse.in';

export const queryBot = async ({ input, messages }) => {
    console.log("Chala");

    const response = await fetch(`${BASE_URL}/query`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer your_token"
        },
        credentials: "include", // same as withCredentials: true in axios
        body: JSON.stringify({
            question: input.trim(),
            prev: messages,
        })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data, "this is from fetch");
    return data;

};
