$(document).ready(function () {
  $('#map-select').selectize();
  $('#map-select-form').selectize();

  $(".phone").mask("+7 (999) 999-9999");

  $('.map-btn-price').on('click', function() {
  	$('.map-dark').addClass('active-modal');
  	$('.map-form--price').addClass('active-modal');
  	return false;
  })

  $('.map-info__btn').on('click', function() {
  	$('.map-dark').addClass('active-modal');
  	$('.map-form--excursion').addClass('active-modal');
  	return false;
  })

  $('.map-dark, .map-form__close').on('click', function() {
  	$('.map-dark').removeClass('active-modal');
  	$('.map-form').removeClass('active-modal');
  	return false;
  })

  $('.form').on('wpcf7mailsent', function() {
    $('.map-dark').removeClass('active-modal');
    $('.map-form').removeClass('active-modal');
  })


  let counter = 0;
  $('.bottom').on('mouseover', function(argument) {
  	var timer_bottom = setInterval(function () {
  		counter = counter + 1;
  		$('.map-inner').scrollTop(counter);
  		
  	}, 1)
  	$('.bottom').on('mouseout', function(argument) {
  		clearInterval(timer_bottom);
  	})
  })

  
  $('.top').on('mouseover', function(argument) {
  	var timer_top = setInterval(function () {
  		counter = counter - 1;
  		$('.map-inner').scrollTop(counter);
  	}, 1)
  	$('.top').on('mouseout', function(argument) {
  		clearInterval(timer_top);
  	})
  })


  $('#map-select').on('change', function() {
  	let map_select = $('#map-select').val()
  	let paths_map = $('.map-svg path');
  	$(paths_map).removeClass('path-none');
  	for (let i = paths_map.length - 1; i >= 0; i--) {
  		let fill_value = $(paths_map[i]).attr('fill');
  		if (map_select == 'free') {
  			if (fill_value != '#4FA724' && fill_value != 'white') {
  				$(paths_map[i]).addClass('path-none');
  			}
  		}
  		if (map_select == 'sold') {
  			if (fill_value != '#DE2929' && fill_value != 'white') {
  				$(paths_map[i]).addClass('path-none');
  			}
  		}
  		if (map_select == 'booked') {
  			if (fill_value != '#E7E01E' && fill_value != 'white') {
  				$(paths_map[i]).addClass('path-none');
  			}
  		}
  	}
  })
})
//;