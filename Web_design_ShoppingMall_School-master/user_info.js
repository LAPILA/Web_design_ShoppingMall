function registerUser(){
    var name = document.querySelector('#name');
    var id = document.querySelector('#id');
    var password = document.querySelector('#password');

    if(id.values == ""||name.values ==""||password.values==""){
        alert("오류");
    }
    else{
        location.href = 'login.html'
    }

}

function loginUser(){
    var id = document.querySelector('#id');
    var password = document.querySelector('#password');
    if(id.values ==""||password.values==""){
        alert("오류");
    }
    else{
        alert("로그인 성공");
        location.href = "V-Mall_Web.html";
    }

}


