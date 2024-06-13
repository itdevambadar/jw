ProcessStatusDF = {
    init : function () {
        $(".process_status_dl_container").each(function(){
            ProcessStatusDF.loadData($(this));
        });
        
        var previousScrollTop = 0;
        $(window).scroll(function (e) { 
            if($("body").hasClass("psdf_stop_scrolling")) {
                e.stopPropagation();
                e.stopImmediatePropagation();
                e.preventDefault();
                $(window).scrollTop(previousScrollTop); 
            }
            previousScrollTop = $(window).scrollTop();
        });
    },
    loadData: function(el) {
        var url = $(el).data("url") + "&_rid=" + $(el).data("record-id");
        $(el).append('<div class="blockui"></div><div class="ps_progress_container"></div><div class="ps_iframe_container" style="display:none;"><iframe src=""></iframe></div>');
        $(el).find("iframe").on("load", function(){
            var renderProgressBar = function() {
                if ($(el).find("iframe").contents().find("#process-status-canvas .process_container .progress_bar").length > 0) {
                    $(el).find(".ps_progress_container").append($(el).find("iframe").contents().find("#process-status-canvas .process_container .progress_bar").first().clone(true));
                } else {
                    setTimeout(function() {
                        renderProgressBar();
                    }, 100);
                }
            };
            renderProgressBar();
            
            $(el).find(".ps_progress_container").on("click", function(){
                var bodyheight = $("body").innerHeight();
                $(".table-wrapper").data("psdf_style", $(".table-wrapper").attr("style"));
                $(".table-wrapper").attr("style", "overflow:visible;");
                $("body").data("psdf_style", $("body").attr("style"));
                $("body").attr("style", "height:auto !important;");
                
                var height = $("body").height();
                var top = $(this).offset().top;
                var paddingBottom = 0;
                if (top + 450 > height) {
                    paddingBottom =  top + 450 - height;
                    bodyheight = bodyheight - paddingBottom;
                    $("body").attr("style", "height:auto !important; padding-bottom:"+paddingBottom+"px !important;");
                }
                
                $(this).parent().find(".ps_iframe_container").removeClass("left");
                var left = $(this).offset().left;
                if (left - 300 < 0) {
                    $(this).parent().find(".ps_iframe_container").addClass("left");
                }
                
                $(this).closest("span").addClass("show");
                $('html, body').animate({
                    scrollTop: top - 100
                }, 200, function(){
                    $("body").addClass("psdf_stop_scrolling");
                });
            });
            $(el).find(".blockui").on("click", function(){
                $(this).closest("span").removeClass("show");
                var listStyle = $(".table-wrapper").data("psdf_style");
                if (listStyle === undefined) {
                    listStyle = "";
                }
                $(".table-wrapper").attr("style", listStyle);
                var bodyStyle = $("body").data("psdf_style");
                if (bodyStyle === undefined) {
                    bodyStyle = "";
                }
                $("body").attr("style", bodyStyle);
                $("body").removeClass("psdf_stop_scrolling");
            });
            
            $(el).addClass("ready");
        });
        $(el).find("iframe").attr("src", url);
    }
};

jQuery(document).ready(function() {
    ProcessStatusDF.init();
});