import requests
# from getpass import getpass
# auth_endpoint = "http://localhost:8000/api/auth/"
# password = getpass()
# username = input
# auth_response = requests.post(endpoint, json={"username": username, 'password': password})
# print(auth_response.json())

# if auth_response.status_code == 200:
#     token = auth_response.json()['token']
#     headers = {
#         "Authorization": f"Token {token}"
#     }

endpoint = "http://localhost:8000/api/patients/"

get_response = requests.get(endpoint) # http request
print(get_response.json())
