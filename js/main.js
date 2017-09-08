// Añadir comentarios
$("#btnShow")[0].addEventListener("click", showComent);

function showComent(){
  localStorage.setItem($("#name").val(),$("#comment").val());

  for(var i = 0; i<localStorage.length; i++){
    var mainKey= localStorage.key(i);
    var mainValue= localStorage.getItem(mainKey);
    $("#addComment").append ("<div> <p>" + mainKey + "</p>" + "<p>" + mainValue + "</p> </div>");

    $("#name").val("");
    $("#comment").val("");
  }
}

// Borrar local storage y limpia datos
$("#btnClean").click(function(){
  localStorage.clear(); showComent();
  $("#addComment").html("");
})
