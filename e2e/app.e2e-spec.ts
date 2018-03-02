import { NgxSakakejaPage } from './app.po';

describe('ngx-sakakeja App', () => {
  let page: NgxSakakejaPage;

  beforeEach(() => {
    page = new NgxSakakejaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
