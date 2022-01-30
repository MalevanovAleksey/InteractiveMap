$(function() {
    
    
var mapIconsType = $("#map_icons_type_input").val();  
var mapType = $("#map_type_input").val();  
    
console.log(mapType);

$("#search_input").keyup(function() {
    
    var searchText = $("#search_input").val();
    
if(searchText != ""){
  
  
  
  var itemPath = ""; 
  var itemId = ""; 
  var itemGeoCode = "";
  
  searchText = searchText.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
  
 for (let itemCode of Object.keys(paths)) {
    var itemName = paths[itemCode]["name"];
    if(itemName.startsWith(searchText) || itemName.includes(searchText)){
      itemPath = paths[itemCode]["path"];
      itemId = itemCode;
      itemGeoCode = itemCode;
      //console.log(itemCode, itemName, itemPath);  
      break;
    }
}

 
      itemPath = itemPath.toUpperCase();    
      itemPath = itemPath.replace(/\s/g, '');
      itemPath = itemPath.substring(0,12);
      
      console.log(itemPath);  
      
      var isSearched = false;
       
      var count = 0; 
       
      $("path").each(function(index) {
          if( $(this).attr("d").startsWith(itemPath)){
              
             if(count < 1){ 
              $(this).attr("fill", "#3ac5e8");
             } else {
              $(this).attr("fill", "#878888");  
             }
            //console.log(index);  
            isSearched = true;
            count = count + 1;
          } else {
            $(this).attr("fill", "#878888"); 
          }
      });

if(isSearched === true && count == 1){
    showItemModal(itemGeoCode, itemName, itemPath, mapIconsType, mapType); 
} else {
    hideItemModal();
}




} else {
   
 $("path").each(function(index) {
   $(this).attr("fill", "#878888");  
   hideItemModal();
});

}

  
});





function showItemModal(itemGeoCode, itemName, itemPath, mapIconsType, mapType){
    
    
		
			const map = document.querySelector('#map')
			
			
			const mapPoint = document.querySelector('#map').getBoundingClientRect();
			const winWidth = document.querySelector('.wrapper').offsetWidth;
			const winHeight = window.innerHeight;
			
			
			

			$('#map').next('.point').remove();
			
			$('#map').after($('<div />').addClass('point'));
			
			
			if(mapType == "russia"){
			
			$('.point')
				.prepend($('<a />').attr('href', '#').addClass('close').text('Закрыть'))
				.prepend($('<p><a href="'+paths[itemGeoCode]["info"]+'" target="_blank" class="row-padding info">Подробнее...</a></p>'))
				.prepend($('<div class="flex-row row-border row-padding"><p>Дата образования:</p>'+'<p>'+paths[itemGeoCode]["date"]+'</p></div>'))
				.prepend($('<div class="flex-row row-border row-padding"><p>Территория:</p>'+'<p>'+paths[itemGeoCode]["territory"]+'</p></div>'))
				.prepend($('<div class="flex-row row-border row-padding"><p>Население (2010):</p>'+'<p>'+paths[itemGeoCode]["population"]+'</p></div>'))
				.prepend($('<div class="flex-row row-border row-padding"><p>Экономический район:</p>'+'<p>'+paths[itemGeoCode]["econom"]+'</p></div>'))
				.prepend($('<div class="flex-row row-border row-padding"><p>Федеральный округ:</p>'+'<p>'+paths[itemGeoCode]["federal"]+'</p></div>'))
				.prepend($('<div class="flex-row row-border row-padding"><p>Столица:</p>'+'<p>'+paths[itemGeoCode]["capital"]+'</p></div>'))
				
				
				
				
				.prepend($('<div class="containerInfo"> <img style="width:50px;" src="'+mapIconsType+'/'+itemGeoCode+'.png"> <p>'+itemName+'</p> </div>'))
				.fadeIn();
				
				
			} 
			if(mapType == "world"){
			    
			    $('.point')
				.prepend($('<a />').attr('href', '#').addClass('close').text('Закрыть'))
				.prepend($('<p><a href="'+paths[itemGeoCode]["info"]+'" target="_blank" class="row-padding info">Подробнее...</a></p>'))
				.prepend($('<div class="flex-row row-border row-padding"><p>Территория:</p>'+'<p>'+paths[itemGeoCode]["territory"]+'</p></div>'))
				.prepend($('<div class="flex-row row-border row-padding"><p>Население (2010):</p>'+'<p>'+paths[itemGeoCode]["population"]+'</p></div>'))
				.prepend($('<div class="flex-row row-border row-padding"><p>Столица:</p>'+'<p>'+paths[itemGeoCode]["capital"]+'</p></div>'))
				.prepend($('<div class="flex-row row-border row-padding"><p>Континент:</p>'+'<p>'+paths[itemGeoCode]["continent"]+'</p></div>'))
                .prepend($('<div class="flex-row row-border row-padding"><p>Страна:</p>'+'<p>'+paths[itemGeoCode]["polnName"]+'</p></div>'))
				
				
				
				
				.prepend($('<div class="containerInfo"> <img style="width:50px;" src="'+mapIconsType+'/'+itemGeoCode+'.png"> <p>'+itemName+'</p> </div>'))
				.fadeIn();
			    
			    
			    
			} 
			
			if(mapType == "europe"){
			 
			 $('.point')
				.prepend($('<a />').attr('href', '#').addClass('close').text('Закрыть'))
				.prepend($('<p><a href="'+paths[itemGeoCode]["info"]+'" target="_blank" class="row-padding info">Подробнее...</a></p>'))
				.prepend($('<div class="flex-row row-border row-padding"><p>Территория:</p>'+'<p>'+paths[itemGeoCode]["territory"]+'</p></div>'))
				.prepend($('<div class="flex-row row-border row-padding"><p>Население (2010):</p>'+'<p>'+paths[itemGeoCode]["population"]+'</p></div>'))
				.prepend($('<div class="flex-row row-border row-padding"><p>Столица:</p>'+'<p>'+paths[itemGeoCode]["capital"]+'</p></div>'))
                .prepend($('<div class="flex-row row-border row-padding"><p>Регион:</p>'+'<p>'+paths[itemGeoCode]["continent"]+'</p></div>'))
                .prepend($('<div class="flex-row row-border row-padding"><p>Страна:</p>'+'<p>'+paths[itemGeoCode]["polnName"]+'</p></div>'))
				
				
				
				
				.prepend($('<div class="containerInfo"> <img style="width:50px;" src="'+mapIconsType+'/'+itemGeoCode+'.png"> <p>'+itemName+'</p> </div>'))
				.fadeIn();
			 
			} 
			    
			
				
				$(".point").css("left", "20vw").css("top", "35vh");
}







function hideItemModal(){

            var t = $('.point').find('.close'),
			parent = t.parent('.point');
			parent.fadeOut(function(){
				parent.remove();
			});

}




});