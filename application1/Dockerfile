FROM node:16
WORKDIR /application1/src/app
COPY app.js .
RUN npm cache clean --force
RUN npm install mysql2
RUN npm fund
EXPOSE 4000
CMD ["node", "app.js"]
