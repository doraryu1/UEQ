callAPI = async () => {
    res = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=35.6518205&lon=139.5446124&lang=ja&units=metric&appid=f9794935a670f65e810fe0253ce78aa8')
    .then(data => {return data.json()})
    console.log(res)
    document.getElementById("ctempid").textContent = Math.round(res.current.temp) + `°C`;
    document.getElementById("cweather").textContent = res.current.weather[0].description;
    //var cweatherword = document.getElementById("cweather").textContent;
    //if(res.current.weather.Array(1).main==Cloud) cweatherword="曇り";
    document.getElementById("cmaxtem").textContent = Math.round(res.daily[0].temp.max) + `°C` + `/`;
    document.getElementById("cmintem").textContent = Math.round(res.daily[0].temp.min) + `°C`;
    document.getElementById("humidity").textContent = res.current.humidity　+ `%`;
    var cicon = document.getElementById("cicon");
    if(res.current.weather[0].main == "Sunny") cicon.className = "wi wi-day-sunn";
    if(res.current.weather[0].main == "Rain") cicon.className = "wi wi-rain";
    if(res.current.weather[0].main == "Clouds") cicon.className = "wi wi-cloud";
}
callAPI()

var day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
//var week = ["week0", "week1", "week2", "week3", "week4", "week5", "week6"];
var date = new Date();
console.log(day[date.getDay()]);

//get today's date
//document.getElementById("week").textContent = day[date.getDay()];

for(let i = 1; i < 7; i++){
    console.log(day[(date.getDay() + i)%7]);
    //get whole week date   
    document.getElementById("week"+i).textContent = day[(date.getDay() + i)%7]; 
}

var cicon = document.getElementById("cicon");
if(res.current.weather[0].main == "Sunny") cicon.className = "wi wi-day-sunn";
if(res.current.weather[0].main == "Rain") cicon.className = "wi wi-rain";
if(res.current.weather[0].main == "Clouds") cicon.className = "wi wi-cloud";

//document.getElementById("ctempid").textContent = API.current.temp;
/*
console.log("hogehoge");
const link = document.querySelector('a');
link.textContent = 'Mozilla Developer Network';
link.href = 'https://developer.mozilla.org';
*/
/*
const elm = $("a");
const text = elm.text();   //querySelectorとかをかかなくて良い。$がマーク
console.log(text);

elm.text("Mozilla Developer Network");
elm.attr("href", "https://developer.mozilla.org");

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);
const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);
*/
/*
//現在の天気を取得する場所の名前
let targetCityName = "Niigata";
    let appId = "f9794935a670f65e810fe0253ce78aa8";

    const requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=35.6518205&lon=139.5446124&appid=f9794935a670f65e810fe0253ce78aa8"
    //"https://api.openweathermap.org/data/2.5/weather?APPID=" + appId + "&lang=ja&units=metric&q=" + targetCityName + ",jp;";

    //Ajax通信用のオブジェクトを作成
    let xhr =new XMLHttpRequest();

    //通信方式とURLを設定
    xhr.open("GET",requestUrl);

    //通信を実行する
    xhr.send();

    //通信ステータスが変わったら実行される関数
    xhr.onreadystatechange = function(){
        //通信が完了
        if(xhr.readyState == 4){
            ShowTodaysWeather(xhr.responseText);
        }
    }


      今日の天気を表示する
     
    function ShowTodaysWeather(response){

        let obj = JSON.parse(response);

        //let weather = obj.weather[0].description;
        let city = obj.name;
        //let temp = obj.daily.temp;

        console.log(obj);
        //console.log("現在の" + city + "の天気は" + weather);
        //console.log("気温は" + temp + "度です。");
        
    }
*/