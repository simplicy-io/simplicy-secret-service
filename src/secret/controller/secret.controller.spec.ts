import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ISecret } from '../models/secret.models';
import { SecretController } from './secret.controller';
import { SecretService } from '../service/secret.service';

const oneSecret = {
  _id: 'id #1',
  secretHash: 'secretHash #1',
};

describe('SecretController', () => {
  let controller: SecretController;
  let service: SecretService;
  let model: Model<ISecret>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecretController],
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

    controller = module.get<SecretController>(SecretController);
    service = module.get<SecretService>(SecretService);
    model = module.get<Model<ISecret>>(getModelToken('Secret'));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
    expect(model).toBeDefined();
  });
  describe('create()', () => {
    it('should create a secret', () => {
      // expect(controller.create(createUserDto)).resolves.toEqual({
      //   id: '1',
      //   ...createUserDto,
      // });
      // expect(usersService.create).toHaveBeenCalled();
      // expect(usersService.create).toHaveBeenCalledWith(createUserDto);
    });
  });
});
