SELECT blog.id, blog.title, COUNT(comment.id) AS comment_count
FROM blog
LEFT JOIN comment
    ON blog.id = comment.target_id
    AND comment.target_table = 'blog'
GROUP BY blog.id, blog.title;