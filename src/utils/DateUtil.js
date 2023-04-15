/*eslint-disable */

/**
 * 날짜 출력하는 함수
 * format: 포매팅 기호 (/,-,. 같은거)
 * addMonth: 월 더하기
 * addDay: 일 더하기
 * addYear: 년 더하기
*/
function today(format='',addMonth=0,addDay=0,addYear=0){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();

    if(addMonth!==0){date.setMonth((date.getMonth()+addMonth))};
    if(addDay!==0){date.setDate((date.getDate()+addDay))};
    if(year!==0){date.setFullYear((date.getFullYear()+addYear))};

    month = ("0" + (1 + date.getMonth())).slice(-2);
    day = ("0" + date.getDate()).slice(-2);
    year = date.getFullYear();
    return year+format+month+format+day;
}

/**
 * unique 숫자 구하기...
*/
function GetUniqueNum(format='',addMonth=0,addDay=0,addYear=0){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let milliseconds = date.getMilliseconds(); // 밀리초

    if(addMonth!==0){date.setMonth((date.getMonth()+addMonth))};
    if(addDay!==0){date.setDate((date.getDate()+addDay))};
    if(year!==0){date.setFullYear((date.getFullYear()+addYear))};

    month = ("0" + (1 + date.getMonth())).slice(-2);
    day = ("0" + date.getDate()).slice(-2);
    year = date.getFullYear();
    return year+format+month+format+day+hour+min+milliseconds;
}

/**
 * 오늘 날짜 + 시간 출력하는 함수
 * dateFormat: 날짜 포매팅 기호 (/,-,. 같은거)
 * timeFormat: 시간 포매팅 기호 (/,-,. 같은거)
*/
function GetCurDayTime(dateFormat,timeFormat) {
    return TimeString(dateFormat,timeFormat,new Date());
}

function TimeString (dateFormat='/',timeFormat=':',date) {
        
    let year = date.getFullYear();
    let month = date.getMonth() + 1; // 1월=0,12월=11이므로 1 더함
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();

    if (("" + month).length === 1) {
        month = "0" + month;
    }
    if (("" + day).length === 1) {
        day = "0" + day;
    }
    if (("" + hour).length === 1) {
        hour = "0" + hour;
    }
    if (("" + min).length === 1) {
        min = "0" + min;
    }

    return ("" + year+ dateFormat + month+ dateFormat + day+ " " + hour+ timeFormat + min)
}

export {today, GetCurDayTime, TimeString, GetUniqueNum } 