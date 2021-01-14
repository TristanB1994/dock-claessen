server {
    listen 80;
    listen [::]:80;
    server_name claessenpumps.com www.claessenpumps.com;

    location ~ /.well-known/acme-challenge {
        allow all;
        root /var/www/html;
    }
	# May break ssl cert renewal
    return 301 https://www.claessenpumps.com$request_uri;
}

server {
    listen 443 ssl;
    server_name claessenpumps.com www.claessenpumps.com;

    ssl_certificate     /etc/letsencrypt/live/claessenpumps.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/claessenpumps.com/privkey.pem;

    location / {

		include uwsgi_params;
		uwsgi_pass flask:5000;
	}
}
