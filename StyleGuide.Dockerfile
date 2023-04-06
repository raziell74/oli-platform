FROM node:19.8.1-alpine3.17 As styleguide
EXPOSE 6060
ENV NODE_ENV=development

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install

CMD ["npm", "run", "styleguide"]
