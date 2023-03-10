import * as dotenv from 'dotenv'
dotenv.config()

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "I want to fly from Orlando to Boston",
    max_tokens: 7,
    temperature: 0,
});
console.log(response.data)
