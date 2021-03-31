function clock(a){
	return Math.floor(a/60)+':'+(a%60+'').padStart(2,0);
}
function hide(a){
	a.setAttribute('style','display:none')
};
function show(a){
	a.setAttribute('style','display:default')
}
function Id(a){
	return document.getElementById(a);
}
function pad(a){
	if (a.toString().length==1) {return '0' + a}
	return a;
}

var url,here,time,scale,m,s,getTime,timer;
url = window.location.href;
m=0;s=0;

if (url.includes('?'||'#')){
	if (url.includes('?')&&!url.includes('#')){
		here = url.split(/\?(.+)/)[1];
	}if (url.includes('?')&&url.includes('#')){
		here = url.split('#')[0].split(/\?(.+)/)[1];
		scale = url.split('#')[1];
		if(isNaN(parseInt(scale))){
			scale=0;
		}
	}
}

if (here.includes(':')){
	var colon = here.split(':');
	if (colon[0]!="") m=here.split(':')[0];
	if (colon[1]!="") s=here.split(':')[1];
} else {
	m=parseInt(here);
}

if(m!=0||s!=0){
	Id('m').value=(m+'').padStart(2,0);
	Id('s').value=(s+'').padStart(2,0);
}

if(scale!=0){Id('timer').setAttribute('style','transform:scale('+scale+')')}
getTime = (parseInt(Id('m').value) * 60)+parseInt(Id('s').value);

function go(){
	document.body.setAttribute('style','background:black;transition:0.5s;')
	clearInterval(timer);
	hide(document.getElementsByClassName('timer')[0]);show(Id('countdown'));
	var i,j;i=getTime;j=i-1;
	Id('countdown').value=clock(i);
	timer = setInterval(function() {
		if(j!=0){
		Id('countdown').value=clock(j);
		j--;
		}else{
			clearInterval(this);
			hide(Id('countdown'));
			show(document.getElementsByClassName('timer')[0]);
			document.body.setAttribute('style','background:#700;transition:1s;')
		}
	}, 1000);
}