SELECT *
FROM blog
WHERE is_active = 1
ORDER BY created_at DESC
LIMIT 10;
-- id      full_name       email   rank    is_active       created_at
-- 1       Nguyễn Văn An   an.nguyen@example.com   3       1       2026-09-11 11:08:44
-- 2       Trần Thị Bình   binh.tran@example.com   2       1       2026-09-11 11:08:44
-- 3       Lê Hoàng Cường  cuong.le@example.com    1       1       2026-09-11 11:08:44
-- 4       Phạm Thu Dung   dung.pham@example.com   5       1       2026-09-11 11:08:44
-- 5       Hoàng Minh Đức  duc.hoang@example.com   0       1       2026-09-11 11:08:44
-- 6       Vũ Thị Giang    giang.vu@example.com    2       0       2026-09-11 11:08:44
-- 7       Đặng Quốc Hải   hai.dang@example.com    4       1       2026-09-11 11:08:44
-- 8       Bùi Thanh Hương huong.bui@example.com   1       1       2026-09-11 11:08:44
-- 9       Ngô Văn Khoa    khoa.ngo@example.com    3       0       2026-09-11 11:08:44
-- 10      Đỗ Thị Lan      lan.do@example.com      2       1       2026-09-11 11:08:44