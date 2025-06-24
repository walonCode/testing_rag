import OpenAI from 'openai';
import { config } from './config.js';
import { groq } from "../configs/groq.js"

const openai = new OpenAI({ apiKey: config.OPENAI_KEY });

export async function getEmbedding(input: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    input,
    model: 'text-embedding-3-small',
    encoding_format: 'float',
    dimensions: 512,
  });

  return response.data[0].embedding;
}


export async function generateAnswerStream(question: string, context: string) {
  const response = await groq.chat.completions.create({
    model: 'llama3-70b-8192',
    stream: true,
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant. Use the context to answer the question, and just send the answer — no extra explanation.',
      },
      {
        role: 'user',
        content: `Context:\n${context}\n\nQuestion: ${question}`,
      },
    ],
  });

  return response; // async iterable!
}



