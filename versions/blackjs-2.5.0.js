
// Copyright (c) 2017 Joaquin Giordano
// version: 2.5.0


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

// The next function was creted by "Chen, Yi-Cyuan [emn178@gmail.com]"
// In that script:
// [js-sha3] https://github.com/emn178/js-sha3

//------------------------------------------------------------------------
!function(){"use strict";function t(t,e,r){this.blocks=[],this.s=[],this.padding=e,this.outputBits=r,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(t<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=r>>5,this.extraBytes=(31&r)>>3;for(var n=0;n<50;++n)this.s[n]=0}function e(e,r,n){t.call(this,e,r,n)}var r="input is invalid type",n="object"==typeof window,i=n?window:{};i.JS_SHA3_NO_WINDOW&&(n=!1);var o=!n&&"object"==typeof self;!i.JS_SHA3_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node?i=global:o&&(i=self);var s=!i.JS_SHA3_NO_COMMON_JS&&"object"==typeof module&&module.exports,a="function"==typeof define&&define.amd,u=!i.JS_SHA3_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,f="0123456789abcdef".split(""),c=[4,1024,262144,67108864],h=[0,8,16,24],p=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],d=[224,256,384,512],l=[128,256],y=["hex","buffer","arrayBuffer","array","digest"],b={128:168,256:136};!i.JS_SHA3_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!u||!i.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});for(var A=function(e,r,n){return function(i){return new t(e,r,e).update(i)[n]()}},v=function(e,r,n){return function(i,o){return new t(e,r,o).update(i)[n]()}},B=function(t,e,r){return function(e,n,i,o){return S["cshake"+t].update(e,n,i,o)[r]()}},g=function(t,e,r){return function(e,n,i,o){return S["kmac"+t].update(e,n,i,o)[r]()}},w=function(t,e,r,n){for(var i=0;i<y.length;++i){var o=y[i];t[o]=e(r,n,o)}return t},_=function(e,r){var n=A(e,r,"hex");return n.create=function(){return new t(e,r,e)},n.update=function(t){return n.create().update(t)},w(n,A,e,r)},k=[{name:"keccak",padding:[1,256,65536,16777216],bits:d,createMethod:_},{name:"sha3",padding:[6,1536,393216,100663296],bits:d,createMethod:_},{name:"shake",padding:[31,7936,2031616,520093696],bits:l,createMethod:function(e,r){var n=v(e,r,"hex");return n.create=function(n){return new t(e,r,n)},n.update=function(t,e){return n.create(e).update(t)},w(n,v,e,r)}},{name:"cshake",padding:c,bits:l,createMethod:function(e,r){var n=b[e],i=B(e,0,"hex");return i.create=function(i,o,s){return o||s?new t(e,r,i).bytepad([o,s],n):S["shake"+e].create(i)},i.update=function(t,e,r,n){return i.create(e,r,n).update(t)},w(i,B,e,r)}},{name:"kmac",padding:c,bits:l,createMethod:function(t,r){var n=b[t],i=g(t,0,"hex");return i.create=function(i,o,s){return new e(t,r,o).bytepad(["KMAC",s],n).bytepad([i],n)},i.update=function(t,e,r,n){return i.create(t,r,n).update(e)},w(i,g,t,r)}}],S={},C=[],x=0;x<k.length;++x)for(var m=k[x],O=m.bits,z=0;z<O.length;++z){var N=m.name+"_"+O[z];if(C.push(N),S[N]=m.createMethod(O[z],m.padding),"sha3"!==m.name){var j=m.name+O[z];C.push(j),S[j]=S[N]}}t.prototype.update=function(t){if(!this.finalized){var e,n=typeof t;if("string"!==n){if("object"!==n)throw r;if(null===t)throw r;if(u&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||u&&ArrayBuffer.isView(t)))throw r;e=!0}for(var i,o,s=this.blocks,a=this.byteCount,f=t.length,c=this.blockCount,p=0,d=this.s;p<f;){if(this.reset)for(this.reset=!1,s[0]=this.block,i=1;i<c+1;++i)s[i]=0;if(e)for(i=this.start;p<f&&i<a;++p)s[i>>2]|=t[p]<<h[3&i++];else for(i=this.start;p<f&&i<a;++p)(o=t.charCodeAt(p))<128?s[i>>2]|=o<<h[3&i++]:o<2048?(s[i>>2]|=(192|o>>6)<<h[3&i++],s[i>>2]|=(128|63&o)<<h[3&i++]):o<55296||o>=57344?(s[i>>2]|=(224|o>>12)<<h[3&i++],s[i>>2]|=(128|o>>6&63)<<h[3&i++],s[i>>2]|=(128|63&o)<<h[3&i++]):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++p)),s[i>>2]|=(240|o>>18)<<h[3&i++],s[i>>2]|=(128|o>>12&63)<<h[3&i++],s[i>>2]|=(128|o>>6&63)<<h[3&i++],s[i>>2]|=(128|63&o)<<h[3&i++]);if(this.lastByteIndex=i,i>=a){for(this.start=i-a,this.block=s[c],i=0;i<c;++i)d[i]^=s[i];J(d),this.reset=!0}else this.start=i}return this}},t.prototype.encode=function(t,e){var r=255&t,n=1,i=[r];for(r=255&(t>>=8);r>0;)i.unshift(r),r=255&(t>>=8),++n;return e?i.push(n):i.unshift(n),this.update(i),i.length},t.prototype.encodeString=function(t){var e,n=typeof t;if("string"!==n){if("object"!==n)throw r;if(null===t)throw r;if(u&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||u&&ArrayBuffer.isView(t)))throw r;e=!0}var i=0,o=t.length;if(e)i=o;else for(var s=0;s<t.length;++s){var a=t.charCodeAt(s);a<128?i+=1:a<2048?i+=2:a<55296||a>=57344?i+=3:(a=65536+((1023&a)<<10|1023&t.charCodeAt(++s)),i+=4)}return i+=this.encode(8*i),this.update(t),i},t.prototype.bytepad=function(t,e){for(var r=this.encode(e),n=0;n<t.length;++n)r+=this.encodeString(t[n]);var i=e-r%e,o=[];return o.length=i,this.update(o),this},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex,r=this.blockCount,n=this.s;if(t[e>>2]|=this.padding[3&e],this.lastByteIndex===this.byteCount)for(t[0]=t[r],e=1;e<r+1;++e)t[e]=0;for(t[r-1]|=2147483648,e=0;e<r;++e)n[e]^=t[e];J(n)}},t.prototype.toString=t.prototype.hex=function(){this.finalize();for(var t,e=this.blockCount,r=this.s,n=this.outputBlocks,i=this.extraBytes,o=0,s=0,a="";s<n;){for(o=0;o<e&&s<n;++o,++s)t=r[o],a+=f[t>>4&15]+f[15&t]+f[t>>12&15]+f[t>>8&15]+f[t>>20&15]+f[t>>16&15]+f[t>>28&15]+f[t>>24&15];s%e==0&&(J(r),o=0)}return i&&(t=r[o],a+=f[t>>4&15]+f[15&t],i>1&&(a+=f[t>>12&15]+f[t>>8&15]),i>2&&(a+=f[t>>20&15]+f[t>>16&15])),a},t.prototype.arrayBuffer=function(){this.finalize();var t,e=this.blockCount,r=this.s,n=this.outputBlocks,i=this.extraBytes,o=0,s=0,a=this.outputBits>>3;t=i?new ArrayBuffer(n+1<<2):new ArrayBuffer(a);for(var u=new Uint32Array(t);s<n;){for(o=0;o<e&&s<n;++o,++s)u[s]=r[o];s%e==0&&J(r)}return i&&(u[o]=r[o],t=t.slice(0,a)),t},t.prototype.buffer=t.prototype.arrayBuffer,t.prototype.digest=t.prototype.array=function(){this.finalize();for(var t,e,r=this.blockCount,n=this.s,i=this.outputBlocks,o=this.extraBytes,s=0,a=0,u=[];a<i;){for(s=0;s<r&&a<i;++s,++a)t=a<<2,e=n[s],u[t]=255&e,u[t+1]=e>>8&255,u[t+2]=e>>16&255,u[t+3]=e>>24&255;a%r==0&&J(n)}return o&&(t=a<<2,e=n[s],u[t]=255&e,o>1&&(u[t+1]=e>>8&255),o>2&&(u[t+2]=e>>16&255)),u},(e.prototype=new t).finalize=function(){return this.encode(this.outputBits,!0),t.prototype.finalize.call(this)};var J=function(t){var e,r,n,i,o,s,a,u,f,c,h,d,l,y,b,A,v,B,g,w,_,k,S,C,x,m,O,z,N,j,J,M,H,I,R,E,U,V,F,D,W,Y,K,q,G,L,P,Q,T,X,Z,$,tt,et,rt,nt,it,ot,st,at,ut,ft,ct;for(n=0;n<48;n+=2)i=t[0]^t[10]^t[20]^t[30]^t[40],o=t[1]^t[11]^t[21]^t[31]^t[41],s=t[2]^t[12]^t[22]^t[32]^t[42],a=t[3]^t[13]^t[23]^t[33]^t[43],u=t[4]^t[14]^t[24]^t[34]^t[44],f=t[5]^t[15]^t[25]^t[35]^t[45],c=t[6]^t[16]^t[26]^t[36]^t[46],h=t[7]^t[17]^t[27]^t[37]^t[47],e=(d=t[8]^t[18]^t[28]^t[38]^t[48])^(s<<1|a>>>31),r=(l=t[9]^t[19]^t[29]^t[39]^t[49])^(a<<1|s>>>31),t[0]^=e,t[1]^=r,t[10]^=e,t[11]^=r,t[20]^=e,t[21]^=r,t[30]^=e,t[31]^=r,t[40]^=e,t[41]^=r,e=i^(u<<1|f>>>31),r=o^(f<<1|u>>>31),t[2]^=e,t[3]^=r,t[12]^=e,t[13]^=r,t[22]^=e,t[23]^=r,t[32]^=e,t[33]^=r,t[42]^=e,t[43]^=r,e=s^(c<<1|h>>>31),r=a^(h<<1|c>>>31),t[4]^=e,t[5]^=r,t[14]^=e,t[15]^=r,t[24]^=e,t[25]^=r,t[34]^=e,t[35]^=r,t[44]^=e,t[45]^=r,e=u^(d<<1|l>>>31),r=f^(l<<1|d>>>31),t[6]^=e,t[7]^=r,t[16]^=e,t[17]^=r,t[26]^=e,t[27]^=r,t[36]^=e,t[37]^=r,t[46]^=e,t[47]^=r,e=c^(i<<1|o>>>31),r=h^(o<<1|i>>>31),t[8]^=e,t[9]^=r,t[18]^=e,t[19]^=r,t[28]^=e,t[29]^=r,t[38]^=e,t[39]^=r,t[48]^=e,t[49]^=r,y=t[0],b=t[1],L=t[11]<<4|t[10]>>>28,P=t[10]<<4|t[11]>>>28,z=t[20]<<3|t[21]>>>29,N=t[21]<<3|t[20]>>>29,at=t[31]<<9|t[30]>>>23,ut=t[30]<<9|t[31]>>>23,Y=t[40]<<18|t[41]>>>14,K=t[41]<<18|t[40]>>>14,I=t[2]<<1|t[3]>>>31,R=t[3]<<1|t[2]>>>31,A=t[13]<<12|t[12]>>>20,v=t[12]<<12|t[13]>>>20,Q=t[22]<<10|t[23]>>>22,T=t[23]<<10|t[22]>>>22,j=t[33]<<13|t[32]>>>19,J=t[32]<<13|t[33]>>>19,ft=t[42]<<2|t[43]>>>30,ct=t[43]<<2|t[42]>>>30,et=t[5]<<30|t[4]>>>2,rt=t[4]<<30|t[5]>>>2,E=t[14]<<6|t[15]>>>26,U=t[15]<<6|t[14]>>>26,B=t[25]<<11|t[24]>>>21,g=t[24]<<11|t[25]>>>21,X=t[34]<<15|t[35]>>>17,Z=t[35]<<15|t[34]>>>17,M=t[45]<<29|t[44]>>>3,H=t[44]<<29|t[45]>>>3,C=t[6]<<28|t[7]>>>4,x=t[7]<<28|t[6]>>>4,nt=t[17]<<23|t[16]>>>9,it=t[16]<<23|t[17]>>>9,V=t[26]<<25|t[27]>>>7,F=t[27]<<25|t[26]>>>7,w=t[36]<<21|t[37]>>>11,_=t[37]<<21|t[36]>>>11,$=t[47]<<24|t[46]>>>8,tt=t[46]<<24|t[47]>>>8,q=t[8]<<27|t[9]>>>5,G=t[9]<<27|t[8]>>>5,m=t[18]<<20|t[19]>>>12,O=t[19]<<20|t[18]>>>12,ot=t[29]<<7|t[28]>>>25,st=t[28]<<7|t[29]>>>25,D=t[38]<<8|t[39]>>>24,W=t[39]<<8|t[38]>>>24,k=t[48]<<14|t[49]>>>18,S=t[49]<<14|t[48]>>>18,t[0]=y^~A&B,t[1]=b^~v&g,t[10]=C^~m&z,t[11]=x^~O&N,t[20]=I^~E&V,t[21]=R^~U&F,t[30]=q^~L&Q,t[31]=G^~P&T,t[40]=et^~nt&ot,t[41]=rt^~it&st,t[2]=A^~B&w,t[3]=v^~g&_,t[12]=m^~z&j,t[13]=O^~N&J,t[22]=E^~V&D,t[23]=U^~F&W,t[32]=L^~Q&X,t[33]=P^~T&Z,t[42]=nt^~ot&at,t[43]=it^~st&ut,t[4]=B^~w&k,t[5]=g^~_&S,t[14]=z^~j&M,t[15]=N^~J&H,t[24]=V^~D&Y,t[25]=F^~W&K,t[34]=Q^~X&$,t[35]=T^~Z&tt,t[44]=ot^~at&ft,t[45]=st^~ut&ct,t[6]=w^~k&y,t[7]=_^~S&b,t[16]=j^~M&C,t[17]=J^~H&x,t[26]=D^~Y&I,t[27]=W^~K&R,t[36]=X^~$&q,t[37]=Z^~tt&G,t[46]=at^~ft&et,t[47]=ut^~ct&rt,t[8]=k^~y&A,t[9]=S^~b&v,t[18]=M^~C&m,t[19]=H^~x&O,t[28]=Y^~I&E,t[29]=K^~R&U,t[38]=$^~q&L,t[39]=tt^~G&P,t[48]=ft^~et&nt,t[49]=ct^~rt&it,t[0]^=p[n],t[1]^=p[n+1]};if(s)module.exports=S;else{for(x=0;x<C.length;++x)i[C[x]]=S[C[x]];a&&define(function(){return S})}}();
//------------------------------------------------------------------------

// The next function was creted by "Chen, Yi-Cyuan [emn178@gmail.com]"
// In that script:
// [js-sha1] https://github.com/emn178/js-sha1

//------------------------------------------------------------------------
!function(){"use strict";function t(t){t?(f[0]=f[16]=f[1]=f[2]=f[3]=f[4]=f[5]=f[6]=f[7]=f[8]=f[9]=f[10]=f[11]=f[12]=f[13]=f[14]=f[15]=0,this.blocks=f):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.h0=1732584193,this.h1=4023233417,this.h2=2562383102,this.h3=271733878,this.h4=3285377520,this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}var h="object"==typeof window?window:{},s=!h.JS_SHA1_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;s&&(h=global);var i=!h.JS_SHA1_NO_COMMON_JS&&"object"==typeof module&&module.exports,e="function"==typeof define&&define.amd,r="0123456789abcdef".split(""),o=[-2147483648,8388608,32768,128],n=[24,16,8,0],a=["hex","array","digest","arrayBuffer"],f=[],u=function(h){return function(s){return new t(!0).update(s)[h]()}},c=function(){var h=u("hex");s&&(h=p(h)),h.create=function(){return new t},h.update=function(t){return h.create().update(t)};for(var i=0;i<a.length;++i){var e=a[i];h[e]=u(e)}return h},p=function(t){var h=eval("require('crypto')"),s=eval("require('buffer').Buffer"),i=function(i){if("string"==typeof i)return h.createHash("sha1").update(i,"utf8").digest("hex");if(i.constructor===ArrayBuffer)i=new Uint8Array(i);else if(void 0===i.length)return t(i);return h.createHash("sha1").update(new s(i)).digest("hex")};return i};t.prototype.update=function(t){if(!this.finalized){var s="string"!=typeof t;s&&t.constructor===h.ArrayBuffer&&(t=new Uint8Array(t));for(var i,e,r=0,o=t.length||0,a=this.blocks;r<o;){if(this.hashed&&(this.hashed=!1,a[0]=this.block,a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),s)for(e=this.start;r<o&&e<64;++r)a[e>>2]|=t[r]<<n[3&e++];else for(e=this.start;r<o&&e<64;++r)(i=t.charCodeAt(r))<128?a[e>>2]|=i<<n[3&e++]:i<2048?(a[e>>2]|=(192|i>>6)<<n[3&e++],a[e>>2]|=(128|63&i)<<n[3&e++]):i<55296||i>=57344?(a[e>>2]|=(224|i>>12)<<n[3&e++],a[e>>2]|=(128|i>>6&63)<<n[3&e++],a[e>>2]|=(128|63&i)<<n[3&e++]):(i=65536+((1023&i)<<10|1023&t.charCodeAt(++r)),a[e>>2]|=(240|i>>18)<<n[3&e++],a[e>>2]|=(128|i>>12&63)<<n[3&e++],a[e>>2]|=(128|i>>6&63)<<n[3&e++],a[e>>2]|=(128|63&i)<<n[3&e++]);this.lastByteIndex=e,this.bytes+=e-this.start,e>=64?(this.block=a[16],this.start=e-64,this.hash(),this.hashed=!0):this.start=e}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,h=this.lastByteIndex;t[16]=this.block,t[h>>2]|=o[3&h],this.block=t[16],h>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},t.prototype.hash=function(){var t,h,s=this.h0,i=this.h1,e=this.h2,r=this.h3,o=this.h4,n=this.blocks;for(t=16;t<80;++t)h=n[t-3]^n[t-8]^n[t-14]^n[t-16],n[t]=h<<1|h>>>31;for(t=0;t<20;t+=5)s=(h=(i=(h=(e=(h=(r=(h=(o=(h=s<<5|s>>>27)+(i&e|~i&r)+o+1518500249+n[t]<<0)<<5|o>>>27)+(s&(i=i<<30|i>>>2)|~s&e)+r+1518500249+n[t+1]<<0)<<5|r>>>27)+(o&(s=s<<30|s>>>2)|~o&i)+e+1518500249+n[t+2]<<0)<<5|e>>>27)+(r&(o=o<<30|o>>>2)|~r&s)+i+1518500249+n[t+3]<<0)<<5|i>>>27)+(e&(r=r<<30|r>>>2)|~e&o)+s+1518500249+n[t+4]<<0,e=e<<30|e>>>2;for(;t<40;t+=5)s=(h=(i=(h=(e=(h=(r=(h=(o=(h=s<<5|s>>>27)+(i^e^r)+o+1859775393+n[t]<<0)<<5|o>>>27)+(s^(i=i<<30|i>>>2)^e)+r+1859775393+n[t+1]<<0)<<5|r>>>27)+(o^(s=s<<30|s>>>2)^i)+e+1859775393+n[t+2]<<0)<<5|e>>>27)+(r^(o=o<<30|o>>>2)^s)+i+1859775393+n[t+3]<<0)<<5|i>>>27)+(e^(r=r<<30|r>>>2)^o)+s+1859775393+n[t+4]<<0,e=e<<30|e>>>2;for(;t<60;t+=5)s=(h=(i=(h=(e=(h=(r=(h=(o=(h=s<<5|s>>>27)+(i&e|i&r|e&r)+o-1894007588+n[t]<<0)<<5|o>>>27)+(s&(i=i<<30|i>>>2)|s&e|i&e)+r-1894007588+n[t+1]<<0)<<5|r>>>27)+(o&(s=s<<30|s>>>2)|o&i|s&i)+e-1894007588+n[t+2]<<0)<<5|e>>>27)+(r&(o=o<<30|o>>>2)|r&s|o&s)+i-1894007588+n[t+3]<<0)<<5|i>>>27)+(e&(r=r<<30|r>>>2)|e&o|r&o)+s-1894007588+n[t+4]<<0,e=e<<30|e>>>2;for(;t<80;t+=5)s=(h=(i=(h=(e=(h=(r=(h=(o=(h=s<<5|s>>>27)+(i^e^r)+o-899497514+n[t]<<0)<<5|o>>>27)+(s^(i=i<<30|i>>>2)^e)+r-899497514+n[t+1]<<0)<<5|r>>>27)+(o^(s=s<<30|s>>>2)^i)+e-899497514+n[t+2]<<0)<<5|e>>>27)+(r^(o=o<<30|o>>>2)^s)+i-899497514+n[t+3]<<0)<<5|i>>>27)+(e^(r=r<<30|r>>>2)^o)+s-899497514+n[t+4]<<0,e=e<<30|e>>>2;this.h0=this.h0+s<<0,this.h1=this.h1+i<<0,this.h2=this.h2+e<<0,this.h3=this.h3+r<<0,this.h4=this.h4+o<<0},t.prototype.hex=function(){this.finalize();var t=this.h0,h=this.h1,s=this.h2,i=this.h3,e=this.h4;return r[t>>28&15]+r[t>>24&15]+r[t>>20&15]+r[t>>16&15]+r[t>>12&15]+r[t>>8&15]+r[t>>4&15]+r[15&t]+r[h>>28&15]+r[h>>24&15]+r[h>>20&15]+r[h>>16&15]+r[h>>12&15]+r[h>>8&15]+r[h>>4&15]+r[15&h]+r[s>>28&15]+r[s>>24&15]+r[s>>20&15]+r[s>>16&15]+r[s>>12&15]+r[s>>8&15]+r[s>>4&15]+r[15&s]+r[i>>28&15]+r[i>>24&15]+r[i>>20&15]+r[i>>16&15]+r[i>>12&15]+r[i>>8&15]+r[i>>4&15]+r[15&i]+r[e>>28&15]+r[e>>24&15]+r[e>>20&15]+r[e>>16&15]+r[e>>12&15]+r[e>>8&15]+r[e>>4&15]+r[15&e]},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var t=this.h0,h=this.h1,s=this.h2,i=this.h3,e=this.h4;return[t>>24&255,t>>16&255,t>>8&255,255&t,h>>24&255,h>>16&255,h>>8&255,255&h,s>>24&255,s>>16&255,s>>8&255,255&s,i>>24&255,i>>16&255,i>>8&255,255&i,e>>24&255,e>>16&255,e>>8&255,255&e]},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(20),h=new DataView(t);return h.setUint32(0,this.h0),h.setUint32(4,this.h1),h.setUint32(8,this.h2),h.setUint32(12,this.h3),h.setUint32(16,this.h4),t};var y=c();i?module.exports=y:(h.sha1=y,e&&define(function(){return y}))}();
//------------------------------------------------------------------------

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
