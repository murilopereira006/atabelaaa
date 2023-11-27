from parsel import Selector
import requests

def gettingTableValues(url_table: str):
    try:
        response = requests.get(url_table, timeout=15)
        selector = Selector(response.text)
        allRows = selector.css("td::text").getall()
        # print(allRows)
        return allRows
    except requests.ReadTimeout:
        print("Deu ruim")
        return "Error: Timeout waiting"
    finally:
        print(response.status_code)
