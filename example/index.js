insert('img','#images',null,'#container','https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/flip.jpg');

insert('a',null,null,'#container','Dog Image','https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/flip.jpg')

insert('p','#paper2',null,'#container','hello');

log(chars('#paper'));

getElement('#paper2').innerHTML = "Sum number: " + sum([2,2,2]) + " Subs number: " + subs([256,128,64]) + " Devide number: " + devide([10,2]) + " Multiply number: " + multiply([5,5]);

log(getText('#paper2'));

log(getImageSrc('#images'));

setImageSrc('#images','http://www.freepngimg.com/download/github/1-2-github-free-png-image.png');

log(getImageSrc('#images'));

log(getChar('#paper2',0));

//go("https://www.facebook.com/");

onPressKey('#area',32,function(){
	console.log('The space key has been pressed');
});

onClick('#btn',function(){
	go('https://github.com/JoaquinGiordano');
});

onDocumentReady(function(){
	console.log('The page has been charged');
});

onChange('#area',function(){
	console.log('Change on the TextArea');
})

loop(5,function(){
	console.log("loop");
});

console.log(time(["day","month","year"]));
console.log(time(["hour","minute","second"]));