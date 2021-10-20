import { IGuide } from './guide.interface';

describe('IGuide', () => {
  let mockedGuide: IGuide;

  beforeEach(async () => {
    mockedGuide = {
      id: 1,
      firstName: 'mockedGuideFirstName',
      lastName: 'mockedGuideLastName',
      bio: 'mockedGuideBio',
      email: 'mockedGuideEmail',
      password: 'mockedGuidePassword',
      photo: 'mockedGuidePhoto',
      status: 1,
      token: 'mockedGuideToken',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(mockedGuide).toBeDefined();
  });

  it('should have some properties', () => {
    expect(mockedGuide).toHaveProperty('id', mockedGuide.id);
    expect(mockedGuide).toHaveProperty('firstName', mockedGuide.firstName);
    expect(mockedGuide).toHaveProperty('lastName', mockedGuide.lastName);
    expect(mockedGuide).toHaveProperty('bio', mockedGuide.bio);
    expect(mockedGuide).toHaveProperty('email', mockedGuide.email);
    expect(mockedGuide).toHaveProperty('password', mockedGuide.password);
    expect(mockedGuide).toHaveProperty('photo', mockedGuide.photo);
    expect(mockedGuide).toHaveProperty('status', mockedGuide.status);
    expect(mockedGuide).toHaveProperty('token', mockedGuide.token);
    expect(mockedGuide).toHaveProperty('createdAt', mockedGuide.createdAt);
    expect(mockedGuide).toHaveProperty('updatedAt', mockedGuide.updatedAt);
  });
});
