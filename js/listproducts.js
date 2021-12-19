/*File: listproducts.js
@Author: Le Thanh Dat, datb1910205@student.ctu.edu.vn
@Created date:  11-12-2021, updated 18-12-2021*/

// tạo ra file localStorage và đặt tên dataCart là mảng rông
var miniCart = parseLocal("dataCart") || [];
// tạo ra file localStorage và đặt tên WishListProduct là mảng rông
var wishList = parseLocal("WishListProduct") || [];

window.addEventListener("load", function () {
  renderProduct1(products);
  renderProduct2(bestSale);

  renderMiniCart(miniCart);
  // renderWishList(wishList);
});

// Array sản phẩm
var products = [
  {
    id: 1,
    name: "Kính cổ điển của phụ nữ",
    price: "349000",
    img: "./img/product/20-copy-600x745.jpg",
    img1: "./img/product/20_1-copy-600x745.jpg",
    isSale: false,
    isBest: true,
    type: "Accessories",
  },
  {
    id: 2,
    name: "Áo khoác Dây kéo Cartoon",
    price: "255000",
    img: "./img/product/3_1-600x745.jpg",
    img1: "./img/product/2_4-copy-600x745.jpg",
    isSale: true,
    isBest: false,
    type: "Womens",
  },
  {
    id: 3,
    name: "Áo thun Cá sấu nam có cổ",
    price: "399000",
    img: "./img/product/10_1-copy-600x745.jpg",
    img1: "./img/product/10_2-copy-600x745.jpg",
    isSale: false,
    isBest: false,
    type: "Mens",
  },
  {
    id: 4,
    name: "Áo Sơ Mi Cá Sấu Nữ Dài Tay",
    price: "480000",
    img: "./img/product/9-copy-600x745.jpg",
    img1: "./img/product/9_2-copy-1-600x745.jpg",
    isSale: false,
    isBest: false,
    type: "Womens",
  },
  {
    id: 5,
    name: "Quần ống rộng form dài cho nữ",
    price: "545555",
    img: "./img/product/1_1-600x745.jpg",
    img1: "./img/product/2_4-copy-600x745.jpg",
    isSale: false,
    isBest: false,
    type: "Mens",
  },
  {
    id: 6,
    name: "Áo T_Shirt cotton",
    price: "129999",
    img: "./img/product/8_1-copy-600x745.jpg",
    img1: "./img/product/8_2-copy-600x745.jpg",
    isSale: false,
    isBest: true,
    type: "Womens",
  },
  {
    id: 7,
    name: " Balo dù trơn",
    price: "999500",
    img: "./img/product/17_1-copy-600x745.jpg",
    img1: "./img/product/17-copy-600x745.jpg",
    isSale: true,
    isBest: false,
    type: "Backpack",
  },
  {
    id: 8,
    name: "Túi Xách Vải Dù",
    price: "700000",
    img: "./img/product/11_1-copy-600x745.jpg",
    img1: "",
    isSale: false,
    isBest: false,
    type: "Backpack",
  },
  {
    id: 9,
    name: "Balo đa năng thời trang",
    price: "289990",
    img: "./img/product/19_1-copy-600x745.jpg",
    img1: "./img/product/19_2-copy-600x745.jpg",
    isSale: false,
    isBest: true,
    type: "Backpack",
  },
  {
    id: 10,
    name: "Áo Sơ Mi Nam Dài Tay",
    price: "839888",
    img: "./img/product/12-copy-600x745.jpg",
    img1: "./img/product/12_2-copy-600x745.jpg",
    isSale: false,
    isBest: true,
    type: "Mens",
  },
  {
    id: 11,
    name: "Giày bốt da ngắn đế dày",
    price: "162400",
    img: "./img/product/22_1-copy-600x745.jpg",
    img1: "./img/product/21-copy-600x745.jpg",
    isSale: false,
    isBest: true,
    type: "Shoes",
  },
  {
    id: 12,
    name: "Áo polo vải cotton - lụa dệt kim",
    price: "1699000",
    img: "./img/product/7_1-copy-600x745.jpg",
    img1: "./img/product/7-copy-600x745.jpg",
    isSale: false,
    isBest: true,
    type: "Accessories",
  },
  {
    id: 13,
    name: "Áo Gió Nữ Mùa Đông Rộng Có Mũ",
    price: "222000",
    img: "./img/product/2_1-copy-600x745.jpg",
    img1: "./img/product/2_3-copy-600x745.jpg",
    isSale: true,
    isBest: true,
    type: "Womens",
  },
  {
    id: 14,
    name: "Quần thể thao Nam",
    price: "400000",
    img: "./img/product/6_1-copy-600x745.jpg",
    img1: "",
    isSale: false,
    isBest: true,
    type: "Womens",
  },
];
// Array ảnh
var listImgItem = [
  {
    id: 1,
    img: ["./img/product/20-copy-600x745.jpg"],
  },
  {
    id: 2,
    img: ["./img/product/3_1-600x745.jpg"],
  },
  {
    id: 3,
    img: ["./img/product/10_1-copy-600x745.jpg"],
  },
  {
    id: 4,
    img: ["./img/product/9-copy-600x745.jpg"],
  },
  {
    id: 5,
    img: ["./img/product/1_1-600x745.jpg"],
  },
  {
    id: 6,
    img: ["./img/product/8_1-copy-600x745.jpg"],
  },
  {
    id: 7,
    img: ["./img/product/17_1-copy-600x745.jpg"],
  },
  {
    id: 8,
    img: ["./img/product/11_1-copy-600x745.jpg"],
  },
  {
    id: 9,
    img: ["./img/product/19_1-copy-600x745.jpg"],
  },
  {
    id: 10,
    img: ["./img/product/12-copy-600x745.jpg"],
  },
  {
    id: 11,
    img: ["./img/product/22_1-copy-600x745.jpg"],
  },
  {
    id: 12,
    img: ["./img/product/7_1-copy-600x745.jpg"],
  },
  {
    id: 13,
    img: ["./img/product/2_1-copy-600x745.jpg"],
  },
  {
    id: 14,
    img: ["./img/product/6_1-copy-600x745.jpg"],
  },
];

// Array blog
const blogs = [
  {
    id: "b1",
    img: "8-500x321.jpg",
    head: "Lưu ý mặc đẹp nơi công sở",
    des: "Chi những khoản tiền lớn để sắm trang phục đắt đỏ chưa chắc đã đảm bảo cho sự xuất hiện hoàn hảo của bạn ở...",
    link: "https://blueskytechco.com/rubix/6-things-to-note-to-wear-well-in-the-workplace/",
  },
  {
    id: "b2",
    img: "7-500x321.jpg",
    head: "5 cách phối đồ cho áo tay phồng",
    des: "Bạn là một cô gái yêu thích phong cách nhẹ nhàng, nữ tính, “bánh mì đất” và bạn yêu thích những tông màu pastel …",
    link: "https://blueskytechco.com/rubix/6-things-to-note-to-wear-well-in-the-workplace/",
  },
  {
    id: "b3",
    img: "6-500x321.jpg",
    head: "Cách mix đồ với áo trễ vai",
    des: "Áo trễ vai là một món đồ không thể thiếu trong tủ đồ của mọi cô gái. Một item vừa đáng yêu, vừa sexy nhưng cũng...",
    link: "https://blueskytechco.com/rubix/6-things-to-note-to-wear-well-in-the-workplace/",
  },
  {
    id: "b4",
    img: "5-500x321.jpg",
    head: "7 cách mix đồ với áo trễ vai",
    des: "Quần sooc, váy, khuyên tai, mũ,… là một trong những cách mặc áo trễ vai mà bất cứ cô gái nào cũng có thể… …",
    link: "https://blueskytechco.com/rubix/6-things-to-note-to-wear-well-in-the-workplace/",
  },
];

const bestSale = products.filter((item) => item.isBest);


function renderProduct1(data) {
  let divProduct1 = getELE("products1");
  let productItem = "";
  for (let [index, item] of data.entries()) {
    if (index < 8) {
      productItem += `
       <div class="col-6 col-md-4 col-xl-3 item">
                <div class="product" data-id=${item.id}  id="dataID">
                    <div class="img">
                        <a href="#">
                            <img src="${item.img}" alt="">
                            <img src="${item.img1}" alt="">
                        </a>
                        <button class="btn a-center d-flex addCartItem" onclick="clickAddToCard(${
                          item.id
                        },event)">
                            <i class="bi bi-handbag"></i> Add To Card
                        </button>
                        <ul class="action action1">
                            <li onclick="clickAddWishList(${
                              item.id
                            },event)" class="wishlist"><i class="far fa-heart"></i><span>Add to Wishlist</span>
                            </li>
                            <li class="compare action-disable"><i class="fas fa-sliders-h"></i> <span>Compare</span> </li>
                             <li onclick="clickQuickView(${
                               item.id
                             },event)" class="detail" data-bs-toggle="modal" data-bs-target="#detailModal"><i class="fas fa-eye"></i><span>View Details</span></li>
                        </ul>
                         <ul class="action action2">
                            <li onclick="clickAddWishList(${
                              item.id
                            },event)" class="wishlist"><i class="far fa-heart"></i><span></span>
                            </li>
                            <li onclick="clickAddToCard(${
                              item.id
                            },event)" class="addCartItem"><i class="bi bi-handbag"></i></li>
                        </ul>
                    </div>

                    <div class="content">
                        <h4>${item.name}</h4>
                        <div class="price">
                           ${(item.price * 1).toLocaleString("vi-VN")} đ
                        </div>
                    </div>
                </div>
            </div>
    `;
    }
  }
  if (divProduct1 !== null) {
    divProduct1.innerHTML = productItem;
  }
}

function renderProduct2(data) {
  let divProduct1 = getELE("products2");
  let productItem = "";
  for (let [index, item] of data.entries()) {
    if (index < 8) {
      productItem += `
        <div class="col-6 col-md-4 col-xl-3 item">
                <div class="product" data-id=${item.id}  id="dataID">
                    <div class="img">
                        <a href="#">
                            <img src="${item.img}" alt="">
                            <img src="${item.img1}" alt="">
                        </a>
                        <button class="btn a-center d-flex addCartItem" onclick="clickAddToCard(${
                          item.id
                        },event)">
                            <i class="bi bi-handbag"></i> Add To Card
                        </button>
                        <ul class="action action1">
                            <li onclick="clickAddWishList(${
                              item.id
                            },event)" class="wishlist"><i class="far fa-heart"></i><span>Add to Wishlist</span>
                            </li>
                            <li class="compare action-disable"><i class="fas fa-sliders-h"></i> <span>Compare</span> </li>
                             <li onclick="clickQuickView(${
                               item.id
                             },event)" class="detail" data-bs-toggle="modal" data-bs-target="#detailModal"><i class="fas fa-eye"></i><span>View Details</span></li>
                        </ul>
                         <ul class="action action2">
                            <li onclick="clickAddWishList(${
                              item.id
                            },event)" class="wishlist"><i class="far fa-heart"></i><span></span>
                            </li>
                            <li onclick="clickAddToCard(${
                              item.id
                            },event)" class="addCartItem"><i class="bi bi-handbag"></i></li>
                        </ul>
                    </div>

                    <div class="content">
                        <h4>${item.name}</h4>
                        <div class="price">
                          ${(item.price * 1).toLocaleString("vi-VN")} đ
                        </div>
                    </div>
                </div>
            </div>
    `;
    }
  }
  if (divProduct1 !== null) {
    divProduct1.innerHTML = productItem;
  }
}
function getAllimg() {
  return listImgItem;
}
function getAllItemProduct() {
  return products;
}

// https:www.w3schools.com
window.addEventListener("scroll", function () {
  let header = document.querySelector(".main-header");
  header.classList.toggle("active", window.scrollY > 100);
});
