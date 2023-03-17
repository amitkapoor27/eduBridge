
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
{
  "token":"Nzg5NzYxNzF9.DA7PLaee1KZdtNSG_wNXl2dc5e8BzgCcNfrA9ZhTkrs"
}
```



## Author

👤 **Amit Kapoor**

* Github: [@amitkapoor27](https://github.com/amitkapoor27)
## Show your support

Give a ⭐️ if this project helped you!
