server {
    listen 80;
    listen [::]:80;
    server_name claessenpumps.com www.claessenpumps.com;

    location ~ /.well-known/acme-challenge {
        allow all;
        root /var/www/html;
    }
}
