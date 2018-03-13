import { RhEmpleadosFrontendPage } from './app.po';

describe('rh-empleados-frontend App', () => {
  let page: RhEmpleadosFrontendPage;

  beforeEach(() => {
    page = new RhEmpleadosFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
