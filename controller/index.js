const Koa = require('koa');
const app = new Koa();
const router = require('koa-route')
const routersec = require('../router/router')
 var a = 1
console.log(a++)
// const main = ctx => {
//     ctx.response.body = a.toString();
// };
app.use(router.get('/', routersec.main));
app.use(router.get('/index', routersec.index));
app.use(router.get('/treeDiagram', routersec.treeDiagram));
app.use(router.get('/topCountrys', routersec.topCountrys));
app.use(router.get('/getManagerLevel', routersec.managerLevel));
app.listen(4000);