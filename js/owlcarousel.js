var miniCart = parseLocal("dataCart") || [];
var wishList = parseLocal("WishListProduct") || [];

window.addEventListener("load", function () {
  $("#main-slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    margin: 20,
    dots: true,
    items: 1,
    navText: [
      `<i class="fas fa-chevron-left"></i>`,
      `<i class="fas fa-chevron-right"></i>`,
    ],
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    responsive: {
      0: {
        nav: false,
      },
      992: {
        nav: false,
      },
      1024: {
        nav: true,
      },
    },
  });
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

const bestSale = products.filter((item) => item.isBest);

function renderProduct1(data) {
  let divProduct1 = getELE("products1");
  let productItem = "";
  for (let [index, item] of data.entries()) {
    if (index < 8) {
      productItem += `
        <div class="col-3 item">
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
                            <li class="compare"><i class="fas fa-sliders-h"></i> <span>Compare</span> </li>
                            <li class="detail"><i class="fas fa-eye"></i><span>View Details</span></li>
                        </ul>
                    </div>

                    <div class="content">
                        <h4>${item.name}</h4>
                        <div class="price">
                          đ ${(item.price * 1).toLocaleString("vi-VN")}
                        </div>
                    </div>
                </div>
            </div>
    `;
    }
  }
  divProduct1.innerHTML = productItem;
}

function renderProduct2(data) {
  let divProduct1 = getELE("products2");
  let productItem = "";
  for (let [index, item] of data.entries()) {
    if (index < 8) {
      productItem += `
        <div class="col-3 item">
                <div class="product" data-id=${item.id} id="dataID">
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
                            <li class="compare"><i class="fas fa-sliders-h"></i> <span>Compare</span> </li>
                            <li class="detail"><i class="fas fa-eye"></i><span>View Details</span></li>
                        </ul>
                    </div>

                    <div class="content">
                        <h4>${item.name}</h4>
                        <div class="price">
                            ${(item.price * 1).toLocaleString("vi-VN")}
                        </div>
                    </div>
                </div>
            </div>
    `;
    }
  }
  divProduct1.innerHTML = productItem;
}

// Scroll window
$(document).scroll(function () {
  const currentPos = $(this).scrollTop();
  $(".main-header").toggleClass("active", currentPos > 150);
  $(".backtotop").toggleClass("active", currentPos > 500);
});

function getAllItemProduct() {
  return products;
}
