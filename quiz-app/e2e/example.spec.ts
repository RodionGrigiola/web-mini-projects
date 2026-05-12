import { test, expect } from "@playwright/test";

test("quiz completes full flow", async ({ page }) => {
  await page.goto("/");

  // старт квиза
  await page.getByRole("button", { name: /start/i }).click();

  // проходим все вопросы
  for (let i = 0; i < 5; i++) {
    // выбираем первый ответ (или можно рандом/правильный позже)
    const answers = page.getByRole("button");
    await answers.first().click();

    // нажимаем next
    await page.getByRole("button", { name: /next/i }).click();
  }

  // проверяем результат
  await expect(page.getByText("Quiz completed")).toBeVisible();
  await expect(page.getByText("Your Score")).toBeVisible();
});
