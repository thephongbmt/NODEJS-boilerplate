### start project :
   1. `yarn install` | `npm install`
   2. `yarn start` | `npm start`


# DOCKER

### DOCKER BUILD IMAGE
- docker build -t '${image_name}' .

### START IMAGE DOCKER
- EX: docker run --name='skeleton' -p 3001:3002 --env NODE_ENV='production' docker-skeleton
    -  docker run --name='${name_container}' ${docker_image_name} -d -p ${communicate_port}: ${port_docker} --env 'key' = 'value'
    -   `-d`: 
    -   `-p` port communicate : port docker 
    -       Ex -p 3001:3002
    -   `--env`: 'key' = 'value'
    -     NODE_ENV='development'

