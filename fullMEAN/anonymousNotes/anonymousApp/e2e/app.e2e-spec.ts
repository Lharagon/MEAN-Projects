import { AnonymousAppPage } from './app.po';

describe('anonymous-app App', () => {
  let page: AnonymousAppPage;

  beforeEach(() => {
    page = new AnonymousAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
