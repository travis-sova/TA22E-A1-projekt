<h1>
  <img src="https://github.com/user-attachments/assets/e0483a31-e7e0-4892-8fcc-d9b9061fa9f5" alt="Logo" style="height: 64px; vertical-align: middle; margin-right: 10px;">
  Spinning Rat's Cinema
</h1>


Spinning Rat's Cinema is a school project — a simple cinema booking site that lets you browse movies, view showtimes, and book tickets easily. It’s built to practice full-stack development 

## Environment Variables

To run this project, you will need to add the following environment variables to your **.env** file in the **backend** folder

`DB_HOST=`

`DB_USER=`

`DB_PASSWORD=`

`DB_NAME=`

`JWT_SECRET=`

`JWT_EXPIRES_IN=`


## Run Locally

Clone the project

```bash
  git clone https://github.com/travis-sova/TA22E-A1-projekt.git
```

Go to the project directory

```bash
  cd TA22E-A1-project
```

Install front- and backend dependencies

```bash
  npm run all
```

Start the server and Vue app (experimental)

```bash
  npm run start
```

Manual startup (alternative method)

```bash
    cd backend && npm run dev
```

_In a separate terminal:_

```bash
    cd frontend && npm run dev
```

Database Setup

Be sure to set up the MySQL database according to your .env file in the backend folder.
A SQL dump file is included in the project to help you create the necessary tables and data.

## Tech Stack

**Client:** Vue 3, Pinia, Vue Router, Vue I18n, TailwindCSS, DaisyUI

**Server:** Node.js, Express, MySQL2, JWT, Nodemailer, Bcrypt

**Build Tools:** Vite, TypeScript, ESLint, Prettier

## Roadmap
  - Implement Nodemailer
