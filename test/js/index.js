

insert('p','#p',null,'body');

startTimer(1,function(){
  getElement('#p').innerHTML = countdown("Dec 25, 2017 00:00:00");
});