Research and describe the commands related to Git.
- 1. git clone

git clone được sử dụng để tạo một bản sao của một repository Git từ repository từ xa (remote repository) về máy tính cá nhân.

git clone <repository-url>

Lệnh này tải về repository, bao gồm các file, branch và lịch sử commit.

- 2. git pull

git pull được sử dụng để tải những thay đổi mới nhất từ repository từ xa và tích hợp chúng vào branch hiện tại.

git pull

Về cơ bản, git pull là sự kết hợp của:

git fetch
git merge

Sử dụng git pull khi bạn muốn cập nhật branch local bằng những thay đổi mới từ remote repository.

- 3. git fetch

git fetch được sử dụng để tải những thay đổi và thông tin commit mới nhất từ remote repository mà không thay đổi các file hiện tại trong working directory.

git fetch

Lệnh này cho phép bạn kiểm tra những thay đổi trên remote repository trước khi quyết định có merge chúng vào branch hiện tại hay không.

Sự khác nhau giữa git fetch và git pull
git fetch: tải các thay đổi về nhưng không merge.
git pull: tải các thay đổi về và merge vào branch hiện tại.
- 4. git branch

git branch được sử dụng để tạo, xem, đổi tên hoặc xóa branch.

Xem các branch local
git branch
Tạo branch mới
git branch <branch-name>

Branch cho phép developer làm việc trên các tính năng hoặc phiên bản khác nhau của project một cách độc lập.

- 5. git add

git add được sử dụng để đưa những thay đổi từ working directory vào staging area.

Thêm một file cụ thể
git add <file-name>
Thêm tất cả các file đã thay đổi
git add .

Staging area chứa những thay đổi mà bạn muốn đưa vào commit tiếp theo.

- 6. git status

git status được sử dụng để kiểm tra trạng thái hiện tại của working directory và staging area.

git status
Khi không có thay đổi

Ví dụ:

nothing to commit, working tree clean

Điều này có nghĩa là không có file nào bị thay đổi, xóa hoặc chưa được theo dõi cần commit.

Khi có thay đổi nhưng chưa được git add

Ví dụ:

Changes not staged for commit:
  modified: index.js

Điều này có nghĩa là file index.js đã bị thay đổi nhưng những thay đổi đó chưa được đưa vào staging area.

Có thể sử dụng:

git add index.js

để đưa file vào staging area.

Khi các thay đổi đã được git add

Ví dụ:

Changes to be committed:
  modified: index.js

Điều này có nghĩa là thay đổi của index.js đã được đưa vào staging area và sẵn sàng để commit.

Có thể sử dụng:

git commit
- 7. git checkout

git checkout được sử dụng để chuyển đổi giữa các branch hoặc khôi phục file.

git checkout -- <file-name>
git checkout -- <file-name>

Lệnh này hủy những thay đổi của một file trong working directory và khôi phục file về phiên bản của commit gần nhất.

Lưu ý: Những thay đổi bị hủy bằng cách này có thể rất khó hoặc không thể khôi phục.

git checkout -b
git checkout -b <branch-name>

Lệnh này vừa tạo một branch mới, vừa chuyển sang branch đó ngay lập tức.

Nó tương đương với:

git branch <branch-name>
git checkout <branch-name>
- 8. git commit

git commit được sử dụng để lưu những thay đổi đã được đưa vào staging area thành một commit mới trong lịch sử Git.

git commit
git commit -m
git commit -m "Add login feature"

Tùy chọn -m cho phép bạn viết commit message trực tiếp trong câu lệnh.

Commit message nên mô tả ngắn gọn những gì đã được thay đổi.

Ví dụ:

git commit -m "Add login feature"

Có nghĩa là commit này thêm chức năng đăng nhập.

git commit --amend
git commit --amend

--amend được sử dụng để chỉnh sửa commit gần nhất.

Nó thường được sử dụng khi bạn muốn:

Thay đổi commit message của commit trước.
Thêm một file bị bỏ quên vào commit trước.
Sửa nội dung của commit gần nhất.

Nên sử dụng cẩn thận nếu commit đó đã được push lên remote repository và đang được những người khác sử dụng.

- 9. git log

git log được sử dụng để xem lịch sử các commit của repository.

git log không có tham số
git log

Lệnh này hiển thị thông tin chi tiết về các commit, bao gồm:

Commit hash.
Người tạo commit.
Ngày tạo commit.
Commit message.
git log --oneline
git log --oneline

Lệnh này hiển thị mỗi commit trên một dòng, giúp lịch sử commit ngắn gọn và dễ xem hơn.

Ví dụ:

a82f31d Add login feature
b71c204 Fix database connection
91a82de Initial commit

Lệnh này rất hữu ích khi muốn xem nhanh lịch sử commit.

git log --graph
git log --graph

Lệnh này hiển thị lịch sử commit dưới dạng biểu đồ ASCII, giúp dễ dàng nhìn thấy các branch và quá trình merge.

Thường được kết hợp với:

git log --oneline --graph
- 10. git diff

git diff được sử dụng để xem sự khác nhau giữa các phiên bản của file.

git diff

Mặc định, lệnh này hiển thị những thay đổi đã được thực hiện nhưng chưa được đưa vào staging area.

Ví dụ, nó có thể cho biết:

Dòng nào được thêm.
Dòng nào bị xóa.
Dòng nào được chỉnh sửa.

Lệnh này thường được sử dụng để kiểm tra lại code trước khi thực hiện git add.

- 11. git push

git push được sử dụng để upload các commit từ local repository lên remote repository.

git push

Ví dụ, sau khi thực hiện:

git add .
git commit -m "Update project"
git push

Các commit sẽ được đưa lên remote repository, chẳng hạn như GitHub.

git push -f
git push -f

Hoặc:

git push --force

Lệnh này ép buộc cập nhật remote branch theo trạng thái của local branch.

Nó có thể ghi đè lên những commit đang tồn tại trên remote repository.

Vì vậy, cần sử dụng rất cẩn thận, đặc biệt khi làm việc trong project nhóm.

Một lựa chọn an toàn hơn trong nhiều trường hợp là:

git push --force-with-lease
- 12. git reset --soft/hard HEAD~1

git reset được sử dụng để di chuyển HEAD và branch hiện tại về một commit khác.

HEAD~1 có nghĩa là commit ngay trước commit hiện tại.

git reset --soft HEAD~1
git reset --soft HEAD~1

Lệnh này xóa commit mới nhất khỏi lịch sử branch nhưng giữ lại những thay đổi của commit đó trong staging area.

Nó hữu ích khi bạn muốn chỉnh sửa hoặc tạo lại commit gần nhất.

Ví dụ:

Commit A → Commit B

Sau:

git reset --soft HEAD~1

Sẽ trở thành:

Commit A

Nhưng nội dung thay đổi của Commit B vẫn nằm trong staging area.

git reset --hard HEAD~1
git reset --hard HEAD~1

Lệnh này xóa commit mới nhất và xóa luôn những thay đổi được tạo ra bởi commit đó khỏi working directory.

Cảnh báo: Có thể làm mất dữ liệu chưa được lưu hoặc rất khó khôi phục, vì vậy cần sử dụng cẩn thận.

- 13. git stash

git stash được sử dụng để tạm thời lưu các thay đổi chưa commit.

git stash

Lệnh này hữu ích khi bạn đang làm một tính năng nhưng cần chuyển sang branch khác mà chưa muốn commit code đang làm dở.

Ví dụ:

git stash
git checkout main

Sau đó working directory sẽ trở nên sạch, trong khi những thay đổi chưa commit được lưu vào stash.

- 14. git stash pop
git stash pop

git stash pop khôi phục những thay đổi đã được lưu trong stash gần nhất và xóa stash đó khỏi danh sách stash.

Lệnh này thường được sử dụng khi bạn muốn tiếp tục công việc đang làm dở trước đó.

- 15. git stash apply
git stash apply

git stash apply khôi phục những thay đổi từ stash gần nhất nhưng không xóa stash đó.

Sự khác nhau giữa stash pop và stash apply
Lệnh	Khôi phục thay đổi	Xóa stash
git stash pop	Có	Có
git stash apply	Có	Không

Ví dụ, nếu bạn muốn khôi phục stash nhưng vẫn giữ lại nó để sử dụng lần sau thì dùng:

git stash apply
- 16. git branch -D <tên branch>
git branch -D <branch-name>

Lệnh này được sử dụng để xóa branch local một cách bắt buộc.

Ví dụ:

git branch -D feature-login

Tùy chọn -D cho phép xóa branch ngay cả khi branch đó vẫn còn những commit chưa được merge.

Lưu ý: Những commit chưa được merge có thể trở nên khó khôi phục sau khi branch bị xóa.

- 17. git merge

git merge được sử dụng để kết hợp những thay đổi từ một branch vào branch hiện tại.

Ví dụ, nếu bạn đang ở branch main:

git checkout main
git merge feature-login

Lệnh này sẽ merge branch feature-login vào branch main.

Nếu Git không thể tự động kết hợp các thay đổi, merge conflict sẽ xảy ra và developer phải giải quyết conflict thủ công.

- 18. git rebase

git rebase được sử dụng để đưa các commit của một branch lên trên một commit cơ sở (base commit) khác.

Ví dụ:

git checkout feature-login
git rebase main

Lệnh này lấy các commit của feature-login và áp dụng lại chúng lên phiên bản mới nhất của main.

Rebase có thể tạo ra lịch sử commit thẳng và gọn hơn so với merge.

So sánh merge và rebase

Merge:

main ─── A ─── B ───── M
             \       /
feature       C ─── D

Rebase:

main ─── A ─── B
                  \
                   C' ─── D'

Điểm quan trọng cần nhớ là rebase làm thay đổi lịch sử commit. Vì vậy, nên sử dụng cẩn thận đối với những branch mà nhiều developer khác đang cùng làm việc.



-The steps involved from starting to code a new feature until its completion and the creation of a Pull Request (PR):

main branch -> git branch(tạo feture branch) -> code feature -> git add . -> git commit -> git push -> tạo pull request -> code review -> merge vào main



A description of how to resolve PR conflicts.

PR bị conflicts -> git checkout main (chuyển về main) -> merge hoặc rebase về nhánh feature -> tìm file bị conflict -> giải quyết conflict -> git add -> fit commit -> git push 