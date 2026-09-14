SELECT c.id,
       c.user_id,
       c.`comment` AS content,
       c.target_table AS type,
       c.target_id,
       COALESCE(b.title, n.title) AS post_title,
       c.created_at
FROM comment c
LEFT JOIN blog b ON c.target_table = 'blog' AND b.id = c.target_id
LEFT JOIN news n ON c.target_table = 'news' AND n.id = c.target_id
WHERE c.user_id = 1
  AND c.target_table IN ('blog', 'news')
ORDER BY c.created_at DESC;