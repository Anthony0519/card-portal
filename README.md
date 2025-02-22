# card-service
This is a card portal service

## Setup

This section will guide you through the setup process required to get up and running with the application.

### Requirements

-   Node/NPM 
-   Mysql v8
-   TypeScript (`npm install -g typescript` )

### Get Started

1. Clone the project from your account repository
    - git clone https://github.com/Anthony0519/card-portal.git

2. Run `npm install` from the root directory of the project

3. Create a `.env` file and copy the content of `.env.example` to it.

### Api Documentation
1. Swagger
    - `localhost:3344` for development
    - `https://screening-test-cd0f.onrender.com/docs/#` for production

#### Database Setup

1. Create a new database in mysql

2. Fill the `.env` file you created with the database credentials

3. Run `npm run migrate` to create the tables, You can run `npm run migrate:undo` to undo the last migration or `npm run migrate:undo:all` to undo all migrations

4. Create a `seeders` folder on the `src/core` directory
    - create your seeding files
    - Run `npm run seed:all` to seed your datas to your database
    - checkout `https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-seed` for proper usage

### Development

To run the application, use the command: `npm run start:dev`

It is important to set up environment variables for the system to function properly