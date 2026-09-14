(
    SELECT id, title, `view`, category_id, created_at, 'blog' AS type
    FROM blog b
    WHERE EXISTS (
        SELECT 1 FROM `comment` cm
        WHERE cm.user_id = 1
          AND cm.target_table = 'blog'
          AND cm.target_id = b.id
    )
    LIMIT 2
)
UNION ALL
(
    SELECT id, title, `view`, category_id, created_at, 'news' AS type
    FROM news n
    WHERE EXISTS (
        SELECT 1 FROM `comment` cm
        WHERE cm.user_id = 1
          AND cm.target_table = 'news'
          AND cm.target_id = n.id
    )
    LIMIT 2
)
