# Turku application

Repository for the official Turku application.
Turku application is a centralized place to for information considering the city of Turku.
Turku application is developed on top of Strapi and Next.js.

## How to run

WIP

## Strapi

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
