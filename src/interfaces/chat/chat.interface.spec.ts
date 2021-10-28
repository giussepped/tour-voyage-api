import { IChat } from './chat.interface';

describe('IChat', () => {
  let mockedChat: IChat;

  beforeEach(async () => {
    mockedChat = {
      id: 1,
      userId: 1,
      guideId: 1,
      status: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(mockedChat).toBeDefined();
  });

  it('should have some properties', () => {
    expect(mockedChat).toHaveProperty('id', mockedChat.id);
    expect(mockedChat).toHaveProperty('userId', mockedChat.userId);
    expect(mockedChat).toHaveProperty('guideId', mockedChat.guideId);
    expect(mockedChat).toHaveProperty('status', mockedChat.status);
    expect(mockedChat).toHaveProperty('createdAt', mockedChat.createdAt);
    expect(mockedChat).toHaveProperty('updatedAt', mockedChat.updatedAt);
  });
});
