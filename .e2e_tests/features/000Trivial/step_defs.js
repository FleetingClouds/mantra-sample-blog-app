module.exports = function() {

  this.Given(/^I have opened the main page : "([^"]*)"$/, function (arg1) {
    browser.url(arg1);
  });

  this.When(/^I click the "([^"]*)" link,$/, function (arg1) {
    browser.waitForExist('a=' + arg1);
  });

  this.Then(/^I still see the page title "([^"]*)"\.$/, function (arg1) {
    expect(browser.getText('h1')).toEqual(arg1);
  });


}

