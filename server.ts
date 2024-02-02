import { createServer } from 'http'
import OpenAI from 'openai'
import 'dotenv/config'
import { createReadStream } from 'fs'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const port = 3001
createServer(async (req, res) => {
  const url = new URL(req.url!, 'file:///')
  // console.log('url.pathname ', url.pathname)
  const query = Object.fromEntries(url.searchParams.entries())
  // console.log('query ', query)

  if (url.pathname === '/') {
    // 首页路由，返回 index.html
    createReadStream('./index.html').pipe(res)
    return
  }

  if (url.pathname === '/chat') {
    const prompt = query.prompt || '' // 从 url 参数中获取 prompt
    if (prompt.trim() === '') {
      res.end('query prompt is required')
      return
    }

    const gptStream = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 100,
      stream: true, // stream
    })
    res.writeHead(200, { 'Content-Type': 'text/event-stream' }) // 'text/event-stream' 标识 SSE 即 Server-Sent Events
    for await (const chunk of gptStream) {
      // console.log('chunk ', JSON.stringify(chunk))
      res.write(`data: ${JSON.stringify(chunk)}\n\n`) // 格式必须是 `data: xxx\n\n` ！！！
    }
    req.on('close', () => {
      console.log('req close...')
    })
    return
  }

  // 其他情况
  res.end('other route')
}).listen(port)

console.log(`Server running at http://localhost:${port}/`)
