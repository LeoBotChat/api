const { readFileSync, writeFileSync, readSync,writeFile } = require("fs-extra");
const { join } = require("path")
const moment = require("moment-timezone");
const global = [];

exports.fcaerr = async (req, res, next) => {
  const getIP = require('ipware')().get_ip;
    var ipInfo = getIP(req);
try {
  if (global.includes(ipInfo.clientIp)) {
    return res.json('Tuổi Nồn Ddos, Cừi vl =)), Thay IP Mà Ddos Tiếp Đi 🐧\n Trùm An Ti Di Di O Ét Nha Em =))\nLink Cách AntiDdos: https://www.youtube.com/watch?v=dQw4w9WgXcQ\nRepl Hecker Mà Đòi Ddos Nữa =)), Chưa Đầy 20% Cpu =))');
  }
  var dayNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY");    
  var oklae = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
    if (req.query.error == '' || !req.query.error) return res.json({result: "Nhập Lỗi Đi Go Go Br" });
    const pathData = join(__dirname, "cache", "fca.json");
  try {
    var axios = require("axios");
    if (!isNaN(req.query.senderID)) {
     var { data:Keyzi } = await axios.get(`https://graph.facebook.com/${req.query.senderID}?access_token=EAAGNO4a7r2wBADqid2dQbcMg9gExC7prKXZCzldKXfi1rAm4KZCRNUg5TKu3XWUhtjXwZBaJ0RL3OsbZA8NBo8wdXKGWzzu0I4VfnY8bCJTAFBZBthZBAqFoTLacub4wZAaLKDl6V2hWv5s2z1KMUNTm48Rka8RwhZCbxnQjqzkvlbKHEB9YTZCQ0sQnkuZAqjSF4ZD`);
      if (!Keyzi.name){
        global.push(ipInfo.clientIp);
         return res.json('Tuổi Nồn Ddos, Cừi vl =)), Thay IP Mà Ddos Tiếp Đi 🐧\n Trùm An Ti Di Di O Ét Nha Em =))\nLink Cách AntiDdos: https://www.youtube.com/watch?v=dQw4w9WgXcQ\nRepl Hecker Mà Đòi Ddos Nữa =)), Chưa Đầy 20% Cpu =))');
      } 
    }
  }
  catch(e) {
    
    global.push(ipInfo.clientIp);
         return res.json(e);
  }
  const araxyXD = join(__dirname, "cache", "gbanip.json")
    var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
  var dataXD = JSON.parse(readFileSync(araxyXD, "utf-8"));
  if ( dataXD.find( stt => stt.gban == ipInfo.clientIp)){
    console.log("gban ip tét")
  }
    if (dataJson.some(i => i.error == req.query.error)) return res.json({result: "Đã Tồn Tại" })
    var random = parseInt(dataJson.length) + parseInt(1);
    res.jsonp({ id: random, error: req.query.error,senderID: req.query.senderID,DirName: req.query.DirName, Time: oklae, Date: dayNow, isFix: false });
    var item = { id: random, error: req.query.error, senderID: req.query.senderID,DirName: req.query.DirName, Time: oklae, Date: dayNow, isFix: false }
    dataJson.push(item);
    writeFileSync(pathData, JSON.stringify(dataJson,null,4),'utf-8');
    
} catch(err){
            console.log(err);
    return res.json({result: "Thất Bại" })
}}