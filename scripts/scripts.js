$(function(){	
	$('.MenuButton').hover(function(){				
			src = $(this).attr('src').substring(0, $(this).attr('src').indexOf("_O")) + "_On.jpg";
			$(this).attr('src', src);
		},
		function(){				
			src = $(this).attr('src').substring(0, $(this).attr('src').indexOf("_O")) + "_Off.jpg";
			$(this).attr('src', src);
		}
	);
});
	