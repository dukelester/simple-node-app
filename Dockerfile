# FROM node:12-alpine
# ENV NODE_ENV=production
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN yarn install --production
# # copy the source code
# COPY . .

# CMD [ "node", "server.js" ]

# Docker multistage for testing and building an image
FROM node:12 as base

WORKDIR /code
COPY package.json package.json
COPY package-lock.json package-lock.json

FROM base as test

RUN npm ci
COPY . .
# CMD [ "npm", "run", "test" ]
RUN npm run test

FROM base as prod
RUN npm ci --production
COPY . .
CMD ["node", "server.js"]