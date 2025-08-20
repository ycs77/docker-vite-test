# Dockerize Vite Starter

```bash
docker compose up -d

docker compose exec web yarn
docker compose exec web yarn dev
docker compose exec web yarn build
docker compose run --rm -p 5173:5173 web yarn preview

docker compose down
```
