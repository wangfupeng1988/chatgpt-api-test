import OpenAI from 'openai'
import 'dotenv/config'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'How are you today?' }], // 消息内容
    model: 'gpt-3.5-turbo',
    max_tokens: 20, // 限制返回字符，帮你节省额度
  })
  const result = completion.choices[0]
  console.log('result: ', result)
}
main()
