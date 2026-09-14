-- Set is_active = 0 for the user with id = 3 in the user table.
UPDATE `user`
SET is_active = 0
WHERE id = 3;

SELECT * FROM `user` 
WHERE id = 3;
-- id      full_name       email   rank    is_active       created_at
-- 3       Lê Hoàng Cường  cuong.le@example.com    1       0       2026-09-11 11:08:44