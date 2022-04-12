'use strict';
// 프로그램 올리자마자 실행
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() +1;
const date = today.getDate();
const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;

// 버튼 누를 때 시간
function dateBring() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() +1;
    const date = today.getDate();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const second = today.getSeconds();
    const yymmdd2 = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
    
    document.getElementById("startDate").value = yymmdd;
    document.getElementById("endDate").value = yymmdd2;
}

function compareDateCheck1() {
    let start = document.getElementById("startDate").value;
    let end = document.getElementById("endDate").value;

    // 날짜타입으로 바꿔주기
    const startDate = new Date(start);
    const endDate = new Date(end);
    let res;

    if(isSameDay(startDate, endDate)) {
        res = "처음에 입력된 날짜와 같습니다.";
    }
    else {
        res = "처음에 입력된 날짜와 다릅니다."
    }
    document.getElementById("demo").innerHTML = res;
}

// function isSameDay(startDate, endDate) { // === 타입도 비교
//     return startDate.getFullYear() === endDate.getFullYear() && 
//         startDate.getMonth() === endDate.getMonth() &&
//         startDate.getDate() === endDate.getDate();
// }

// startDate, endDate는 매개변수
// const isSameDay = function(startDate, endDate) {
//     return startDate.getFullYear() === endDate.getFullYear() &&
//         startDate.getMonth() === endDate.getMonth() &&
//         startDate.getDate() === endDate.getDate();
// }

const isSameDay = (startDate, endDate) => {
    return startDate.getFullYear() === endDate.getFullYear() &&
        startDate.getMonth() === endDate.getMonth() &&
        startDate.getDate() === endDate.getDate();
}

// 날짜 차이 비교하기(endDate - startDate)
function compareDateCheck2() {
    let start = document.getElementById("startDate").value;
    let end = document.getElementById("endDate").value;

    const startDate = new Date(start);
    const endDate = new Date(end);

    let res = endDate.getTime() - startDate.getTime();
    res = res / (24 * 60 * 60 * 1000);

    document.getElementById("demo").innerHTML = res;
}