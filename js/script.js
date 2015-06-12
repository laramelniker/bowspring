/*SMOOTH SCROLL*/
$("a[href^=#]").click(function(e) { 
	e.preventDefault(); 
	var dest = $(this).attr('href'); 
	$('html,body').animate({ 
		scrollTop: $(dest).offset().top 
	}, 'slow'); 
});

/*SHOW-HIDE MOBILE MENU*/
var hamburgerButton = document.getElementById('hamburger-button');
hamburgerButton.addEventListener('click',function(){
	var headerMenu = document.getElementById('nav-buttons');
	headerMenu.classList.add('show');
	if (headerMenu.classList[1] = 'show'){
		headerMenu.addEventListener('click',function(){
			headerMenu.classList.remove('show');
		})
	}
}, false);
