import requests

endpoint = "http://localhost:8000/api/patients/1/"

get_response = requests.get(endpoint) # http request

print(get_response.json())

