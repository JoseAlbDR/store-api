# Storefront API

This is a REST API for a storefront application. The API is designed to handle various filtering, sorting, and querying options for products in a simulated store.

## Technologies Used

- **Node.js**: The runtime environment for the server.
- **Express.js**: A web application framework for building APIs.
- **MongoDB**: A NoSQL database for storing product information.
- **Mongoose**: An ODM (Object-Document Mapper) for MongoDB.
- **Joi**: A validation library for validating request data.
- **CORS**: Middleware for enabling cross-origin resource sharing.
- **dotenv**: Library for loading environment variables.
- **express-async-errors**: Middleware to handle asynchronous errors with Express.
- **ts-node-dev**: A development server for running TypeScript code.

## Project Structure

The project directory structure is as follows:

```
store-api/
├── src/
│ ├── controllers/
│ ├── db/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── types/
│ ├── utils/
│ ├── app.ts
├── package.json
└── README.md
```

## Getting Started

1. Install Node.js and npm.
2. Clone the repository.
3. Install project dependencies: `npm install`.
4. Create a `.env` file based on `.env.example` and provide your database URL.
5. Run the development server: `npm run dev`.
6. The API should be accessible at `http://localhost:3000`.

## API Endpoints

### `/api/v1/products`

Endpoint for querying products with various filters, sorting, and pagination options.

#### Query Parameters

- `name`: Filter products by name using a case-insensitive regular expression.
- `price`: Filter products by price.
- `featured`: Filter products by featured status (boolean).
- `rating`: Filter products by rating.
- `company`: Filter products by company.
- `sort`: Sort products by specified fields (comma-separated list).
- `fields`: Select specific fields to include in the response (comma-separated list).
- `page`: Specify the page number for pagination.
- `limit`: Specify the number of items per page.

## Usage Examples

### Filter Products by Name

Retrieve products with names containing "chair":

```GET /api/v1/products?name=chair```

### Filter Products by Price or/and rating

Retrieve products with prices greater than $50:

```GET /api/v1/products?numericFilters=price>50```

Retrieve products with rating lesser than 4.5:

```GET /api/v1/products?numericFilters=rating<4.5```

Retrieve products with prices greater than $50 and rating lesser than 4.5:

```GET /api/v1/products?numericFilters=price>50,rating<4.5```

### Filter Products by Featured Status

Retrieve featured products:

```GET /api/v1/products?featured=true```

### Filter Products by Company

Retrieve products from the company "ikea":

```GET /api/v1/products?company=ikea```

### Sort Products

Sort products by price in ascending order:

```GET /api/v1/products?sort=price```

Sort products by price in descending order:

```GET /api/v1/products?sort=-price```

### Select Specific Fields

Retrieve products with only name and price fields:

```GET /api/v1/products?fields=name,price```

### Pagination

Retrieve the second page of products with 10 items per page:

```GET /api/v1/products?page=2&limit=10```

### `/api/v1/products/static`

Endpoint for fetching products with a static filter and sorting.

#### Query Parameters

- None.

## Usage

You can use tools like Postman or any API testing tool to make requests to the API endpoints.

For detailed information on how to use each endpoint and the available query parameters, please refer to the code and comments in the respective files.

## Error Handling

The API includes error handling middleware to handle both general and validation errors.

## Contributions and Issues

Feel free to contribute to the project by opening pull requests or reporting issues on the [GitHub repository](https://github.com/JoseAlbDR/store-api).

## License

This project is licensed under the [ISC License](LICENSE).
