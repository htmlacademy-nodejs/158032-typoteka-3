DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS articles CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS articles_categories;

CREATE TABLE users(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email varchar(255) UNIQUE NOT NULL,
  passwordHash varchar(255) NOT NULL,
  firstName varchar(255) NOT NULL,
  lastName varchar(255) NOT NULL,
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
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
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
