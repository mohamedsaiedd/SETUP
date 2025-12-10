import { Test, TestingModule } from '@nestjs/testing';
import { teachersController } from './teachers.controller';

describe('teachersController', () => {
  let controller: teachersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [teachersController],
    }).compile();

    controller = module.get<teachersController>(teachersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
