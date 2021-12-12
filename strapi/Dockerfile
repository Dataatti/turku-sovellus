FROM node:14

# Strapi port
ENV PORT 1337

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY ./package*.json ./
RUN npm install

# Copying source files
COPY . .

# Building app
RUN npm run build
EXPOSE 1337

# Running the app
CMD "npm" "run" "develop"