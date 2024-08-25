import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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', // defaults to process.env["OPENAI_API_KEY"]
});


export default openai