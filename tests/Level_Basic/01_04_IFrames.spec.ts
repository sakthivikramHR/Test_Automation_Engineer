import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
  console.log(`Precondition starting!`)
})

test.afterAll(async () => {
  console.log(`Postcondition running!`)
})

test.beforeEach(async () => {
  console.log(`Precondition for each test`)
})

test.afterEach(async () => {
  console.log(`Postcondition for each test`)
})

test('Test1 with IFrames', async ({ page }) => {
  console.log(`Draggable test starts`)
  await page.goto('https://jqueryui.com/droppable/');

  const iframeElement = page.frameLocator('[class="demo-frame"]')

  const dragElement = iframeElement.locator('[id="draggable"]')
  const dropElement = iframeElement.locator('[id="droppable"]')

  await page.waitForTimeout(2000);
  await dragElement.dragTo(dropElement);
});

test('Test2 with IFrames', async ({ page }) => {
  console.log(`Draggable test starts`)
  await page.goto('https://jqueryui.com/draggable/');

  const iframeElement = page.frameLocator('[class="demo-frame"]')

  const dragElement = iframeElement.locator('[id="draggable"]')
  //const dropElement = iframeElement.locator('[id="droppable"]')

  await page.waitForTimeout(2000);
  await dragElement.dragTo(dragElement);
});