
	getElement('#last-vers').html.add("Last version: " + getData('blackjs-last-vers'));

	getElement('#githubpage_btn').onClick(function(){
		go('https://github.com/JoaquinGiordano/BlackJS');
	});

	getElement('#email_btn').onClick(function(){
		go('mailto:joaquin_giordano@outlook.com');
	});

	getElement('#download_btn').onClick(function(){
		go('https://joaquingiordano.github.io/BlackJS/versions/blackjs-'+ getData('blackjs-last-vers') +'.min.js');
	});

	getElement('#download_unc_btn').onClick(function(){
		go('https://joaquingiordano.github.io/BlackJS/versions/blackjs-'+ getData('blackjs-last-vers') +'.js');
	});

	getElement('#creator_page_btn').onClick(function(){
		go('https://joaquingiordano.github.io/');
	});

	getElement('#creator_gh_page_btn').onClick(function(){
		go('https://github.com/JoaquinGiordano');
	});
