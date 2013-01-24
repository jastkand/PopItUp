(function($){
    $(function(){
        var $content = document.getElementById("content");
        $('body').css({
            width: $content.offsetWidth + 20,
            height: $content.offsetHeight + 100
        });
    })
})(jQuery);