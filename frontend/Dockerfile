# Dockerfile for node backend

# Add a base image to build this image off of
FROM node:12.14.1-alpine

#   define workdir
WORKDIR /frontend

# add `/backend/node_modules/.bin` to $PATH
#ENV PATH /frontend/node_modules/.bin:$PATH

# copy package.json
COPY package.json /frontend

# install npm modules
RUN npm install

#copy folder & files
COPY . /frontend

# Add a default port containers from this image should expose
EXPOSE 8000


# Add a default command for this image
CMD ["npm", "start"]
