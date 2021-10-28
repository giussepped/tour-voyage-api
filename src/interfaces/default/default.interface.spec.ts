import { IDefault } from './default.interface';

describe('IDefault', () => {
  let mockedDefault: IDefault;

  beforeEach(async () => {
    mockedDefault = {
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(mockedDefault).toBeDefined();
  });

  it('should have some properties', () => {
    expect(mockedDefault).toHaveProperty('id', mockedDefault.id);
    expect(mockedDefault).toHaveProperty('createdAt', mockedDefault.createdAt);
    expect(mockedDefault).toHaveProperty('updatedAt', mockedDefault.updatedAt);
  });
});
