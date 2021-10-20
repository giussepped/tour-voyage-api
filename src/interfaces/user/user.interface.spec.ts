import { IUser } from './user.interface';

describe('IUser', () => {
  let mockedUser: IUser;

  beforeEach(async () => {
    mockedUser = {
      id: 1,
      firstName: 'mockedUserFirstName',
      lastName: 'mockedUserLastName',
      bio: 'mockedUserBio',
      email: 'mockedUserEmail',
      password: 'mockedUserPassword',
      photo: 'mockedUserPhoto',
      status: 1,
      token: 'mockedUserToken',
      hasInterests: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(mockedUser).toBeDefined();
  });

  it('should have some properties', () => {
    expect(mockedUser).toHaveProperty('id', mockedUser.id);
    expect(mockedUser).toHaveProperty('firstName', mockedUser.firstName);
    expect(mockedUser).toHaveProperty('lastName', mockedUser.lastName);
    expect(mockedUser).toHaveProperty('bio', mockedUser.bio);
    expect(mockedUser).toHaveProperty('email', mockedUser.email);
    expect(mockedUser).toHaveProperty('password', mockedUser.password);
    expect(mockedUser).toHaveProperty('photo', mockedUser.photo);
    expect(mockedUser).toHaveProperty('status', mockedUser.status);
    expect(mockedUser).toHaveProperty('token', mockedUser.token);
    expect(mockedUser).toHaveProperty('hasInterests', mockedUser.hasInterests);
    expect(mockedUser).toHaveProperty('createdAt', mockedUser.createdAt);
    expect(mockedUser).toHaveProperty('updatedAt', mockedUser.updatedAt);
  });
});
