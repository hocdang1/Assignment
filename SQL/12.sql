SELECT b.id, b.title, b.user_id, b.`view`, b.created_at
FROM blog b
WHERE NOT EXISTS (
    SELECT 1
    FROM `comment` cm
    WHERE cm.user_id = b.user_id
      AND cm.target_table = 'blog'
);