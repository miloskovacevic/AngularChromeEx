chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        debugger;
        console.log("TEST TEST TEST ========>>>>>>>>>>>>>>>>>>....");
        if(request.action == "PageInfo"){
            var pageInfos = [];

            //moze i ovako...
            //var elements = document.getElementsByTagName('a');
            //
            //for(var i = 0; i < elements.length; i++){
            //    var pageInfo = {};
            //
            //    var href = elements[0].getAttribute('href');
            //
            //    if(href != null && href.indexOf('http') == 0){
            //        pageInfo.url = href;
            //        pageInfos.push(pageInfo);
            //    }
            //}

            $('a').each(function () {
                var pageInfo = {};

                var href = $(this).attr("href");

                if(href != null && href.indexOf("http") == 0){
                    //samo dodaji adrese koje pocinju sa http...
                    pageInfo.url = href;
                    pageInfos.push(pageInfo);
                }
            });

            sendResponse(pageInfos);
        }
    }


);