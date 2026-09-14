SELECT
    b.id,
    b.title,
    b.created_at,
    COUNT(cm.id) AS comment_count
FROM blog b
LEFT JOIN `comment` cm
    ON cm.target_id = b.id
    AND cm.target_table = 'blog'
GROUP BY b.id, b.title, b.created_at
ORDER BY b.created_at DESC, b.id DESC
LIMIT 5;