# Node.js Date Converter App

This is a simple Node.js web application that converts date strings or Unix timestamps to Unix timestamps and UTC time.

### Deployed Link
https://github.com/PESolut/timestamp-microservice


## Table of Contents
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Dependencies

This app uses the following dependencies:

- [body-parser](https://www.npmjs.com/package/body-parser): Middleware for parsing incoming request bodies.
- [express](https://expressjs.com/): Fast, minimalist web framework for Node.js.

## Installation

1. Clone the repository:
2. git clone <repo_url>
3. cd <repo_dir>
4. npm install

## Usage

To run the Node.js app, use the following command:

1. npm start

The app will start on http://localhost:3377/.

## Routes

The app defines the following routes:

1. `GET /`: This is the index/home route that serves the `index.html` file.

2. `GET /api/:input`: This route handles date strings in the format `YYYY-MM-DD` or Unix timestamps in milliseconds. It converts the input to a Unix timestamp and returns the Unix timestamp and UTC time as JSON in the response.

## Examples

### Example 1:

- Request:

```
GET http://localhost:3000/api/2023-07-24
```

- Response:

```json
{
  "unix": 1679808000000,
  "utc": "Mon, 24 Jul 2023 00:00:00 GMT"
}
```

### Example 2:

- Request:

```
GET http://localhost:3000/api/1679808000000
```

- Response:

```json
{
  "unix": 1679808000000,
  "utc": "Mon, 24 Jul 2023 00:00:00 GMT"
}
```

## Contributing
Contributions to this project are welcome. If you find a bug or have an enhancement idea, please open an issue or submit a pull request.

## License
This app is open-source and available under the MIT License.











