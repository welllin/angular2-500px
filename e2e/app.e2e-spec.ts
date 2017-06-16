import { PhotoBombPage } from './app.po';

describe('photo-bomb App', () => {
  let page: PhotoBombPage;

  beforeEach(() => {
    page = new PhotoBombPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
