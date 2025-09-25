FROM nginx:latest
# Paquetes: nano (editor) + openssl (para cert)
RUN apt-get update \
&& apt-get install -y --no-install-recommends nano openssl \
&& apt-get install certbot -y \
&& apt-get install python3-certbot-nginx -y \
&& rm -rf /var/lib/apt/lists/*
#&& certbot --nginx \
 # -d iics.uns.edu.ar -d www.iics.uns.edu.ar


# Config Nginx
RUN mkdir -p /etc/letsencrypt/
# COPY default.conf /etc/nginx/conf.d/default.conf


# COPY certificados/fullchain.pem /etc/nginx/fullchain.pem
# COPY certificados/privkey.pem /etc/nginx/privkey.pem
# COPY certificados/options-ssl-nginx.conf /etc/nginx/options-ssl-nginx.conf
# COPY certificados/ssl-dhparams.pem /etc/nginx/ssl-dhparams.pem


# Cert autofirmado (dev)
RUN mkdir -p /etc/nginx/ssl
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]