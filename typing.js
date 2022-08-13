window.onload=function(){
  let Q = ["apple","banana","melon","mango","orange"];//問題文
  for (i = Q.length; 1 < i; i--) {
    k = Math.floor(Math.random() * i);
    [Q[k], Q[i - 1]] = [Q[i - 1], Q[k]];
  }

  let Q_No=0;


  let Q_i=0;
  let Q_l=Q[Q_No].length;

window.addEventListener("keydown", push_Keydown);

function push_Keydown(event){

	let keyCode = event.key;
	if (Q_l == Q_l-Q_i){//start
    document.getElementById("number").innerHTML=Q_No+1 +"/"+Q.length+"問目  "
		document.getElementById("start").innerHTML = Q[Q_No] ; //問題を書き出す

		}


	if (Q[Q_No].charAt(Q_i) === keyCode) { //押したキーが合っていたら

    Q_i++; //判定する文章に１足す

		document.getElementById("answer").innerHTML = Q[Q_No].substring(0, Q_i); //問題を書き出す

		if (Q_l-Q_i === 0){ //全部正解したら

      new Audio('Quiz-Correct_Answer02-1.mp3').play();
      document.getElementById("feedback").innerHTML="正解！"
			//Q_No = Math.floor( Math.random() * Q.length);//問題をランダムで出題する
      setTimeout(function(){
        document.getElementById("answer").innerHTML="";
        document.getElementById("feedback").innerHTML="";

        Q_No++;
  			Q_i = 0;//回答初期値・現在どこまで合っているか判定している文字番号
  			Q_l = Q[Q_No].length;//計算用の文字の長さ

        document.getElementById("number").innerHTML=Q_No+1 +"/"+Q.length+"問目  "
  			document.getElementById("start").innerHTML = Q[Q_No].substring(Q_i, Q_l); //新たな問題を書き出す
      },1500);

		}
	}else if(keyCode!=" "){
    new Audio('Quiz-Wrong_Buzzer02-1.mp3').play();
  }

}


}
