(function($) {
	var colorIcon = true;

	$("#glbl").click(function() {					
		if(colorIcon){
			$("#glbl i").css('color', 'lightBlue');
			colorIcon = false;
			$("#divSiBlock").fadeToggle(1000);
		}else{
			$("#glbl i").css('color', 'blue');
			colorIcon = true;
			$("#divSiBlock").fadeToggle(300);
		}
	});

	$("#divSiBlock").click(function() {					
		$("#divSiBlock").fadeToggle();
	});

})(jQuery);