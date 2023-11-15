# psycode

# -pegar a tabela do camp brasilerio
# -armazenar em cache no servidor
# -distribuir para os client
# -atualizar a cada 30min

# ____Com os registros desde 2006 calcular a probabilidade
# -pegar os dados
# -segmentar os dados
# -comparar dados numerios com dados categorigos
# -analizar jogos faltantes
# -fornecer probabilidades
# -sempre que adicionar uma rodada atualizar probabilidades

import requests
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/campeonatos')
def get_all_camps():
    try:
        response_API = requests.get('https://api.api-futebol.com.br/v1/campeonatos', headers=Headers)
        data = response_API.json()
        return data
    except:
        return print('Failed to get API')
    
@app.route('/campeonatos/<camp_id>')
def get_table_camp_by_id(camp_id):
    try:
        response_API = requests.get('https://api.api-futebol.com.br/v1/campeonatos/{camp_id}/tabela', headers=Headers)
        data = response_API.json()
        return data
    except:
        return print('Failed to get API')

if __name__ == '__main__':
    app.run(debug=True)
