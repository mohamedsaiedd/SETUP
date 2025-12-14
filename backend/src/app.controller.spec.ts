import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return HTML with API endpoints', () => {
      const result = appController.getEndpoints();
      expect(result).toContain('API Endpoints');
      expect(result).toContain('/Users');
      expect(result).toContain('/teachers');
    });
  });
});
