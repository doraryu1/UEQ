import requests
import json

city_name = "Tokyo"
API_KEY = "f9794935a670f65e810fe0253ce78aa8"
api = "http://api.openweathermap.org/data/2.5/weather?units=metric&q={city}&APPID={key}"

url = api.format(city = city_name, key = API_KEY)
print(url)
response = requests.get(url)
data = response.json()
jsonText = json.dumps(data, indent = 4)
print(jsonText)