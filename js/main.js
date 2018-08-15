// Show additional video-blocks
$(function(){
	$('.button_slide').on('click', function(){
		$('.additional').slideToggle();
		$('.button_slide').css('display', 'none');
	});
});
