SELECT b.id, b.title, b.user_id, b.`view`, b.created_at
FROM blog b
JOIN follow f ON f.to_user_id = b.user_id
WHERE f.from_user_id = 1
  AND b.is_active = 1
ORDER BY b.created_at DESC;