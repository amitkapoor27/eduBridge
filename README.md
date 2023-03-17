
# Trainer and Courses API

This is a REST API for managing trainers and courses.


## Installation


Clone the repository:

```bash
https://github.com/amitkapoor27/eduBridge.git
```
Install the dependencies:
```bash
cd eduBridge
npm install
```    
## Environment Variables


**PORT** : The port on which the server should run (default: 3000).

**MONGODB_URI**: The connection string for the MongoDB database.
```sh
mongodb://XXX.XX.X.XX:27017/eduBridge_org
```
**JWT_SECRET**: The secret key used for JWT authentication.

## Usage

```sh
npm run start
```
Once the server is running, you can use an API client like **Postman** to make requests to the API.

By default, the server will be running on **`http://localhost:3000`**.



## Endpoints

### Login
#### Logs in a user and returns an authentication token.


```http
  POST /auth/login
```
##### Headers

```headers
Content-Type: application/json
```
##### Request 
```body
{
  "email":"testuser@test.com",
  "password": "testpassword"
}
```

##### Response 

```body
HTTP/1.1 200 OK
Content-Type: application/json
{
  "token":"Nzg5NzYxNzF9.DA7PLaee1KZdtNSG_wNXl2dc5e8BzgCcNfrA9ZhTkrs"
}
```

### Register
#### Register a user and returns an authentication token.


```http
  POST /auth/register
```
##### Headers

```headers
Content-Type: application/json
```
##### Request 
```body
{
    "name": "testuser",
    "email":"testuser@test.com",
    "password": "testpassword"
}
```

##### Response 
```body
HTTP/1.1 200 OK
Content-Type: application/json

{
  "token":"Nzg5NzYxNzF9.DA7PLaee1KZdtNSG_wNXl2dc5e8BzgCcNfrA9ZhTkrs"
}
``` 
## Trainer
### Get All Trainers

```http
  GET /trainers
```
##### Headers

```headers
Content-Type: application/json
Authorization: Bearer your_authentication_token
```

##### Response 
```body
HTTP/1.1 200 OK
Content-Type: application/json

[
    {
        "_id": "64132509117af78fcef7c887",
        "name": "John Doe",
        "email": "johndoe@example.com",
        "expertise": "Course A",
        "__v": 0
    }
]
```
### Gets a single trainer by ID.

```http
  GET /trainers:id
```
##### Headers

```headers
Content-Type: application/json
Authorization: Bearer your_authentication_token
```

##### Response 
```body
HTTP/1.1 200 OK
Content-Type: application/json

{
    "_id": "64132509117af78fcef7c887",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "expertise": "Course A",
    "__v": 0
}
```

### Create a trainer

```http
  POST /trainers
```
##### Headers

```headers
Content-Type: application/json
Authorization: Bearer your_authentication_token
```
##### Request 
```body
{
    "name": "John Clark",
    "email": "johnclark@example.com",
    "expertise": "Course B"
}
```

##### Response 
```body
HTTP/1.1 200 OK
Content-Type: application/json

{
    "name": "John Clark",
    "email": "johnclark@example.com",
    "expertise": "Course B",
    "_id": "6414632606a57f449d99975b",
    "__v": 0
}
```


### Update a trainer

```http
  PATCH /trainers:id
```
##### Headers

```headers
Content-Type: application/json
Authorization: Bearer your_authentication_token
```
##### Request 
```body
{
    "name": "Jame Clark",
    "email": "jameClark@example.com",
    "expertise": "Course B"
}
```

##### Response 
```body
HTTP/1.1 200 OK
Content-Type: application/json

{
    "_id": "6414632606a57f449d99975b",
    "name": "Jame Clark",
    "email": "jameClark@example.com",
    "expertise": "Course B",
    "__v": 0
}
```
### Delete a trainer

```http
  DEL /trainers:id
```
##### Headers

```headers
Content-Type: application/json
Authorization: Bearer your_authentication_token
```

##### Response 
```body
HTTP/1.1 200 OK
Content-Type: application/json

{
    "message": "Trainer deleted"
}
```

## Courses
### Get All Courses

```http
  GET /courses
```
##### Headers

```headers
Content-Type: application/json
Authorization: Bearer your_authentication_token
```

##### Response 
```body
HTTP/1.1 200 OK
Content-Type: application/json

[
    {
        "_id": "64146ad806a57f449d999765",
        "title": "Course A",
        "description": "Description A",
        "trainerName": "Trainer A",
        "__v": 0
    }
]
```
### Gets a single Course by ID.

```http
  GET /courses:id
```
##### Headers

```headers
Content-Type: application/json
Authorization: Bearer your_authentication_token
```

##### Response 
```body
HTTP/1.1 200 OK
Content-Type: application/json

  {
      "_id": "64146ad806a57f449d999765",
      "title": "Course A",
      "description": "Description A",
      "trainerName": "Trainer A",
      "__v": 0
  }

```

### Create a course

```http
  POST /courses
```
##### Headers

```headers
Content-Type: application/json
Authorization: Bearer your_authentication_token
```
##### Request 
```body
{
    "title": "Course A",
    "description": "Description A",
    "trainerName": "Trainer A"
}
```

##### Response 
```body
HTTP/1.1 200 OK
Content-Type: application/json

{
    "title": "Course A",
    "description": "Description A",
    "trainerName": "Trainer A",
    "_id": "64146ad806a57f449d999765",
    "__v": 0
}
```


### Update a course

```http
  PATCH /courses:id
```
##### Headers

```headers
Content-Type: application/json
Authorization: Bearer your_authentication_token
```
##### Request 
```body
{
    "title": "Course C",
    "description": "Description A Update",
    "trainerName": "Trainer A"
}
```

##### Response 
```body
HTTP/1.1 200 OK
Content-Type: application/json

{
    "_id": "64146c84deed5ba2c5293480",
    "title": "Course C",
    "description": "Description A Update",
    "trainerName": "Trainer A",
    "__v": 0
}
```
### Delete a course

```http
  DEL /courses:id
```
##### Headers

```headers
Content-Type: application/json
Authorization: Bearer your_authentication_token
```

##### Response 
```body
HTTP/1.1 200 OK
Content-Type: application/json

{
    "message": "course deleted"
}
```

## Author

👤 **Amit Kapoor**

* Github: [@amitkapoor27](https://github.com/amitkapoor27)
## Show your support

Give a ⭐️ if this project helped you!
