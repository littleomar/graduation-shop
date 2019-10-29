const Koa = require('koa');
const app = new Koa();
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const router = new Router();


app.use(bodyParser());
app.use(cors({
  origin: '*',
  credentials: true
}));

router.get('/banner', async (ctx, next) => {
   ctx.body = [
     'http://sp0.ccimm.top/banner1.png',
     'http://sp0.ccimm.top/banner2.png'
   ];
   await next();
});

router.get('/baby', async (ctx, next) => {
  ctx.body = [
    {
      title: '专业的指导老师',
      content: '每一名指导老师都经过专业培训，德智体美劳全面教育。 每一名指导老师都有着懂宝宝，关心宝宝的心。 让每一位孩子都可以得到最细致，最温暖，最贴心的爱护。 保证让每一位宝宝都可以健健康康，快快乐乐的成长。',
      headImg: 'http://sp0.ccimm.top/zd1.png',
      decImg: 'http://sp0.ccimm.top/1.png',
    },
    {
      title: '快乐轻松的学习',
      content: '根据Play Value为孩子精心设计的教具，激发孩子自主探索和学习的兴趣。我们将通过与父母玩耍的方式，让孩子自己主动的探索学习，激发孩子的自信。通过舞蹈乐器的演奏，让孩子在音乐中加强对身体的控制和对动作的表达。',
      headImg: 'http://sp0.ccimm.top/xx1.png',
      decImg: 'http://sp0.ccimm.top/3.png',
    },
    {
      title: ' 温馨宽阔的空间',
      content: '配合金宝贝课程特别研发，我们为孩子打造森林、湖泊、火山、海洋等不同主题的教室设计，从孩子的视角出发，为孩子开启无限想象的空间。多元宽敞的空间，和经验丰富的指导师，让父母与孩子共享高质量的亲子时光。',
      headImg: 'http://sp0.ccimm.top/hj1.png',
      decImg: 'http://sp0.ccimm.top/-2.png',
    },
  ];
  await next();
});

router.get('/shape', async(ctx, next) => {
    ctx.body = [
      {
        img: 'http://sp0.ccimm.top/003.png',
        title: '从0岁到到三岁',
        content: '课程提供适龄游戏，帮助家长发现宝宝的兴趣，让宝宝在过程中不断探索自己的能力。',
      },
      {
        img: 'http://sp0.ccimm.top/005.png',
        title: '从6个月到五岁',
        content: '20种音乐风格、乐器的使用，让家长掌握与孩子共同探索音乐的方式。',
      },
      {
        img: 'http://sp0.ccimm.top/006.png',
        title: '从18个月到5岁',
        content: '别出心裁的艺术工具，丰富孩子对自我和环境的表达和探索提高孩子的表达力、专注力、审美能力。',
      },
    ];
    await next();
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(8000);
