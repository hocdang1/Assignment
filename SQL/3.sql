SELECT id, title, `view`, updated_at FROM news WHERE id = 10;

UPDATE news
SET title = 'Xe điện chiếm thị phần ngày càng lớn (đã cập nhật)',
    `view` = 3500,
    is_active = 1
WHERE id = 10;

SELECT id, title, `view`, is_active, created_at, updated_at FROM news WHERE id = 10;

DELETE FROM news WHERE id = 10;

-- Xác nhận
SELECT COUNT(*) AS con_lai FROM news;
-- id      title   view    updated_at
-- 10      Xe điện chiếm thị phần ngày càng lớn    2300    2026-09-11 11:08:44
-- id      title   view    is_active       created_at      updated_at
-- 10      Xe điện chiếm thị phần ngày càng lớn (đã cập nhật)      3500    1       2026-09-11 11:08:44     2026-09-11 11:32:38
-- con_lai
-- 9