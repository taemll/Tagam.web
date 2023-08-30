$(document).ready(function () {
    $.ajax({
        url: "http://localhost:8001/api/Recipe/show-recipes",
        dataType: "json"
    }).done(function (response) {
        let mediaCard = $(".recipes");
        let html = "";
        $.each(response.data, function (i, manga) {
            html += '<div class="recipe-card"><a href="RecipeInfo.html?Id='+manga.id+'"class="recipe-card-a"><img class="recipe-card-link"src="'+manga.imageId+'" alt="ups.."></a><div class="info"><div class="text"><p class="name">'+manga.name+'</p><p class="description">'+manga.description+'</p></div></div><hr></div>';
            console.log(html)
        });
        mediaCard.append(html);
    });
});