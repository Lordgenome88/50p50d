//コンテンツ全てを取得
const boxes = document.querySelectorAll('.box')
//スクロールしたらcheckBoxes発動
window.addEventListener('scroll',checkBoxes)

checkBoxes()

function checkBoxes(){
  //ボックスを見せる基準となる高さを決める　ビューを5分割した4つ目
  const triggerBottom = window.innerHeight / 5 * 4;

  boxes.forEach(box => {
    //ボックスの上端を取得
    const boxTop = box.getBoundingClientRect().top
    if(boxTop < triggerBottom){
      box.classList.add('show')
    } else{
      box.classList.remove('show')
    }
  })
}
