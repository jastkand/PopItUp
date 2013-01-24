(function($){
    $(function(){
        var url = localStorage["url"];
        if (!url) {
            return;
        }
        $('#content').html(
            $('<iframe />', {
                'src': url
            })
        );
    })
})(jQuery);