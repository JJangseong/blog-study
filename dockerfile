FROM node:latest

ENV PORT 80

# Create app directory
RUN mkdir -p /usr/src/front
WORKDIR /usr/src/front

# Installing dependencies
COPY package*.json /usr/src/front/
RUN npm install

# Copying source files
COPY . /usr/src/front

# Building app
# RUN npm run build
EXPOSE 80

# Running the app
CMD "npm" "run" "start"