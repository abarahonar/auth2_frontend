from nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY assets/ /certs/
COPY src/ /usr/share/nginx/html/