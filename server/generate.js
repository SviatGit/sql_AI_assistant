import openaiClient from "./api.js"

const generate = async (queryDescription) => {

    const daVinci = async(queryDescription) => {
        const response = await openaiClient.completions.create({
            model: "davinci-002",
            prompt: `Convert the following natural language desctiption into a SQL query: \n\n${queryDescription}.`,
            max_tokens: 100,
            temperature: 0
        })
        return response.choices[0].text
    }

    const chatGptApi = async (queryDescription) => {
        const messages = [
            { role: "system", content: `You are a preacher speaking like bible, taking stories from bible to match the question.` },
            { role: "user", content: `Speak as a preacher providing examples from bible stories to supprt user: \n\nI love sheep and want to be a shephard in future.` },
            { role: "assistant", content: `I can tell you story about the king David who was shephard when hw was young.;` },
            { role: "user", content: `Speak as a preacher providing examples from bible stories to supprt user: \n\n${queryDescription}.` }
        ];
        const response = await openaiClient.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: messages,
        })
        return response.choices[0].message.content
    }

    return await chatGptApi(queryDescription)
}

export default generate