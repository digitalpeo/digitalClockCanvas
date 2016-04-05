var init =function(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');

	var mainColor = 'yellow';
	var fps = 30;
	var degToRad = function(deg){
	  var factor = Math.PI/180;
	  return deg*factor;
	};

	var renderTime = function(){
	  var now = new Date();
	  var hours = now.getHours();
	  var minutes = now.getMinutes();
	  var seconds = now.getSeconds();
	  var milliseconds = now.getMilliseconds();
	  var newSeconds = seconds + milliseconds/1000;
	  var time = now.toLocaleTimeString();
	  var today = now.toDateString();
	  
	  //background
	  ctx.strokeStyle = mainColor;
	  ctx.lineWidth = '10';
	  ctx.lineCap = 'round';
	  ctx.shadowBlur = '25';
	  ctx.shadowColor = mainColor;
	  ctx.fillStyle = 'black';
	  ctx.rect(0,0,500,500);
	  ctx.fill();

	  //hours
	  ctx.beginPath();
	  ctx.arc(250,250,200,degToRad(270),degToRad((hours*15)-90));
	  ctx.stroke();
	  //minutes
	  ctx.beginPath();
	  ctx.arc(250,250,170,degToRad(270),degToRad((minutes*6)-90));
	  ctx.stroke();
	  //seconds
	  ctx.beginPath();
	  ctx.arc(250,250,140,degToRad(270),degToRad((newSeconds*6)-90));
	  ctx.stroke();
	  
	  //dateString
	  ctx.font = "30px Arial";
	  ctx.fillStyle = mainColor;
	  ctx.textAlign = "center";
	  ctx.fillText(today,250,250);
	  //timeString
	  ctx.font = "20px Arial";
	  ctx.fillText(time,250,280);


	};

	setInterval(renderTime,1000/fps);

};
