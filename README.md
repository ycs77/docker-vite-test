# Dockerize Vite Starter

```bash
docker compose up -d
docker compose down

docker compose run --rm web yarn
docker compose run --rm web yarn build
docker compose run --rm -p 4173:4173 web yarn preview
```
