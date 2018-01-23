
// Copyright (c) 2017 Joaquin Giordano
// version: 2.5.2


function checkIdClassOther(text){
	var fl = text.charAt(0);
	if (fl == "#"){
		return "id";
	}
	if (fl == "."){
		return "class";
	}
	if (fl != "#" && fl != "."){
		return "other";
	}
}

function insert(where,what) {
	var checkWhere = checkIdClassOther(where);
	if(checkWhere == "id"){
		where = where.substr(1);
		document.getElementById(where).innerHTML += what;
	}

	if(checkWhere == "class"){
		where = where.substr(1);
		document.getElementsByClassName(where)[0].innerHTML += what;
	}

	if(checkWhere == "other"){
		if(where == "body"){
			document.body.innerHTML += what;
		}

	}


}

var base64 = {

	encrypt: function encrypt(msg) {
		return btoa(msg);
	},

	decrypt: function decrypt(msg) {
		return atob(msg);
	}



}


function chars(text){
	var checkText = checkIdClassOther(text);
	if(checkText == "other"){
		return text.length;
	}
	if(checkText == "id"){
		text = text.substr(1);
		try{
			return document.getElementById(text).value.length;
		}catch(err){
			return document.getElementById(text).innerHTML.length;
		}
	}
	if(checkText == "class"){
		text = text.substr(1);
		try{

			return document.getElementsByClassName(text)[0].value.length;
		}catch(err){

			return document.getElementsByClassName(text)[0].innerHTML.length;
		}
	}
}

function anim(elem,type,to,pos,quantity,velocity = 1,callback) {

		console.warn('WARNING: the function "anim()" is deprecated and it will be removed in the following versions, try to use "getElement(id or class).anim()"');

    var checkElem = checkIdClassOther(elem);
    if(checkElem == "id"){
                elem = elem.substr(1);
                elem = document.getElementById(elem);
            }
    if(checkElem == "class"){
                elem = elem.substr(1);
                elem = document.getElementsByClassName(elem)[0];
            }
    elem.style.display = "block";
    if(type == "slide"){
        if(to == "left"){
             var id = setInterval(frame, velocity);
             function frame() {
                if (pos == quantity) {
                    clearInterval(id);
                     if(callback != undefined){
                        callback();
                    }
                } else {
                    pos++;
                    elem.style.right = pos + 'px';
                }
            }
        }
        if(to == "right"){
             var id = setInterval(frame, velocity);
             function frame() {
                if (pos == quantity) {
                    clearInterval(id);
                    if(callback != undefined){
                        callback();
                    }
                } else {
                    pos++;
                    elem.style.left = pos + 'px';
                }
            }
        }
        if(to == "top"){
             var id = setInterval(frame, velocity);
             function frame() {
                if (pos == quantity) {
                    clearInterval(id);
                     if(callback != undefined){
                        callback();
                    }
                } else {
                    pos++;
                    elem.style.bottom = pos + 'px';
                }
            }
        }

        if(to == "bottom"){
             var id = setInterval(frame, velocity);
             function frame() {
                if (pos == quantity) {
                    clearInterval(id);
                     if(callback != undefined){
                        callback();
                    }
                } else {
                    pos++;
                    elem.style.top = pos + 'px';
                }
            }
        }
      }

      if(type == "enlarge"){
        if(to == "bottom"){
             var id = setInterval(frame, velocity);
             function frame() {
                if (pos == quantity) {
                    clearInterval(id);
                     if(callback != undefined){
                        callback();
                    }
                } else {
                    pos++;
                    elem.style.height = pos + 'px';
                }
            }
        }
        if(to == "right"){
             var id = setInterval(frame, velocity);
             function frame() {
                if (pos == quantity) {
                    clearInterval(id);
                     if(callback != undefined){
                        callback();
                    }
                } else {
                    pos++;

                    elem.style.width = pos + 'px';
                }
            }
        }
      }
      if(type == "fade"){
        if(to == "in"){
             var id = setInterval(frame, velocity);
             function frame() {
                if (pos >= quantity) {
                    clearInterval(id);
                     if(callback != undefined){
                        callback();
                    }
                } else {
                    pos += 0.002;

                    elem.style.opacity = pos ;
                }
            }
        }
        }
        if(to == "out"){
             var id = setInterval(frame, velocity);
             function frame() {
                if (pos <= quantity) {
                    clearInterval(id);
                     if(callback != undefined){
                        callback();
                    }
                } else {
                    pos -= 0.002;

                    elem.style.opacity = pos ;
                }
            }
        }
      }

var timer = {

		start:function(seconds,callback){
					var ticks = seconds * 1000;
    				var interval = setInterval(callback, ticks);
    				return interval;
    			},

    	stop:function(timer_var){
			clearInterval(timer_var);
		}


};




function log(text){
	console.log(text);
}


function getElement(idclass){
	var checkIdClass = checkIdClassOther(idclass);

	if(checkIdClass == "id"){
		idclass = idclass.substr(1);
		idclass = document.getElementById(idclass);
	}
	if(checkIdClass == "class"){
		idclass = idclass.substr(1);
		idclass = document.getElementsByClassName(idclass)[0];
	}
	if(checkIdClass == "other"){
		if(idclass == "body"){
			idclass = document.body;
		}

	}

	function text(text){
		if(text != undefined){

			if(idclass.value != undefined){
				idclass.value = text;
			}else{
				idclass.innerHTML = text;

			}

		}else{
			if(idclass.value != undefined){
				return idclass.value;
			}else{
				return idclass.innerHTML;

			}
		}


	}

function src(src){
		if(src != undefined){
			idclass.src = src;
		}else{
			return idclass.src;
		}

	}

function width(px){

		if(px != undefined){
			 idclass.style.width = px ;
		}else{
			 return idclass.offsetWidth + "px";
		}

}

function height(px){
	if(px != undefined){
		 idclass.style.height = px ;
	}else{
		 return idclass.offsetHeight + "px";
	}
}


function anim(type,to,pos,quantity,velocity = 1,callback) {
    idclass.style.display = "block";

    if(type == "slide"){
        if(to == "left"){
             var id = setInterval(frame, velocity);
             function frame() {
                if (pos == quantity) {
                    clearInterval(id);
                     if(callback != undefined){
                        callback();
                    }
                } else {
                    pos++;
                    idclass.style.right = pos + 'px';
                }
            }
        }
        if(to == "right"){
             var id = setInterval(frame, velocity);
             function frame() {
                if (pos == quantity) {
                    clearInterval(id);
                    if(callback != undefined){
                        callback();
                    }
                } else {
                    pos++;
                    idclass.style.left = pos + 'px';
                }
            }
        }
        if(to == "top"){
             var id = setInterval(frame, velocity);
             function frame() {
                if (pos == quantity) {
                    clearInterval(id);
                     if(callback != undefined){
                        callback();
                    }
                } else {
                    pos++;
                    idclass.style.bottom = pos + 'px';
                }
            }
        }

        if(to == "bottom"){
             var id = setInterval(frame, velocity);
             function frame() {
                if (pos == quantity) {
                    clearInterval(id);
                     if(callback != undefined){
                        callback();
                    }
                } else {
                    pos++;
                    idclass.style.top = pos + 'px';
                }
            }
        }
      }

      if(type == "enlarge"){
        if(to == "bottom"){
             var id = setInterval(frame, velocity);
             function frame() {
                if (pos == quantity) {
                    clearInterval(id);
                     if(callback != undefined){
                        callback();
                    }
                } else {
                    pos++;
                    idclass.style.height = pos + 'px';
                }
            }
        }
        if(to == "right"){
             var id = setInterval(frame, velocity);
             function frame() {
                if (pos == quantity) {
                    clearInterval(id);
                     if(callback != undefined){
                        callback();
                    }
                } else {
                    pos++;

                    idclass.style.width = pos + 'px';
                }
            }
        }
      }
      if(type == "fade"){
        if(to == "in"){
             var id = setInterval(frame, velocity);
             function frame() {
                if (pos >= quantity) {
                    clearInterval(id);
                     if(callback != undefined){
                        callback();
                    }
                } else {
                    pos += 0.002;

                    idclass.style.opacity = pos ;
                }
            }
        }
        }
        if(to == "out"){
             var id = setInterval(frame, velocity);
             function frame() {
                if (pos <= quantity) {
                    clearInterval(id);
                     if(callback != undefined){
                        callback();
                    }
                } else {
                    pos -= 0.002;

                    idclass.style.opacity = pos ;
                }
            }
        }
      }


			function onPressKey(letter,callback) {

				var letter = letter;

					idclass.onkeypress = function(e,letter2 = letter){

					if(e.which == letter2){
						callback();
					}

				}

			}

			function onClick(callback) {

					idclass.onclick = function(){
						callback();

				}
			}

			function onChange(callback) {

					idclass.onchange = function(){
						callback();
					}
			}

function element(){
	return idclass;
}

		return{
			text:text,
			height:height,
			width:width,
			src:src,
			anim:anim,
			onClick:onClick,
			onChange:onChange,
			onPressKey:onPressKey,
			element:element

		};


}

	function random(num1,num2){

		if(num1 == undefined || num2 == undefined){

			return Math.random();

		}else {
			return Math.floor(Math.random() * num2) + num1;
		}

	}

	function randomize(data) {
		var num = random(0,data.length);
		return data[num];
	}

function contains(where,data){
	var checkWhere = checkIdClassOther(where);
	if(checkWhere == "id"){
		where = where.substr(1);
		try{
			var number = document.getElementById(where).value.toLowerCase().indexOf(data.toLowerCase());
			if(number != -1){
				return true;
			}else{
				return false;
			}
		}catch(err){
			var number = document.getElementById(where).innerHTML.toLowerCase().indexOf(data.toLowerCase());
			if(number != -1){
				return true;
			}else{
				return false;
			}
		}
	}
	if(checkWhere == "class"){
		where = where.substr(1);
			try{
				var data2 = document.getElementsByClassName(where)[0].value.toLowerCase().indexOf(data.toLowerCase());
				if(data2 != undefined){
				if(data2 != -1){
					return true;
				}else{
					return false;
				}
			}
			}catch(err){
				var data = document.getElementsByClassName(where)[0].innerHTML.toLowerCase().indexOf(data.toLowerCase());
				if(data != -1){
					return true;
				}else{
					return false;
				}
			}
		}
	if(checkWhere == "other"){
		var number = where.indexOf(data.toLowerCase());
		if(number != -1){
			return true;
		}else{
			return false;
		}
	}

}

function isEqual(data){
	var result = true;
	var fs = true;
	var primary_data;
	data.forEach(function(e){
		if(fs == true){
			primary_data = e;
			fs = false;
		}else{
			if(primary_data != e){
				result = false;

			}
		}
	});
	return result;
}

function sum(numbers){
var fs = true;
	var actualNumber = 0;
	numbers.forEach(function(e) {
		if(fs == true){
			actualNumber = e;
			fs = false;
		}else{
			actualNumber += e;
		}
	})
	return actualNumber;
}

function subs(numbers){
	var fs = true;
	var actualNumber = 0;
	numbers.forEach(function(e) {
		if(fs == true){
			actualNumber = e;
			fs = false;
		}else{
			actualNumber -= e;
		}
	})
	return actualNumber;
}

function devide(numbers){
var fs = true;
	var actualNumber = 0;
	numbers.forEach(function(e) {
		if(fs == true){
			actualNumber = e;
			fs = false;
		}else{
			actualNumber /= e;
		}
	})
	return actualNumber;
}

function multiply(numbers){
var fs = true;
	var actualNumber = 0;
	numbers.forEach(function(e) {
		if(fs == true){
			actualNumber = e;
			fs = false;
		}else{
			actualNumber *= e;
		}
	})
	return actualNumber;
}

function countdown(date,days_count = true,hours_count = true,minutes_count = true,seconds_count = true,callback){
	var countDownDate = new Date(date).getTime();
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var result;
  var ft = true;
  if (days_count == true){
   if(ft){
     result = days + "d ";
     ft = false;
    }else{
      result += days + "d ";
    }
   }

  if (hours_count == true){
      if(ft){
     result = hours + "h ";
     ft = false;
    }else{
      result += hours + "h ";
    }
  }
  if (minutes_count == true){
      if(ft){
     result = minutes + "m ";
     ft = false;
    }else{
      result += minutes + "m ";
    }
  }
  if (seconds_count == true){
      if(ft){
     result = seconds + "s ";
     ft = false;
    }else{
      result += seconds + "s ";
    }
  }
  if (distance < 0) {
		if(callback == undefined){
			callback();
		}
    return "Expired";
  }else{
    return result;
  }


}

function getText(idclass){

	console.warn('WARNING: the function "getText()" is deprecated and it will be removed in the following versions, try to use "getElement(id or class).text()"');

	var checkIdClass = checkIdClassOther(idclass);
	if(checkIdClass == "id"){
		idclass = idclass.substr(1);
		if(document.getElementById(idclass).value == undefined){
			return document.getElementById(idclass).innerHTML;
		}else{
			return document.getElementById(idclass).value;
		}
	}
	if(checkIdClass == "class"){
		idclass = idclass.substr(1);
		if(document.getElementsByClassName(idclass)[0].value == undefined){
			return document.getElementsByClassName(idclass)[0].innerHTML;
		}else{
			return document.getElementsByClassName(idclass)[0].value;
		}
	}
}

function go(url){
	window.location = url;
}

function clearData(){
	localStorage.clear();
}

function saveData(where,data){
	var checkData = checkIdClassOther(data);
	if(checkData == "id"){
		data = data.substr(1);
		try{
			var data = document.getElementById(data).value;
			localStorage.setItem(where,data);
		}catch(err){
			var data = document.getElementById(data).innerHTML;
			localStorage.setItem(where,data);
		}
	}
	if(checkData == "class"){
		data = data.substr(1);
			var data2 = document.getElementsByClassName(data)[0].value;
			if(data2 != undefined){
				localStorage.setItem(where,data);
			}else{
			var data = document.getElementsByClassName(data)[0].innerHTML;

			localStorage.setItem(where,data);
			}


	}
	if(checkData == "other"){

		localStorage.setItem(where,data);
	}

}

function getData(where){
	return localStorage.getItem(where);
}

function getImageSrc(idclass){
			console.warn('WARNING: the function "getImageSrc()" is deprecated and it will be removed in the following versions, try to use "getElement(id or class).src()"');

	var checkIdClass = checkIdClassOther(idclass);

	if(checkIdClass == "id"){
		idclass = idclass.substr(1);
		return document.getElementById(idclass).src;
	}
	if (checkIdClass == "class") {
		idclass = idclass.substr(1);
		return document.getElementsByClassName(idclass)[0].src;
	}
}

function setImageSrc(idclass, src){

		console.warn('WARNING: the function "setImageSrc()" is deprecated and it will be removed in the following versions, try to use "getElement(id or class).src(src)"');

	var checkIdClass = checkIdClassOther(idclass);
	if(checkIdClass == "id"){
		idclass = idclass.substr(1);
		document.getElementById(idclass).src = src;
	}
	if(checkIdClass == "class"){
		idclass = idclass.substr(1);
		document.getElementsByClassName(idclass)[0].src = src;
	}
}

function getChar(where,num){
	var checkWhere = checkIdClassOther(where);

	if(checkWhere == "other"){
		where = where;
	}
	if(checkWhere == "id"){
		where = where.substr(1);
		var prewhere = document.getElementById(where).value;
		if(prewhere == undefined){
			where = document.getElementById(where).innerHTML;
		}else{
			where = prewhere;
		}
	}
	if(checkWhere == "class"){
		where = where.substr(1);
		var prewhere = document.getElementsByClassName(where)[0].value;
		if(prewhere == undefined){
			where = document.getElementsByClassName(where)[0].innerHTML;
		}else{
			where = prewhere;
		}
	}
	return where.charAt(num);
}

function doTTT(callback,callback2) {
	callback();
	callback2();
}

function time(data){

	var date = new Date();
	var final = "";
	data.forEach(function(e) {

	if(e == undefined){
		final == date;
	}
	if(e == "hour"){
		if(date.getHours() <= 9){
			final += "0" + date.getHours() + " ";
		}else{
			final += date.getHours() + " ";
		}
	}
	if(e == "minute"){
		if(date.getMinutes() <= 9){
			final += "0" + date.getMinutes() + " ";
		}else{
			final += date.getMinutes() + " ";
		}
	}
	if(e == "second"){
		if(date.getSeconds() <= 9){
			final += "0" + date.getSeconds() + " ";
		}else{
			final += date.getSeconds() + " ";
		}
	}
	if(e == "milisecond"){
		if(date.getMilliseconds() <= 9){
			final += "0" + date.getMilliseconds() + " ";
		}else{
			final += date.getMilliseconds() + " ";
		}
	}
	if(e == "day"){
		final += date.getDate() + " ";
	}
	if(e == "dayoftheweek"){
		final += date.getDay() + 1 + " ";
	}
	if(e == "year"){
		final += date.getFullYear() + " ";
	}
	if(e == "month"){
		final += date.getMonth() + 1  + " ";
	}

	})

	return final;
}

function toString(num){
	return num + "";
}

function toInt(string){
	return parseInt(string);
}

function wait(seconds,callback){
	var ticks = seconds * 1000;
	setTimeout(function(){callback();}, ticks);
}

function loop(times,callback){
	times -= 1;
	for(var i = 0; i <= times; i++){
		callback();
	}
}

function onPressKey(idclass,letter,callback) {
	console.warn('WARNING: the function "onPressKey()" is deprecated and it will be removed in the following versions, try to use "getElement(id or class).onPressKey()"');

	var checkIdClass = checkIdClassOther(idclass);
	idclass = idclass.substr(1);
	var letter = letter;
	if(checkIdClass == "id"){
		document.getElementById(idclass).onkeypress = function(e,letter2 = letter){
		if(e.which == letter2){
			callback();
		}
	};
	}

	if(checkIdClass == "class"){
		document.getElementsByClassName(idclass)[0].onkeypress = function(e,letter2 = letter){
		if(e.which == letter2){
			callback();
		}
	};
	}

}

function onClick(idclass,callback) {
	console.warn('WARNING: the function "onClick()" is deprecated and it will be removed in the following versions, try to use "getElement(id or class).onClick()"');

	var checkIdClass = checkIdClassOther(idclass);
	idclass = idclass.substr(1);
	if(checkIdClass == "id"){
		document.getElementById(idclass).onclick = function(){
			callback();
		}
	}
	if(checkIdClass == "class"){
		document.getElementsByClassName(idclass)[0].onclick = function(){
			callback();
		}
	}
}

function onDocumentReady(callback){
	document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    	callback();
  }
};
}

function onChange(idclass,callback) {

		console.warn('WARNING: the function "onChange()" is deprecated and it will be removed in the following versions, try to use "getElement(id or class).onChange()"');

	var checkIdClass = checkIdClassOther(idclass);
	idclass = idclass.substr(1);
	if(checkIdClass == "id"){
		document.getElementById(idclass).onchange = function(){
			callback();
		}
	}
	if(checkIdClass == "class"){
		document.getElementsByClassName(idclass)[0].onchange = function(){
			callback();
		}
	}
}
