const typing = document.querySelector(".lg-text");
//커서 깜빡임 효과
function blink() {
    typing.classList.toggle("active"); //toggle "active"를 넣었다 뻈다 하는 역활을 한다
}
setInterval(blink, 500);


//문자 한글자씩 배열 만들기
function genRandomStringArr() {
    const stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript"];
    const randomString = stringArr[Math.floor(Math.random() * stringArr.length)];
    const randomStringArr = randomString.split("");
    
    return randomStringArr;
}
//타이핑 효과 리셋
function resetDynamic() {
    typing.textContent = "";
    dynamic(genRandomStringArr());
}
//타이핑 효과
function dynamic(randomArr) {
    if(randomArr.length > 0) {
        typing.textContent += randomArr.shift();
        setTimeout(function(){
        dynamic(randomArr)
        },100);
    }else {
        setTimeout(resetDynamic, 3000);
    }
}
dynamic(genRandomStringArr());