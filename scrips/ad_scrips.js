window.onload = function () {
    admin_menu();
  };
  function check_url() {
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
    if(menu == " ")
    return false;
    if(menu == "info"){
    }
    if(menu == "user"){
      a.innerHTML='<div class="title_user"> Danh sách người đăng ký </div>\n\
      <div id="user_setting_container">\n\
      <div id="user_list"></div></div>';
      admin_user();
    }
    if(menu == "product"){
      a.innerHTML='<div id="product_setting_container">\n\
      <div class="title_user" >Danh sách sản phẩm</div>\n\
      <div id="product_list"></div></div>';
      admin_product();
    }
    if(menu == "order"){
    }
    if(menu == "statis"){
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
    +'</div><button type="button" class="btn_xoaUser" onclick="del_user('+i+')">Xóa user</button></div>'
    }
    console.log(msg);
    document.getElementById("user_list").innerHTML= msg;
  }//style="position:fixed; background-color: rgba(0, 0, 0, 0.5);;width:100%;height:100%;z-index: 10;"
  function del_user(index){
    var userarray = JSON.parse(localStorage.getItem("user"));
    userarray.splice(index,1);
    localStorage.setItem("user",JSON.stringify(userarray));
    window.location.reload();
  }
  function hide_password(a,obj) {
    var x = document.getElementById("user_mkhau"+a);
    var e = document.getElementById("eye"+a);
    if (x.type === "password") {
      x.type = "text";
      obj.style.display="none";
    } else {
      x.type = "password";
      e.style.display="inline-block";
    }
  }
  //fucntion san pham
  function admin_product(){
    var productarray = JSON.parse(localStorage.getItem("product"));
    var msg ="";
    for(var  i=0; i<productarray.length; i++){
      msg += '<div class="product_block">\n\
        <div style="width: 13.5%;padding:0 0 0 3%;"><img style="width:100%;" src="'+productarray[i].product_img+'"></div>\n\
        <div style="width:70%">'+productarray[i].product_name+'1</div>\n\
        <div style="width:15%;height:50%;font-size:larger">Giá: '+productarray[i].product_price+'</div>\n\
        <div style="width:25%">Nhà sản xuất: '+productarray[i].product_company+'</div>\n\
        <div style="width:20%">ID: '+productarray[i].product_id+'</div>\n\
        <div style="width:20%;position:absolute;bottom:5%;left:50%;padding:0"><button class="btn_xoaProduct"style="width:73%">Sửa</button> </div>\n\
        <div style="width:30%;position:absolute;bottom:5%;left:70%;padding:0"><button class="btn_xoaProduct" onclick="xacNhan_xoaSanPham('+i+')">Xóa</button></div>\n\
      </div>';
    }
    console.log(msg);
    document.getElementById("product_list").innerHTML=msg;
  }
  var index_product;
  function cancel(){
    document.getElementById("alert_xoa_sp").style.display="none";
  }function yes(){
    document.getElementById("alert_xoa_sp").style.display="none";
    xoaSanPham();
  }
  function xacNhan_xoaSanPham(index){
    var a = document.getElementById("alert_xoa_sp");
    a.style.display="block";
    index_product = index;
  }
  function xoaSanPham(){
    var productarray = JSON.parse(localStorage.getItem("product"));
    productarray.splice(index_product,1);
    localStorage.setItem("product",JSON.stringify(productarray));
    if(productarray.length == 0)
      localStorage.removeItem("product");
    window.location.reload();
  }