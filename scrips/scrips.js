function kiemtra() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var phone = document.getElementById("phone").value;
  var mkhau = document.getElementById("id_mkhau").value;
  var email = document.getElementById("id_email").value;
  var confirm_mkhau = document.getElementById("confirm_mkhau").value;
  console.log("in");
  console.log(fname);
  console.log(email);
  console.log(mkhau);
  console.log(confirm_mkhau);

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

// cái này không kiểm tra được nên nút đăng ký đang để onclick kiem tra
function xacnhandangki() {
  if (kiemtra() == false) return false;
  /*Khu vuc nay code them de lay thong tin dang ki luu vao mang user */
  var a = document.getElementById("register_container");
  var b = document.getElementById("login_container");
  b.style.display = "block";
  a.style.display = "none";
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
  var url = "index.html?" + value;
  console.log(url);
  document.getElementById("search_box").href = url;
}

function register() {
  var a = document.getElementById("register_container");
  a.style.display = "block";
  var b = document.getElementById("login_container");
  b.style.display = "none";
}
function exit_register() {
  var a = document.getElementById("register_container");
  a.style.display = "none";
}

/*Phần này làm về mảng sản phẩm */

var productarray = [];

window.onload = function () {
  default_product();
};

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
      product_type: "25%",
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
      product_type: "20%",
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
      product_type: "25%",
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
      product_type: "20%",
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

/*------------------Mảng sản phẩm---------------*/
