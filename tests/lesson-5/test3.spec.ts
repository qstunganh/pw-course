import { test } from "@playwright/test";

test('Exercise 3: Todo page', async ({ page }) => {
  // 1. Vào trang
  await test.step("Navigate to Material Playwright Page", async () => {
    await page.goto('https://material.playwrightvn.com/');                 
  });
  
  // 2. Click vào "Bài học 3: Todo page"
  await test.step("Click on Todo page", async () => {
    await page.locator("xpath=//a[@href='03-xpath-todo-list.html']").click();
  });
  
  //a.Thêm mới 100 todo item có nội dung “Todo <i>”
    for (let i = 1; i <= 100; i++) {
    await page.locator("//input[@type='text']").fill(`Todo ${i}`); 
    await page.locator("//button[@id='add-task']").click();
  }
  
  //b. Xoá các todo có số lẻ
  await test.step("Xoá các todo có số lẻ", async () => {
  page.on("dialog", async dialog => {
    await dialog.accept();
  });
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      await page.locator(`//button[@id='todo-${i}-delete']`).click();
    }
  }
});
});
