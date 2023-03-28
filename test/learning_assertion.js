const{Builder, By, Key} = require("selenium-webdriver");
require("chromedriver");
const assert = require("assert")
var should = require("chai").should();
async function example(){
    //launching the browser
    let driver = await new Builder().forBrowser("chrome").build();
    let inputString = "Learn Cypress for E2E Testing";
    //navigate to the todo app
    await driver.get("https://lambdatest.github.io/sample-todo-app");

    //locate the input field and add a todo
    //*[@id="sampletodotext"]

    await driver.findElement(By.id("sampletodotext")).sendKeys(inputString, Key.ENTER);

    //assertion of our action using built-in node assertion
    let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){return value});
    assert.strictEqual(todoText,inputString);
    
    
    //assertion using chai
    todoText.should.equal(inputString);

    
    // await driver.findElement(By.id())
    await driver.sleep(10000)
    //close the browser
    await driver.quit();
}

example();