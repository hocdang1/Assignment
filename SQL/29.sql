SELECT c.id AS id_comment,
       c.`comment`,
       u.id AS user_id,
       u.full_name,
       u.email,
       c.created_at
FROM comment c
JOIN follow f ON f.to_user_id = c.user_id
JOIN user u   ON u.id = c.user_id
WHERE f.from_user_id = 1
  AND u.is_active = 1
ORDER BY c.created_at DESC, c.id DESC
LIMIT 1;