const { test, expect } = require("@playwright/test");

test("Moving to invalid question tells to user that the question is invalid.", async ({ page }) => {
  await page.goto("/assignments/4");

  // navigate to the latest page
  await page.waitForURL("**/assignments/4");
  expect(await page.title()).toBe("Programming assignments");
  
  // Moving on to the next assignment
  
  expect(await page.locator("#message-box").innerText()).toContain("not available");
});

test("creating a submission that fails the tests and checking the feedback on incorrect submission'", async ({ page }) => {
  await page.goto("/");

  // navigate to the latest page
  await page.waitForURL("**/assignments/**")
  expect(await page.title()).toBe("Programming assignments");
  // create a failed submission
  await page.locator("#code").fill("def hello");

  // click the submit button
  await page.locator("#grading-button").click();

  // wait for loader to appear and disappear
  await page.locator("#loading").waitFor({state:"visible"});
  await page.locator("#loading").waitFor({state:"hidden"});

  const msg = await page.locator("#content").inputValue();
  // wait for result
  await expect(msg).not.toContain('OK');
});


test("creating a submission that passes the tests and checking the notification on the correctness of the submission'", async ({ page }) => {
  await page.goto("/assignments/1");

  // navigate to the latest page
  await page.waitForURL("**/assignments/1");
  expect(await page.title()).toBe("Programming assignments");
  // create a failed submission
  await page.locator("#code").fill("def hello():\n\treturn 'Hello'");

  // click the submit button
  await page.locator("#grading-button").click();

  // wait for loader to appear and disappear
  await page.locator("#loading").waitFor({state:"visible"});
  await page.locator("#loading").waitFor({state:"hidden"});

  // check the output msg
  const msg = await page.locator("#content").inputValue();

  // Checking for notification about correctness of the submission
  await expect(msg).toContain('OK');
});


test("creating a submission that passes the tests, checking the notification on the correctness of the submission, \
  moving to the next assignment, and checking that the assignment is a new one'", async ({ page }) => {
    await page.goto("/assignments/2");

    // navigate to the latest page
    await page.waitForURL("**/assignments/2");
    expect(await page.title()).toBe("Programming assignments");
    // create a failed submission
    await page.locator("#code").fill("def hello():\n\treturn 'Hello world!'");
  
    // click the submit button
    await page.locator("#grading-button").click();
  
    // wait for loader to appear and disappear
    await page.locator("#loading").waitFor({state:"visible"});
    await page.locator("#loading").waitFor({state:"hidden"});
  
    // check the output msg
    const msg = await page.locator("#content").inputValue();
    // wait for result
    await expect(msg).toContain('OK');
  
    // Moving on to the next assignment
    await page.locator("#next-question-button").click();
  
    // Ensure that the assignment is the next one
    await page.waitForURL("**/assignments/3")
});

test("Able to move to the previous question'", async ({ page }) => {
    await page.goto("/assignments/2");

    // navigate to the latest page
    await page.waitForURL("**/assignments/2");
    expect(await page.title()).toBe("Programming assignments");
    
    // Moving on to the next assignment
    await page.locator("#prev-question-button").click();
    // navigate to the latest page
    await page.waitForURL("**/assignments/1");
});
