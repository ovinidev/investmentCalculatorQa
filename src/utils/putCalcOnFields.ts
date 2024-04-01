import { Page } from "@playwright/test";

export async function putCalcOnFields(page: Page) {
  await page.goto("http://localhost:5173");

  await page.waitForTimeout(500);

  const initialInvestment = await page.$('[data-testid="initialInvestment"]');
  await initialInvestment?.fill("1000");

  await page.waitForTimeout(500);

  const investmentPerMonth = await page.$('[data-testid="investmentPerMonth"]');
  await investmentPerMonth?.fill("100");

  await page.waitForTimeout(500);

  const investmentTime = await page.$('[data-testid="investmentTime"]');
  await investmentTime?.fill("12");

  await page.waitForTimeout(500);

  const button = await page.$('[data-testid="buttonCalculate"]');

  await button?.click();
}
