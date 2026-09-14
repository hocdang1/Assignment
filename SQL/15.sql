UPDATE `user`
SET `rank` = 1
WHERE id = 2
  AND (
    SELECT COUNT(*)
    FROM `comment`
    WHERE user_id = 2
  ) > 10;   
  SELECT id, full_name, `rank`
FROM `user`
WHERE id = 2;