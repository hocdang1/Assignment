SELECT id, title, `view`, category_id, created_at
FROM blog
WHERE created_at >= NOW() - INTERVAL 3 DAY
ORDER BY created_at DESC, id DESC;