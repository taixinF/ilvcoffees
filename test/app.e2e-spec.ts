import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      //这里传入的appmodule 意味着我们导入了所有用到的东西
      imports: [AppModule],
    }).compile();
    //区别不一样的实例化了一个运行环境
    app = moduleFixture.createNestApplication();
    //最后手动调用初始化我们的应用程序
    await app.init();
  });

  it('/ (GET)', () => {
    //Supertest是一个提供高级抽象的npm包，用于测试HTTP应用程序。
    return request(app.getHttpServer())
      .get('/')
      .set('Authorization', process.env.API_KEY)
      .expect(200)
      .expect('Hello Nest!!');
  });
  // e2e 每次测试完后一定要记住关闭
  afterAll(async () => {
    await app.close();
  });
});
