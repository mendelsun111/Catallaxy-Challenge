var calcul = function() {
  var bool;
  var hashrate = document.getElementById("hashrate");
  var bitcoinsmined = document.getElementById("bitcoinsmined");
  var rewards = document.getElementById("rewards");
  var difficulty = document.getElementById("difficulty");

  if(){
      
  }
  return bool;
};

var hr_to_btc = function(hr, d, bool) {
  var r = 12.5;
  var ghr = (d * Math.pow(2, 32)) / t;
  var a = (hr / ghr) * r;

  return a;
};

var btc_to_hr = function(a, d) {
  var r = 12.5;
  var ghr = (d * Math.pow(2, 32)) / t;
  var hr = (a / r) * ghr;

  return hr;
};

var btc_to_dollar = function(btc) {
  var dollar_one_btc = 8938.65;
  return dollar_one_btc * btc;
};

var d = 14776367535688;
var t = 84600;
var h = 2367890000;
console.log(hr_to_btc(h, d));
