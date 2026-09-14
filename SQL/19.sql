(
    SELECT id, title, `view`, category_id, created_at, 'blog' AS type
    FROM blog

    ORDER BY `view` DESC, id DESC
    LIMIT 1
)
UNION ALL
(
    SELECT id, title, `view`, category_id, created_at, 'news' AS type
    FROM news
   
    ORDER BY `view` DESC, id DESC
    LIMIT 1
)
ORDER BY created_at DESC, id DESC;