-- Get 3 random blogs.
SELECT *
FROM blogs
ORDER BY RAND()
LIMIT 3;