### Batch Editing Service

## How to run the server
```
* Install dependencies - `yarn`
* Run server - `yarn start`
* Run server in developer mode - `yarn start:dev`
```

## Sample of the format
```json
{
  "request": {
    "verb": "PUT",
    "url": "https://guesty-user-service.herokuapp.com/user/{userId}"
  },
  "payloads": [
    {
      "userId": 14,
      "age": 14
    },
    {
      "userId": 29,
      "age": 30
    },
    {
      "userId": 103,
      "age": 55
    }
  ]
}
```

## Curl for testing
```
curl --header "Content-Type: application/json" \
        --request PUT \
        --data '{ "request": { "verb": "PUT", "url": "https://guesty-user-service.herokuapp.com/user/{userId}" }, "payloads": [ { "userId": 14, "age": 14 } ] }' \
        http://localhost:3000/batch
```