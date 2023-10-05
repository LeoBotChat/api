const { errorHandler } = require("../utils");

exports.home = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json(
    "ờm tdunguwu deptrai số 1, hết rồi đéo có gì cho bạn xem đâu"
    );
};