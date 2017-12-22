
// Copyright (c) 2017 Joaquin Giordano

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

function insert(what,id,eclass,where,data,plusdata) {
	var checkWhere = checkIdClassOther(where);
	if(id != null){
		id = id.substr(1);
	}
	if(eclass != null){
		eclass = eclass.substr(1);
	}
	where = where.substr(1);
	if(what == "img"){
		var img = document.createElement(what);
		img.setAttribute('src', data);
		if(id != null){
			img.setAttribute('id', id);
		}
		if(eclass != null){
			img.setAttribute('class', eclass);
		}
		if(checkWhere == "id"){
			document.getElementById(where).appendChild(img);
		}
		if(checkWhere == "class"){
			document.getElementByClass(where).appendChild(img);
		}
		if(checkWhere == "other"){
			if(where == "body"){
				document.body.appendChild(img);
			}
		}

	}
	if(what == "p"){
		var p = document.createElement(what);
		if(id != null){
			p.setAttribute('id', id);
		}
		if(eclass != null){
			p.setAttribute('class', eclass);
		}
		if(checkWhere == "id"){
			document.getElementById(where).appendChild(p);
		}
		if(checkWhere == "class"){
			document.getElementByClass(where).appendChild(p);
		}
		if(checkWhere == "other"){
			if(where == "body"){
				document.body.appendChild(p);
			}
		}
		p.innerHTML = data;
	}
	if(what == "a"){
		var a = document.createElement(what);
		if(id != null){
			a.setAttribute('id', id);
		}
		if(eclass != null){
			a.setAttribute('class', eclass);
		}
		a.setAttribute('href', plusdata);
		if(checkWhere == "id"){
			document.getElementById(where).appendChild(a);
		}
		if(checkWhere == "class"){
			document.getElementByClass(where).appendChild(a);
		}
		if(checkWhere == "other"){
			if(where == "body"){
				document.body.appendChild(a);
			}
		}
		a.innerHTML = data;
	}
	if(what == "h1"){
		var h1 = document.createElement(what);
		if(id != null){
			h1.setAttribute('id', id);
		}
		if(eclass != null){
			h1.setAttribute('class', eclass);
		}
		if(checkWhere == "id"){
			document.getElementById(where).appendChild(h1);
		}
		if(checkWhere == "class"){
			document.getElementByClass(where).appendChild(h1);
		}
		if(checkWhere == "other"){
			if(where == "body"){
				document.body.appendChild(h1);
			}
		}
		h1.innerHTML = data;
	}
	if(what == "h2"){
		var h2 = document.createElement(what);
		if(id != null){
			h2.setAttribute('id', id);
		}
		if(eclass != null){
			h2.setAttribute('class', eclass);
		}
		if(checkWhere == "id"){
			document.getElementById(where).appendChild(h2);
		}
		if(checkWhere == "class"){
			document.getElementByClass(where).appendChild(h2);
		}
		if(checkWhere == "other"){
			if(where == "body"){
				document.body.appendChild(h2);
			}
		}
		h2.innerHTML = data;
	}
	if(what == "h3"){
		var h3 = document.createElement(what);
		if(id != null){
			h3.setAttribute('id', id);
		}
		if(eclass != null){
			h3.setAttribute('class', eclass);
		}
		if(checkWhere == "id"){
			document.getElementById(where).appendChild(h3);
		}
		if(checkWhere == "class"){
			document.getElementByClass(where).appendChild(h3);
		}
		if(checkWhere == "other"){
			if(where == "body"){
				document.body.appendChild(h3);
			}
		}
		h3.innerHTML = data;
	}
	if(what == "h4"){
		var h4 = document.createElement(what);
		if(id != null){
			h4.setAttribute('id', id);
		}
		if(eclass != null){
			h4.setAttribute('class', eclass);
		}
		if(checkWhere == "id"){
			document.getElementById(where).appendChild(h4);
		}
		if(checkWhere == "class"){
			document.getElementByClass(where).appendChild(h4);
		}
		if(checkWhere == "other"){
			if(where == "body"){
				document.body.appendChild(h4);
			}
		}
		h4.innerHTML = data;
	}
	if(what == "textarea"){
		var textarea = document.createElement(what);
		if(id != null){
			textarea.setAttribute('id', id);
		}
		if(eclass != null){
			textarea.setAttribute('class', eclass);
		}
		if(checkWhere == "id"){
			document.getElementById(where).appendChild(textarea);
		}
		if(checkWhere == "class"){
			document.getElementByClass(where).appendChild(textarea);
		}
		if(checkWhere == "other"){
			if(where == "body"){
				document.body.appendChild(textarea);
			}
		}
		textarea.innerHTML = data;
	}
}

function chars(text){
	var checkText = checkIdClassOther(text);
	text = text.substr(1);
	if(checkText == "other"){
		return text.length;
	}
	if(checkText == "id"){
		try{
			return document.getElementById(text).value.length;
		}catch(err){
			return document.getElementById(text).innerHTML.length;
		}
	}
	if(checkText == "class"){
		try{
			return document.getElementByClass(text).value.length;
		}catch(err){
			return document.getElementByClass(text).innerHTML.length;
		}
	}
}

function log(text){
	console.log(text);
}

function getElement(idclass){
	var checkIdClass = checkIdClassOther(idclass);
	idclass = idclass.substr(1);
	if(checkIdClass == "id"){
		return document.getElementById(idclass);
	}
	if(checkIdClass == "class"){
		return document.getElementByClass(idclass);
	}
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

function getText(idclass){
	var checkIdClass = checkIdClassOther(idclass);
	idclass = idclass.substr(1);
	if(checkIdClass == "id"){
		if(document.getElementById(idclass).value == undefined){
			return document.getElementById(idclass).innerHTML;
		}else{
			return document.getElementById(idclass).value;
		}
	}
	if(checkIdClass == "class"){
		if(document.getElementByClass(idclass).value == undefined){
			return document.getElementByClass(idclass).innerHTML;
		}else{
			return document.getElementByClass(idclass).value;
		}
	}
}

function go(url){
	window.location = url;
}

function getImageSrc(idclass){
	var checkIdClass = checkIdClassOther(idclass);
	idclass = idclass.substr(1);
	if(checkIdClass == "id"){
		return document.getElementById(idclass).src;
	}
	if (checkIdClass == "class") {
		return document.getElementByClass(idclass).src;
	}
}

function setImageSrc(idclass, src){
	var checkIdClass = checkIdClassOther(idclass);
	idclass = idclass.substr(1);
	if(checkIdClass == "id"){
		document.getElementById(idclass).src = src;
	}
	if(checkIdClass == "class"){
		document.getElementByClass(idclass).src = src;
	}
}

function getChar(where,num){
	var checkWhere = checkIdClassOther(where);
	where = where.substr(1);
	if(checkWhere == "other"){
		where = where;
	}
	if(checkWhere == "id"){
		var prewhere = document.getElementById(where).value;
		if(prewhere == undefined){
			where = document.getElementById(where).innerHTML;
		}else{
			where = prewhere;
		}
	}
	if(checkWhere == "class"){
		var prewhere = document.getElementByClass(where).value;
		if(prewhere == undefined){
			where = document.getElementByClass(where).innerHTML;
		}else{
			where = prewhere;
		}
	}
	return where.charAt(num);
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

function loop(times,callback){
	times -= 1;
	for(var i = 0; i <= times; i++){
		callback();
	}
}

function onPressKey(idclass,letter,callback) {
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
		document.getElementByClass(idclass).onkeypress = function(e,letter2 = letter){
		if(e.which == letter2){
			callback();
		}
	};
	}
		
	
}

function onClick(idclass,callback) {
	var checkIdClass = checkIdClassOther(idclass);
	idclass = idclass.substr(1);
	if(checkIdClass == "id"){
		document.getElementById(idclass).onclick = function(){
			callback();
		}
	}
	if(checkIdClass == "class"){
		document.getElementByClass(idclass).onclick = function(){
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
	var checkIdClass = checkIdClassOther(idclass);
	idclass = idclass.substr(1);
	if(checkIdClass == "id"){
		document.getElementById(idclass).onchange = function(){
			callback();
		}
	}
	if(checkIdClass == "class"){
		document.getElementByClass(idclass).onchange = function(){
			callback();
		}
	}
}
