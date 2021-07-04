FROM node as compilador
WORKDIR /usr/src/app
RUN npm i webpack -g
RUN npm i typescript -g
COPY package* ./
COPY webpack* ./
COPY tsconfig.json ./
COPY src/ src/
RUN npm i
RUN npm run build

# Empaquetas la APP (Aquí queda la aplicacion para desplegarla)
FROM node as apisoccerleague
WORKDIR /usr/src/app
COPY --from=compilador /usr/src/app/package* ./
COPY --from=compilador /usr/src/app/node_modules ./node_modules
COPY --from=compilador /usr/src/app/build ./build

CMD ["node", "./build/index.js"]
