<h1 align="center">Trainer and Courses API 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> This is a REST API for managing trainers and courses.

## Install

Clone the repository:

```bash
https://github.com/amitkapoor27/eduBridge.git
```
Install the dependencies:
```bash
cd eduBridge
npm install
```
## Set the following environment variables:

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

## Endpoints

#### Logs in a user and returns an authentication token.


```http
  POST /auth/login
```
##### Headers

```headers
Content-Type: application/json
Authorization: Bearer your_authentication_token
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
  "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDEzMjM5ZDExN2FmNzhmY2VmN2M4N2UiLCJpYXQiOjE2Nzg5NzYxNzF9.DA7PLaee1KZdtNSG_wNXl2dc5e8BzgCcNfrA9ZhTkrs"
}
```

## Author

👤 **Amit Kapoor**

* Github: [@amitkapoor27](https://github.com/amitkapoor27)

## Show your support

Give a ⭐️ if this project helped you!
