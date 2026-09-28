# What is REST?

## Objective

To understand the basic concept of REST and perform a GET request using a REST API.

## What is REST?

REST stands for **Representational State Transfer**. It is an architectural style used for designing web services.

RESTful APIs commonly use **HTTP** for communication between a client and a server, with **JSON** frequently used for transferring data.

The basic communication follows:

```text
Client → HTTP Request → REST API → HTTP Response → Client
```

## Practical

For this practical, the public **JSONPlaceholder** REST API was used.

### API Endpoint

```text
https://jsonplaceholder.typicode.com/users/1
```

### HTTP Method

```text
GET
```

The GET request is used to retrieve information about user `1`.

## Python Implementation

The `requests` library was used to send the HTTP GET request.

```python
import requests

url = "https://jsonplaceholder.typicode.com/users/1"

response = requests.get(url)

print("Status Code:", response.status_code)

user = response.json()

print("User ID:", user["id"])
print("Name:", user["name"])
print("Email:", user["email"])
print("City:", user["address"]["city"])
```

## Output

```text
Status Code: 200
User ID: 1
Name: Leanne Graham
Email: Sincere@april.biz
City: Gwenborough
```

## What I Learned

* REST stands for Representational State Transfer.
* REST is an architectural style, not a communication protocol.
* RESTful APIs commonly use HTTP.
* A client sends a request to an API and receives a response from the server.
* `GET` is used to retrieve data.
* API responses can contain data in JSON format.
* HTTP status code `200` indicates that the request was successful.

## Request-Response Flow

```text
Python Client
     |
     | GET /users/1
     ↓
JSONPlaceholder REST API
     |
     | HTTP 200 + JSON data
     ↓
Python Client
```
