import requests

endpoint = "http://localhost:8000/api/patients/"

data = {
    "name": "Malik",
    "surname": "Montana"
}

get_response = requests.post(endpoint, json=data) # http request

print(get_response.json())

