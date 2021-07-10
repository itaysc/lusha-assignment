import puppeteer from "puppeteer";
import faker from 'faker';
import { render, screen } from '@testing-library/react';
describe("App.js", () => {
  let browser;
  let page;
  let user;
  process.env = {
    REACT_APP_API_URL: "http://localhost/api"
  }
  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      description: "Some Description",
      password: "123456",
      passwordConfirm: "123456"
    }
    page.emulate({
      viewport: {
        width: 1000,
        height: 2400,
      },
      userAgent: ''
    })
  });

  it("form submit works", async () => {
    await page.goto("http://localhost:3001/create",{
      waitUntil: 'networkidle0',
    });

    await page.click("[name=firstName]");
    await page.type("[name=firstName]", user.firstName);
    await page.click("[name=lastName]");
    await page.type("[name=lastName]", user.lastName);
    await page.click("[name=email]");
    await page.type("[name=email]", user.email);
    await page.click("input[name=description]");
    await page.type("input[name=description]", user.description);
    await page.click("[name=password]");
    await page.type("[name=password]", user.password);
    await page.click("[name=passwordConfirm]");
    await page.type("[name=passwordConfirm]", user.passwordConfirm);

    await page.click('button[type=button]'); 

    //expect(containsEmail).toBeTruthy() ;
  });

  afterAll(async() => {
    //await delay(4000);
    browser.close()
  });
});

function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}