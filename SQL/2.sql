
-- ── category (10 dòng) ────────────────────────────────
INSERT INTO `category` (title, description) VALUES
('Công nghệ',    'Tin tức và bài viết về công nghệ'),
('Du lịch',      'Kinh nghiệm và địa điểm du lịch'),
('Ẩm thực',      'Món ăn và công thức nấu ăn'),
('Thể thao',     'Bóng đá, bóng rổ và các môn khác'),
('Giáo dục',     'Học tập, thi cử, du học'),
('Sức khỏe',     'Dinh dưỡng và lối sống lành mạnh'),
('Kinh doanh',   'Khởi nghiệp và tài chính cá nhân'),
('Giải trí',     'Phim ảnh, âm nhạc, game'),
('Xe cộ',        NULL),
('Nhà cửa',      'Thiết kế và trang trí nội thất');

-- ── user (10 dòng) ────────────────────────────────────
INSERT INTO `user` (full_name, email, `rank`, is_active) VALUES
('Nguyễn Văn An',    'an.nguyen@example.com',    3, 1),
('Trần Thị Bình',    'binh.tran@example.com',    2, 1),
('Lê Hoàng Cường',   'cuong.le@example.com',     1, 1),
('Phạm Thu Dung',    'dung.pham@example.com',    5, 1),
('Hoàng Minh Đức',   'duc.hoang@example.com',    0, 1),
('Vũ Thị Giang',     'giang.vu@example.com',     2, 0),
('Đặng Quốc Hải',    'hai.dang@example.com',     4, 1),
('Bùi Thanh Hương',  'huong.bui@example.com',    1, 1),
('Ngô Văn Khoa',     'khoa.ngo@example.com',     3, 0),
('Đỗ Thị Lan',       'lan.do@example.com',       2, 1);

-- ── blog (12 dòng) ────────────────────────────────────
INSERT INTO `blog` (category_id, user_id, title, `view`, is_active, content) VALUES
(1,  1, 'Học Node.js từ con số 0',            1250, 1, 'Node.js là môi trường chạy JavaScript phía server...'),
(1,  1, 'TypeScript cho người mới bắt đầu',    890, 1, 'TypeScript bổ sung hệ thống kiểu tĩnh cho JavaScript...'),
(1,  3, 'So sánh MongoDB và PostgreSQL',       2100, 1, 'Hai hệ quản trị này phù hợp với bài toán khác nhau...'),
(2,  2, 'Ba ngày khám phá Đà Nẵng',            3400, 1, 'Lịch trình chi tiết cho chuyến đi cuối tuần...'),
(2,  4, 'Kinh nghiệm đi Hội An tự túc',        1780, 1, 'Phố cổ Hội An đẹp nhất vào lúc hoàng hôn...'),
(3,  5, 'Cách nấu phở bò chuẩn vị Hà Nội',     5200, 1, 'Nước dùng là linh hồn của bát phở...'),
(3,  2, 'Năm quán bánh mì ngon ở Đà Nẵng',     1450, 1, 'Danh sách được tổng hợp sau nhiều lần thử...'),
(4,  7, 'Nhìn lại mùa giải V-League vừa qua',   620, 1, 'Một mùa giải nhiều bất ngờ...'),
(5,  8, 'Lộ trình tự học tiếng Anh giao tiếp',  980, 1, 'Chia thành ba giai đoạn rõ ràng...'),
(6,  4, 'Bảy thói quen giúp ngủ ngon hơn',     1120, 1, 'Giấc ngủ chất lượng bắt đầu từ buổi sáng...'),
(7, 10, 'Quản lý chi tiêu cho sinh viên',       760, 1, 'Quy tắc 50-30-20 áp dụng thế nào...'),
(8,  6, 'Những tựa game indie đáng chơi',       430, 0, 'Bài viết đang được cập nhật...');

-- ── news (10 dòng) ────────────────────────────────────
INSERT INTO `news` (category_id, title, `view`, is_active, content) VALUES
(1, 'MySQL 8.4 LTS chính thức phát hành',        4500, 1, 'Phiên bản hỗ trợ dài hạn với nhiều cải tiến...'),
(1, 'Node.js 22 bổ sung hỗ trợ WebSocket',       3200, 1, 'Không còn cần thư viện bên thứ ba...'),
(2, 'Đà Nẵng đón lượng khách kỷ lục dịp hè',     2800, 1, 'Số liệu từ Sở Du lịch thành phố...'),
(3, 'Ẩm thực Việt Nam vào top thế giới',         1900, 1, 'Bảng xếp hạng do một tạp chí quốc tế công bố...'),
(4, 'Đội tuyển quốc gia công bố danh sách',      6100, 1, 'Danh sách gồm 25 cầu thủ...'),
(5, 'Quy chế tuyển sinh đại học có thay đổi',    8300, 1, 'Bộ Giáo dục vừa ban hành hướng dẫn mới...'),
(6, 'Khuyến cáo phòng bệnh mùa mưa',             1500, 1, 'Ngành y tế đưa ra năm khuyến cáo...'),
(7, 'Thị trường khởi nghiệp phục hồi',           1100, 1, 'Vốn đầu tư mạo hiểm tăng trở lại...'),
(8, 'Liên hoan phim trong nước khai mạc',         950, 1, 'Sự kiện kéo dài một tuần...'),
(9, 'Xe điện chiếm thị phần ngày càng lớn',      2300, 0, 'Bản tin đang chờ biên tập...');

-- ── follow (12 dòng) ──────────────────────────────────
INSERT INTO `follow` (from_user_id, to_user_id) VALUES
(1, 2),
(1, 3),
(1, 4),
(2, 1),
(2, 5),
(3, 1),
(3, 4),
(4, 1),
(5, 2),
(6, 7),
(7, 6),
(8, 1);

-- ── comment (12 dòng) ─────────────────────────────────
INSERT INTO `comment` (target_table, target_id, user_id, `comment`) VALUES
('blog', 1,  2, 'Bài viết rất dễ hiểu, cảm ơn tác giả.'),
('blog', 1,  5, 'Phần cài đặt môi trường hơi ngắn, mong có bài chi tiết hơn.'),
('blog', 3,  1, 'Mình đang phân vân đúng chỗ này, đọc xong sáng ra nhiều.'),
('blog', 4,  7, 'Đi theo lịch trình này thấy hợp lý, cảm ơn bạn.'),
('blog', 4,  8, 'Bổ sung thêm quán cà phê ở Sơn Trà nữa thì tuyệt.'),
('blog', 6,  3, 'Công thức chuẩn, nhà mình nấu theo cả gia đình khen.'),
('blog', 6, 10, 'Nước dùng ninh mấy tiếng là vừa ạ?'),
('news', 1,  1, 'Chờ bản LTS này lâu rồi.'),
('news', 1,  3, 'Có bài so sánh với bản 8.0 không ạ?'),
('news', 5,  4, 'Thông tin hữu ích cho các bạn lớp 12.'),
('news', 6,  9, 'Mùa này đúng là hay ốm thật.'),
('news', 4,  7, 'Danh sách năm nay khá nhiều gương mặt mới.');

-- ── Kiểm tra số dòng đã insert ────────────────────────
SELECT 'category' AS bang, COUNT(*) AS so_dong FROM `category`
UNION ALL SELECT 'user',    COUNT(*) FROM `user`
UNION ALL SELECT 'blog',    COUNT(*) FROM `blog`
UNION ALL SELECT 'news',    COUNT(*) FROM `news`
UNION ALL SELECT 'follow',  COUNT(*) FROM `follow`
UNION ALL SELECT 'comment', COUNT(*) FROM `comment`;