
getElement('#last-vers').innerHTML = "Last version: " + localStorage.getItem('blackjs-last-vers');

onClick('#githubpage_btn',function(){

	go('https://github.com/JoaquinGiordano/BlackJS');

});

onClick('#email_btn',function(){

	go('mailto:joaquin_giordano@outlook.com');

});

onClick('#download_btn',function(){

	go('https://joaquingiordano.github.io/BlackJS/versions/blackjs-'+ localStorage.getItem('blackjs-last-vers') +'.min.js');

});

onClick('#download_unc_btn',function(){

	go('https://joaquingiordano.github.io/BlackJS/versions/blackjs-'+ localStorage.getItem('blackjs-last-vers') +'.js');

});

onClick('#creator_page_btn',function(){

	go('https://joaquingiordano.github.io/');

});


onClick('#creator_gh_page_btn',function(){

	go('https://github.com/JoaquinGiordano');

});

