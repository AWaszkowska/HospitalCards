import requests

# endpoint = "http://127.0.0.1:8000/api/"
endpoint = "http://localhost:8000/api/"
# query parameters -> after endp /?this_arg=this_value

# http request
get_response = requests.post(endpoint, params={"abc": 123}, json={"title": None, "content":"Hello world"}) # http request
# print(get_response.text)
# print(get_response.status_code)
print(get_response.json())

# regular http request gives html response, rest api gives json (xml)
# 8000 is a port
# exit shell -> exit(), runserver -> python manage.py runserver