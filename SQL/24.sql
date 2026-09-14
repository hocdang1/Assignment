(

    SELECT b.id, b.title, b.`view`, b.category_id, b.created_at, 'blog' AS type
    FROM blog b
    
WHERE b.is_active = 1
    ORDER BY created_at DESC, id DESC
    LIMIT 5
)
UNION ALL
(
    SELECT n.id, n.title, n.`view`, n.category_id, n.created_at, 'news' AS type
    FROM news n
    WHERE n.is_active = 1
    ORDER BY created_at DESC, id DESC
    LIMIT 5
)
ORDER BY created_at DESC, id DESC;

