
function getNYTImesTopStoriesData(){

  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
  'api-key': "a166544a2bd54f0a8b82188cfa818b89"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
  displayTopStories(result);
}).fail(function(err) {
  throw err;
});
}



function displayTopStories(data){

  var topStories = data.results;
  var html1 ="";
  $.each(topStories,function(i,data){
    html1 += '<div class="panel panel-default">'
     html1 += '<div class="panel-heading"><h4>' + data.title + '</h4></div>';
     html1 += '<div class="panel-body"><p>' + data.abstract + '</p></div>'
     html1 += '</div>'

  });


  console.log(data);

  $("#top-stories-results").append(html1);

}



function getNYTimesSearchData(data){

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "a166544a2bd54f0a8b82188cfa818b89",
      'q': "baseball"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      //console.log(result);
      displaySearchData(result);
    }).fail(function(err) {
      throw err;
    });

}


function displaySearchData(data){
console.log(data);

var times = data.response.docs;
var html2 ="";
$.each(times,function(i,data){


                    html2 += '<a class="list-group-item" href="' + data.web_url + '">';
                   html2 += '<h4 class="list-group-item-heading">' + data.headline.main + '</h4>';

                   html2 += '<p class="list-group-item-text">'
                   if (data.byline) {
                    html2 += data.byline.original  + " | ";

                    }

                   html2 += 'Published: ' + data.pub_date + '</p>';
                    html2 += '<p class="list-group-item-text">'
                   html2 +=  data.snippet +'</p>';

                    });
                  html2 += ' </a>'

                //after loop code
                $("#nytimes-results").append(html2);


}

getNYTimesSearchData();
getNYTImesTopStoriesData();
