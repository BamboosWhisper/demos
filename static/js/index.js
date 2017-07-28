var turningPic1 = function()
{
	var ele = document.getElementById('runningPic1');

	var srcAry = ['../static/img/pic0.jpg','../static/img/pic1.jpg','../static/img/pic2.jpg','../static/img/pic3.jpg','../static/img/pic4.jpg'];

	//ele.src = srcAry[0];
	var idx = 0;
	setInterval(function(){
		ele.src = srcAry[idx];
		idx +=1;
		if(idx>4)
		{
			idx = 0;
		}
	},1000)
}

turningPic1();

var turningPic2 = function()
{
	var ele = document.getElementsByClassName('allPic')[0];
	var posiX = 0;
	setInterval(function(){
		ele.style.backgroundPositionX = posiX+'px';
		posiX = posiX - 160;
		if(posiX < -320){
			posiX = 0
		}
	},2000)
}
turningPic2();

var runningText = function()
{
	var ele = document.getElementsByClassName('textSrcollIn')[0];
	var dist = 0;

	setInterval(function(){
		ele.scrollLeft = dist;
		dist += 2;
		if(dist > ele.scrollWidth-ele.clientWidth)
		{
			dist = 0;
		}
	},40)
}

runningText();

var ele = document.getElementById('cav1');
var ctx1 = ele.getContext('2d');
var ismouseDown;
function eventDown(e)
{
	e.preventDefault();
	ismouseDown = true;
}

function eventUp(e)
{
	e.preventDefault();
    //得到canvas的全部数据
    // var a = ctx1.getImageData(0,0,ele.width,ele.height);
    // var j=0;
    // for(var i=3;i<a.data.length;i+=4){
    //     if(a.data[i]==0)j++;
    // }
    ismouseDown=false;
}

function eventMove(e)
{
	if(ismouseDown)
	{
		ctx1.globalCompositeOperation = 'destination-out'
		var oX = ele.offsetLeft,
        oY = ele.offsetTop-50;
        var x = (e.clientX + document.body.scrollLeft || e.pageX) - oX || 0,
        y = (e.clientY + document.body.scrollTop || e.pageY) - oY || 0;
		var posX = e.screenX;
		var posY = e.screenY;

		//ctx1.strokeStyle = rgba(0,0,255,1);
		ctx1.beginPath();
		ctx1.arc(x,y,20,0,2*Math.PI);
		ctx1.fill();
	}
	
}
function drawingPic()
{
	
	// ele.clientWidth = ele.width;
	// ele.clientHeight = ele.height;
	
	ctx1.fillStyle="#d1d1d1";
	ctx1.fillRect(0,0,ele.width,ele.height);

	ele.addEventListener('onmousedown',eventDown,false);
	ele.addEventListener('onmousemove',eventMove,false);
	ele.addEventListener('onmouseup',eventUp,false);

	ele.onmousedown = eventDown;
	ele.onmouseup = eventUp;
	ele.onmousemove = eventMove;

}

drawingPic();

(function drawCircle()
{
	var ele = document.getElementById('cav2');
	var ctx = ele.getContext('2d');
	ctx.beginPath();
	ctx.strokeStyle = '#0000ff';
	ctx.arc(90,90,30,0,2*Math.PI);
	ctx.stroke();
})()

var inputArea = document.getElementsByClassName('inputArea')[0];
		
var initInput = function()
{
	inputArea.value = '0';
}

initInput()
var showBtnEvent = function(e)
{//数字和加减乘除小数点百分号按键的事件
	if(inputArea.value == '0')
	{
		if(e.target.innerHTML != '.')
		{
			inputArea.value = e.target.innerHTML;
		}else{
			inputArea.value += e.target.innerHTML;
		}
	}else{
		// if(e.target.innerHTML=='.' && inputArea.value.indexOf('.')!==-1)
		// {
		// 	return;
		// }else{
		// 	inputArea.value += e.target.innerHTML;
		// }
		inputArea.value += e.target.innerHTML;
	}
}
var clearInput = function(e)
{
	inputArea.value = '0';
}
var startCalcu = function(e)
{
	var val = document.getElementsByClassName('inputArea')[0].value;
	var res = eval(val);
	document.getElementsByClassName('inputArea')[0].value = res;
}
var numBtn = document.getElementsByClassName('priBtn');
var item;
for (item in numBtn)
{
	numBtn[item].onclick = showBtnEvent;
}
var clearBtn = document.getElementsByClassName('clear')[0];
clearBtn.onclick = clearInput;
var equalBtn = document.getElementsByClassName('equal')[0];
equalBtn.onclick = startCalcu;

(function toBaidu(){
	var ele = document.getElementById('BDBtn');
	ele.onclick = function(){
		location.replace('http://www.baidu.com')
	}
}())

function domaintest()
{
	var ele =document.getElementById('playBtn');
	ele.addEventListener('click',test,false);
	function test()
	{
		console.log(arguments.callee)
	}
}
domaintest()


function revolvePic()
{
	var imgs = document.querySelectorAll('.container3d img');
	var imgAry = Array.prototype.slice.call(imgs);

	function revolveAll(e)
	{
		e.preventDefault();
		e.stopPropagation();

		imgAry.map(function(item)
		{
			var transVal = item.style.transform;
			var posi = transVal.indexOf('rotateY');
			var num = parseInt(transVal.substr(posi+7+1,4));
			if(num>500)
			{
				num -= 360;
			}
			num += 36;
			item.style.transform = 'rotateY('+num+'deg) translateZ(200px)'
		})
	}
	imgAry.map(function(item)
	{
		item.onclick = revolveAll;
	})
}

revolvePic();

function enlargeImg()
{
	var ele = document.getElementsByClassName('oriPic')[0];
	ele.addEventListener('click',clickEvt,false);

	function clickEvt(e)
	{
		if(ele.getAttribute('class').indexOf('enlarge')==-1)
		{
			var cssSty = ele.getAttribute('class') + ' '+'enlarge';
			ele.setAttribute('class',cssSty);
			var marginTop = window.innerHeight - parseInt(window.getComputedStyle(ele).getPropertyValue('height')),
				marginLeft = document.body.clientWidth - parseInt(window.getComputedStyle(ele).getPropertyValue('width'));
			ele.style.borderTopWidth = marginTop/2+'px';
			ele.style.borderBottomWidth = marginTop/2+'px';
			ele.style.borderLeftWidth = marginLeft/2+'px';
			ele.style.borderRightWidth = marginLeft/2+'px';
		}else{
			ele.setAttribute('class','oriPic');
		}
		//document.body.setAttribute('class','enlargeBody');
	}

}
enlargeImg();

function testAni()
{
	var ele = document.getElementsByClassName('test')[0];
	var pro = 0;
	requestAnimationFrame(function(ts)
	{
		ele.style.borderRadius = pro+'%';
		pro+=0.4;
		if(pro<100)
		{requestAnimationFrame(arguments.callee);}
	})
}
testAni();

function wave2()
{
	var ele = document.getElementsByClassName('waveCan')[0];
    let ctx = ele.getContext('2d');
    let startTime = Date.now();
    let time = 2000;
    let clockwise = 1;
    let cp1x, cp1y, cp2x, cp2y;
    
    // 初始状态
    // ctx.bezierCurveTo(90, 28, 92, 179, 200, 100);
    // 末尾状态
    // ctx.bezierCurveTo(145, 100, 41, 100, 200, 100);
    
    requestAnimationFrame(function waveDraw() {  
        let t = Math.min(1.0, (Date.now() - startTime) / time);
          
        if(clockwise) {
            cp1x = 90 + (55 * t);
            cp1y = 28 + (72 * t);
            cp2x = 92 - (51 * t);
            cp2y = 179 - (79 * t);
        } else {
            cp1x = 145 - (55 * t);
            cp1y = 100 - (72 * t);
            cp2x = 41 + (51 * t);
            cp2y = 100 + (79 * t);
        }
        
        ctx.clearRect(0, 0, 200, 200);
        ctx.beginPath();
        ctx.moveTo(50, 100);
        // 绘制三次贝塞尔曲线
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, 150, 100);
        // 绘制圆弧
        ctx.arc(100, 100, 50, 0, Math.PI/2, 0);
        ctx.fillStyle = "rgba(154, 205, 50, .8)";
        ctx.fill();
        ctx.save();  
        
        if( t == 1 ) {
            startTime = Date.now();
            clockwise = !clockwise;
        }
 
        requestAnimationFrame(waveDraw);
    });
}
wave2();

