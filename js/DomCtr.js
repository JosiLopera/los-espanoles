app.DomCtr = {
	matchesCount:0,
	errorsCount:0,
	runningTime: 0,
	timeLimit: $("#selectTime").val(),
	repetitions: 2,
	totalCarts: [1,2,3,4,5,6,7,8,9,10,11,12],

	init: function(){
		this.managerCtr();
	},

	managerCtr: function(){
		//doubler le cartes et les mettre en mode aleatoire 
		for (var iCount = 0; iCount < this.repetitions; iCount++) {
			totalCarts=this.totalCarts.sort(function(){
				return Math.random() - 0.5;
			});
			//crée et placer les cartes 
			for (var iCarts = 0; iCarts < totalCarts.length; iCarts++) {
				$("#grid").append('<div class="cartsGrid" data-switch="on" data-state="'+totalCarts[iCarts]+'"><div class="front"></div><div class="back"></div></div>');								
			};
		};

		app.showCarts();
		$("#play").append('<div id="reset"></div>');
		$("#reset").on('click', function(){
			app.DomCtr.resetCounts();
			app.aniReset();
		});
		$("#scorePlay").before('<div id="pause"></div>');
		//genere les elements du score
		$('#scorePlay').append('<div id="matches"><h2>Matches</h2><p>'+this.matchesCount+'</p></div><div id="errors"><h2>Errors</h2><p>'+this.errorsCount+'</p></div><div id="time"><h2>Time</h2><p>'+this.timeLimit+'</p></div>');
		app.aniCarts();//effect cartes grille 
	},

	remTime: function(){
		if(!app.settings.gameOver){
			if (!app.settings.reset) { 
				if(this.runningTime>this.timeLimit) {
					app.settings.gameOver = true;
					this.gameOverTime();
					console.log('game over time');
				}else{
					if (!app.settings.pause) {
						setTimeout(function(){app.DomCtr.remTime();},1000);		
						$('#time').find('p').html(app.DomCtr.timeLimit-app.DomCtr.runningTime);
						//console.log(app.DomCtr.timeLimit-app.DomCtr.runningTime);
						app.DomCtr.runningTime++;
					}else{
						$("#content").before('<div id="maskOver"><div id="contentMaskPause"><div id="pauseTitle"></div><h1 id="continue">Continue...</h1></div></div>');
						app.aniPause();
						app.startGame.pause();
					}
				}
			}else{
				app.DomCtr.runningTime = 0;
			}
		}
	},

	addMask: function(){
		$("#content").before('<div id="mask"></div>');
	},

	removeMask: function(){
		$("#mask").remove();
	},

	gameOverTime: function(){
		var finalTime = app.DomCtr.timeLimit-app.DomCtr.runningTime; 
		var scoreFinal;
		if (app.DomCtr.errorsCount==0) {
			scoreFinal = 0;
		}else{
			var totalMatch = app.DomCtr.matchesCount*2;
			if (this.timeLimit==120) {scoreFinal = parseInt((app.DomCtr.errorsCount / 5)+totalMatch);};
			if (this.timeLimit==90) {scoreFinal = parseInt((app.DomCtr.errorsCount / 4)+totalMatch);};
			if (this.timeLimit==60) {scoreFinal = parseInt((app.DomCtr.errorsCount / 3)+totalMatch);};
			if (this.timeLimit==30) {scoreFinal = parseInt((app.DomCtr.errorsCount / 2)+totalMatch);};
		};
		$("#content").before('<div id="maskOver"><div id="contentMaskOver"><div id="gameOver"></div><div id="contentScore"><div id="score"></div><p>'+scoreFinal+ '</p></div><div id="try"></div><div id="share"></div></div></div>');
		app.aniGameOver();
		$("#try").on('click', function(){
			app.DomCtr.resetCounts();
			app.aniTry();
		});
	},

	gameOverMatches: function(){
		var finalTime = app.DomCtr.timeLimit-app.DomCtr.runningTime;
		var scoreFinal;
		var totalMatch = app.DomCtr.matchesCount*2-app.DomCtr.errorsCount;
		if (totalMatch<=0) {totalMatch = 1;};
		if (this.timeLimit==120) {scoreFinal = parseInt(totalMatch*finalTime+5);};
		if (this.timeLimit==90) {scoreFinal = parseInt(totalMatch*finalTime*1.33+10);};
		if (this.timeLimit==60) {scoreFinal = parseInt(totalMatch*finalTime*2+15);};
		if (this.timeLimit==30) {scoreFinal = parseInt(totalMatch*finalTime*4+20);};
		$("#content").before('<div id="maskOver"><div id="contentMaskOver"><div id="wellDone"></div><div id="contentScore"><div id="score"></div><p>'+scoreFinal+'</p></div><div id="try"></div><div id="share"></div></div></div>');
		//console.log(parseInt(app.DomCtr.matchesCount*(finalTime / app.DomCtr.errorsCount)));
		$("#try").on('click', function(){
			app.DomCtr.resetCounts();
			app.aniTry();
			
		});
	},

	resetCounts: function(){
		app.DomCtr.matchesCount = 0;
		app.DomCtr.errorsCount = 0;
		app.DomCtr.runningTime = 0;
		$('#matches').find('p').html(this.matchesCount);
		$('#errors').find('p').html(this.errorsCount);
		$('#time').find('p').html(app.DomCtr.timeLimit);
	}

}