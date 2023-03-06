require('dotenv').config()
const { Configuration, OpenAIApi } = require('openai')

const configuration = new Configuration({
  apiKey: process.env.YOUR_API_KEY,
})
const openai = new OpenAIApi(configuration)

async function getResponse(text) {
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: text }],
  })
  console.log(JSON.stringify(completion.data))
  console.log(completion.data)
}

getResponse(
  'What can you do for programer. Are you going to replace them or benefit them?'
)

// Expected Response
/**
{
  id: 'chatcmpl-ZqGKHwnnpbFOJZMquPBXAd6D5',
  object: 'chat.completion',
  created: 1756927754,
  model: 'gpt-3.5-turbo-0301',
  usage: { prompt_tokens: 92, completion_tokens: 402, total_tokens: 494 },
  choices: [ { message: [{"message":{"role":"assistant","content":"As an AI language model, I am designed to assist programmers and provide them with helpful information and resources. I am not intended to replace programmers, but rather to augment their skills and knowledge. Programmers can use me to: Get answers to programming questions Learn new programming concepts and techniques Find examples and code snippets to help them solve problems Test and prototype code quickly and efficiently Collaborate with other programmers and share knowledge Overall, I believe that I can be a valuable tool for programmers and can help them be more productive and effective in their work."},"finish_reason":"stop","index":0}], finish_reason: 'stop', index: 0 } ]
}
 */

// Please refer to withContext.js if you wanna 