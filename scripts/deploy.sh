#!/bin/bash
ssh fish "mkdir -p ~/apps/r3f"
scp -r dist/ fish:~/apps/r3f/
scp Dockerfile docker-compose.yml nginx.conf fish:~/apps/r3f/

ssh fish "
cd ~/apps/r3f &&
docker-compose up --build -d
"