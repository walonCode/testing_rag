# RAG Pipeline Project

## Description
This project is a Node.js application designed to handle Retrieval-Augmented Generation (RAG) pipelines. The project leverages various libraries such as `@pinecone-database/pinecone`, `openai`, `groq-sdk`, and `mammoth` to read, ingest, and manage data documents. It features a robust structure and a scalable setup to handle different tasks in the RAG pipeline.

## Features
- Docx Document Reader
- Data Ingestion
- OpenAI Integration
- Pinecone Database Interaction
- Splitting and Processing Data RAG-Pipeline
- Query Handling and Middleware

## Installation
1. Clone the repository:
   ```bash
   git clone github.com/walonCode/testing_rag.git
   cd testing_rag
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage
The application can be run in various modes:
- **Development**: Use `npm run dev` to start the application in development mode.
- **Production**: Use `npm start` to build and start the application in production mode.
- **Ingest Documents**: For ingesting documents, use `npm run ingest`.

## Technologies
| Technology       | Version   |
|------------------|-----------|
| Node.js          | 20.11.17  |
| TypeScript       | 5.8.3     |
| Hono             | 4.8.2     |
| @pinecone-database/pinecone | 6.1.1  |
| Dotenv           | 16.5.0    |
| Groq-sdk        | 0.25.0    |
| OpenAI           | 5.6.0     |
| Mammoth          | 1.9.1     |
| Nanoid           | 5.1.5     |

## Configuration and Environment Variables
This project uses a `.env` file to manage configuration variables. Create a `.env` file in the root of the project with the following variables:

```plaintext
PINECONE_API_KEY=your_pinecone_api_key
OPENAI_API_KEY=your_openai_api_key
```

## Folder Structure
```
📁 .
├── .env
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
├── src
|  ├── configs
|  |  ├── config.ts
|  |  ├── data
|  |  |  ├── JULIE.docx
|  |  ├── doc-reader.ts
|  |  ├── groq.ts
|  |  ├── ingest-doc.ts
|  |  ├── openai.ts
|  |  ├── pinecone.ts
|  |  ├── splitter.ts
|  ├── docs
|  ├── index.ts
|  ├── middleware
|  ├── routes
|  |  ├── query.ts
├── tsconfig.json
```

## Author
[Author’s GitHub (walonCode)](https://github.com/walonCode)

## Contribution
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m "Add feature"`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![OpenAI](https://img.shields.io/badge/openAI-beige?style=for-the-badge&logo=openai&logoColor=white)
![Pinecone](https://img.shields.io/badge/pinecone-gray?style=for-the-badge&logo=pinecone&logoColor=white)
![Groq](https://img.shields.io/badge/Groq-primary?style=for-the-badge&logo=Groq&logoColor=white)

---