function $(id){
	return document.getElementById(id);
}
function getStyle(obj,attr){
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			}else{
				return getComputedStyle(obj)[attr];
			}
		}
function Go(obj,attr,direct,target,endFn){
			clearInterval(obj.timer);
			obj.timer = setInterval(function(){
				var Distance=parseInt(getStyle(obj,attr))+direct;
				if(Distance>=target && direct>0 || Distance<target && direct<0){
					Distance=target;
				}
				obj.style[attr]=Distance+'px';
				if(Distance==target){
					clearInterval(obj.timer);
					if(endFn){
						endFn();
					}
				}
			},40)
		}

function Opacity(obj,state){
			
	obj.changeOpacity=setInterval(function(){
	var opa=parseFloat(getStyle(obj,'opacity'))+state;
		if(opa<=0 || opa>=1){
			state>0? opa=1 : opa=0;
//					$('box').style.display='none';
			clearInterval(obj.changeOpacity);
		}
		obj.style.opacity=opa;
	},50)
}

function shake(obj,attr,endFn){
//		if(obj.s){
			obj.s=false;
			var posL = parseInt(getStyle(obj,attr));
			var arr = [];
			for(var i=20;i>=0;i-=2){
				arr.push(i,-i);
			}
			var num = 0;
			obj.shaker = setInterval(function(){
				obj.style[attr] = posL + arr[num] + 'px';
				num++;
				if(num>= arr.length){
					clearInterval(obj.shaker);
					obj.s=true;
					if(endFn){
						endFn();
					}
				}
			},40)
			
//		}
	}
