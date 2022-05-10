FROM node:alpine
RUN mkdir /app
COPY package.json /app
WORKDIR /app
RUN npm install
COPY index.js /app
EXPOSE 80
CMD [ "node", "index.js" ]