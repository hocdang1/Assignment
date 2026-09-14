SELECT
    b.id,
    b.title,
    b.`view`,
    b.created_at,
    u.full_name AS author
FROM blog b
JOIN `user` u ON u.id = b.user_id
WHERE u.is_active = 1
ORDER BY b.created_at DESC, b.id DESC
LIMIT 10;