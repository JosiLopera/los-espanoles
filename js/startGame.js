app.startGame = {

	init: function(){
		app.DomCtr.init();
		this.play();
		this.pause();
	},

	play: function(){

		var obj1;
		var obj2;
		var theme = $("#serlecTheme").val();
		var selectedTime = $('#selectTime').val();
		
		$(".cartsGrid").on('click', function(){
			if (!app.settings.gameOver && $(this).attr('data-switch')!='off') { // verification - game over et data-switch = element ne soit pas deja matché
				if (!$(this).hasClass('flip')) { // verification - ne peut pas cliquer sur le meme obj
					var strImg='./img/'+theme+'/'+$(this).attr('data-state')+'.jpg';
					if (obj1==undefined) { //definition des objets a comparer 
						obj1=$(this);
						obj1.find('.front').css('background-image','url('+strImg+')');
						$(this).toggleClass('flip');
					}else{
						obj2=$(this);
						obj2.find('.front').css('background-image','url('+strImg+')');
						$(this).toggleClass('flip');
						app.startGame.matches(obj1, obj2);
						app.startGame.maskMatches(obj1, obj2);
						obj1=undefined;
					};
				};	
			};		
		});	
	},

	matches: function(obj1, obj2){
		if (obj1.index()!=obj2.index()) { //varification - il ne soit pas le meme obj
			if (obj1.attr('data-state')==obj2.attr('data-state')) { //verification s'il y a match ou pas
				setTimeout(function(){
					obj1.add(obj2).attr('data-switch','off').animate({opacity: 0},500).css('cursor','default'); //change les attr des elements matché
					setTimeout(function(){obj1.add(obj2).toggleClass('flip');}, 1000);
					app.DomCtr.removeMask();
					console.log('match');
					app.DomCtr.matchesCount++;
					if (app.DomCtr.matchesCount==app.DomCtr.totalCarts.length) {// game over veritication
						app.settings.gameOver = true;
						console.log('game over matches');
						app.DomCtr.gameOverMatches();// afficher le score final
						app.aniGameOver();// apelle l'animation pour finir le jeu
					};
					$('#matches').find('p').html(app.DomCtr.matchesCount);
					console.log(app.DomCtr.matchesCount);	
				}, 1000);	
			}else{
				setTimeout(function(){
					$('.flip').toggleClass('flip');
					app.DomCtr.removeMask();
					console.log('no match');
					app.DomCtr.errorsCount++;
					$('#errors').find('p').html(app.DomCtr.errorsCount);
					console.log(app.DomCtr.errorsCount);
				}, 1000);
			}
		};
	},

	maskMatches: function(obj1, obj2){
		if (obj1!=undefined && obj2!=undefined) {
			app.DomCtr.addMask();
		}
	},

	pause: function(){
		$("#pause").on('click', function(){
			app.settings.pause = true;
			console.log('game paused');
		});
		$("#continue").on('click', function(){
			app.settings.pause = false;
			$("#maskOver").remove();
			app.DomCtr.remTime();	
			console.log(app.settings.pause);
		});
	}
}