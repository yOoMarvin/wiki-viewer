function search() {
  var title = $("#search-text").val();

  var api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
  var cb = '&callback=JSON_CALLBACK';
  var page = 'https://en.wikipedia.org/?curid=';

  $.getJSON(api + title + cb)
    .success(function(data) {
      var results = data.query.pages;
      console.log(results);
    });

}
