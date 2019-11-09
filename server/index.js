const Koa = require('koa');
const app = new Koa();
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const MongoClient = require('mongodb').MongoClient;
const router = new Router();

app.use(bodyParser());
app.use(cors({
  origin: '*',
  credentials: true
}));

const getTable = async (connectionName) => {
  const client = await MongoClient.connect(`mongodb://ccimm.top:27017`, {
    useNewUrlParser : true,
    useUnifiedTopology: true,
    user: 'admin',
    password: 'admin',
  });
  const db = client.db('shop');
  return {
    db: db.collection(connectionName),
    client : client,
  };
};

router.get('/banner', async (ctx, next) => {
  const bannerDB = await getTable('banner');
  let bannerArr = [];
  (await bannerDB.db.find({}).toArray()).map((item) => {
    bannerArr.push(item.url);
  });
  ctx.body = bannerArr;
  bannerDB.client.close();
  await next();
});

router.get('/baby', async (ctx, next) => {
  const babyDB = await getTable('baby');
  let babyArr = [];
  (await babyDB.db.find({}).toArray()).map((item) => {
    const { _id, ...foo } = item;
    babyArr.push(foo);
  });
  ctx.body = babyArr;
  babyDB.client.close();
  await next();
});

router.get('/shape', async(ctx, next) => {
  const shapeDB = await getTable('shape');
  let shapeArr = [];
  (await shapeDB.db.find({}).toArray()).map((item) => {
    const { _id, ...foo } = item;
    shapeArr.push(foo);
  });
  ctx.body = shapeArr;
  shapeDB.client.close();
  await next();
});

router.get('/tabTitle', async(ctx, next) => {
  const tabTitleDB = await getTable('tabTitle');
  let tabTitleArr = [];
  (await tabTitleDB.db.find({}).toArray()).map((item) => {
    const { _id, ...foo } = item;
    tabTitleArr.push(foo);
  });
  ctx.body = tabTitleArr;
  tabTitleDB.client.close();
  await next();
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(8000);
