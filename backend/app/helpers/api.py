from flask import Flask, jsonify
import requests
import os
from dotenv import load_dotenv

load_dotenv()
url_base = 'https://api.api-futebol.com.br/v1/'
headers = {'Authorization': os.getenv("VITE_LIVE_API_TOKEN")}

def getTableCamp(camp_id):
    try:
        response = requests.get(url_base + "campeonatos/" + str(camp_id) + "/tabela", headers=headers)
        print(response)
        return jsonify(response.json())
    except requests.ReadTimeout:
        print("Deu ruim")
        return "Error: Timeout waiting"
    finally:
        if 'response' in locals():
            print(response.status_code)
