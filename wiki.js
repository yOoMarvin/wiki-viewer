function search() {
    var title = $("#search-text").val();

    var api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
    var cb = '&callback=JSON_CALLBACK';
    var page = 'https://en.wikipedia.org/?curid=';


    $.ajax({
        url: api + title + cb,

        // The name of the callback parameter, as specified by the YQL service
        jsonp: "callback",

        // Tell jQuery we're expecting JSONP
        dataType: "jsonp",

        // Work with the response
        success: function(data) {
            var results
            console.log(data.query.pages); // server response
        }
    });
}
