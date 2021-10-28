import { IMessage } from './message.interface';

describe('IMessage', () => {
  let mockedMessage: IMessage;

  beforeEach(async () => {
    mockedMessage = {
      id: 1,
      chatId: 1,
      sender: 1,
      description: 'mockedMessageDescription',
      status: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(mockedMessage).toBeDefined();
  });

  it('should have some properties', () => {
    expect(mockedMessage).toHaveProperty('id', mockedMessage.id);
    expect(mockedMessage).toHaveProperty('chatId', mockedMessage.chatId);
    expect(mockedMessage).toHaveProperty('sender', mockedMessage.sender);
    expect(mockedMessage).toHaveProperty(
      'description',
      mockedMessage.description,
    );
    expect(mockedMessage).toHaveProperty('status', mockedMessage.status);
    expect(mockedMessage).toHaveProperty('createdAt', mockedMessage.createdAt);
    expect(mockedMessage).toHaveProperty('updatedAt', mockedMessage.updatedAt);
  });
});
