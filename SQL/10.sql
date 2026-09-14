
-- Get Categories that have an active blog or news item (do not duplicate categories).
SELECT DISTINCT category.*
FROM category
LEFT JOIN blog ON category.id = blog.category_id AND blog.is_active = 1
LEFT JOIN news ON category.id = news.category_id AND news.is_active = 1
WHERE blog.id IS NOT NULL OR news.id IS NOT NULL;