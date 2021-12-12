/*File: main.js
@Author: datb1910205@student.ctu.edu.vn
@Created  date:  12/12/2021*/

// tạo ra file localStorage và đặt tên dataCart là mảng rông
var miniCart = parseLocal("dataCart") || [];

$(document).ready(function () {
  renderMiniCart(miniCart);
  renderProduct(products);
});

// Array sản phẩm
var products = [
  {
    id: 1,
    name: "Áo sơ mi nam An Phước - ASN001282",
    price: "867.999",
    img: "./img/product-001.jpg",
  },
  {
    id: 2,
    name: "Đầm voan, vạt tà chéo - MMOutfit",
    price: "799.999",
    img: "./img/product-002.jpg",
  },
  {
    id: 3,
    name: "Áo sơ mi nam cao cấp công sở Hoàn Mỹ",
    price: "999.999",
    img: "./img/product-003.jpg",
  },
  {
    id: 4,
    name: "Giày thể thao bé gái - GVBG.74 - BITAS",
    price: "170.555",
    img: "./img/product-004.jpg",
  },
  {
    id: 5,
    name: "Giày thể thao bé trai - ASN001282",
    price: "356.999",
    img: "./img/product-005.jpg",
  },
  {
    id: 6,
    name: "Gấu nhồi bông cao cấp cho bé - Babybea",
    price: "409.955",
    img: "./img/product-006.jpg",
  },
  {
    id: 7,
    name: "Váy ly bèo lưng - K38 K38 Comayca",
    price: "679.555",
    img: "./img/product-007.jpg",
  },
  {
    id: 8,
    name: "Váy ly bèo lưng - K38 K38 Comayca",
    price: "499.555",
    img: "./img/product-008.jpg",
  },
];

function renderProduct(data) {
  const productItem = data.map(
    (item, index) => `
            <div class="item" data-id=${item.id} >
                    <img class="item-image" src="${item.img}" />
                    <div class="item-info">
                        <p class="item-id" hidden>${item.id}</p>
                        <h3 class="item-title">${item.name}</h3>
                        <p class="item-price">${item.price}</p>
                     </div>
                    <a href="#" class="add-cart" >Add to cart</a>
        </div>`
  );
  $("#products").append(productItem);
}

// Hàm dùng để show ra sản phẩm trong giỏ hàng
function renderMiniCart(data) {
  const mini_cart = $("#mini-cart-product");
  const subTotal = $(".sub-total");
  const amount = $(".shopping-card .no-ordered-items");
  mini_cart.empty();
  const total = data
    .reduce((sumPrice, item) => {
      const content = `
    <tr data-id=${item.id} style="text-align:center">
      <td>${item.id}</td>
      <td><img style="width:90px; height="90px" src="${item.img}" alt="${
        item.name
      }"/></td>
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>${item.price}</td>
      <td>${(item.price * item.quantity).toLocaleString()}</td>
      <td><button type="button" class="btn btn-danger" onclick="xoaGioHang(${
        item.id
      })">Xoá</button></td>

    </tr>
    `;
      mini_cart.append(content);
      return (sumPrice += item.quantity * item.price);
    }, 0)
    .toLocaleString();

  const length = data.reduce((sumSL, item) => {
    return (sumSL += item.quantity);
  }, 0);
  // render tổng số lượng  sản phẩm
  amount.html(length);
  // render tổng tiền trong miniCart
  subTotal.html(`${total}`);
}

/* Get , Set LocalStorage */
function setLocal(data, name) {
  if (data) return localStorage.setItem(`${name}`, JSON.stringify(data));
}

function parseLocal(name) {
  const data = localStorage.getItem(name);
  return JSON.parse(data);
}

// Hàm dùng dể thêm sản phẩm vào giỏ hàng
function addMiniCart(id) {
  console.log("miniCart", miniCart);
  // duyệt giỏ hàng và kiểm tra id trong giỏ hàng có bằng với id người dùng click không
  let index = miniCart.findIndex((spGioHang) => spGioHang.id === id);

  // Lấy ra product = id và đẩy lên miniCart
  const element = products.find((spGioHang) => spGioHang.id == id);

  // Nếu index != -1 thì giỏ hàng đã tồn tại trong giỏ hàng , chỉ việc tăng quantity++
  if (index != -1) {
    // Tìm ra sản phẩm trong giỏ hàng thứ index => tắng số lượng
    miniCart[index].quantity = ++miniCart[index].quantity;
  }
  // Nếu sản phẩm chưa tồn tại trong giỏ hàng thì thêm sản phẩm vào giỏ hàng kèm theo thuộc tính quantity:1
  else {
    const newValue = {
      ...element,
      quantity: 1,
    };

    miniCart.push(newValue);
  }

  setLocal(miniCart, "dataCart");
}

// Sự kiện khi click vào button thêm sản phẩm
$(document).on("click", ".item .add-cart", function (e) {
  e.preventDefault();

  const id = $(this).parents(".item").data("id");
  // alert(`Item-Id: ${id}`);

  // thêm sản phẩm có id vào trong mảng
  addMiniCart(id);
  // render lại giỏ hàng
  renderMiniCart(miniCart);
});

xoaGioHang = (id) => {
  const newMiniCart = [...miniCart];
  // Tìm các phần tử có trong giỏ hàng
  let index = newMiniCart.findIndex((spGioHang) => spGioHang.id === id);
  console.log("index", index);
  // Nếu tìm được phần tử có trong giỏ hàng
  if (index != -1) {
    // Xoá 1 phần từ tại vị trí index
    miniCart.splice(index, 1);
  } else {
    // set lại giỏ hàng mới
    miniCart = [...newMiniCart];
  }

  // Cập nhật lại giỏ hàng mới
  renderMiniCart(miniCart);
  setLocal(miniCart, "dataCart");
};
