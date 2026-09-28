# import requests

# url = "https://jsonplaceholder.typicode.com/users/1"

# response = requests.get(url)

# print("Status Code:", response.status_code)
# print("Response:")
# print(response.json())


import requests

url = "https://jsonplaceholder.typicode.com/users/1"

response = requests.get(url)

print("Status Code:", response.status_code)

user = response.json()

print("User ID:", user["id"])
print("Name:", user["name"])
print("Email:", user["email"])
print("City:", user["address"]["city"])