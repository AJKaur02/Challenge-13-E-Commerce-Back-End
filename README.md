Sure! Here is a comprehensive `README.md` file template for your e-commerce back end project:

```markdown
# E-Commerce Back End

## Description

This project is a back end for an e-commerce site built using Express.js, Sequelize, and PostgreSQL. The API provides functionality to manage products, categories, and tags, allowing users to perform CRUD operations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Models](#models)
- [Associations](#associations)
- [Walkthrough Video](#walkthrough-video)
- [License](#license)

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/AJKaur02/Challenge-13-E-Commerce-Back-End
    ```

2. **Navigate to the project directory:**
    ```bash
    cd e-commerce-backend
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Set up environment variables:**
    - Create a `.env` file in the root of the project:
      ```env
      DB_NAME=your_database_name
      DB_USER=your_postgres_username
      DB_PASSWORD=your_postgres_password
      DB_HOST=localhost
      DB_PORT=5432
      ```
    - Add `.env` to your `.gitignore` to ensure it is not tracked by Git.

5. **Create the database:**
    - Use the `schema.sql` file to create your database:
      ```bash
      psql -U your_postgres_username -f db/schema.sql
      ```

6. **Seed the database with test data:**
    ```bash
    node seeds/seed.js
    ```

7. **Start the server:**
    ```bash
    node server.js
    ```

## Usage

Once the server is running, you can interact with the API using tools like Insomnia or Postman. The API provides routes to create, read, update, and delete categories, products, and tags.

## API Endpoints

### Categories

- **GET** `/api/categories` - Get all categories
- **GET** `/api/categories/:id` - Get a single category by ID
- **POST** `/api/categories` - Create a new category
- **PUT** `/api/categories/:id` - Update a category by ID
- **DELETE** `/api/categories/:id` - Delete a category by ID

### Products

- **GET** `/api/products` - Get all products
- **GET** `/api/products/:id` - Get a single product by ID
- **POST** `/api/products` - Create a new product
- **PUT** `/api/products/:id` - Update a product by ID
- **DELETE** `/api/products/:id` - Delete a product by ID

### Tags

- **GET** `/api/tags` - Get all tags
- **GET** `/api/tags/:id` - Get a single tag by ID
- **POST** `/api/tags` - Create a new tag
- **PUT** `/api/tags/:id` - Update a tag by ID
- **DELETE** `/api/tags/:id` - Delete a tag by ID

## Models

### Category

- `id` - Integer, primary key, auto-increment
- `category_name` - String, not null

### Product

- `id` - Integer, primary key, auto-increment
- `product_name` - String, not null
- `price` - Decimal, not null
- `stock` - Integer, not null, default 10
- `category_id` - Integer, references `Category` model's `id`

### Tag

- `id` - Integer, primary key, auto-increment
- `tag_name` - String

### ProductTag

- `id` - Integer, primary key, auto-increment
- `product_id` - Integer, references `Product` model's `id`
- `tag_id` - Integer, references `Tag` model's `id`

## Associations

- **Product** belongs to **Category**, and **Category** has many **Product** models.
- **Product** belongs to many **Tag** models, and **Tag** belongs to many **Product** models through the **ProductTag** model.

## Walkthrough Video

[Walkthrough Video](https://link-to-your-walkthrough-video.com)

This video demonstrates:
- How to create the schema from the PostgreSQL shell.
- How to seed the database from the command line.
- How to start the application’s server.
- GET routes for all categories, all products, and all tags being tested in Insomnia.
- GET routes for a single category, a single product, and a single tag being tested in Insomnia.
- POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```