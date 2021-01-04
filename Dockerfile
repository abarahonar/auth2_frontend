from nginx:alpine

ENV PORT 443

COPY nginx.conf /etc/nginx/nginx.conf
COPY assets/ /certs/
COPY src/ /usr/share/nginx/html/