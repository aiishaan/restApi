# Rest API

A simple REST API built with Node.js and Express.js to manage a list of courses.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/courses-api.git
    ```

2. Navigate to the project directory:
    ```bash
    cd courses-api
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the server:
    ```bash
    npm start
    ```

By default, the server runs on port 3000. Change the port by setting the `PORT` environment variable

## Usage

Use tools like Postman or cURL to interact with the API

### Endpoints

- **Get All Courses**
    - **URL:** `/api/courses`
    - **Method:** `GET`
    - **Response:** List of all courses.

- **Get Course by ID**
    - **URL:** `/api/courses/:id`
    - **Method:** `GET`
    - **Response:** Course with the specified ID.

- **Create a New Course**
    - **URL:** `/api/courses`
    - **Method:** `POST`
    - **Request Body:** `{ "name": "Course Name" }`
    - **Response:** The created course.

- **Update a Course**
    - **URL:** `/api/courses/:id`
    - **Method:** `PATCH`
    - **Request Body:** `{ "name": "Updated Course Name" }`
    - **Response:** The updated course.

- **Delete a Course**
    - **URL:** `/api/delete/:id`
    - **Method:** `DELETE`
    - **Response:** The deleted course.

### Validation

Course data is validated using `Joi`:
- **Name:** Must be a string, at least 3 characters long, and required

