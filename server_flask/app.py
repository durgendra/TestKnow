from flask import Flask, request
import json
import os

from flask_cors import CORS
from langchain.document_loaders import PyMuPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Pinecone
import pinecone 
from dotenv import load_dotenv
load_dotenv()
OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY')
PINECONE_API_KEY = os.environ.get('PINECONE_API_KEY')
PINECONE_ENVIRONMENT = os.environ.get('PINECONE_ENVIRONMENT')


pinecone.init(
    api_key=PINECONE_API_KEY,  # find at app.pinecone.io
    environment=PINECONE_ENVIRONMENT # next to api key in console
)

index_name = "new"

app = Flask(__name__)
CORS(app)

@app.route("/api/v1/extract", methods=['POST'])
def extract_pdf():
    data = request.get_data()
    jsonData = json.loads(data.decode('utf-8'))
    path = jsonData['pLink']
    loader = PyMuPDFLoader(path)
    pages = loader.load()
    paragraph = ''
    for page in pages:
        paragraph = paragraph+page.page_content
    return {"paragraph": paragraph}

@app.route("/api/v1/extractpage", methods=['POST'])
def extract_pdf_page():
    data = request.get_data()
    jsonData = json.loads(data.decode('utf-8'))
    path = jsonData['pLink']
    pageNumber = jsonData['pageNumber']
    loader = PyMuPDFLoader(path)
    pages = loader.load()
    paragraph = pages[pageNumber-1].page_content
    return {"paragraph": paragraph}

@app.route("/api/v1/loader", methods=['GET'])
def load_pdf():
    loader = PyMuPDFLoader("https://www.zebra.com/content/dam/zebra_new_ia/en-us/solutions-verticals/services/managed-device-service/fact-sheet/zebra-managed-device-service-fact-sheet-en-us.pdf")
    pages = loader.load()
    text_splitter = RecursiveCharacterTextSplitter(chunk_size = 1000,chunk_overlap=200, length_function = len)
    texts = text_splitter.split_documents(pages)
    embeddings = OpenAIEmbeddings()
    docsearch = Pinecone.from_documents(texts, embeddings, index_name=index_name, namespace = "pdfmanaged")
    query = "What is Zebra Managed Device?"
    docs = docsearch.similarity_search(query)
    print(docs[0].page_content)
    return {"papers": "Success"}

@app.route("/api/v1/chat-loader", methods=['POST'])
def load_chatdoc():
    data = request.get_data()
    jsonData = json.loads(data.decode('utf-8'))
    papers = jsonData['papers']
    nameSpace = jsonData['namespace']
    for paper in papers:
        path = paper['pLink']
        loader = PyMuPDFLoader(path)
        pages = loader.load()
        text_splitter = RecursiveCharacterTextSplitter(chunk_size = 1000,chunk_overlap=200, length_function = len)
        texts = text_splitter.split_documents(pages)
        embeddings = OpenAIEmbeddings()
        docsearch = Pinecone.from_documents(texts, embeddings, index_name=index_name, namespace = nameSpace)
        print("Success")
    return {"isIngested": True}
    loader = PyMuPDFLoader("https://www.zebra.com/content/dam/zebra_new_ia/en-us/solutions-verticals/services/managed-device-service/fact-sheet/zebra-managed-device-service-fact-sheet-en-us.pdf")
    pages = loader.load()
    text_splitter = RecursiveCharacterTextSplitter(chunk_size = 1000,chunk_overlap=200, length_function = len)
    texts = text_splitter.split_documents(pages)
    embeddings = OpenAIEmbeddings()
    docsearch = Pinecone.from_documents(texts, embeddings, index_name=index_name, namespace = "pdfmanaged")
    query = "What is Zebra Managed Device?"
    docs = docsearch.similarity_search(query)
    print(docs[0].page_content)
    return {"papers": "Success"}

# if __name__ == '__main__':
#     app.run(debug=False, host='0.0.0.0', port=9000)
