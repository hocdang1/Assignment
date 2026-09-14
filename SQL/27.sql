SELECT COUNT(*) AS follower_count
FROM follow
WHERE to_user_id = 1;