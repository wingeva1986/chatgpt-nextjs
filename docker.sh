docker build -t ijike-chatgpt:latest . -f Dockerfile
docker stop ijike-chatgpt
docker rm ijike-chatgpt
docker run -itd --name ijike-chatgpt -p 3001:3000 ijike-chatgpt
