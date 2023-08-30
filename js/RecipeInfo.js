$(document).ready(function(){
      $.ajax({
        url: "http://localhost:8001/api/Recipe/show-recipe?id=fa2f9ae8-7a22-4d8c-d54e-08dba22aff6c"
      }).done(function(response){
        let Mtype = $(".main-page");
        let html = "";
        $.each(response.data ,function(i, manga){
          html += ''
          console.log(html)
        });
        Mtype.append(html);
      });
    });
  