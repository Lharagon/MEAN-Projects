import { RetroGenPage } from './app.po';

describe('retro-gen App', () => {
  let page: RetroGenPage;

  beforeEach(() => {
    page = new RetroGenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
