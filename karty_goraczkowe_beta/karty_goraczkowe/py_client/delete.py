import requests

patient_id = input("What is the patient id you want to use?\n")
try:
    patient_id = int(patient_id)
except: 
    patient_id = None
    print(f'{patient_id} not a valid id')

if patient_id:
    endpoint = f"http://localhost:8000/api/patients/{patient_id}/delete/"
    get_response = requests.delete(endpoint)  # http request

    print(get_response.status_code, get_response.status_code==204)
