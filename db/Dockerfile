FROM mysql:5

ENV MYSQL_DATABASE gallery
ENV MYSQL_USER fec_gallery
ENV MYSQL_PASSWORD 123

COPY schema.sql /docker-entrypoint-initdb.d/
