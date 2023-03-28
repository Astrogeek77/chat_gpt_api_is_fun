import { config } from 'dotenv'
import { Configuration, OpenAIApi } from 'openai'

config() // dotenv config
// open AI config
const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
  })
)
