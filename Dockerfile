FROM node:12

RUN mkdir -p /nest
ADD . /nest

RUN npm i -g @nestjs/cli


ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

WORKDIR /nest

# optionally if you want to run npm global bin without specifying path
# ENV PATH=$PATH:/home/node/.npm-global/bin 

# Set the user to use when running this image
# RUN chown -R node:node /nest
RUN chmod 755 /nest
# USER node

# Bundle app source
COPY . .
RUN npm install

EXPOSE 3000
EXPOSE 8000

CMD [ "npm", "start" ]
