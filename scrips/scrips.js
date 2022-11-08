function kiemtra() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("id_email").value;
  var mkhau = document.getElementById("id_mkhau").value;
  var confirm_mkhau = document.getElementById("confirm_mkhau").value;
  var error_msg = "";

  document.getElementById("dangky");
  if (fname.match("^[A-Z a-z]{2,30}$") == null) {
    error_msg += "Hãy nhập đúng tên của bạn\n";
  }
  if (lname.match("^[A-Z a-z]{2,30}$") == null) {
    error_msg += "Hãy nhập đúng họ của bạn\n";
  }
  if (phone.match("^((/+84)|0)[0-9]{9,10}$") == null) {
    error_msg += "Nhập sai số điện thoại\n";
  }
  if (email.match("^[a-z A-Z 0-9]*@[a-z.A-Z]*$") == null) {
    error_msg += "Email phải có ký tự @\n";
  }
  if (mkhau.match("^[A-Z a-z 0-9]{8,30}$") == null) {
    error_msg += "Mật khẩu phải bắt đầu bằng chữ và có ít nhất 8 ký tự\n";
  }
  if (confirm_mkhau != mkhau) {
    error_msg += "Mật khẩu xác nhận không đúng\n";
    console.log("true");
  }
  document.getElementById("error").innerText = error_msg;
  if (error_msg == "") {
    return true;
  } else {
    return false;
  }
}
function login() {
  var a = document.getElementById("login_container");
  a.style.display = "block";
}
function exit() {
  var a = document.getElementById("login_container");
  a.style.display = "none";
}
//user info
function user_popup() {
  document.getElementById("user_container").style.display = "block";
}
function exit_user() {
  var a = document.getElementById("user_container");
  a.style.display = "none";
}

// cái này không kiểm tra được nên nút đăng ký đang để onclick kiem tra
function xacnhandangki() {
  if (kiemtra() == false) return false;
  /*Khu vuc nay code them de lay thong tin dang ki luu vao mang user */
  var a = document.getElementById("register_container");
  var b = document.getElementById("login_container");
  b.style.display = "block";
  a.style.display = "none";
  document.getElementById("login_error").innerText = "";
  return true;
}
function reseterror() {
  console.log("in");
  var a = "";
  document.getElementById("error").innerText = a;
}
function find() {
  var value = document.getElementById("search_text").value;
  console.log(value);
  var url = "index.html?search=" + value;
  document.getElementById("search_box").href = url;
}

function register() {
  var a = document.getElementById("register_container");
  a.style.display = "block";
  var b = document.getElementById("login_container");
  b.style.display = "none";
  var a = "";
  document.getElementById("error").innerText = a;
}
function exit_register() {
  var a = document.getElementById("register_container");
  a.style.display = "none";
}

/*Phần này làm về mảng sản phẩm  va user*/

var productarray = [];
var userarray = [];
window.onload = function () {
  default_product();
  create_admin();
  create_login_status();
  check_login_status();
  showproduct();
};
function create_login_status() {
  if (localStorage.getItem("login_status") == null)
    localStorage.setItem("login_status", "false");
}
function check_login_status() {
  var login_status = JSON.parse(localStorage.getItem("login_status"));
  console.log(login_status);
  if (login_status) {
    console.log("check");
    document.getElementById("logo_user2").style.display = "block";
  }
}
function create_admin() {
  if (localStorage.getItem("user") == null) {
    var user0 = {
      fname: "A",
      lname: "Nguyen",
      phone: "0939333999",
      email: "admin",
      mkhau: "admin",
    };
    userarray.push(user0);
    localStorage.setItem("user", JSON.stringify(userarray));
  }
}
function new_user() {
  var userarray = JSON.parse(localStorage.getItem("user"));
  if (xacnhandangki()) {
    var newuser = {
      fname: document.getElementById("fname").value,
      lname: document.getElementById("lname").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("id_email").value,
      mkhau: document.getElementById("id_mkhau").value,
    };

    userarray.push(newuser);
    localStorage.setItem("user", JSON.stringify(userarray));
  }
}
function login_check() {
  var userarray = JSON.parse(localStorage.getItem("user"));
  var email_login = document.getElementById("email").value;
  var mkhau_login = document.getElementById("mkhau").value;
  for (i = 0; i < userarray.length; i++)
    if (
      userarray[i].email == email_login &&
      userarray[i].mkhau == mkhau_login
    ) {
      localStorage.setItem("login_status", "true");
      return true;
    }
  document.getElementById("login_error").innerText = "Tài khoản không tồn tại";
  return false;
}
function logout() {
  localStorage.setItem("login_status", false);
  window.location.reload();
}
function default_product() {
  if (localStorage.getItem("product") == null) {
    var product1 = {
      product_name: "Giày Nike Wmns Dunk High LXX “Black Flax” DX0346-001",
      product_img:
        "image\\nike\\giay-nike-wmns-dunk-high-lxx-black-flax-dx0346-001.jpg.webp",
      product_company: "NIKE",
      product_price: "4.590.000đ",
      product_type: "",
    };
    var product2 = {
      product_name:
        "Giày Nike Air Force 1 Low LXX “University Blue” DX1193-100",
      product_img:
        "image\\nike\\giay-nike-air-force-1-low-lxx-university-blue-dx1193-100.png.webp",
      product_company: "NIKE",
      product_price: "4.500.000đ",
      product_type: "new",
    };
    var product3 = {
      product_name: "Giày Nike Dunk Low SE Fleece Pack Honeydew DQ7579-300",
      product_img:
        "image\\nike\\giay-nike-dunk-low-fleece-pack-dq7579-300.png.webp",
      product_company: "NIKE",
      product_price: "4.090.000đ",
      product_type: "10%",
    };
    var product4 = {
      product_name:
        "Giày Nike Air Max Penny 1 “All Star Black Metallic Silver Varsity Royal” DN2487-002",
      product_img:
        "image\\nike\\giay-nike-air-max-penny-1-all-star-black-metallic-silver-varsity-royal-dn2487-002.png.webp",
      product_company: "NIKE",
      product_price: "5.890.000đ",
      product_type: "new",
    };
    var product5 = {
      product_name:
        "Giày Nike Air Trainer 1 “Shima Shima Pack Baroque Brown” DV6998-200",
      product_img:
        "image\\nike\\giay-nike-air-trainer-1-shima-shima-pack-baroque-brown-dv6998-200.png.webp",
      product_company: "NIKE",
      product_price: "4.490.000đ",
      product_type: "30%",
    };
    var product6 = {
      product_name:
        "Giày Nike Dunk High Retro PRM Year Of The Tiger DQ4978-001",
      product_img:
        "image\\nike\\giay-nike-dunk-high-retro-prm-year-of-the-tiger-dq4978-001.jpg.webp",
      product_company: "NIKE",
      product_price: "3.590.000đ",
      product_type: "new",
    };
    var product7 = {
      product_name:
        "Giày Nike Wmns Venture Runner Wide ‘Black White’ DM8454-001",
      product_img:
        "image\\nike\\giay-nike-wmns-venture-runner-wide-black-white-dm8454-001.jpg.webp",
      product_company: "NIKE",
      product_price: "2.290.000đ",
      product_type: "30%",
    };
    var product8 = {
      product_name:
        "Giày Nike Air More Uptempo 96 “Cargo Khaki Alpha Orange” DX2669-300",
      product_img:
        "image\\nike\\giay-nike-air-more-uptempo-96-cargo-khaki-alpha-orange-dx2669-300.png.webp",
      product_company: "NIKE",
      product_price: "3.590.000đ",
      product_type: "",
    };
    var product9 = {
      product_name: "Giày Jordan 1 Retro High OG SP Utility Stash DN4336-001",
      product_img:
        "image\\jordan\\giay-jordan-1-retro-high-og-sp-utility-stash-dn4336-001.jpg.webp",
      product_company: "JORDAN",
      product_price: "4.890.000đ",
      product_type: "new",
    };
    var product10 = {
      product_name: "Giày Jordan 4 Retro Midnight Navy (GS) DM0521-001",
      product_img:
        "image\\jordan\\giay-jordan-4-retro-midnight-navy-gs-dm0521-001.png.webp",
      product_company: "JORDAN",
      product_price: "2.890.000đ",
      product_type: "",
    };
    var product11 = {
      product_name: "Giày Jordan 1 Mid Mystic Navy Mint Foam (GS) 554725-413",
      product_img:
        "image\\jordan\\giay-jordan-1-mid-mystic-navy-mint-foam-gs-554725-413.png.webp",
      product_company: "JORDAN",
      product_price: "3.890.000đ",
      product_type: "10%",
    };
    var product12 = {
      product_name: "Giày Jordan 1 Mid SE Elephant Print (GS) DM6216-016",
      product_img:
        "image\\jordan\\giay-jordan-1-mid-se-elephant-print-gs-dm6216-016-11.png.webp",
      product_company: "JORDAN",
      product_price: "4.090.000đ",
      product_type: "new",
    };
    var product13 = {
      product_name:
        "Giày Air Jordan 1 ELevate Low “Exploration Unit” FB1867-141",
      product_img:
        "image\\jordan\\giay-air-jordan-1-elevate-low-exploration-unit-fb1867-141.jpg.webp",
      product_company: "JORDAN",
      product_price: "3.890.000đ",
      product_type: "",
    };
    var product14 = {
      product_name:
        "GGiày Air Jordan 11 Retro Low IE Light Orewood Brown 919712-102",
      product_img:
        "image\\jordan\\giay-air-jordan-11-retro-low-ie-light-orewood-brown-919712-102.png.webp",
      product_company: "JORDAN",
      product_price: "4.890.000đ",
      product_type: "10%",
    };
    var product15 = {
      product_name: "Giày Jordan 36 Low “Light Orewood Brown” DH0832-160",
      product_img:
        "image\\jordan\\giay-jordan-36-low-light-orewood-brown-dh0832-160.png.webp",
      product_company: "JORDAN",
      product_price: "4.290.000đ",
      product_type: "",
    };
    var product16 = {
      product_name: "Giày Air Jordan Legacy 312 Low Fire Red CD7069-160",
      product_img:
        "image\\jordan\\giay-air-jordan-legacy-312-low-fire-red-cd7069-160.png.webp",
      product_company: "JORDAN",
      product_price: "3.090.000đ",
      product_type: "10%",
    };
    var product17 = {
      product_name: "Giày Vans Old Skool Mule White Red 590747-0002",
      product_img:
        "image\\vans\\giay-Vans-Old-Skool-Mule-White-Red-590747-0002.png.webp",
      product_company: "VANS",
      product_price: "1.980.000đ",
      product_type: "new",
    };
    var product18 = {
      product_name: "Giày Vans Old Skool Mule Beige 590747-0004",
      product_img:
        "image\\vans\\giay-Vans-Old-Skool-Mule-Beige-590747-0004.png.webp",
      product_company: "VANS",
      product_price: "1.890.000đ",
      product_type: "",
    };
    var product19 = {
      product_name:
        "Giày Vans Ua Style 36 Decon Sf Pumpkin Spice/Antique VN0A3MVL25T",
      product_img:
        "image\\vans\\Giay-Vans-Ua-Style-36-Decon-Sf-Pumpkin-SpiceAntique-VN0A3MVL25T.jpg.webp",
      product_company: "VANS",
      product_price: "2.890.000đ",
      product_type: "new",
    };
    var product20 = {
      product_name: "Giày Vans Old Skool Winter Sky VN0A54F69LY1",
      product_img:
        "image\\vans\\giay-vans-old-skool-winter-sky-vn0a54f69ly1-4.png.webp",
      product_company: "VANS",
      product_price: "1.890.000đ",
      product_type: "",
    };
    var product21 = {
      product_name: "Giày Vans Old Skool Black Teal VN0A3WKT4FV1",
      product_img:
        "image\\vans\\giay-vans-old-skool-black-teal-vn0a3wkt4fv1-13.png.webp",
      product_company: "VANS",
      product_price: "1.690.000đ",
      product_type: "10%",
    };
    var product22 = {
      product_name: "Giày Vans Old Skool Black Flame VN0A38G1K681",
      product_img:
        "image\\vans\\Giay-Vans-Old-Skool-Black-Flame-VN0A38G1K681.png.webp",
      product_company: "VANS",
      product_price: "1.690.000đ",
      product_type: "",
    };
    var product23 = {
      product_name: "Giày Vans Authentic Mule Red VN0A54F7JV61",
      product_img:
        "image\\vans\\Giay-Vans-Authentic-Mule-Red-VN0A54F7JV61.png.webp",
      product_company: "VANS",
      product_price: "1.590.000đ",
      product_type: "30%",
    };
    var product24 = {
      product_name: "Giày Vans Slip Skool Black Multi VN0A3WM5219",
      product_img: "image\\vans\\vans-slip-skool-black-multi.png.webp",
      product_company: "VANS",
      product_price: "1.290.000đ",
      product_type: "new",
    };

    productarray.push(product1);
    productarray.push(product2);
    productarray.push(product3);
    productarray.push(product4);
    productarray.push(product5);
    productarray.push(product6);
    productarray.push(product7);
    productarray.push(product8);
    productarray.push(product9);
    productarray.push(product10);
    productarray.push(product11);
    productarray.push(product12);
    productarray.push(product13);
    productarray.push(product14);
    productarray.push(product15);
    productarray.push(product16);
    productarray.push(product17);
    productarray.push(product18);
    productarray.push(product19);
    productarray.push(product20);
    productarray.push(product21);
    productarray.push(product22);
    productarray.push(product23);
    productarray.push(product24);
    localStorage.setItem("product", JSON.stringify(productarray));
  }
}
function check_url() {
  var url = window.location.href;
  if (url.indexOf("type=") != -1) return "product";
  if (url.indexOf("search=" != -1)) return "search";
  return " ";
}

function showproduct() {
  var status = check_url();
  if (status.indexOf(" ") != 0) {
    document.getElementById("poster_container").style.display = "none";
    if (status.indexOf("product") == 0) {
      innerproduct(arrayproduct());
    }
    if (status.indexOf("search") == 0) {
      innerproduct(searchproduct());
    }
  }
}

function arrayproduct() {
  var product = whichproduct();
  if (product.indexOf("new") != -1) {
    if (product.indexOf("nike") != -1) return newnikeproduct();
    if (product.indexOf("jordan") != -1) return newjordanproduct();
    if (product.indexOf("vans") != -1) return newvansproduct();
    return newproduct();
  }
  if (product.indexOf("jordan") != -1) {
    if (product.indexOf("1low") != -1) return jordan1lowproduct();
    if (product.indexOf("1mid") != -1) return jordan1midproduct();
    if (product.indexOf("1high") != -1) return jordan1highproduct();
    if (product.indexOf("4") != -1) return jordan4product();
    return jordanproduct();
  }
  if (product.indexOf("nike") != -1) {
    if (product.indexOf("af1") != -1) return nikeaf1product();
    if (product.indexOf("am") != -1) return nikeamproduct();
    if (product.indexOf("az") != -1) return nikeazproduct();
    return nikeproduct();
  }
  if (product.indexOf("vans") != -1) {
    if (product.indexOf("os") != -1) return vansosproduct();
    if (product.indexOf("so") != -1) return vanssoproduct();
    if (product.indexOf("cls") != -1) return vansclsproduct();
    return vansproduct();
  }
  if (product.indexOf("sale") != -1) {
    if (product.indexOf("10") != -1) return sale10product();
    if (product.indexOf("30") != -1) return sale30product();
    return saleproduct();
  }
  if (product.indexOf("all") != -1)
    return JSON.parse(localStorage.getItem("product"));
}

function whichproduct() {
  var href = window.location.href;
  var a = href.split("type=");
  return a[1];
}

function whichsearch() {
  var href = window.location.href;
  var a = href.split("search=");
  return a[1];
}

function searchproduct() {
  var allproduct = JSON.parse(localStorage.getItem("product"));
  var i;
  var search = whichsearch();
  var allsearch = [];
  for (i = 0; i < allproduct.length; i++) {
    if (allproduct[i].product_name.indexOf(search) != -1)
      allsearch.push(allproduct[i]);
  }
  return allsearch;
}

function jordanproduct() {
  var allproduct = JSON.parse(localStorage.getItem("product"));
  var i;
  var alljordan = [];
  for (i = 0; i < allproduct.length; i++) {
    if (allproduct[i].product_company.indexOf("JORDAN") == 0)
      alljordan.push(allproduct[i]);
  }
  return alljordan;
}

function jordan1lowproduct() {
  var i;
  var alljordan = jordanproduct();
  var jordanlow = [];
  for (i = 0; i < alljordan.length; i++) {
    if (alljordan[i].product_name.indexOf("Low") != -1)
      jordanlow.push(alljordan[i]);
  }
  return jordanlow;
}

function jordan1midproduct() {
  var i;
  var alljordan = jordanproduct();
  var jordanmid = [];
  for (i = 0; i < alljordan.length; i++) {
    if (alljordan[i].product_name.indexOf("Mid") != -1)
      jordanmid.push(alljordan[i]);
  }
  return jordanmid;
}

function jordan1highproduct() {
  var i;
  var alljordan = jordanproduct();
  var jordanhigh = [];
  for (i = 0; i < alljordan.length; i++) {
    if (alljordan[i].product_name.indexOf("High") != -1)
      jordanhigh.push(alljordan[i]);
  }
  return jordanhigh;
}

function jordan4product() {
  var i;
  var alljordan = jordanproduct();
  var jordan4 = [];
  for (i = 0; i < alljordan.length; i++) {
    if (alljordan[i].product_name.indexOf("4") != -1)
      jordan4.push(alljordan[i]);
  }
  return jordan4;
}

function nikeproduct() {
  var allproduct = JSON.parse(localStorage.getItem("product"));
  var i;
  var allnike = [];
  for (i = 0; i < allproduct.length; i++) {
    if (allproduct[i].product_company.indexOf("NIKE") == 0)
      allnike.push(allproduct[i]);
  }
  return allnike;
}

function nikeaf1product() {
  var allnike = nikeproduct();
  var i;
  var nikeaf1 = [];
  for (i = 0; i < allnike.length; i++) {
    if (allnike[i].product_name.indexOf("Force") != -1)
      nikeaf1.push(allnike[i]);
  }
  return nikeaf1;
}

function nikeamproduct() {
  var allnike = nikeproduct();
  var i;
  var nikeam = [];
  for (i = 0; i < allnike.length; i++) {
    if (allnike[i].product_name.indexOf("Max") != -1) nikeam.push(allnike[i]);
  }
  return nikeam;
}

function nikeazproduct() {
  var allnike = nikeproduct();
  var i;
  var nikeaz = [];
  for (i = 0; i < allnike.length; i++) {
    if (allnike[i].product_name.indexOf("Zoom") != -1) nikeaz.push(allnike[i]);
  }
  return nikeaz;
}

function vansproduct() {
  var allproduct = JSON.parse(localStorage.getItem("product"));
  var i;
  var allvans = [];
  for (i = 0; i < allproduct.length; i++) {
    if (allproduct[i].product_company.indexOf("VANS") == 0)
      allvans.push(allproduct[i]);
  }
  return allvans;
}

function vansosproduct() {
  var allvans = vansproduct();
  var i;
  var vansos = [];
  for (i = 0; i < allvans.length; i++) {
    if (allvans[i].product_name.indexOf("Old") != -1) vansos.push(allvans[i]);
  }
  return vansos;
}

function vanssoproduct() {
  var allvans = vansproduct();
  var i;
  var vansso = [];
  for (i = 0; i < allvans.length; i++) {
    if (allvans[i].product_name.indexOf("Slip") != -1) vansso.push(allvans[i]);
  }
  return vansso;
}

function vansclsproduct() {
  var allvans = vansproduct();
  var i;
  var vanscls = [];
  for (i = 0; i < allvans.length; i++) {
    if (allvans[i].product_name.indexOf("Classic") != -1)
      vanscls.push(allvans[i]);
  }
  return vanscls;
}

function newproduct() {
  var allproduct = JSON.parse(localStorage.getItem("product"));
  var i;
  var allnew = [];
  for (i = 0; i < allproduct.length; i++) {
    if (allproduct[i].product_type.indexOf("new") == 0)
      allnew.push(allproduct[i]);
  }
  return allnew;
}

function newnikeproduct() {
  var allnew = newproduct();
  var i;
  var newnike = [];
  for (i = 0; i < allnew.length; i++) {
    if (allnew[i].product_company.indexOf("NIKE") == 0) newnike.push(allnew[i]);
  }
  return newnike;
}

function newjordanproduct() {
  var allnew = newproduct();
  var i;
  var newjordan = [];
  for (i = 0; i < allnew.length; i++) {
    if (allnew[i].product_company.indexOf("JORDAN") == 0)
      newjordan.push(allnew[i]);
  }
  return newjordan;
}

function newvansproduct() {
  var allnew = newproduct();
  var i;
  var newvans = [];
  for (i = 0; i < allnew.length; i++) {
    if (allnew[i].product_company.indexOf("VANS") == 0) newvans.push(allnew[i]);
  }
  return newvans;
}

function saleproduct() {
  var allproduct = JSON.parse(localStorage.getItem("product"));
  var i;
  var allsale = [];
  for (i = 0; i < allproduct.length; i++) {
    if (allproduct[i].product_type.indexOf("%") != -1)
      allsale.push(allproduct[i]);
  }
  return allsale;
}

function sale10product() {
  var allsale = saleproduct();
  var i;
  var sale10 = [];
  for (i = 0; i < allsale.length; i++) {
    if (allsale[i].product_type.indexOf("10") != -1) sale10.push(allsale[i]);
  }
  return sale10;
}

function sale30product() {
  var allsale = saleproduct();
  var i;
  var sale30 = [];
  for (i = 0; i < allsale.length; i++) {
    if (allsale[i].product_type.indexOf("30") != -1) sale30.push(allsale[i]);
  }
  return sale30;
}

function innerproduct(array) {
  var i;
  var a = "";
  var x = document.getElementsByClassName("main_product_content");
  console.log(array);
  for (i = 0; i < array.length; i++) {
    a +=
      '<div class="title_sp"> <a href="vans.html" >' +
      array[i].product_company +
      "</a> </div>";
    a +=
      '<div id="product_container"><div class="product_item"><div class="product_info">';
    a += '<img src="' + array[i].product_img + '" />';
    a += '<a href="index.html" class="product_buy">Thêm Vào Giỏ Hàng</a>';
    a += '<h3 class="product_name">' + array[i].product_name + "</h3>";
    a += '<div class="product_company" >' + array[i].pruduct_company + "</div>";
    a +=
      '<div class="product_price"><b>' + array[i].product_price + "</b></div>";
    x.innerHTML = a;
  }
}

/*------------------Mảng sản phẩm---------------*/
