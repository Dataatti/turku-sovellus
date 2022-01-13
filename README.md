# Turku application

Turku application is a centralized place to for information considering the city of Turku.  
The application offers information of what's happening in the city for city residents, companies and other actors. The application is built based on open data and combines information from multiple sources.

## Tech Stack

The application is built with [TypeScript](https://www.typescriptlang.org/), [React](https://reactjs.org/) and [Next.js](https://nextjs.org/). 

The user interface of the application is styled using [MUI](https://mui.com/) components.

Content management system is done with [Strapi](https://strapi.io/).


## How to run

### Installation

Clone the repository

```bash
  git clone https://github.com/Dataatti/turku-sovellus.git
```

Change to the project directory

```bash
  cd turku-sovellus
```

### Application

Change directory to client

```bash
  cd client
```

Install project dependencies based on lockfile

```bash
  npm ci
```

Run the development server

```bash
  npm run dev
```

Open http://localhost:3000 with your browser to see the result.

### Content management System

Docker is needed to run Strapi. It can be downloaded from here: https://www.docker.com/get-started

Change directory to `/strapi`

```bash
    cd strapi
```

Create `.env` file by copying `.env.example`

```bash
    cp .env.example .env
```

Build and run project with `docker compose`

```bash
    docker-compose up --build -d
```

---

Navigate to `localhost:1337/admin` and create secure credentials

After logging in navigate to Settings -> Internalization

Create locale for `Finnish (fi)` and `Swedish (sv)`

Now you're ready to manage content in Content manager and your Strapi server is available at `localhost:1337`.

---

To stop strapi run `docker-compose down`
