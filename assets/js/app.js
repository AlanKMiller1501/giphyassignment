var topics = ["Robotchicken", "RickandMorty", "Archer"];

$(document).ready(function() {
  LoadBtns(topics);

  $(".searchGiphy").on("click", clickSearchBtn);
});

function LoadBtns(arr) {
  for (var i = 0; i < arr.length; i++) {
    var btn = $("<button>")
      .addClass("searchGiphy")
      .val(arr[i])
      .text(arr[i]);
    $("#searchBtns").append(btn);
  }
}

function clickSearchBtn() {
  $("#giphs").empty();

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=";
  queryURL += $(this).val();
  queryURL += "&api_key=BVPASMSBCyNfFQewdCGovODWNcn9SoOa&limit=10";

  $.get(queryURL).then(function({ data: alias }) {
    for (var i = 0; i < alias.length; i++) {
      Gif(alias[i]);
    }
  });
}

function Gif(gifData) {
  var container = $("<div>").addClass("gifContainer");
  var rating = $("<p>").text(gifData.rating);
  var still = gifData.images.fixed_height_small_still.url;
  var animate = gifData.images.fixed_height_small.url;

  var img = $("<img>");
  img.attr("src", still);

  container.append(img, rating);
  $("#giphs").append(container);
}
