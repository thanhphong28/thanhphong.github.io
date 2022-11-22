
// Đưa vào giỏ hàng
hienThiDanhSachItemGioHang();
// var keyLocalStorageItemGioHang = 'danhSachItemGioHang';

function onClickDuaVaoGioHang(product_id) {
  if (JSON.parse(localStorage.getItem("login_status"))==true)
  {
    thongbao_ok();
    const products = JSON.parse(localStorage.getItem("product")) ;
    const product = products.find(product => product.product_id === `'${product_id}'`);
    var danhSachItemGioHang = layDanhSachItemGioHang();
    var coTonTaiTrongItemGioHang = false;
    for(var i=0; i < danhSachItemGioHang.length; i++){
      var itemGioHangHienTai = danhSachItemGioHang[i];

      // nếu tồn tại thì tăng số lượng
      if(itemGioHangHienTai.product_id == `'${product_id}'`){
        danhSachItemGioHang[i].soluong ++;
        coTonTaiTrongItemGioHang=true;
      }
    }
    //  nếu không tồn tại thì tạo ra đối tượng và thêm vào danh sách giỏ hàng
    if(coTonTaiTrongItemGioHang == false){
      var itemGioHang = taoDoiTuongItemGioHang(product);
      danhSachItemGioHang.push(itemGioHang);
    }

    luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGioHang);
    hienThiDanhSachItemGioHang();
  }
  else{
    thongbao_loi() ;
  }
}

function thongbao_ok() {
  var x = document.getElementById("thongbao");
  document.getElementById("thongbao").style.display = "block";
  var a = innertitle();
  a= `
  <div class="thongbao" id="thongbao" onclick="exit_tb()">      <video src="image/check/themok.mp4" autoplay muted >    </div>`;
  return x.innerHTML=a;
}
function thongbao_loi() {
  var x = document.getElementById("thongbao");
  document.getElementById("thongbao").style.display = "block";
  var a = innertitle();
  a= `
  <div class="thongbao" id="thongbao" onclick="exit_tb()">      <video src="image/check/themloi.mp4" autoplay muted >    </div>`;
  return x.innerHTML=a;
}
function exit_tb() {
  document.getElementById("thongbao").style.display = "none";
}


function taoDoiTuongItemGioHang(product){
  var itemGioHang = new Object()
 
  itemGioHang = {
    ...product,
    soluong: 1
  }

  return itemGioHang;
}

function layDanhSachItemGioHang(){
  var danhSachItemGioHang = new Array();
  
  var jsonDanhSachItemGioHang = localStorage.getItem("GioHang");

  if(jsonDanhSachItemGioHang != null){
  danhSachItemGioHang = JSON.parse(jsonDanhSachItemGioHang);
  }
  return danhSachItemGioHang;
}

function luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGioHang){
  var jsonDanhSachItemGioHang = JSON.stringify(danhSachItemGioHang);

  localStorage.setItem("GioHang", jsonDanhSachItemGioHang);

}

function hienThiDanhSachItemGioHang(){
  var danhSachItemGioHang = layDanhSachItemGioHang();

  var HTML = chuyenDanhSachItemGioHangHTML(danhSachItemGioHang);
  // console.log(HTML);

  var nodeGioHang = document.getElementById('gio-hang');
  nodeGioHang.innerHTML = nodeGioHang.innerHTML + HTML ;
}

//chuyen 1 danh sách thanh html
//input danh sách item giỏ hàng
// output html hiện thị danh sách item giỏ hàng
function chuyenDanhSachItemGioHangHTML(danhSachItemGioHang) {
  var htmlTong = ' ';
  for (var i=0; i< danhSachItemGioHang.length; i++){
    htmlTong = htmlTong + chuyenDoiTuongItemGioHangSangHTML(danhSachItemGioHang[i],i);
  }
  return htmlTong;
}

// chuyen 1 doi tuong thanh html
// input la doi tuong gio hang
// outtup la html hien thi item gio hang
function chuyenDoiTuongItemGioHangSangHTML(itemGioHang,num) {
  var html= `
    <div class="item-gio-hang">
      <div class="hinhAnh">
        <img src=${itemGioHang.product_img} />
      </div>
      <p class="ten">${itemGioHang.product_name}</p>
      <div class="gia">
        <span class="giagoc">${itemGioHang.product_price}</span>
      </div>
      <p class="soluong" value=>${itemGioHang.soluong}  </p>
      <p class="tongtien">${parseInt(itemGioHang.product_price.replaceAll('.', '').replace('đ', '')) * itemGioHang.soluong+' đ'}</p>
      <div class="hanhdong">
        <a onclick="xoaSpTrongGio(${ num })"><i class="fa-solid fa-trash"></i></a>
      </div>
      
    </div>
  `;
  return html;
}

 function xoaSpTrongGio(num){
   var jsonDonHang = JSON.parse(localStorage.getItem('GioHang'));
   jsonDonHang.splice(num,1);
   localStorage.setItem('GioHang',JSON.stringify(jsonDonHang));
   window.location.reload();
 }
// kiểm tra form thông tin nhận hàng
localStorage.setItem('DonHang',JSON.stringify(DonHangArray));
function taoDonHang(){
  var DonHangArray=[];

  if(kiemTraThongTin()==true){
    var DonHangArray = JSON.parse(localStorage.getItem("DonHang"));
    var newDonHang = {
      hoten: document.getElementById("hoten").value,
      sdt: document.getElementById("sdt").value,
      diachi: document.getElementById("diachi").value,
      giohang: JSON.parse(localStorage.getItem('GioHang'))
    };
    
    DonHangArray.push(newDonHang);
    localStorage.setItem("DonHang", JSON.stringify(DonHangArray));
    alert('đặt hàng thành công');
    localStorage.setItem("GioHang", JSON.stringify([]));
    window.location.reload();

  }

}

function kiemTraThongTin(){
  var hople = true;

  var nodeHoTen = document.getElementById('hoten');
  var nodeSdt = document.getElementById('sdt');
  var nodeDiaChi = document.getElementById('diachi');
  var hoten = nodeHoTen.value;
  var sdt = nodeSdt.value;
  var diachi = nodeDiaChi.value;

  console.log('kiem tra hop le:' + hoten +';'+ sdt);

  // hiện thị lỗi
  var nodeErrorHotTen = document.getElementById('error_hoten');
  var nodeErrorSdt = document.getElementById('error_sdt');
  var nodeErrorDiaChi = document.getElementById('error_diachi');
  nodeErrorHotTen.innerHTML = '';
  nodeErrorSdt.innerHTML = '';
  nodeErrorDiaChi.innerHTML = '';

  if(hoten == null || hoten.length == 0){
    hople = false;
    nodeErrorHotTen.innerHTML = 'Hãy nhập họ tên của bạn';
  }

  if(sdt == null || sdt.length == 0){
    hople = false;
    nodeErrorSdt.innerHTML = 'Hãy Số Điện Thoại Của Bạn (Nếu nhập sai hàng sẽ không được gửi)';
  }

  if(diachi == null || diachi.length == 0){
    hople = false;
    nodeErrorDiaChi.innerHTML = 'Hãy Nhập Địa Chỉ Nhận Hàng (Nếu nhập sai hàng sẽ không được gửi)';
  }

  return hople;

}
