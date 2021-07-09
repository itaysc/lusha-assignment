FROM node:14
 
#WORKDIR /app
 
COPY package.json .
 
RUN npm install
 
COPY . .
 
EXPOSE 3001
 
CMD [ "npm", "start" ]


# FROM node:14
# WORKDIR /app
# COPY package.json /app
# RUN npm install
# COPY . /app
# # RUN npm run build
# # CMD [ "npm", "run", "start" ]
# CMD [ "npm", "run", "start" ]
# EXPOSE 3001