$(document).ready(function() {
	$('.gallery-item').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery:{
	    	enabled:true,
	    	navigateByImgClick: true,
	    	preload: [0,1],
	  }
	});
});

