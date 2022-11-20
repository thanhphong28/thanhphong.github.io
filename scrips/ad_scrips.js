window.onload = function () {
    admin_menu();
    //admin_user();
  };
  function check_url() {
    console.log("sos");
    var url = window.location.href;
    if(url.indexOf("info")!= -1) return "info";
    if(url.indexOf("user")!= -1) return "user";
    if(url.indexOf("product")!= -1) return "product";
    if(url.indexOf("order")!= -1) return "order";
    if(url.indexOf("statis")!= -1) return "statis";
    return " ";
  }
  
  function admin_menu(){
    var a = document.getElementById("content_admin");
    var menu = check_url();
    var msg;
    console.log(menu);
    if(menu == " ")
    return false;
    if(menu == "info"){
    msg="info";
    a.innerHTML=msg;
    console.log(a);
    }
    if(menu == "user"){
    msg='<div id="title_user"> Danh sách người đăng ký </div><div id="user_setting_container"><div id="user_list"></div>';
    a.innerHTML=msg;
    admin_user();
    console.log(a);
    }
    if(menu == "product"){
    msg="product";
    a.innerText= msg;
    console.log(a);
    }
    if(menu == "order"){
    msg="order";
    a.innerText= msg;
    console.log(a);
    }
    if(menu == "statis"){
    msg="statis";
    a.innerText= msg;
    console.log(a);
    }
    
  }
  function admin_user(){
    var userarray = JSON.parse(localStorage.getItem("user"));
    var msg = "";
    for(var i=1; i<userarray.length; i++){
      msg += '<div class="user_block" ><div>'+userarray[i].fname + ' ' +userarray[i].lname+
      '</div><div style="width:73%; text-align:center">Phone: '+userarray[i].phone+
      '</div><div style="width:40%">Email: '+userarray[i].email+
      '</div><div style="width:45%">Mật khẩu: <input type="password" style="font-size:20px;" id="user_mkhau'+i+'" readonly="true" value="'
      +userarray[i].mkhau+'"><i class="fa-solid fa-eye-slash eye" onclick="hide_password('+i+',this)" ></i>'
      +'<i class="fa-solid fa-eye eye" onclick="hide_password('+i+',this)" id="eye'+i+'" ></i>'
    +'</div><button type="button" class="btn_xoaUser" >Xóa user</button></div>'
    }
    console.log(msg);
    document.getElementById("user_list").innerHTML= msg;
  }
  function hide_password(a,obj) {
    var x = document.getElementById("user_mkhau"+a);
    var e = document.getElementById("eye"+a);
    if (x.type === "password") {
      x.type = "text";
      obj.style.display="none";
      console.log(obj);
    } else {
      x.type = "password";
      e.style.display="inline-block";
    }
  }