let btc = document.querySelector("#bitcoin")
let eth = document.querySelector("#ethereum")
let doge = document.querySelector("#dogecoin")

var settings ={
    "async":true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr","method":"GET",
    "headers":{}
}
$.ajax(settings).done(function(response){
    btc.innerText = response.bitcoin.inr;
    eth.innerHTML = response.ethereum.inr;
    doge.innerHTML = response.dogecoin.inr;
})