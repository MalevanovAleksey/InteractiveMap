$(function(){
	if (window.innerHeight>900)
	document.body.style.zoom = 1.1;
	if (window.innerHeight<900)
	document.body.style.zoom = 0.95;
	if (window.innerHeight<800)
	document.body.style.zoom = 0.85;
	console.log(document.body.style.zoom);
	var r = Raphael('map',1100, 500),
		attributes = {
            fill: '#878888',
            stroke: '#3899E6',
            'stroke-width': 1.5,
            'stroke-linejoin': 'round'
        },
		arr = new Array();
	
	for (var country in paths) {
		
		var obj = r.path(paths[country].path);
		
		obj.attr(attributes);
		
		arr[obj.id] = country;

		

	obj.hover(function(){
			this.animate({
				fill: '#3ac5e8'
			}, 300);

		}, 
		
		
		function(){
			this.animate({
				fill: attributes.fill
			}, 300);
		})
		
		obj.click(function(){
			document.location.hash = arr[this.id];
			
			const map = document.querySelector('#map')
			console.log(map)
			const mapPoint = document.querySelector('#map').getBoundingClientRect();
			const point = this.getBBox();
			
			const winWidth = document.querySelector('.wrapper').offsetWidth;
			const winHeight = window.innerHeight;
			const left =  point.x + point.width;
			const top = point.y + point.height/2;
			

			
				$('#map').next('.point').remove();
				$('#map').after($('<div />').addClass('point'));
				$('.point')
				.prepend($('<a />').attr('href', '#').addClass('close').text('Закрыть'))
				.prepend($('<p><a href="'+paths[arr[this.id]].info+'" target="_blank" class="row-padding info">Подробнее...</a></p>'))
				.prepend($('<div class="flex-row row-border row-padding"><p>Территория:</p>'+'<p>'+paths[arr[this.id]].territory+'</p></div>'))
				.prepend($('<div class="flex-row row-border row-padding"><p>Население (2010):</p>'+'<p>'+paths[arr[this.id]].population+'</p></div>'))
				.prepend($('<div class="flex-row row-border row-padding"><p>Столица:</p>'+'<p>'+paths[arr[this.id]].capital+'</p></div>'))
                .prepend($('<div class="flex-row row-border row-padding"><p>Регион:</p>'+'<p>'+paths[arr[this.id]].continent+'</p></div>'))
                .prepend($('<div class="flex-row row-border row-padding"><p>Страна:</p>'+'<p>'+paths[arr[this.id]].polnName+'</p></div>'))
				.prepend($('<div class="containerInfo"> <img style="width:50px;" src="flagsWorld/'+arr[this.id]+'.png"> <p>'+paths[arr[this.id]].name+'</p> </div>'))
				.css({
					left: left + 400 > winWidth ? point.x - 200 : left,
				
					bottom: top > winHeight/2 && mapPoint.height - point.y - point.height/2-50,
					fontSize:16,
					fontFamily:'Montserrat',
					
				})
				.fadeIn();
		});
		
		$('.point').find('.close').live('click', function(){
			var t = $(this),
				parent = t.parent('.point');
			
			parent.fadeOut(function(){
				parent.remove();
			});
			return false;
		});
		
		
		 
		
	}
		
		
});
