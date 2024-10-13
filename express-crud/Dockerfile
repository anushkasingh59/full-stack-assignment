FROM node

WORKDIR /app

COPY  . /app

#RUN npm install
ARG NODE_ENV
RUN if [ "${NODE_ENV}" = "development" ]; \
then npm install; \
else npm install --only=production; \
fi

#EXPOSE 3000
ENV PORT 3000
EXPOSE ${PORT}
CMD ["node","server.js"]
#docker run -v ${pwd}:/appro -v /app/node_modules --env PORT=4000 -p 3000:4000 -d --name express-crud exp-img