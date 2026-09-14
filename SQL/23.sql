(
    SELECT b.id, b.title, b.`view`, b.category_id, b.created_at, 'blog' AS type,
           (SELECT COUNT(*) FROM `comment` cm
            WHERE cm.target_table = 'blog' AND cm.target_id = b.id) AS comment_count
    FROM blog b
    ORDER BY comment_count DESC, b.id DESC
    LIMIT 1
)
UNION ALL
(
    SELECT n.id, n.title, n.`view`, n.category_id, n.created_at, 'news' AS type,
           (SELECT COUNT(*) FROM `comment` cm
            WHERE cm.target_table = 'news' AND cm.target_id = n.id) AS comment_count
    FROM news n
    ORDER BY comment_count DESC, n.id DESC
    LIMIT 1
)
ORDER BY comment_count DESC;