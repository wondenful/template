document.addEventListener("DOMContentLoaded", function () {
  flag = localStorage.getItem("flag");
  flag--;
  changeBg();
});
function changeBg() {
  flag++;
  localStorage.setItem("flag", flag);
  var mainColor = document.getElementById("hero").style;
  //   var mainColor2 = document.getElementById("navbar").style;
  // var navColor = document.getElementById("navbar");
  var txt = document.getElementById("txt-toggle");
  if (flag == 0) {
    var mainColor = document.getElementById("hero").style;
    // var mainColor2 = document.getElementById("navbar").style;
    mainColor.backgroundImage = "none"; // 移除背景图片
    // mainColor2.backgroundImage = "none";
    mainColor.background = "linear-gradient(0deg, #3186c2 0%, #6545f3 100%)"; // 设置背景渐变样式
    // mainColor2.background = "linear-gradient(0deg, #3186c2 0%, #6545f3 100%)";
    txt.innerHTML = "天蓝";
  } else if (flag % 2) {
    mainColor.background = "#101129";
    // mainColor2.background = "#101129";
    txt.innerHTML = "深蓝";
  } else {
    mainColor.backgroundImage = "url(./images/bg.png)";
    // mainColor2.backgroundImage = "url(./images/bg.png)";
    // mainColor.background =
    // "linear-gradient(0deg, #ffffff 0%, #1b2838 100%)";
    txt.innerHTML = "星空";
  }
}
function returnBg() {
  flag = -1;
  changeBg();
}
function leave() {
  flag = localStorage.getItem("flag");
  var mainColor = document.getElementById("hero").style;
  var txt = document.getElementById("txt-toggle");
  if (flag == 0) {
    var mainColor = document.getElementById("hero").style;
    mainColor.backgroundImage = "none"; // 移除背景图片
    mainColor.background = "linear-gradient(0deg, #3186c2 0%, #6545f3 100%)"; // 设置背景渐变样式
    txt.innerHTML = "天蓝";
  } else if (flag % 2) {
    mainColor.backgroundImage = "none"; // 移除背景图片
    mainColor.background = "#101129";
    txt.innerHTML = "深蓝";
  } else {
    mainColor.backgroundImage = "url(./images/bg.png)";
    txt.innerHTML = "星空";
  }
}
