# Auth2 Frontend

## Run

It expects a ssl certificate called `server.cert` and a ssl key called `server.key` to be in the `/certs/` folder.

You have to change the `server_name` configuration in the `nginx.conf` file, in lines 18 and 23.

The firebase's configuration may also need to be changed (lines 2 to 8).

```sh
sudo docker run -it --rm -d --name auth2 \
    -p 443:443 -p 80:80 \
    auth2_frontend
```
