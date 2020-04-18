console.log("check it out"); // JavaScript source code
var searchAlbums = function (query) {
    $.ajax({
        url: 'https://api.agify.io',
        data: {

            name: query
        },
        success: function (response) {
            console.log(response);
            //get age from response
            console.log (response.age);
            //show age in html
            $("#results").text(response.age);

            
        }
    });
};

console.log("hello there");
document.addEventListener('DOMContentLoaded', function () {
    console.log("the document is loaded");
    document.getElementById('search-form').addEventListener('submit', function (e) {
        console.log("submitting");
        e.preventDefault();
        searchAlbums(document.getElementById('query').value);
    }, false);
})