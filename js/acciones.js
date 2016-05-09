// JavaScript Document

$(document).ready(function (e){
	document.addEventListener ("deviceready",function(){
		$('#disp table td').eq(3).text(device.model);
		$('#disp table td').eq(5).text(device.cordova);
        $('#disp table td').eq(7).text(device.platform);
		$('#disp table td').eq(9).text(device.version);
		$('#disp table td').eq(11).text(device.uuid);
		document.addEventListener("pause",function(){
			escribehistoria('la app se pausó');
		},false);//pause
	document.addEventListener("resume",function(){
		escribehistoria('la app se reinicio');
		},false);//resume
		document.addEventListener("online",function(){
			escribehistoria('pa app se conecto ala red');
		},false);//se conecto
		document.addEventListener("offlione",function(){
			escribehistoria('la app se desconecto de la red');
		},false);//se desconecto
		
		},false);//ready device
		
});//document

function escribehistoria(accion){
	$('#eHistoria').append('<li>'+accion+'</li>');
}
