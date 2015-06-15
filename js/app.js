var app = {

	init: function(){
		app.aniDocReady();
		console.log('app initialized...');	
		this.view();
	},

	view: function(){
		//on commence le jeu
		$("#start").on('click',function(){
			app.DomCtr.timeLimit = $("#selectTime").val();
			if (app.settings.gameOver) {
				app.settings.gameOver = false;
			};
			if (app.settings.reset) {
				app.settings.reset = false;
			};
			app.DomCtr.addMask();
			app.aniBackground();
			app.aniPage();
			setTimeout(function(){
				app.startGame.init();
				app.aniBackCarts();
				app.aniMETRP();
			 }, 1000);
			console.log('game started...');
			app.settings.gameStarted = true;
			if (app.settings.gameStarted == true) {
				setTimeout(function(){
					console.log('gameStarted!!!!');
					app.DomCtr.removeMask();
					app.DomCtr.remTime();
				}, 4000);
			};		
		});	
	},

	aniDocReady: function(){
		$(document).ready(function(){
			app.aniHome();
		});
	},

	aniHome: function(){
		$("#logo").animate({marginTop:"-65", opacity:"1"},1000);
		$("#contentOptions").delay(500).animate({marginTop:"60px",opacity:"1"},1000);
		$("#contentRules").delay(1200).animate({marginRight:"-65px",opacity:"1"},1000);
	},

	aniPage: function(){
		$("#home").fadeOut("slow");
		$("#play").css({'width': "760px", 'height': "550px"});
		$("#grid").css({'width': "524px", 'height': "508px"});
	},

	aniBackground: function(){
		setTimeout(function(){ 
			var themeBack = $("#serlecTheme").val();

			if (themeBack=='oro') {
				console.log('oro');
				$("#wrapper").css({'background-position': '-760px -550px'}).animate({'background-position': '-760px 0'}); 
			};
			if (themeBack=='espadas') {
				console.log('espadas');
				$("#wrapper").css({'background-position': '-760px -550px'}).animate({'background-position': '0 -550px'});
			};
			if (themeBack=='copas') {
				console.log('copas');
				$("#wrapper").css({'background-position': '-760px -550px'}).animate({'background-position': '-760px -1100px'});
			};
			if (themeBack=='bastos') {
				console.log('bastos');
				$("#wrapper").css({'background-position': '-760px -550px'}).animate({'background-position': '-1520px -550px'});
			};
		},1000);
	},

	aniBackgroundOut: function(){
		setTimeout(function(){ 
			var themeBack = $("#serlecTheme").val();

			if (themeBack=='oro') {
				console.log('oro');
				$("#wrapper").css({'background-position': '-760px 0'}).animate({'background-position': '-760px -550px'}); 
			};
			if (themeBack=='espadas') {
				console.log('espadas');
				$("#wrapper").css({'background-position': '0 -550px'}).animate({'background-position': '-760px -550px'});
			};
			if (themeBack=='copas') {
				console.log('copas');
				$("#wrapper").css({'background-position': '-760px -1100px'}).animate({'background-position': '-760px -550px'});
			};
			if (themeBack=='bastos') {
				console.log('bastos');
				$("#wrapper").css({'background-position': '-1520px -550px'}).animate({'background-position': '-760px -550px'});
			};
		},1000);
	},

	aniBackCarts: function(){
		var themeBackCarts = $("#serlecTheme").val();

		if (themeBackCarts=='oro') {
			$(".back").css({'background-image': "url(./img/backOro.jpg)"});
		};
		if (themeBackCarts=='espadas') {
			$(".back").css({'background-image': "url(./img/backEspadas.jpg)"});
		};
		if (themeBackCarts=='copas') {
			$(".back").css({'background-image': "url(./img/backCopas.jpg)"});
		};
		if (themeBackCarts=='bastos') {
			$(".back").css({'background-image': "url(./img/backBastos.jpg)"});
		};
	},

	aniMETRP: function(){
		$("#matches").delay(1200).animate({width:"150px", opacity:"1"}, 1000);
		$("#errors").delay(1400).animate({width:"150px", opacity:"1"}, 1000);
		$("#time").delay(1600).animate({width:"150px", opacity:"1"}, 1000);
		$("#matches h2, #errors h2, #time h2").delay(2600).animate({fontSize:"24px", paddingTop: "12px", opacity:"1"}, 300);
		$("#matches p, #errors p, #time p").delay(3500).animate({fontSize:"26px", opacity:"1"}, 300);
		$("#pause").delay(1400).animate({margin:"25px 0 0 60px", opacity:"1"}, 500);
		$("#reset").delay(1600).animate({margin:"490px 0 0 60px", opacity:"1"}, 500);
	},

	aniCarts: function(){
		$(".cartsGrid").on('mouseenter',function(){
			if(!app.settings.gameOver){ 
				if (!$(this).hasClass("flip")) {
					$(this).stop(true,true).animate({top:"-10px"}, 10);
				};
			};
		});
		$(".cartsGrid").on('mouseleave',function(){
			$(this).stop(true,true).animate({top:"0"}, 10);
		});
	},

	showCarts: function(){
		var delay=0;
		$(".cartsGrid").each(function(){
    		$(this).stop(true,true).delay(delay).animate({opacity:1},500);
    		delay += 100;
		});
	},

	aniGameOver: function(){
		$("#maskOver").animate({opacity:1},500);
		$("#contentMaskOver").animate({opacity:1},1000);
		$("#wellDone").delay(1000).animate({marginLeft:"79px", opacity:"1"}, 500);
		$("#gameOver").delay(1000).animate({marginLeft:"76px", opacity:"1"}, 500);
		$("#try, #share").delay(1400).animate({marginTop:"270px", opacity:"1"}, 500);
		$("#contentScore").delay(1200).animate({width:"278px", opacity:"1"}, 1000);
		$("#score").delay(2200).animate({width:"104px", height:"57px", marginLeft:"130px", marginTop:"15px", opacity:"1"}, 300);
		$("#contentScore p").delay(2600).animate({fontSize:"36px", margin: "0 0 0 180px", opacity:"1"}, 300);
	},

	aniPause: function(){
		$("#maskOver").animate({opacity:1},100);
		$("#contentMaskPause").animate({opacity:1},500);
		$("#pauseTitle").delay(500).animate({opacity:1},500);
		$("#continue").delay(800).animate({marginLeft:"120px", opacity:"1"}, 500);
		$("#continue").on('mouseenter',function(){
			$(this).stop(true,true).animate({marginTop:"167px"}, 200);
		});
		$("#continue").on('mouseleave',function(){
			$(this).stop(true,true).animate({marginTop:"170px"}, 200);
		});

	},

	aniReset: function(){
		app.settings.reset = true;
		$("#pause").animate({margin:"-15px 0 0 60px", opacity:"0"});
		$("#reset").animate({margin:"520px 0 0 60px", opacity:"0"});
		$("#matches").animate({width:"1px", opacity:"0"}, 500);
		$("#errors").animate({width:"1", opacity:"0"}, 500);
		$("#time").animate({width:"1", opacity:"0"}, 500);
		$("#matches h2, #errors h2, #time h2").animate({fontSize:"48px", paddingTop: "0", opacity:"1"}, 500);
		$("#matches p, #errors p, #time p").animate({fontSize:"52px", opacity:"0"}, 500);
		$(".cartsGrid").remove();
		$("#play").delay(1000).animate({width: "0", height: "0"});
		$("#grid").delay(1000).animate({width: "0", height: "0"}); 
		app.aniBackgroundOut();
		$("#home").delay(2000).fadeIn("slow");
		setTimeout(function(){
			app.DomCtr.remTime();
			console.log(app.DomCtr.runningTime);
			$("#pause, #reset, #matches, #errors, #time").remove();
		},500);

			
	},

	aniTry: function(){
		app.settings.reset = true;
		$("#maskOver").remove();
		$("#pause").animate({margin:"-15px 0 0 60px", opacity:"0"});
		$("#reset").animate({margin:"520px 0 0 60px", opacity:"0"});
		$("#matches").animate({width:"1px", opacity:"0"}, 500);
		$("#errors").animate({width:"1", opacity:"0"}, 500);
		$("#time").animate({width:"1", opacity:"0"}, 500);
		$("#matches h2, #errors h2, #time h2").animate({fontSize:"48px", paddingTop: "0", opacity:"1"}, 500);
		$("#matches p, #errors p, #time p").animate({fontSize:"52px", opacity:"0"}, 500);
		$(".cartsGrid").remove();
		$("#play").delay(1000).animate({width: "0", height: "0"});
		$("#grid").delay(1000).animate({width: "0", height: "0"}); 
		app.aniBackgroundOut();
		$("#home").delay(2000).fadeIn("slow");
		setTimeout(function(){
			$("#pause, #reset, #matches, #errors, #time").remove();
		},500);	
	}
}