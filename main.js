/**
 * Created by work on 17/5/15.
 */
const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  ctx.body = 'Hello Koa aadad';
});

app.listen(3000);
console.log('app started at localhost:3000...');