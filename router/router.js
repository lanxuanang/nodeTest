const a = require('../model/package')
const treeDiagramdata = require('../model/treeDiagram')
const topCountrysdata = require('../model/topCountrys')
const managerLevel = require('../model/managerLevel')

const main = ctx => {
    console.log(main)
    ctx.response.body = {code: 200, data: a}
}
const index = ctx => {

    console.log('indexindex')
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    ctx.response.type = 'json';
    ctx.response.body = {code: 200, data: a}
}
const treeDiagram = ctx => {
    console.log('treeDiagram')
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    ctx.response.type = 'json';
    ctx.response.body = {code: 200, data: treeDiagramdata}
}
const topCountrys = ctx => {
    console.log('treeDiagram')
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    ctx.response.type = 'json';
    ctx.response.body = {code: 200, data: topCountrysdata}
}
const managerLevels = ctx => {
    console.log('treeDiagram')
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    ctx.response.type = 'json';
    ctx.response.body = {code: 200, data: managerLevel}
}
module.exports = {
    main: main,
    index: index,
    treeDiagram: treeDiagram,
    topCountrys: topCountrys,
    managerLevel: managerLevels
}