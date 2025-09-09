import { test } from "@playwright/test";

const date = "2025-09-09";
const username = "Tùng Anh";
const email = "qstunganh@gmail.com";
const description = "PW K17";
const country = "uk";

test('Exercise 1: Register Page', async ({ page }) => {
  await test.step("Navigate to Material Playwright Page", async () => {
    await page.goto('https://material.playwrightvn.com/');
  });

  await test.step("Click on User Registration", async () => {
    await page.locator("xpath=//a[@href='01-xpath-register-page.html']").click();
  });

  await test.step("Fill information to all fields", async () => {
    await page.locator("//input[@id='username']").fill(username);  // Chọn username
    await page.locator("//input[@id='email']").fill(email);        // Chọn mail
    await page.locator("//input[@id='male']").check();             // Chọn giới tính nam
    await page.locator("//input[@id='traveling']").check();        // Chọn sở thích du lịch
    await page.locator('#interests').selectOption('music');        // Chọn sở trường music
    await page.locator("//select[@id='country']").selectOption(country); //Chọn quốc gia
    await page.locator("//input[@id='dob']").fill(date);           // Ngày sinh
    await page.locator("//input[@id='profile']").setInputFiles('C:/Playwright/pw-course/tests/datatest/screennailcache0.130576890.jpg'); // Upload file logo (đảm bảo file "data test" tồn tại)
    await page.locator("//textarea[@id='bio']").fill(description);  // Ghi chú
    await page.locator("//input[@id='rating']").fill("10");         // Đánh giá
    await page.locator("//input[@id='favcolor']").fill("#00ffff");  // Màu yêu thích
    await page.locator("//div[@class='tooltip']").hover();          // Hover vào tooltip
    await page.locator("//input[@id='newsletter']").check();        // Check newsletter
    await page.click("//span[@class='slider round']");              // Click vào slider
  });

  await test.step("Click Register", async () => {
    await page.locator("xpath=//button[@type='submit']").click();
  });
});
