# TestKnow

Knowledge and quiz workspace with a React frontend, a Node/Express API, and a Python ingestion sidecar.

## About

This project combines a content-heavy React application with an Express backend and a Flask service for document and image processing. The code and route names indicate FAQ, quiz, daily knowledge, chat-doc ingestion, OCR, and Pinecone-backed retrieval workflows.

## Key Features

- FAQ and quiz flows
- Daily knowledge/training routes
- Chat-document ingestion
- OCR and document extraction support
- Pinecone and OpenAI integration

## Architecture

- `client-front/` is the React UI
- `server/` is the Node API
- `server_flask/` provides the Python ingestion and extraction service
- The server side uses MongoDB, LangChain, Pinecone, and OpenAI-related packages

## Tech Stack

- React 18
- Create React App
- Node.js + Express
- Python + Flask
- MongoDB + Mongoose
- Pinecone
- OpenAI

## Prerequisites

- Node.js
- Python 3.x
- MongoDB

## Installation

```bash
cd server && npm install
cd ../client-front && npm install
cd ../server_flask && pip install -r requirements.txt
```

## Configuration

- Client: `REACT_APP_SERVER_URL`, `REACT_APP_GOOGLE_CLIENT_ID`, `PINECONE_API_KEY`, `PINECONE_ENVIRONMENT`
- Server: `PORT`, `CLIENT_URL`, `MONGO_CONNECT`
- Flask sidecar: `OPENAI_API_KEY`, `PINECONE_API_KEY`, `PINECONE_ENVIRONMENT`

## How to Run

```bash
cd server
npm start

cd ../client-front
npm start
```

The Flask sidecar exposes a Flask `app` object in `server_flask/app.py`; use the Flask CLI or your preferred WSGI runner if you need that service in isolation.

## Example Usage

- Run the API and browser UI together for the main knowledge workflow
- Use the Flask helper for document ingestion or extraction tasks

## Project Structure

- `client-front/src/main/` - client actions, components, and Firebase helpers
- `server/routes/` - knowledge, quiz, and user APIs
- `server/controllers/` - business logic
- `server_flask/app.py` - Flask ingestion endpoints

## Current Status

Partially complete but substantial. The workspace snapshot includes a bundled Python virtual environment and a number of generated assets.

## Limitations

- `server_flask/venv-p3.7/` is checked in
- No root env example
- No explicit license at the repo root

## License

No explicit license file was found at the repository root.
