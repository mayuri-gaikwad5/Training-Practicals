# Safe HTTP Methods

## What is a Safe Method?

A safe HTTP method **does not modify resources on the server**.

### Safe Methods

```text
GET
HEAD
OPTIONS
TRACE
```

## Key Benefits

* Can be **cached**
* Are **idempotent**
* Improve **performance and scalability**
* Reduce unintended effects from repeated requests

### Example

```text
GET /users/10
```

Repeated GET requests should not modify the user resource.

## Unsafe Methods

```text
POST
PUT
PATCH
DELETE
```

These methods can modify server-side data.

### Quick Revision

> **Safe = Does not modify server resources.**

> **Safe methods: GET, HEAD, OPTIONS, TRACE**
