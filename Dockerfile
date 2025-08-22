FROM node:22-alpine

LABEL maintainer="Lucas Yang"

WORKDIR /app

EXPOSE 5173

CMD ["yarn", "dev"]
