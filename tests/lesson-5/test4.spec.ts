import { test, expect } from '@playwright/test';

test("Add personal notes", async ({ page }) => {
  // Dữ liệu test notes
  const notes = [
    { title: "Vị trí khiến thành phố Mỹ trở nên 'nàng nhất thế giới'", content: "Thành phố St. Petersburg, giữ kỷ lục Thế giới Guinness" },
    { title: "Lịch sử tim nhân tạo đầu tiên của thế giới", content: "Công ty TSMC giật giải thưởng siêu cao từ tiền mặt thế giới, chip 2" },
    { title: "Trung Quốc phát hiện mỏ thạch anh hơn 35 triệu tấn", content: "Phát hiện hai mỏ thạch anh đó tình khiết cao với tổng trữ" },
    { title: "Tàu vũ trụ 'bí ẩn' thăm dò của Mỹ sắp hạ cánh", content: "Dự đoán thành quả thử nghiệm thở CO2 từ nước biển để" },
    { title: "Châu Âu sắp phóng động cơ chính xác nhất trong vũ trụ", content: "Cơ quan Vũ trụ châu Âu (ESA) sẽ phóng động cơ chính" },
    { title: "Át chủ bài của Trung Quốc bị đo và Mặt Trời", content: "Nước Ấn, từ mà nhà quan sát thể có thể được hoạt động" },
    { title: "Thủ tướng: Cần đẩy khôi nghiệp trong chương trình chính khoa", content: "Bộ Giáo dục cần đưa khôi nghiệp vào dạy chính" },
    { title: "Cách dùng AI tăng vọng có thể nghiệm công nghệ", content: "Thủ tướng Phạm Minh Chính cho biết Chính phủ sẽ" },
    { title: "Việt Nam - Indonesia ký ý định thư về khoa học công nghệ", content: "Việt Nam và Indonesia xác định khoa học công nghệ" },
    { title: "Nhà dùng cửa lúm trung ương xác nhận", content: "Các nhà khoa học xác nhận sự tồn tại của hố đen độc cách Trái Đất" }
  ];

  await test.step("Vào playwrightwin > Lesson 3", async () => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('//a[@href="04-xpath-personal-notes.html"]').click();
  });

  await test.step("Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn", async () => {
    for (const note of notes) {
      await page.locator('//input[@type="text" and @id="note-title"]').fill(note.title);
      await page.locator('//textarea[@id="note-content"]').fill(note.content);
      await page.locator('//button[@id="add-note"]').click();
    }
  });

  await test.step("Thực hiện search theo tiêu đề bài báo bất kì.", async () => {
    await page.locator('//input[@type="text" and @id="search"]').fill('AI');
  });
});