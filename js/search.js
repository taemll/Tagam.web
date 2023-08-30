$(document).ready(function () {
    $.ajax({
        url: "http://localhost:8001/api/Ingredient/show",
        dataType: "json"
    }).done(function (response) {
        let mediaCard = $("#type");
        let html = "";
        $.each(response.data, function (i, manga) {
            html += '<form action="Recipes.html?Id='+manga.id+'" width="50px" ><button class="tablink2" >'+manga.name+'</button></form>';
            console.log(html)
        });
        mediaCard.append(html);
    });
});

$(document).ready(function () {
    $.ajax({
        url: "http://localhost:8001/api/Category/show",
        dataType: "json"
    }).done(function (response) {
        let mediaCard = $("#Category");
        let html = "";
        $.each(response.data, function (i, manga) {
            html += '<div class="recipe-block"><a href="Recipes.html?Id='+manga.id+'" class="category-card"><img id="blockid" src="'+manga.imgLink+'"alt="ups.."></a><p>'+manga.name+'</p></div>';
            console.log(html)
        });
        mediaCard.append(html);
    });
});

$(document).ready(function () {
    $.ajax({
        url: "http://localhost:8001/api/TypeKitchen/show",
        dataType: "json"
    }).done(function (response) {
        let mediaCard = $("#TypeKitchen");
        let html = "";
        $.each(response.data, function (i, manga) {
            html += '<form action="Recipes.html?Id='+manga.id+'" width="50px" ><button class="tablink2" >'+manga.name+'</button></form>';
            console.log(html)
        });
        mediaCard.append(html);
    });
});

document.forms.publish.onsubmit = function () {
    var message = this.message.value;
    $.ajax({
      url: "http://localhost:8001/api/Recipe/show-recipes-by-query",
      dataType: "json",
      data: {
        "query": "" + message
      },
    }).done(function (response) {
      $('.media-card').remove();
      //location.reload();
      let mediaCard = $("#media-card-section");
      let html = "";
      $.each(response.data, function (i, manga) {
        html += '<div class="media-card"><a href="MangaInfo.html?Id=' + manga.id + '" class="media-card-href"><img src="' + manga.img_link + '"><p>' + manga.title + '</p></a></div>';
        console.log(html)
      });
      mediaCard.append(html);
    });
    return false;
  };