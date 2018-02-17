$(document).ready(function(){
        	$("#mycarousel").carousel( { interval: 200 } );
            $("#carousel-button").click(function(){
            	if ( $("#carousel-button").hasClass('fa-pause') ){

            		$("#mycarousel").carousel('pause');
            		$("#carousel-button").removeClass('fa-pause').addClass('fa-play');
            	}
 				else if ( $("#carousel-button").hasClass('fa-play')){
            		
            		$("#mycarousel").carousel('cycle');
            		$("#carousel-button").removeClass('fa-play').addClass('fa-pause');
            	}
            });

        });