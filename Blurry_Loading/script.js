//初期値0%
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
//ロード進行状況
let load = 0;
//30ミリ秒ごとにblurring関数を呼び出す
let int = setInterval(blurring, 30);

//30ミリ秒ごとに数値を増していき、100パーセントになったらインターバルを取り消す
function blurring() {
  load++;

  if(load > 99){
    clearInterval(int)
  }
}
//表示数値変更
loadText.innerText = `${load}%`;

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

//進捗に合わせて透明にしていく
loadText.style.opacity = scale(load,0,100,1,0);
//ぼかし効果
bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

