(function($){
    $(function(){
//        var settings = chrome.extension.getBackgroundPage().settings;

        function save_options() {
            var url = $('input[name=url]').val();
            console.log(url);
            localStorage["url"] = url;

            var status = document.getElementById("status");
            status.innerHTML = "Options Saved.";
            setTimeout(function() {
                status.innerHTML = "";
            }, 750);
        }

        function restore_options() {
            var url = localStorage["url"];
            if (!url) {
                return;
            }
            $('input[name=url]').val(url);
        }
        restore_options();

        $('#save').click(function(e){
            save_options();
        });
    })
})(jQuery);