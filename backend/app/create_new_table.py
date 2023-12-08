import os
from dotenv import load_dotenv
from helpers.scrape import gettingTableValues
from helpers.api import getTableCamp

load_dotenv()

def setListProb(lista):
    teamsList = []
    for i in range(0, len(lista), 3):
        posicao = lista[i] if i < len(lista) else None
        nome = lista[i + 1] if i + 1 < len(lista) else None
        prob = lista[i + 2] if i + 2 < len(lista) else None

        teamInfos = {"posicao": posicao, "nome": nome, "prob": prob}
        teamsList.append(teamInfos)
    return teamsList

def addProbValue(tabela, probList, probName: str):
    for team in tabela:
        print(team["time"]["nome_popular"])
        for teamProb in probList:
            if team["time"]["nome_popular"] == teamProb["nome"]:
                team[probName] = teamProb["prob"]


def newTableGenerator():
    tabela = getTableCamp(10) # serie A
    probCampeao = setListProb(gettingTableValues(os.getenv('URL_CAMPEAO_SERIE_A')))
    probLebertadores = gettingTableValues(os.getenv('URL_LIBERTADORES'))
    probSula = gettingTableValues(os.getenv('URL_SULAMERICANA'))
    probRebaixamento = gettingTableValues(os.getenv('URL_REBAIXAMENTO_SERIE_A'))

    return tabela

#  Preciso iterar pelo JSON adicionando os valores coletados e ordenados de probabilidade
