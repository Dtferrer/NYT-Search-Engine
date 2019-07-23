$(document).ready(function() {

});

function search() {
// Get Search Values
// Build Request
    // then Update UI with articles
    $("#search").on("click", function() {
        var searchTerm = $("#search").text();
        var numOfRecords = $("#numRecords").text();
        var startYear = $("#startYear").text();
        var endYear = $("#endYear").text();

        var termUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=xacbx8TjHAqg468sAprP4vmPH7gxuIQT&q=subject:("' + searchTerm + '")';
        console.log(termUrl)
        var recordsUrl = 
        var startUrl
        var endUrl
});

function clearResults() {
    $("#articlesList").empty();
    $("#searchTerm").empty();
    $("#numRecords").empty();
    $("#startYear").empty();
    $("endYear").empty();
// Empty article
};

