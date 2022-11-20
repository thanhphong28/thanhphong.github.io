// Đưa vào giỏ hàng
hienThiDanhSachItemGioHang();
var keyLocalStorageItemGioHang = 'danhSachItemGioHang';

function onClickDuaVaoGioHang(product_id) {
  alert("Thêm Vào Giỏ Hàng Thành Công ") ;
  const products = JSON.parse(localStorage.getItem("product")) || [];
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
  hienThiDanhSachItemGioHang()
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
  
  var jsonDanhSachItemGioHang = localStorage.getItem(keyLocalStorageItemGioHang);

  if(jsonDanhSachItemGioHang != null){
  danhSachItemGioHang = JSON.parse(jsonDanhSachItemGioHang);
  }
  return danhSachItemGioHang;
}

function luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGioHang){
  var jsonDanhSachItemGioHang = JSON.stringify(danhSachItemGioHang);

  localStorage.setItem(keyLocalStorageItemGioHang, jsonDanhSachItemGioHang);

}

function hienThiDanhSachItemGioHang(){
  var danhSachItemGioHang = layDanhSachItemGioHang();

  var HTML = chuyenDanhSachItemGioHangHTML(danhSachItemGioHang);
  // console.log(HTML);

  var nodeGioHang = document.getElementById('gio-hang');
  nodeGioHang.innerHTML =nodeGioHang.innerHTML + HTML ;
}

//chuyen 1 danh sách thanh html
//input danh sách item giỏ hàng
// output html hiện thị danh sách item giỏ hàng
function chuyenDanhSachItemGioHangHTML(danhSachItemGioHang) {
  var htmlTong = ' ';
  for (var i=0; i< danhSachItemGioHang.length; i++){
    htmlTong = htmlTong + chuyenDoiTuongItemGioHangSangHTML(danhSachItemGioHang[i]);
  }
  return htmlTong;
}

// chuyen 1 doi tuong thanh html
// input la doi tuong gio hang
// outtup la html hien thi item gio hang
function chuyenDoiTuongItemGioHangSangHTML(itemGioHang) {
  var html= `
    <div class="item-gio-hang">
      <div class="hinhAnh">
        <img src=${itemGioHang.product_img} />
      </div>
      <p class="ten">${itemGioHang.product_name}</p>
      <div class="gia">
        <span class="giagoc">${itemGioHang.product_price}</span>
      </div>
      <input type="number" class="soluong" value=${itemGioHang.soluong} min="1" />
      <p class="tongtien">${parseInt(itemGioHang.product_price.replaceAll('.', '').replace('đ', '')) * itemGioHang.soluong+' đ'}</p>
      <div class="hanhdong">
        <i class="fa-solid fa-trash"></i>
      </div>
    </div>
  `;
  return html;
}