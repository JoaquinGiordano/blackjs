
// Copyright (c) 2017 Joaquin Giordano
// version:2.3.0


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
			where = where.substr(1);
			document.getElementById(where).appendChild(img);
		}
		if(checkWhere == "class"){
			where = where.substr(1);
			document.getElementsByClassName(where)[0].appendChild(img);
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
			where = where.substr(1);
			document.getElementById(where).appendChild(p);
		}
		if(checkWhere == "class"){
			where = where.substr(1);
			document.getElementsByClassName(where)[0].appendChild(p);
		}
		if(checkWhere == "other"){
			if(where == "body"){
				document.body.appendChild(p);
			}
		}
		p.innerHTML = data;
	}
	if(what == "ul"){
		var ul = document.createElement(what);
		if(id != null){
			ul.setAttribute('id', id);
		}
		if(eclass != null){
			ul.setAttribute('class', eclass);
		}
		if(checkWhere == "id"){
			where = where.substr(1);
			document.getElementById(where).appendChild(ul);
		}
		if(checkWhere == "class"){
			where = where.substr(1);
			document.getElementsByClassName(where)[0].appendChild(ul);
		}
		if(checkWhere == "other"){
			if(where == "body"){
				document.body.appendChild(ul);
			}
		}

	}
	if(what == "li"){
		var li = document.createElement(what);
		if(id != null){
			li.setAttribute('id', id);
		}
		if(eclass != null){
			li.setAttribute('class', eclass);
		}
		if(checkWhere == "id"){
			where = where.substr(1);
			document.getElementById(where).appendChild(li);
		}
		if(checkWhere == "class"){
			where = where.substr(1);
			document.getElementsByClassName(where)[0].appendChild(li);
		}
		if(checkWhere == "other"){
			if(where == "body"){
				document.body.appendChild(li);
			}
		}
		li.innerHTML = data;
	}
	if(what == "button"){
		var button = document.createElement(what);
		if(id != null){
			button.setAttribute('id', id);
		}
		if(eclass != null){
			button.setAttribute('class', eclass);
		}
		if(plusdata != null){
			button.setAttribute('onClick', plusdata);
		}
		if(checkWhere == "id"){
			where = where.substr(1);
			document.getElementById(where).appendChild(button);
		}
		if(checkWhere == "class"){
			where = where.substr(1);
			document.getElementsByClassName(where)[0].appendChild(button);
		}
		if(checkWhere == "other"){
			if(where == "body"){
				document.body.appendChild(button);
			}
		}
		button.innerHTML = data;
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
			where = where.substr(1);
			document.getElementById(where).appendChild(a);
		}
		if(checkWhere == "class"){
			where = where.substr(1);
			document.getElementsByClassName(where)[0].appendChild(a);
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
			where = where.substr(1);
			document.getElementById(where).appendChild(h1);
		}
		if(checkWhere == "class"){
			where = where.substr(1);
			document.getElementsByClassName(where)[0].appendChild(h1);
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
			where = where.substr(1);
			document.getElementById(where).appendChild(h2);
		}
		if(checkWhere == "class"){
			where = where.substr(1);
			document.getElementsByClassName(where)[0].appendChild(h2);
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
			where = where.substr(1);
			document.getElementById(where).appendChild(h3);
		}
		if(checkWhere == "class"){
			where = where.substr(1);
			document.getElementsByClassName(where)[0].appendChild(h3);
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
			where = where.substr(1);
			document.getElementById(where).appendChild(h4);
		}
		if(checkWhere == "class"){
			where = where.substr(1);
			document.getElementsByClassName(where)[0].appendChild(h4);
		}
		if(checkWhere == "other"){
			if(where == "body"){
				document.body.appendChild(h4);
			}
		}
		h4.innerHTML = data;
	}
	if(what == "h5"){
		var h5 = document.createElement(what);
		if(id != null){
			h5.setAttribute('id', id);
		}
		if(eclass != null){
			h5.setAttribute('class', eclass);
		}
		if(checkWhere == "id"){
			where = where.substr(1);
			document.getElementById(where).appendChild(h5);
		}
		if(checkWhere == "class"){
			where = where.substr(1);
			document.getElementsByClassName(where)[0].appendChild(h5);
		}
		if(checkWhere == "other"){
			if(where == "body"){
				document.body.appendChild(h5);
			}
		}
		h5.innerHTML = data;
	}
	if(what == "h6"){
		var h6 = document.createElement(what);
		if(id != null){
			h6.setAttribute('id', id);
		}
		if(eclass != null){
			h6.setAttribute('class', eclass);
		}
		if(checkWhere == "id"){
			where = where.substr(1);
			document.getElementById(where).appendChild(h6);
		}
		if(checkWhere == "class"){
			where = where.substr(1);
			document.getElementsByClassName(where)[0].appendChild(h6);
		}
		if(checkWhere == "other"){
			if(where == "body"){
				document.body.appendChild(h6);
			}
		}
		h6.innerHTML = data;
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
			where = where.substr(1);
			document.getElementById(where).appendChild(textarea);
		}
		if(checkWhere == "class"){
			where = where.substr(1);
			document.getElementsByClassName(where)[0].appendChild(textarea);
		}
		if(checkWhere == "other"){
			if(where == "body"){
				document.body.appendChild(textarea);
			}
		}

		textarea.innerHTML = data;
	}
	if(what == "div"){
		var div = document.createElement(what);
		if(id != null){
			div.setAttribute('id', id);
		}
		if(eclass != null){
			div.setAttribute('class', eclass);
		}
		if(checkWhere == "id"){
			where = where.substr(1);
			document.getElementById(where).appendChild(div);
		}
		if(checkWhere == "class"){
			where = where.substr(1);
			document.getElementsByClassName(where)[0].appendChild(div);
		}
		if(checkWhere == "other"){
			if(where == "body"){
				document.body.appendChild(div);
			}
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
var sha1 = {
	encrypt : function sha1(msg) {
	  function rotate_left(n,s) {
	    var t4 = ( n<<s ) | (n>>>(32-s));
	    return t4;
	  };
	  function lsb_hex(val) {
	    var str="";
	    var i;
	    var vh;
	    var vl;
	    for( i=0; i<=6; i+=2 ) {
	      vh = (val>>>(i*4+4))&0x0f;
	      vl = (val>>>(i*4))&0x0f;
	      str += vh.toString(16) + vl.toString(16);
	    }
	    return str;
	  };
	  function cvt_hex(val) {
	    var str="";
	    var i;
	    var v;
	    for( i=7; i>=0; i-- ) {
	      v = (val>>>(i*4))&0x0f;
	      str += v.toString(16);
	    }
	    return str;
	  };
	  function Utf8Encode(string) {
	    string = string.replace(/\r\n/g,"\n");
	    var utftext = "";
	    for (var n = 0; n < string.length; n++) {
	      var c = string.charCodeAt(n);
	      if (c < 128) {
	        utftext += String.fromCharCode(c);
	      }
	      else if((c > 127) && (c < 2048)) {
	        utftext += String.fromCharCode((c >> 6) | 192);
	        utftext += String.fromCharCode((c & 63) | 128);
	      }
	      else {
	        utftext += String.fromCharCode((c >> 12) | 224);
	        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
	        utftext += String.fromCharCode((c & 63) | 128);
	      }
	    }
	    return utftext;
	  };
	  var blockstart;
	  var i, j;
	  var W = new Array(80);
	  var H0 = 0x67452301;
	  var H1 = 0xEFCDAB89;
	  var H2 = 0x98BADCFE;
	  var H3 = 0x10325476;
	  var H4 = 0xC3D2E1F0;
	  var A, B, C, D, E;
	  var temp;
	  msg = Utf8Encode(msg);
	  var msg_len = msg.length;
	  var word_array = new Array();
	  for( i=0; i<msg_len-3; i+=4 ) {
	    j = msg.charCodeAt(i)<<24 | msg.charCodeAt(i+1)<<16 |
	    msg.charCodeAt(i+2)<<8 | msg.charCodeAt(i+3);
	    word_array.push( j );
	  }
	  switch( msg_len % 4 ) {
	    case 0:
	      i = 0x080000000;
	    break;
	    case 1:
	      i = msg.charCodeAt(msg_len-1)<<24 | 0x0800000;
	    break;
	    case 2:
	      i = msg.charCodeAt(msg_len-2)<<24 | msg.charCodeAt(msg_len-1)<<16 | 0x08000;
	    break;
	    case 3:
	      i = msg.charCodeAt(msg_len-3)<<24 | msg.charCodeAt(msg_len-2)<<16 | msg.charCodeAt(msg_len-1)<<8  | 0x80;
	    break;
	  }
	  word_array.push( i );
	  while( (word_array.length % 16) != 14 ) word_array.push( 0 );
	  word_array.push( msg_len>>>29 );
	  word_array.push( (msg_len<<3)&0x0ffffffff );
	  for ( blockstart=0; blockstart<word_array.length; blockstart+=16 ) {
	    for( i=0; i<16; i++ ) W[i] = word_array[blockstart+i];
	    for( i=16; i<=79; i++ ) W[i] = rotate_left(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);
	    A = H0;
	    B = H1;
	    C = H2;
	    D = H3;
	    E = H4;
	    for( i= 0; i<=19; i++ ) {
	      temp = (rotate_left(A,5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
	      E = D;
	      D = C;
	      C = rotate_left(B,30);
	      B = A;
	      A = temp;
	    }
	    for( i=20; i<=39; i++ ) {
	      temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
	      E = D;
	      D = C;
	      C = rotate_left(B,30);
	      B = A;
	      A = temp;
	    }
	    for( i=40; i<=59; i++ ) {
	      temp = (rotate_left(A,5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
	      E = D;
	      D = C;
	      C = rotate_left(B,30);
	      B = A;
	      A = temp;
	    }
	    for( i=60; i<=79; i++ ) {
	      temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
	      E = D;
	      D = C;
	      C = rotate_left(B,30);
	      B = A;
	      A = temp;
	    }
	    H0 = (H0 + A) & 0x0ffffffff;
	    H1 = (H1 + B) & 0x0ffffffff;
	    H2 = (H2 + C) & 0x0ffffffff;
	    H3 = (H3 + D) & 0x0ffffffff;
	    H4 = (H4 + E) & 0x0ffffffff;
	  }
	  var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);

	  return temp.toLowerCase();
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

function contains(where,data){
	var checkWhere = checkIdClassOther(where);
	if(checkWhere == "id"){
		where = where.substr(1);
		try{
			var number = document.getElementById(where).value.indexOf(data);
			if(number != -1){
				return true;
			}else{
				return false;
			}
		}catch(err){
			var number = document.getElementById(where).innerHTML.indexOf(data);
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
				var data2 = document.getElementsByClassName(where)[0].value.indexOf(data);
				if(data2 != undefined){
				if(data2 != -1){
					return true;
				}else{
					return false;
				}
			}
			}catch(err){
				var data = document.getElementsByClassName(where)[0].innerHTML.indexOf(data);
				if(data != -1){
					return true;
				}else{
					return false;
				}
			}
		}
	if(checkWhere == "other"){
		var number = where.indexOf(data);
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
