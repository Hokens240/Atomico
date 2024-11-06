function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(".list").scroll(function(e) {
    var $list = $(this);
    
    $list.find("section")
        .filter(function(i, d) {
            return isScrolledIntoView(d);
        })
        .each(function() {
            var eTop = $(this).offset().top;
            var center = $list.height() / 2;
            
            var dif = center - eTop;
            if (dif < 0) dif *= -1;
            
            var pc = 1 - (dif / center);
            
            $(this).css("opacity", pc);
        });
});