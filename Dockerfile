FROM node:18-alpine
WORKDIR /mytodo-server
ADD package.json package.json
RUN npm install --legacy-peer-deps
ADD . .
RUN npm run build
CMD ["node", "./dist/main.js"]