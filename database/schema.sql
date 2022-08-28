DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS articles;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS articles_categories;

CREATE TABLE users(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email varchar(255) UNIQUE NOT NULL,
  password_hash varchar(255) NOT NULL,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  avatar varchar(50) NOT NULL
);

CREATE TABLE articles(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(250) NOT NULL,
  createdDate timestamp DEFAULT CURRENT_TIMESTAMP,
  userId integer NOT NULL,
  announce VARCHAR(250) NOT NULL,
  fullText TEXT,
  FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE comments(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR(1000) NOT NULL,
  userId integer NOT NULL,
  articleId integer NOT NULL,
  createdDate timestamp DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (articleId) REFERENCES articles(id)
);

CREATE TABLE categories(
  id integer PRIMARY KEY,
  name varchar(255) NOT NULL
);

CREATE TABLE articles_categories(
  articleId integer NOT NULL,
  categoryId integer NOT NULL,
  PRIMARY KEY (articleId, categoryId),
  FOREIGN KEY (articleId) REFERENCES articles(id),
  FOREIGN KEY (categoryId) REFERENCES categories(id)
);

CREATE INDEX ON articles(title);
