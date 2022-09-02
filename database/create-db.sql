CREATE DATABASE typoteka
    WITH
    OWNER = academy
    TEMPLATE = template0
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

GRANT ALL ON DATABASE typoteka TO academy;