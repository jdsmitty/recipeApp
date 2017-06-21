import { ClassProjectPage } from './app.po';

describe('class-project App', () => {
  let page: ClassProjectPage;

  beforeEach(() => {
    page = new ClassProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
