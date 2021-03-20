
$(document).ready(function($) {
	$('.site-header__burger').click(function() {
		$('.menu__list').toggle(300, function(){
		if( $('.menu__list').css('display') != "none"){
			$('.site-header__burger').css("background-image","url('img/close.png')");}
		else{
			$('.site-header__burger').css("background-image","url('img/burger.png')");
			}}
		)
	});
})	
