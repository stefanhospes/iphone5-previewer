$(document).ready(function() {
	$('form').on('submit', function() {
		var url = $('input[name=url]').val();
		
		if(url.length > 2) {
			$('.iframe').attr('src', 'http://' + url.replace('http://','').replace('https://',''));
		}
		
		return false;
	});
	
});