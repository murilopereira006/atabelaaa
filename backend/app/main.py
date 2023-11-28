from flask import Flask
import os
from dotenv import load_dotenv
from create_new_table import newTableGenerator

load_dotenv()

app = Flask(__name__)

@app.route('/')
def tabela():
    return newTableGenerator()

if __name__ == '__main__':
    app.run(port=os.getenv('PORT'))
