FROM ubuntu:18.04

MAINTAINER Tristan Blandford (tpb@simplicityworks.ca)

# install nginx
RUN apt-get update -y
RUN apt-get install -y software-properties-common
RUN add-apt-repository -y ppa:nginx/stable
RUN apt-get update -y
RUN apt-get install -y nginx

# install certbot
RUN add-apt-repository ppa:certbot/certbot
RUN apt-get update -y
RUN apt-get install -y certbot python-certbot-nginx

# deamon mode off
RUN echo "\ndaemon off;" >> /etc/nginx/nginx.conf
RUN chown -R www-data:www-data /var/lib/nginx

# expose ports
EXPOSE 80 443

# add nginx staging conf
ADD config/claessenpumps.com /etc/nginx/sites-available/claessenpumps.com

# create symlinks
RUN ln -s /etc/nginx/sites-available/claessenpumps.com /etc/nginx/sites-enabled/claessenpumps.com

# work dir
WORKDIR /etc/nginx

# add entrypoing
ADD docker-entrypoint.sh .

# make certs dir as volume
VOLUME ["/etc/letsencrypt"]

CMD ["/etc/nginx/docker-entrypoint.sh"]
