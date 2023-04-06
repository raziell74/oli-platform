FROM node:19.8.1-alpine3.17 As prod
EXPOSE 3001
ENV NODE_ENV=production

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install --only-production && npm cache clean --force

CMD ["npm", "start"]

FROM node:19.8.1-alpine3.17 As dev
EXPOSE 3001
ENV NODE_ENV=development

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install

CMD ["npm", "start", "dev"]
