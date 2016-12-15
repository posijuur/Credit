;(function ($) {
	$('.llist_item').click(function(event) {
	  $(this).find('.sub-list').slideToggle('fast');

	  $(this).toggleClass('llist_item__mod');
	});

	$('.sub-list_item').click(function(event) {
		var parentRight = $(this).parent().parent().parent().parent();
		var parentItem = $(this).parent().parent();
		var text = $(this).text();
		$(parentRight).find('.select').attr('value', text);
		// $('.select').attr('value', text);
		$(parentItem).find('.llist_item_text').html(text);
	});
})(jQuery);