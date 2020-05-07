window.onload = function(){
	displayer = document.getElementById("displayer");
	funplayer = document.getElementById("funplayer");
	select = document.getElementById("sel");
	button = document.getElementsByTagName("button");
	//document.getElementById("displayer").addEventListener(onchange,checker(),false);
	console.log("Developed by Liu Hangjiang on May 7th,2020");
	e = 1;
	funcounter = 0;
	duration = 0;
}

function panel(){
	displayer.value = displayer.value + event.target.id;
	if(displayer.value.length == 1&&duration == 0){
		timer();		
	}
}

function funpanel(){
	funplayer.value = funplayer.value + event.target.id;
	funcounter++;
	if((funcounter==1)&&(e==4||e==5)&&duration==0){
		timer();
	}
}

function color(){
	let button = document.getElementsByTagName("button");
	if(event.target.value == 0) {
		document.getElementById("panel").style.backgroundColor = "royalblue";
		for(let i=0;i<=47;i++){
			button[i].style.color = "purple";
			button[i].style.backgroundColor = "orange";
		}
	}
	else if(event.target.value == 1){
		document.getElementById("panel").style.backgroundColor = "#000000";
		for(let i=0;i<=47;i++){
			button[i].style.color = "black";
			button[i].style.backgroundColor = "white";
		}
	}else if(event.target.value == 2){
		document.getElementById("panel").style.backgroundColor = "#000000";
		for(let i=0;i<=47;i++){
			button[i].style.color = "black";
			button[i].style.backgroundColor = "rgb(210,210,210)";
		}
	}else if(event.target.value == 3){
		document.getElementById("panel").style.backgroundColor = "rgb(100,100,100)";
		for(let i=0;i<=47;i++){
			button[i].style.color = "white";
			button[i].style.backgroundColor = "black";
		}
	}else if(event.target.value == 4){
		document.getElementById("panel").style.backgroundColor = "rgb(100,100,100)";
		for(let i=0;i<=47;i++){
			button[i].style.color = "black";
			button[i].style.backgroundColor = "white";
		}
	}else if(event.target.value == 5){
		document.getElementById("panel").style.backgroundColor = "rgb(210,210,210)";
		for(let i=0;i<=47;i++){
			button[i].style.color = "black";
			button[i].style.backgroundColor = "white";
		}
	}
}

function task(){
	e = event.target.value;
}

function timer(){
	begin = new Date().getTime();
	go = setInterval("display()",1);
}

function display(){
	now = new Date().getTime();
	duration = now - begin;
	second = parseInt(duration/1000);
	millisec = duration%1000;
	document.getElementById("time").value = second + "s" + millisec + "ms";
	if(e == 1 || e == 2){
		if(displayer.value.length>=5){
			clearInterval(go);
		}
	}else if(e == 3){
		if(displayer.value.length>=10){
			clearInterval(go);
		}
	}else if(e == 4){
		if(funcounter == 5){
			clearInterval(go);
		}
	}else if(e == 5){
		if(funcounter == 5 && displayer.value.length >= 10){
			clearInterval(go);
		}
	}
}