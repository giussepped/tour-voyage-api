import { IRequest } from './request.interface';

describe('IRequest', () => {
  let mockedRequest: IRequest;

  beforeEach(async () => {
    mockedRequest = {
      id: 1,
      userId: 1,
      title: 'mockedRequestTitle',
      description: 'mockedRequestDescription',
      from: new Date(),
      to: new Date(),
      cityId: 1,
      isGrouped: false,
      budget: 1,
      status: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(mockedRequest).toBeDefined();
  });

  it('should have some properties', () => {
    expect(mockedRequest).toHaveProperty('id', mockedRequest.id);
    expect(mockedRequest).toHaveProperty('userId', mockedRequest.userId);
    expect(mockedRequest).toHaveProperty('title', mockedRequest.title);
    expect(mockedRequest).toHaveProperty(
      'description',
      mockedRequest.description,
    );
    expect(mockedRequest).toHaveProperty('from', mockedRequest.from);
    expect(mockedRequest).toHaveProperty('to', mockedRequest.to);
    expect(mockedRequest).toHaveProperty('cityId', mockedRequest.cityId);
    expect(mockedRequest).toHaveProperty('isGrouped', mockedRequest.isGrouped);
    expect(mockedRequest).toHaveProperty('budget', mockedRequest.budget);
    expect(mockedRequest).toHaveProperty('status', mockedRequest.status);
    expect(mockedRequest).toHaveProperty('createdAt', mockedRequest.createdAt);
    expect(mockedRequest).toHaveProperty('updatedAt', mockedRequest.updatedAt);
  });
});
