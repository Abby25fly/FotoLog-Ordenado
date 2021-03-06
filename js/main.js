// Añadir comentarios
const app ={
  item:{
    name:undefined,
    comment: undefined
  },

  inicio:function(){
    app.item.name= $("#name");
    app.item.comment=$("#comment");
    app.keepComment();
    app.btn();
  },

  btn: function(){
    $("#btnShow").click(app.showComent);
    $("#btnClean").click(app.cleanComment);
  },
  showComent:function(){
    localStorage.setItem(app.item.name.val(), app.item.comment.val());
    $("#addComment").append( `<div class="textComent"><h3>${app.item.name.val()}</h3><p>${app.item.comment.val()}</p></div>`);
    app.cleanInput();
  },
  keepComment: function(){
    for(var i = 0; i<localStorage.length; i++){
      let mainKey= localStorage.key(i);
      let mainValue= localStorage.getItem(mainKey);
      $("#addComment").append( `<div class="textComent"><h3>${mainKey}</h3><p>${mainValue}</p></div>`);
    }
  },
  cleanInput: function(){
    $("#name").val("");
    $("#comment").val("");
  },
  cleanComment: function(){
    localStorage.clear();
    $("#addComment").remove();
  }
}
$(document).ready(app.inicio);


/*
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
*/
