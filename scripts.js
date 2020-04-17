console.log("check it out"); // JavaScript source code
var searchAlbums = function (query) {
    $.ajax({
        url: 'https://api.agify.io',
        data: {
         
            name: query
        },
        success: function (response) {
            resultsPlaceholder.innerHTML = response; 
        }
    });
};



document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    searchAlbums(document.getElementById('query').value);
}, false);