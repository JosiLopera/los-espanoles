var img = [
	// {id:   '1', src:  'http://upload.wikimedia.org/wikipedia/commons/a/a2/Polycyclic_Aromatic_Hydrocarbons_In_Space.jpg'},
	//{id:   '4', src:  'http://upload.wikimedia.org/wikipedia/commons/c/cb/WA_-_Dry_Falls_-_Huge_Channel_v1.png'},
	{src:"./img/logo.png", id:"logo"},
	{src:"./img/pause.png", id:"pause"},
	{src:"./img/reset.png", id:"reset"},
	{src:"./img/score.png", id:"score"},
	{src:"./img/share.png", id:"share"},
	{src:"./img/wellDone.png", id:"wd"},
	{src:"./img/try.png", id:"logo"},
	{src:"./img/gameOver.png", id:"go"},
	{src:"./img/fondScore.png", id:"fs"},
	{src:"./img/fondFinal.jpg", id:"ff"},
	{src:"./img/fondMaster.jpg", id:"fm"},
	{src:"./img/border.png", id:"border"},
	{src:"./img/backBastos.jpg", id:"bb"},
	{src:"./img/backCopas.jpg", id:"bc"},
	{src:"./img/backEspadas.jpg", id:"be"},
	{src:"./img/backOro.jpg", id:"bo"},
	{src:"./img/bastos/1.jpg", id:"b1"},
	{src:"./img/bastos/2.jpg", id:"b2"},
	{src:"./img/bastos/3.jpg", id:"b3"},
	{src:"./img/bastos/4.jpg", id:"b4"},
	{src:"./img/bastos/5.jpg", id:"b5"},
	{src:"./img/bastos/6.jpg", id:"b6"},
	{src:"./img/bastos/7.jpg", id:"b7"},
	{src:"./img/bastos/8.jpg", id:"b8"},
	{src:"./img/bastos/9.jpg", id:"b9"},
	{src:"./img/bastos/10.jpg", id:"b10"},
	{src:"./img/bastos/11.jpg", id:"b11"},
	{src:"./img/bastos/12.jpg", id:"b12"},
	{src:"./img/copas/1.jpg", id:"c1"},
	{src:"./img/copas/2.jpg", id:"c2"},
	{src:"./img/copas/3.jpg", id:"c3"},
	{src:"./img/copas/4.jpg", id:"c4"},
	{src:"./img/copas/5.jpg", id:"c5"},
	{src:"./img/copas/6.jpg", id:"c6"},
	{src:"./img/copas/7.jpg", id:"c7"},
	{src:"./img/copas/8.jpg", id:"c8"},
	{src:"./img/copas/9.jpg", id:"c9"},
	{src:"./img/copas/10.jpg", id:"c10"},
	{src:"./img/copas/11.jpg", id:"c11"},
	{src:"./img/copas/12.jpg", id:"c12"},
	{src:"./img/espadas/1.jpg", id:"e1"},
	{src:"./img/espadas/2.jpg", id:"e2"},
	{src:"./img/espadas/3.jpg", id:"e3"},
	{src:"./img/espadas/4.jpg", id:"e4"},
	{src:"./img/espadas/5.jpg", id:"e5"},
	{src:"./img/espadas/6.jpg", id:"e6"},
	{src:"./img/espadas/7.jpg", id:"e7"},
	{src:"./img/espadas/8.jpg", id:"e8"},
	{src:"./img/espadas/9.jpg", id:"e9"},
	{src:"./img/espadas/10.jpg", id:"e10"},
	{src:"./img/espadas/11.jpg", id:"e11"},
	{src:"./img/espadas/12.jpg", id:"e12"},
	{src:"./img/oro/1.jpg", id:"o1"},
	{src:"./img/oro/2.jpg", id:"o2"},
	{src:"./img/oro/3.jpg", id:"o3"},
	{src:"./img/oro/4.jpg", id:"o4"},
	{src:"./img/oro/5.jpg", id:"o5"},
	{src:"./img/oro/6.jpg", id:"o6"},
	{src:"./img/oro/7.jpg", id:"o7"},
	{src:"./img/oro/8.jpg", id:"o8"},
	{src:"./img/oro/9.jpg", id:"o9"},
	{src:"./img/oro/10.jpg", id:"o10"},
	{src:"./img/oro/11.jpg", id:"o11"},
	{src:"./img/oro/12.jpg", id:"o12"},
];

var loader = new createjs.LoadQueue();

loader.on('complete', onComplete);
loader.on('progress', onProgress);

function onComplete(event){
	$("#loadGif").fadeOut(500);
	setTimeout(function(){
		$("#loadBox").fadeOut(500);
		app.init();
	},500);
};
function onProgress(event){
	var progress = Math.round(event.loaded * 100);
	console.log('progress', progress);
	$('#progress').text(progress + '%');
	$('#progressbar .bar').css({'width': progress + '%'});
};

loader.loadManifest(img);