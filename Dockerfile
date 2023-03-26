FROM node:16-alpine as builder

WORKDIR /code

COPY package.json yarn.lock /code/
RUN yarn

COPY . /code

RUN yarn build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder code/dist /usr/share/nginx/html
