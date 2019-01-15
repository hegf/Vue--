const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const request = require("request");
const axios = require('axios');
// const JSON = require('circular-json');

let app = express();

// 跨域解决
app.use(cors());

// post请求数据格式化
app.use(bodyParser.urlencoded({extended:false}));

// 静态资源目录
app.use(express.static(path.join(__dirname,'./src/')));


// app.get("/",(req,res)=>{
//     res.append("Access-Control-Allow-Origin","*");
//     request.get("http://s.h5.jumei.com/yiqituan/tab_list?tab=coutuan_home&page=3&per_page=200%22",(err,response,body)=>{
//         console.log(body);
//         res.send(body);
//     })
// })
let paths = require('./src/static/data.json');
app.get("/data",(req,res)=>{
        res.send(paths);
    });

let slider = require('./src/static/slidel_nav.json')
app.get("/slider",(req,res)=>{
        res.send(slider);
    });

// 分页

app.get("/tuan/:page",(req,res)=>{
  // console.log(req.params)
   res.append("Access-Control-Allow-Origin","*");
   request.get(`http://s.h5.jumei.com/yiqituan/tab_list?tab=coutuan_home&page=${req.params}`,(err,response,body)=>{ 
         res.send(body)
   })
})


// 详情页
app.get("/details/:id/:type",(req,res)=>{
    // let {id,type} = req.params;
    console.log(req.params)
    res.append("Access-Control-Allow-Origin","*");
    request.get(`http://h5.jumei.com/product/ajaxDynamicDetail?item_id=${req.params.id}&type=${req.params.type}`,(err,response,body)=>{
        res.send(body);
    })
})

// http://h5.jumei.com/product/ajaxDynamicDetail?item_id=ht190110p2197962t1&type=global_deal
// 购物车
app.get("/cart/:id/:type",(req,res)=>{
    // let {id,type} = req.params;
    console.log(req.params)
    res.append("Access-Control-Allow-Origin","*");
    request.get(`http://h5.jumei.com/product/ajaxDynamicDetail?item_id=${req.params.id}&type=${req.params.type}`,(err,response,body)=>{
        res.send(body);
    })
})



app.listen(666,()=>{
    console.log('server start is point'+666)
})