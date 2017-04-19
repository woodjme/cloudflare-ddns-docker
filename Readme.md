# Docker Container for updating a Cloudflare DNS record.

## Using this image.

```zsh
docker run --name cf-ddns -d \
-e EMAIL="cloudflare@emailaddress.com" \
-e API_KEY="cloudflareAPIKEY" \
-e UPDATE_TIME="1" \
-e ZONE="mydomain.com" \
-e RECORD="ddns.mydomain.com" \
woodjme/cloudflare-ddns-docker
```
