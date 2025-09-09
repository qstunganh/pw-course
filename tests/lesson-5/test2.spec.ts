import { test } from "@playwright/test";

test('Exercise 2: Product page', async ({ page }) => {
  await test.step("Navigate to Material Playwright Page", async () => {
    await page.goto('https://material.playwrightvn.com/');
  });

  await test.step("Click on Product page", async () => {
    await page.locator("xpath=//a[@href='02-xpath-product-page.html']").click();
  });

  await test.step("Fill information to all fields", async () => {
     await page.locator("//button[@data-product-id='1']").dblclick();             //click sản phẩm 1 hai lần
     await page.locator("//button[@data-product-id='2']").click({ clickCount:3 });//click sản phẩm 2 ba lần
     await page.locator("//button[@data-product-id='3']").click();                //click sản phẩm 3
    });
});
