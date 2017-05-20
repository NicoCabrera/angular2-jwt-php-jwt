import { Angular2JwtPhpJwtPage } from './app.po';

describe('angular2-jwt-php-jwt App', () => {
  let page: Angular2JwtPhpJwtPage;

  beforeEach(() => {
    page = new Angular2JwtPhpJwtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
