function search() {
    //delete every div with class result, so there are now doubled entries
    $('.result').remove();

    //search value (title)
    var title = $("#search-text").val();

    //url and api request variables
    var api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
    var cb = '&callback=JSON_CALLBACK';
    var page = 'https://en.wikipedia.org/?curid=';


    $.ajax({
        //buil url
        url: api + title + cb,
        jsonp: "callback",
        // Tell jQuery we're expecting JSONP
        dataType: "jsonp",
        // Work with the response
        success: function(data) {
            //server response
            var results = data.query.pages;
            console.log(results);
            //for each result add a new node
            $.each( results, function( key, value ) {
              $('.container').append('<a href='+page+value.pageid+ ' target=_blank>' + 
              '<div class=result id='+ key +'>'+
                '<h4 class=result-title>' + value.title +'</h4>'+
                '<p class=result-extract>' + value.extract +'</p>'+
              '</div> </a>');
            });
        }
    });
}
