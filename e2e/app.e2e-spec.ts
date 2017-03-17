import { LearnNgrxPage } from './app.po';

describe('learn-ngrx App', () => {
  let page: LearnNgrxPage;

  beforeEach(() => {
    page = new LearnNgrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
