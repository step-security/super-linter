FROM node:26@sha256:e3ffe0cbaeebdcddbfe1ee7bca9b564a92863a8386d5b99a3d72677b3667b61d

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

COPY server.js server.js
EXPOSE 3000
CMD ["node", "server.js"]
