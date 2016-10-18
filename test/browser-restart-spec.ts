import {browser} from 'protractor';

describe('Test', () => {
  afterEach( () => {
    browser.restart();
  });

  it('Go to angular', () => {
    browser.get('https://angularjs.org/');
  });

  it('Go to angular-tutorial', () => {
    browser.get('https://docs.angularjs.org/tutorial');
  });
});
