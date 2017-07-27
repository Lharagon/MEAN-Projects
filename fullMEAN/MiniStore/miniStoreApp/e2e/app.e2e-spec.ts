import { MiniStoreAppPage } from './app.po';

describe('mini-store-app App', () => {
  let page: MiniStoreAppPage;

  beforeEach(() => {
    page = new MiniStoreAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
