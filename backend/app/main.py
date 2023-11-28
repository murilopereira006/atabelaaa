from flask import Flask
import os
from dotenv import load_dotenv
from helpers.scrape import gettingTableValues
from helpers.api import getTableCamp

load_dotenv()

app = Flask(__name__)

url_campeao_A = "https://www.mat.ufmg.br/futebol/campeao_seriea/"
url_libertadores = "https://www.mat.ufmg.br/futebol/classificacao-para-libertadores_seriea/"
url_sulamericana = "https://www.mat.ufmg.br/futebol/classificacao-para-sulamericana_seriea/"
url_rebaixamento_A = "https://www.mat.ufmg.br/futebol/rebaixamento_seriea/"

@app.route('/')
def campeao():
    return gettingTableValues(url_campeao_A)
@app.route('/liberta')
def liberta():
    return gettingTableValues(url_libertadores)
@app.route('/sula')
def sula():
    return gettingTableValues(url_sulamericana)
@app.route('/rebaixamento')
def rebaixamento():
    return gettingTableValues(url_rebaixamento_A)
@app.route('/tabela')
def tabela():
    return getTableCamp(10)

if __name__ == '__main__':
    app.run(port=os.getenv('PORT'))
