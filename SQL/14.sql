SELECT
    u.id,
    u.full_name,
    u.email,
    MIN(cm.created_at) AS first_comment_at
FROM (
    SELECT id
    FROM blog
    ORDER BY created_at DESC, id DESC
    LIMIT 5
) AS b
JOIN `comment` cm
    ON cm.target_id = b.id
    AND cm.target_table = 'blog'
JOIN `user` u ON u.id = cm.user_id
GROUP BY u.id, u.full_name, u.email
ORDER BY first_comment_at ASC, u.id ASC
LIMIT 3;