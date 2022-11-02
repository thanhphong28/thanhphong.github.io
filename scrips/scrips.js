function login() {
    var a = document.getElementById("login_container");
    a.style.display = "block";
  }
  
  function exit() {
    var a = document.getElementById("login_container");
    a.style.display = "none";
  }
  
  function kiemtra() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var tkhoan = document.getElementById("tkhoan").value;
    var mkhau = document.getElementById("mkhau").value;
    var error_msg = "";
  
    document.getElementById("dangky");
    if (fname.match("^[A-Z a-z]{2,30}$") == null) {
      error_msg += "Hãy nhập đúng tên của bạn\n";
    }
    if (lname.match("^[A-Z a-z]{2,30}$") == null) {
      error_msg += "Hãy nhập đúng họ của bạn\n";
    }
    if (tkhoan.match("^[a-z A-Z 0-9]*@[a-z.A-Z]*$") == null) {
      error_msg += "Email phải có ký tự @\n";
    }
    if (mkhau.match("^[a-z A-Z 0-9]{8,30}$") == null) {
      error_msg += "Mật khẩu phải bắt đầu bằng chữ và có ít nhất 8 ký tự\n";
    }
    if (error_msg == "") {
      return true;
    } else {
      document.getElementById("error").innerText = error_msg;
      return false;
    }
  }
  function find() {
    var value = document.getElementById("search_text").value;
    console.log(value);
    var url = "index.html?" + value;
    console.log(url);
    document.getElementById("search_box").href = url;
  }
  
  function register() {
    var a = document.getElementById("register_container");
  
    a.style.display = "block";
  }
  function exit_register() {
    var a = document.getElementById("register_container");
    a.style.display = "none";
  }
  