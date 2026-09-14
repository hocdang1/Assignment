-- Get 5 blogs and 5 news items from any category.
(

    SELECT id, title, `view`, category_id, created_at, 'blog' AS type
    FROM blog
    ORDER BY created_at DESC, id DESC
    LIMIT 5
)
UNION ALL
(
    SELECT id, title, `view`, category_id, created_at, 'news' AS type
    FROM news
    ORDER BY created_at DESC, id DESC
    LIMIT 5
)
ORDER BY created_at DESC, id DESC;

