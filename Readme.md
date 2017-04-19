# Docker Container for using Cloudflare as a Dynamic DNS Provider

## Using this image

```zsh
docker run --name cf-ddns -d \
-e EMAIL="cloudflare@emailaddress.com" \
-e API_KEY="cloudflareAPIKEY" \
-e UPDATE_TIME="1" \
-e ZONE="mydomain.com" \
-e RECORD="ddns.mydomain.com" \
woodjme/cloudflare-ddns-docker
```
*UPDATE_TIME in minutes.*

https://hub.docker.com/r/woodjme/cloudflare-ddns-docker/