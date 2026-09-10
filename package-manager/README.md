# Package manager

1. What is a Package Manager?
-một tập hợp các phần mềm dùng để quản lý và tự động hoá việc cài đặt, nâng cấp, gỡ bỏ các phần mềm/thư viện (package)

-Package Manager: Cài đặt trên máy developer, quản lý việc cài đặt các package
-Repository: Nơi chứa các package (trên mạng). Khi cần một package nào đó, PM sẽ tải package đó từ repository về
-Local Package Database: Mỗi dự án sẽ có local package database riêng, chứa thông tin (metadata, bao gồm tên package, phiên bản, dependency) của các package trong dự án đó.


2. Common JavaScript package managers include? npm vs pnpm vs Yarn

Package manager làm 3 việc chính: tải package từ registry, giải quyết cây phụ thuộc (dependency resolution), và ghi lại phiên bản chính xác vào lock file để mọi máy cài giống nhau.

3. What is `package.json`?

Là "chứng minh thư" của project: metadata + danh sách phụ thuộc + script. Mọi lệnh npm đều đọc file này.
- dependencies

Package cần thiết lúc runtime, tức là code production của bạn import trực tiếp. Ví dụ: express, mongoose, jsonwebtoken, zod.
- devDependencies

Package chỉ cần lúc phát triển và build, không cần khi server chạy thật. Ví dụ: typescript, jest, eslint, nodemon, và tất cả các package @types/*.
- peerDependencies

Chỉ dùng khi bạn viết thư viện, không phải khi viết ứng dụng. Nó nghĩa là: "tôi cần package X, nhưng project cha phải tự cài, và chúng ta phải dùng chung một bản".

4. What is `node_modules`?
Thư mục chứa toàn bộ code thực tế của các package đã cài. Đặc điểm:

Không bao giờ commit lên Git. Luôn có node_modules/ trong .gitignore. Nó có thể lên hàng trăm MB và hàng chục nghìn file.
Có thể tái tạo bất cứ lúc nào từ package.json + lock file.
Chứa cả thư mục ẩn node_modules/.bin/ — nơi chứa các file thực thi (CLI) của package. Đây là lý do trong scripts bạn viết "build": "tsc" được mà không cần cài typescript global: npm tự thêm .bin vào PATH khi chạy script.

Cách Node tìm module: khi gặp require('express'), Node tìm ./node_modules/express, không thấy thì lên thư mục cha ../node_modules/express, cứ thế lên tới gốc ổ đĩa.


5. What is `package-lock.json`?
-Đây là thứ khiến "chạy được trên 1 máy" trở thành "chạy được ở mọi nơi".

Vấn đề: package.json ghi "express": "^4.19.2" — đây là một khoảng version, không phải một điểm. Hôm nay cài ra 4.19.2, tháng sau cài ra 4.21.0. Nếu 4.21.0 có bug, bạn sẽ không hiểu vì sao code không đổi mà production vỡ.

package-lock.json ghi lại chính xác version, URL tải và checksum của từng package trong toàn bộ cây, kể cả dependency của dependency
6. `npm install` vs `npm ci`

- npm install (viết tắt npm i):

Đọc package.json, cố gắng tôn trọng lock file nhưng sẽ sửa lock file nếu package.json yêu cầu khác.
Cài thêm vào node_modules đang có (cập nhật một phần).
Chạy được cả khi không có lock file.
Dùng khi: đang code hằng ngày, thêm/bớt package.

- npm ci (viết tắt của clean install):

Bắt buộc phải có package-lock.json, không có thì báo lỗi ngay.
Xóa sạch node_modules rồi cài lại từ đầu.
Cài đúng y hệt lock file, không bao giờ sửa package.json hay lock file.
Nếu package.json và lock file không khớp nhau → báo lỗi và dừng thay vì tự sửa. Đây chính là điểm mạnh: nó bắt được lỗi đồng đội quên commit lock file.
Nhanh hơn npm install đáng kể vì bỏ qua bước resolve.

7. What is Semantic Versioning (SemVer)?
-Semantic Versioning (SemVer) là một quy ước quốc tế cho việc đặt tên và quản lý phiên bản phần mềm. SemVer giúp các nhà phát triển và người dùng dễ dàng hiểu và kiểm soát thay đổi trong phiên bản phần mềm một cách cụ thể

MAJOR.MINOR.PATCH:
-Major (Số đầu tiên): Đây là số đầu tiên trong phiên bản và tăng lên mỗi khi có thay đổi không tương thích ngược với phiên bản trước đó. Khi số này tăng, có thể xuất hiện sự thay đổi lớn trong tính năng hoặc cấu trúc của phần mềm.

-Minor (Số giữa): Số thứ hai thể hiện phiên bản có thay đổi tính năng hoặc bổ sung tính năng mà không làm hỏng tính tương thích ngược.

-Patch (Số cuối): Số thứ ba tăng khi có bản vá lỗi hoặc các sửa đổi nhỏ không làm thay đổi tính năng hoặc tương thích ngược.
8. Understanding `^` and `~`
Hai ký hiệu này quyết định npm được phép nâng version tới đâu khi cài.

^ (caret) — mặc định của npm

Cho phép cập nhật MINOR và PATCH, giữ nguyên MAJOR.

~ (tilde)

Chỉ cho phép cập nhật PATCH, giữ nguyên MINOR. Bảo thủ hơn.

^ với version 0.x — chỗ dễ sai

Vì lý do ở mục 7, npm xử lý đặc biệt:

"pkg": "^0.5.2"   →  >=0.5.2 <0.6.0    (^ hành xử giống ~)
"pkg": "^0.0.3"   →  >=0.0.3 <0.0.4    (chỉ đúng bản đó thôi)
9. Understanding the Dependency Tree `npm ls`
npm ls: 
Lệnh này sẽ in ra màn hình console tất cả các phiên bản của các gói đã được cài đặt, cũng như các gói phụ thuộc của chúng, theo cấu trúc cây.

10. What is `npm audit`?
Lệnh kiểm tra (audit) gửi mô tả về các phụ thuộc được cấu hình trong dự án của bạn đến kho lưu trữ mặc định và yêu cầu báo cáo về các lỗ hổng đã biết. Nếu phát hiện bất kỳ lỗ hổng nào, tác động và biện pháp khắc phục thích hợp sẽ được tính toán. Nếu đối fixsố được cung cấp, các biện pháp khắc phục sẽ được áp dụng cho package tree.


11. What is `npx`?
npx = Node Package eXecute. Nó chạy file thực thi của một package mà không cần cài global.

Thứ tự tìm kiếm của npx <lệnh>:

Tìm trong node_modules/.bin/ của project.
Không có thì tải tạm về cache, chạy, rồi thôi

12. Local vs Global Packages
Local (mặc định) — cài vào node_modules của project hiện tại
Global — cài vào một thư mục dùng chung toàn máy
Nguyên tắc: mặc định luôn cài local.

Lý do: global không được ghi vào package.json, nên đồng đội clone repo về sẽ thiếu. Ngoài ra hai project cần hai version khác nhau của cùng một tool sẽ đá nhau.

Chỉ nên cài global những CLI thật sự độc lập với project: nvm (thực ra không phải npm package), pm2, typescript (nếu bạn muốn dùng ngoài project), serve.

13. Commands You Should Know
-Khởi tạo và cài đặt

bash
npm init                  # hỏi từng bước
npm init -y               # tạo package.json mặc định ngay
npm install               # cài toàn bộ theo package.json
npm ci                    # cài sạch theo lock file (CI/CD)
npm i <pkg>               # thêm vào dependencies
npm i -D <pkg>            # thêm vào devDependencies
npm i -g <pkg>            # cài global
npm i <pkg>@<version>     # cài version cụ thể
npm uninstall <pkg>       # gỡ

-Chạy script

bash
npm run                   # liệt kê tất cả script có sẵn
npm run dev
npm start                 # không cần "run"
npm test
npm run build -- --watch  # phần sau "--" được truyền vào lệnh gốc

Kiểm tra và bảo trì

-bash
npm ls <pkg>
npm outdated
npm update
npm audit
npm audit fix
npm view express versions --json   # xem mọi version đã publish
npm view express                   # xem thông tin package

-Dọn dẹp và gỡ rối

bash
npm cache clean --force
npm cache verify
npm config list           # xem cấu hình hiện tại
npm doctor                # kiểm tra sức khỏe môi trường npm












```
# Create a project
npm init

# Install a dependency
npm install express

# Install a development dependency
npm install -D typescript

# Remove a dependency
npm uninstall express

# Install dependencies from package.json and the lock file
npm ci

# Run a script
npm run dev

# Inspect dependencies
npm ls

# Check outdated packages
npm outdated

# Check vulnerabilities
npm audit

# View package information
npm view express

# Run a local package CLI
npx tsc

# View npm configuration
npm config list
```