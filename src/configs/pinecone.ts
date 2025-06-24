import { Pinecone } from "@pinecone-database/pinecone";
import { config } from "./config.js";

const pinecone = new Pinecone({
    apiKey:config.PINE_CONE_API_KEY as string
})

export const pineconeIndex = await pinecone.index(config.PINE_CONE_INDEX_NAME as string)