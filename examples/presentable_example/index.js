insert('img','#i_image','.image','#container','https://avatars1.githubusercontent.com/u/30562925?s=460&v=4');

insert('h1','#name','.h1','#container','Joaquin Giordano');

insert('p','#description','.p','#container','Working in Xion Corporation If you want to join to Xion Corporation or contact me, just send me an e-mail');

insert('button','#github_btn','.btn','#container','Go to GitHub Page');

onClick('#github_btn',function(){

	go('https://github.com/JoaquinGiordano');
	
});