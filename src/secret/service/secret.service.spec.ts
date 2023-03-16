import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ISecret } from '../models/secret.models';
import { SecretService } from './secret.service';

const oneSecret = {
  _id: 'id #1',
  secretHash: 'secretHash #1',
};

describe('SecretService', () => {
  let service: SecretService;
  let model: Model<ISecret>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SecretService,
        {
          provide: getModelToken('Secret'),
          useValue: {
            findById: jest.fn().mockResolvedValue(oneSecret),
            create: jest.fn().mockResolvedValue(oneSecret),
            delete: jest.fn().mockResolvedValue(oneSecret),
          },
        },
      ],
    }).compile();

    service = module.get<SecretService>(SecretService);
    model = module.get<Model<ISecret>>(getModelToken('Secret'));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(model).toBeDefined();
  });

  it('should get one secret', async () => {
    jest.spyOn(model, 'findById').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(oneSecret),
    } as any);
    const findMockSecret = oneSecret;
    const secret = await service.findById('id #1');
    expect(secret).toEqual(findMockSecret);
  });
});
