import requests

endpoint = "http://localhost:8000/api/patients/1/update/"

data = {
    "name": "Malik",
    "surname": "Montana",
}

get_response = requests.put(endpoint, json=data) # http request

print(get_response.json())

