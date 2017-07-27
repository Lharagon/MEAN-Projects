import { TimeZoneAppPage } from './app.po';

describe('time-zone-app App', () => {
  let page: TimeZoneAppPage;

  beforeEach(() => {
    page = new TimeZoneAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
