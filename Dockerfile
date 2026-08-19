FROM node:24-slim AS BUILD_STAGE

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:24-slim

WORKDIR /app

COPY --from=BUILD_STAGE /app/package.json ./package.json
COPY --from=BUILD_STAGE /app/node_modules ./node_modules
COPY --from=BUILD_STAGE /app/.next ./.next
COPY --from=BUILD_STAGE /app/public ./public

EXPOSE 3000

CMD ["yarn", "start"]
