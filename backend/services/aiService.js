const OpenAI = require('openai')

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const generateSummary = async (commits) => {
  const prompt = `
  Analyze the following commits and generate:
  1. Sprint Summary
  2. Productivity Analysis
  3. Recommendations

  Commits:
  ${JSON.stringify(commits)}
  `

  const response = await client.chat.completions.create({
    model: 'gpt-4.1-mini',
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
  })

  return response.choices[0].message.content
}

module.exports = {
  generateSummary,
}