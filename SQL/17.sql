SELECT
    u.id,
    u.full_name,
    COUNT(b.id) AS active_blog_count
FROM `user` u
LEFT JOIN blog b
    ON b.user_id = u.id
    AND b.is_active = 1
WHERE u.id IN (1, 2, 4)
GROUP BY u.id, u.full_name;