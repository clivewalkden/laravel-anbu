// Anbu Profiler
// Copyright 2012 Dayle Rees.
// MIT License <http://www.opensource.org/licenses/mit>

// I apologize for my terrible JavaScript skills in advance!

var anbu = {

	// are we in full screen mode?
	full : false,
	
	// just some startup routines
	start : function ()
	{
		$('#anbu-close').hide();
		$('#anbu-zoom').hide();
		$('.anbu-tab-pane').hide();
	},

	// open the top section of anbu
	open_window : function (link) 
	{
		$('.anbu-tab-pane').hide();
		$('.'+link.attr('data-anbu-tab')).show();
		$('.anbu-tabs a').removeClass('anbu-active-tab');
		link.addClass('anbu-active-tab');
		$('.anbu-window').slideDown(300);
		$('#anbu-close').fadeIn(300);
		$('#anbu-zoom').fadeIn(300);
	},

	// close the top section
	close_window : function() 
	{
		$('.anbu-window').slideUp(300);
		$('#anbu-close').fadeOut(300);
		$('#anbu-zoom').fadeOut(300);
		$('.anbu-tabs a').removeClass('anbu-active-tab');
	},

	// show the bar if its compacted
	show : function ()
	{
			$('#anbu-closed-tabs').fadeOut(600, function () {
				$('#anbu-open-tabs').fadeIn(200);
			})
			$('.anbu').animate({width: '100%'}, 700);	
	},

	// compact the bar
	hide : function ()
	{
		$('.anbu-window').slideUp(400, function () {
			anbu.close_window();
			$('#anbu-open-tabs').fadeOut(200, function () {
				$('#anbu-closed-tabs').fadeIn(200);
			})
			$('.anbu').animate({width: '2.6em'}, 700);			
		});

	},

	// toggle fullscreen mode
	zoom : function () 
	{
		if(anbu.full)
		{
			height = '14em';
			anbu.full = false;
		}
		else
		{
			height = ($(window).height() - $('.anbu-tabs').height() - 6) + 'px';
			anbu.full = true;
		}		

		$('.anbu-content-area').animate({height: height}, 700);
	},

}


jQuery(document).ready(function () {
	// kick it off
	anbu.start();

	// bind clicks
	$('.anbu-tab').click(function () { anbu.open_window($(this)); });
	$('#anbu-close').click(function () { anbu.close_window(); });
	$('#anbu-hide').click(function () { anbu.hide(); });
	$('#anbu-show').click(function () { anbu.show(); });
	$('#anbu-zoom').click(function () { anbu.zoom(); });
});