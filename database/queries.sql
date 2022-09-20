-- All categories
SELECT id, name FROM categories

-- Categories with at least one article
SELECT
	categories."id",
	categories."name"
FROM categories
	JOIN articles_categories ON articles_categories."categoryId" = categories."id"
	GROUP BY categories."id"

-- All categories with article count
SELECT
	categories."id",
	categories."name",
	COUNT(articles_categories."articleId") as "articlesCount"
FROM categories
	LEFT JOIN articles_categories ON articles_categories."categoryId" = categories."id"
	GROUP BY categories."id"

-- All articles with users and comments data
SELECT
	articles."id",
	articles."title",
	articles."createdDate",
	articles."announce",
	users."firstName",
	users."lastName",
	users."email",
	COUNT(comments."articleId") as "commentsCount",
  STRING_AGG(DISTINCT categories."name", ', ') as "categoriesList"
FROM articles
	JOIN users ON users."id" = articles."userId"
	JOIN articles_categories ON articles_categories."articleId" = articles."id"
	JOIN categories ON articles_categories."categoryId" = categories."id"
	LEFT JOIN comments ON comments."articleId" = articles."id"
	GROUP BY articles."id", users."firstName", users."lastName", users."email"
	ORDER BY articles."createdDate" DESC


-- Article by articleId
SELECT
	articles."id",
	articles."title",
	articles."createdDate",
	articles."announce",
	users."firstName",
	users."lastName",
	users."email",
	COUNT(comments."articleId") as "commentsCount",
	STRING_AGG(DISTINCT categories."name", ', ') as "categoriesList"
FROM articles
	JOIN users ON users."id" = articles."userId"
	JOIN articles_categories ON articles_categories."articleId" = articles."id"
	JOIN categories ON articles_categories."categoryId" = categories."id"
	LEFT JOIN comments ON comments."articleId" = articles."id"
WHERE articles."id" = 7
	GROUP BY articles."id", users."id"

-- 5 latest comments with user and article data
SELECT
	comments."id",
	comments."text",
	users."firstName",
	users."lastName",
	comments."articleId"
FROM comments
	JOIN users ON users."id" = comments."userId"
ORDER BY comments."createdDate" DESC
LIMIT 5

-- Comments by articleId
SELECT
	comments."id",
	comments."text",
	users."firstName",
	users."lastName",
	comments."articleId"
FROM comments
	JOIN users ON users."id" = comments."userId"
WHERE comments."articleId" = 7
ORDER BY comments."createdDate" DESC


-- Update article by id
UPDATE articles
SET title = 'How I celebrated New Year'
WHERE id = 7
