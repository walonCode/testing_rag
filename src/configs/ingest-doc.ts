import { extractTextFromDocx } from "./doc-reader.js";
import { splitText } from "./splitter.js";
import { getEmbedding } from "./openai.js";
import { pineconeIndex } from "./pinecone.js";
import { nanoid } from "nanoid";
import path from "path";

async function ingestDocx(filepath:string){
    const rawText = await extractTextFromDocx(filepath)
    const chunks = splitText(rawText)

    for(let i =0; i < chunks.length; i++){
        const chunk = chunks[i]
        const embedding = await getEmbedding(chunk)

        await pineconeIndex.upsert([
            {
                id:nanoid(),
                values:embedding,
                metadata: {
                    text:chunk,
                    source:filepath,
                    chunk_index:i,
                }
            }
        ])
    }

    console.log(`Ingested ${chunks.length} chunks from ${filepath}`)
}


ingestDocx("src/configs/data/JULIE.docx")