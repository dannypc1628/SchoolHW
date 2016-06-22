
var date = new Date();

var user="";

function go(){
 
 
  var u = set.username.value;
  user += "<div>"+u+"</div><br><br>";
  localStorage.userlist += user;

}


function createCalendar()
{
  date.setFullYear(loginForm.year.value);
  date.setMonth(loginForm.month.value-1);
  setDoctor();
  var strCalendar = "";

  
  // 每月日數陣列
  var monthDays = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
  
  // 閏年判斷
  mYear = date.getFullYear();
  if ( ( (mYear % 4 == 0) && (mYear % 100 != 0) ) || (mYear % 400 == 0) ) monthDays[1] = 29;
  
  // 設定日期為該月第一天
  date.setDate(1);
  
  // 該月第一天的星期
  var day = date.getDay();
  
  // 計算秀出時需要的格數
  var total = monthDays[date.getMonth()] + day;
  var totalCells = total + ( total%7 ? 7 - total%7 : 0  ); 


  strCalendar ='<TABLE cellSpacing="1" cellPadding="0" align="center" width="400" bgcolor="white">';
  strCalendar += '<TR>';
  strCalendar += "<TH>時間</TH>";
  strCalendar += "<TH>日</TH>";
  strCalendar += '<TH>一</TH>';
  strCalendar += '<TH>二</TH>';
  strCalendar += '<TH>三</TH>';
  strCalendar += '<TH>四</TH>';
  strCalendar += '<TH>五</TH>';
  strCalendar += '<TH>六</TH>';
  strCalendar += '</TR>';


  for (i=0;i<totalCells;i++)
  {
	if ( i%7 == 0 ){
		strCalendar+="<TR><TD><br>";
    strCalendar += "<div class='divday' type='hidden' value='早' style='border:1px solid #DDDDDD;height:60px;' ondrop='drop(event)' ondragover='allowDrop(event)'>早上</div>";
    strCalendar += "<div class='divday' type='hidden' value='午' style='border:1px solid #DDDDDD;height:60px;' ondrop='drop(event)' ondragover='allowDrop(event)'>下午</div>";
    strCalendar += "<div class='divday' type='hidden' value='晚' style='border:1px solid #DDDDDD;height:60px;' ondrop='drop(event)' ondragover='allowDrop(event)'>晚上</div>";
    strCalendar += "</TD>";
}

	if ( i >= day && i < total )
	{
		if ( i >= day )
		{
			var whichDate = date.getFullYear() + "/" + (date.getMonth()+1) + "/" + ((i-day)+1);
			strCalendar += "<TD id='day"+day+"type='hidden'>"+((i-day)+1);
			strCalendar += "<input id='Identity' type='hidden' value='" + whichDate + "'>";
      strCalendar += "<div class='divday' type='hidden' value='早' style='border:1px solid #DDDDDD;height:60px;' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
      strCalendar += "<div class='divday' type='hidden' value='午' style='border:1px solid #DDDDDD;height:60px;' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
      strCalendar += "<div class='divday' type='hidden' value='晚' style='border:1px solid #DDDDDD;height:60px;' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
		}
	}
	else
	{
		strCalendar += "<TD>&nbsp;";
	}


	strCalendar += "</TD>";


	if ( i%7 == 6 )
		strCalendar += "</TR>";
   }
	
   document.getElementById("apple").innerHTML = strCalendar;
}


function setDoctor(){
  var time = "";
  time = "<p align='left'>-------1---------2---------3---------4---------5-------</p>";
  for(var i = 0 ;i<5 ;i++){
      time += "<img id='Ahri"+i+"' src='img/Ahri.png' value='圖片' align='left' draggable='true' ondragstart='drag(event)' style='position:relative;height:60px; z-index:"+i+";'></img>" ;  

  }
  time +="<br><br><br><br>";
    for(var i = 0 ;i<5 ;i++){
      time += "<img id='Sona"+i+"' src='img/Sona.png' value='圖片' align='left' draggable='true' ondragstart='drag(event)' style='position:relative;height:60px; z-index:"+i+";'></img>" ;  

  }
  time +="<br><br><br><br>";
    for(var i = 0 ;i<5 ;i++){
      time += "<img id='MissFortune"+i+"' src='img/MissFortune.png' value='圖片' align='left' draggable='true' ondragstart='drag(event)' style='position:relative;height:60px; z-index:"+i+";'></img>" ;  

  }
  time +="<br>";
  document.getElementById("doctorList").innerHTML = time;
}

