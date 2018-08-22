
# Project
### start project :
   1. `yarn install` | `npm install`
   2. `yarn start` | `npm start`

### run test:
   3. `yarn coverage`

# Code convention
## With Visual studio code
- Step 1:
    - `npm install eslint -g --save-dev`
- Step 2:
    - add eslint to VS code
- Step 3:
    - `yarn global add prettier`
- Step 4:
    - add prettier into VS code
### Reference Doc : 
- [Config eslint vs Visual Studio](https://medium.com/@pgivens/write-cleaner-code-using-prettier-and-eslint-in-vscode-d04f63805dcd)

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

