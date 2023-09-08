
var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}

// swal({
//     title : "welcome to the You tube clone......!",
//     text : 'text',
//     html : "<h1><b><i class='fa fa-thumbs-up' style='color:blue'></i></b></h1>",
//     type : "success",
//     footer : "@Geekyworks &copy; 2023",
//     /* timer: '15000', */
//     confirmButtonText : 'Ok',
//     confirmButtonColor : "green",
//     closeoncancel : true,
//     showCloseButton : true,
//     allowOutsideClick : false,
//     width : "800px",
//     hight : "auto",
// });
     
    
