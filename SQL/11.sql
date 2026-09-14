SELECT
    c.id,
    c.title,
    COALESCE(SUM(t.`view`), 0) AS total_view
FROM category c
LEFT JOIN (
    SELECT category_id, `view` FROM blog
    UNION ALL
    SELECT category_id, `view` FROM news
) AS t ON t.category_id = c.id
GROUP BY c.id, c.title
ORDER BY total_view DESC;