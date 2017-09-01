import { WorkoutAppPage } from './app.po';

describe('workout-app App', () => {
  let page: WorkoutAppPage;

  beforeEach(() => {
    page = new WorkoutAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
