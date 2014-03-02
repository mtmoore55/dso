$(".meter > span").each(function() {
	$(this)
		.data("origWidth", $(this).width())
		.width(15)
		.animate({
			width: $(this).data("origWidth")
		}, 1200);
});