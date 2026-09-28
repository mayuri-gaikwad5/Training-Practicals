# REST API — Quick Tips

## 1. Use HTTP Methods to Give Requests Meaning

Use HTTP methods to define the action instead of putting verbs in the URL.

| Method     | Purpose                     |
| ---------- | --------------------------- |
| **GET**    | Read a resource             |
| **POST**   | Create a new resource       |
| **PUT**    | Replace a resource          |
| **PATCH**  | Partially update a resource |
| **DELETE** | Delete a resource           |

Example:

```text
GET    /users/10
POST   /users
PUT    /users/10
PATCH  /users/10
DELETE /users/10
```

**Rule:** URLs identify resources; HTTP methods define the action.

---

## 2. Provide Sensible Resource Names

Design URLs so they are clear and easy for API clients to understand.

### Rules

* Use identifiers in the URL instead of query parameters for resource names.
* Use URL hierarchy to show relationships.
* Design URLs for clients, not internal database structure.
* Use **nouns**, not verbs.
* Use **plural** resource names consistently.
* Avoid collection names such as `customer_list`.
* Use lowercase URL segments.
* Separate words using `_` or `-`.
* Keep URLs short.

### Example

Good:

```text
/customers/33245/orders/8769/lineitems/1
```

Avoid:

```text
/getCustomer/33245
/customer_list/33245
```

---

## 3. Use HTTP Response Codes

Return an appropriate HTTP status code to indicate the result of a request.

| Code                          | Meaning                                  |
| ----------------------------- | ---------------------------------------- |
| **200 OK**                    | General success                          |
| **201 CREATED**               | Resource successfully created            |
| **204 NO CONTENT**            | Success with no response body            |
| **400 BAD REQUEST**           | Invalid request/data                     |
| **401 UNAUTHORIZED**          | Missing or invalid authentication        |
| **403 FORBIDDEN**             | User is not authorized                   |
| **404 NOT FOUND**             | Resource not found                       |
| **405 METHOD NOT ALLOWED**    | HTTP method is not supported for the URL |
| **409 CONFLICT**              | Request causes a resource conflict       |
| **500 INTERNAL SERVER ERROR** | Unexpected server-side error             |

### Important

For a `405` response, the `Allow` header should indicate supported methods.

```text
Allow: GET, PUT, DELETE
```

`500` should not be returned intentionally; it is a catch-all for unexpected server-side exceptions.

---

## 4. Support JSON

JSON is the preferred format for REST APIs unless a regulated or standardized industry requires XML.

If both JSON and XML are supported, clients can specify their preferred format using the HTTP `Accept` header:

```text
Accept: application/json
```

or

```text
Accept: application/xml
```

**Remember:** JSON is simple, concise, and functional.

---

## 5. Create Fine-Grained Resources

Start with **small, clearly defined resources** that represent the application's domain.

For example:

```text
/users
/products
/orders
/payments
```

Provide CRUD operations for these resources.

Larger aggregate services can be created later when needed to reduce excessive communication between the client and server.

**Remember:** Start with small resources; combine them later if required.

---

## 6. Consider Connectedness

REST supports connectedness through **hypermedia links / HATEOAS**.

Links in responses can make an API more **self-descriptive and discoverable**.

Example:

```json
{
  "id": 1,
  "name": "Mayuri",
  "links": {
    "self": "/users/1",
    "orders": "/users/1/orders"
  }
}
```

Useful links for paginated collections include:

```text
first
last
next
prev
```

The HTTP `Location` header can also provide the URL of a newly created resource.

---

# Quick Revision

```text
HTTP Methods
    ↓
Define the action

Resource Names
    ↓
Clear, noun-based, plural URLs

Status Codes
    ↓
Tell the client what happened

JSON
    ↓
Preferred data format

Fine-Grained Resources
    ↓
Start small and clearly defined

Connectedness
    ↓
Use links to related resources
```

### Golden Rule

> **URL identifies the resource, HTTP method defines the action, and status code tells the result.**
