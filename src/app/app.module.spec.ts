import {AppModule} from './app.module';

describe('The Application Module', () => {

  it('can be instantiated', () => {
    expect(new AppModule()).toBeTruthy();
  });
});
