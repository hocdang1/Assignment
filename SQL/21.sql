SELECT u.id, u.full_name, u.email
FROM (
    SELECT id
    FROM blog
    ORDER BY created_at DESC, id DESC
    LIMIT 2
) AS b
JOIN `comment` cm
    ON cm.target_id = b.id
    AND cm.target_table = 'blog'
JOIN `user` u ON u.id = cm.user_id
GROUP BY u.id, u.full_name, u.email
ORDER BY u.id;