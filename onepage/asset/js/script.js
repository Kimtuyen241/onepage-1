var $ = jQuery.noConflict();

$(function () {
		var filterList={
			init:function(){
				$('#cv-portfilio').mixItUp({
					selectors:{
						target:'.portfilio',
						filter:'.filter'	
					},
					load:{
						filter:'*'
					}
				});
			}
			
		};
		filterList.init();


});//END jQuery