// !!!!!НАЖАТИЕ КНОПОК МЕНЮ В ФАЙЛЕ readyFlags

// АКТИВИРОВАННАЯ КНОПКА В МЕНЮ 
$('ul li a span').click(function(e){
	$('li a span').removeClass("active");
	$(this).addClass("active");

	var array = $.map($(this), function(value, index) {
//aler('Определение className в ВЕРХНЕМ МЕНЮ - ' + value['className'] );
		if(value['className'].length >9) {
			ACTIVE_PAGE = value['className'];
		} 
		// for (var prop in value) {
		// 	console.log(`value.${prop} = ${value[prop]}`);
		// }
	});
	if(ACTIVE_PAGE.length >9){
		ACTIVE_PAGE = ACTIVE_PAGE.substring(0,ACTIVE_PAGE.indexOf("active") -1);
		$('#mySidenav a span').removeClass("active");
		$('#mySidenav a .'+ ACTIVE_PAGE).addClass("active");
//aler('!ВЕРХНЕЕ МЕНЮ для #mySidenav! - ' + ACTIVE_PAGE + '!!');
	}else {$('ul li a .'+ ACTIVE_PAGE).addClass("active");}
});

$('#mySidenav a span').click(function(){
	$('#mySidenav a span').removeClass("active");
	$(this).addClass("active");

	var array = $.map($(this), function(value, index) {
		if(value['className'].length >9){
			if(value['className'] != 'closebtn active'){
//aler('Определение className в БОКОВОМ МЕНЮ - ' + value['className'] );
				ACTIVE_PAGE = value['className'];
			}
		} 
	});
// console.log(ACTIVE_PAGE);
	if(ACTIVE_PAGE.length >9 & ACTIVE_PAGE != 'closebtn active') {
		ACTIVE_PAGE = ACTIVE_PAGE.substring(0,ACTIVE_PAGE.indexOf("active") -1);
		$('li a span').removeClass("active");
		$('ul li a .'+ ACTIVE_PAGE).addClass("active");
//aler('БОКОВОЕ МЕНЮ ДЛЯ #topmenu - ' + ACTIVE_PAGE + '!!');
	}
});


//БОКОВОЕ МЕНЮ
var tn = true;
function tglNav() {
	if(tn==true){
		document.getElementById("mySidenav").style.width = "250px";
		tn=false;
//aler('!ОТКРЫТИЕ для #mySidenav! - ' + ACTIVE_PAGE + '!!');
		$('#mySidenav a .'+ ACTIVE_PAGE).addClass("active");
	}else{
		document.getElementById("mySidenav").style.width = "0";
		tn=true;
		$('ul li a .'+ ACTIVE_PAGE).addClass("active");
//aler('!ЗАКРЫТИЕ для #topmenu! - ' + ACTIVE_PAGE + '!!');		
	};
};

// !!!!!НАЖАТИЕ КНОПОК В ФАЙЛЕ readyFlags