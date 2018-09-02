import { SelectShowcaseModule } from './select-showcase.module';

describe('SelectShowcaseModule', () => {
  let selectShowcaseModule: SelectShowcaseModule;

  beforeEach(() => {
    selectShowcaseModule = new SelectShowcaseModule();
  });

  it('should create an instance', () => {
    expect(selectShowcaseModule).toBeTruthy();
  });
});
