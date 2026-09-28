# REST Constraints – Quick Revision

REST has **6 architectural constraints**. These rules help define how a RESTful system should work.

| # | Constraint            | Simple Meaning                                                     |
| - | --------------------- | ------------------------------------------------------------------ |
| 1 | **Uniform Interface** | Client and server communicate in a standard, consistent way.       |
| 2 | **Stateless**         | Every request contains all information needed to process it.       |
| 3 | **Cacheable**         | Responses can be stored and reused when allowed.                   |
| 4 | **Client-Server**     | Client handles the UI; server handles data and logic.              |
| 5 | **Layered System**    | Client does not need to know about intermediate servers or layers. |
| 6 | **Code on Demand**    | Server can send executable code to the client. **Optional.**       |

## Uniform Interface – 4 Principles

1. **Resource-Based** → URLs identify resources.
2. **Manipulation through Representations** → Representations can be used to modify resources.
3. **Self-Descriptive Messages** → Messages contain enough information to understand them.
4. **HATEOAS** → Responses can contain links to related resources or actions.

## Important Point

**Code on Demand is the only optional REST constraint.**

The other constraints are required for a service to be strictly considered RESTful.

## Quick Revision

```text
Uniform Interface → Standard communication
Stateless         → No stored client session
Cacheable         → Reuse responses when allowed
Client-Server     → Separate responsibilities
Layered System    → Intermediate layers are hidden
Code on Demand    → Server sends executable code (optional)
```
