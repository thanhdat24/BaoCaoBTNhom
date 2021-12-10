$(document).ready(function () {
  // This is slider list products
  $(".listProduct").owlCarousel({
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      640: {
        items: 3,
      },
      992: {
        items: 3,
        nav: true,
      },
      1200: {
        items: 4,
        nav: false,
      },
    },
  });

  renderOwl(products, $("#products1"));
  renderOwl(bestSale, $("#products2"));
});

// Declare itemiable of products or blogs post
var products = [
  {
    id: 1,
    name: "Women’s classic glasses",
    price: "80.00",
    img: "./img/product/20-copy-600x745.jpg",
    img1: "./img/product/20_1-copy-600x745.jpg",
    isSale: false,
    isBest: true,
    type: "Accessories",
  },
  {
    id: 2,
    name: "Daily Ritual Women’s",
    price: "80.00",
    img: "./img/product/3_1-600x745.jpg",
    img1: "./img/product/2_4-copy-600x745.jpg",
    isSale: true,
    isBest: false,
    type: "Womens",
  },
  {
    id: 3,
    name: "Cotton Fleece Jogging",
    price: "39.00",
    img: "./img/product/10_1-copy-600x745.jpg",
    img1: "./img/product/10_2-copy-600x745.jpg",
    isSale: false,
    isBest: false,
    type: "Mens",
  },
  {
    id: 4,
    name: "Sweeper and Funnel",
    price: "80.00",
    img: "./img/product/9-copy-600x745.jpg",
    img1: "./img/product/9_2-copy-1-600x745.jpg",
    isSale: false,
    isBest: false,
    type: "Womens",
  },
  {
    id: 5,
    name: "Unisex Fashion Show",
    price: "39.00",
    img: "./img/product/1_1-600x745.jpg",
    img1: "./img/product/2_4-copy-600x745.jpg",
    isSale: false,
    isBest: false,
    type: "Mens",
  },
  {
    id: 6,
    name: "Mogens Koch Bookcase",
    price: "28.00",
    img: "./img/product/8_1-copy-600x745.jpg",
    img1: "./img/product/8_2-copy-600x745.jpg",
    isSale: false,
    isBest: true,
    type: "Womens",
  },
  {
    id: 7,
    name: "Neocro backpack in canvas",
    price: "259.00",
    img: "./img/product/17_1-copy-600x745.jpg",
    img1: "./img/product/17-copy-600x745.jpg",
    isSale: true,
    isBest: false,
    type: "Backpack",
  },
  {
    id: 8,
    name: "Small Zip Tote Bag",
    price: "80.00",
    img: "./img/product/11_1-copy-600x745.jpg",
    img1: "",
    isSale: false,
    isBest: false,
    type: "Backpack",
  },
  {
    id: 9,
    name: "Casual Embossed Lettering",
    price: "79.00",
    img: "./img/product/19_1-copy-600x745.jpg",
    img1: "./img/product/19_2-copy-600x745.jpg",
    isSale: false,
    isBest: true,
    type: "Backpack",
  },
  {
    id: 10,
    name: "Checked Cotton Shirt",
    price: "79.00",
    img: "./img/product/12-copy-600x745.jpg",
    img1: "./img/product/12_2-copy-600x745.jpg",
    isSale: false,
    isBest: true,
    type: "Mens",
  },
  {
    id: 11,
    name: "Menerva Elite Textile",
    price: "79.00",
    img: "./img/product/22_1-copy-600x745.jpg",
    img1: "./img/product/21-copy-600x745.jpg",
    isSale: false,
    isBest: true,
    type: "Shoes",
  },
  {
    id: 12,
    name: "Mogens Koch Bookca",
    price: "28.00",
    img: "./img/product/7_1-copy-600x745.jpg",
    img1: "./img/product/7-copy-600x745.jpg",
    isSale: false,
    isBest: true,
    type: "Accessories",
  },
  {
    id: 13,
    name: "Daily Ritual Women’s",
    price: "220.00",
    img: "./img/product/2_1-copy-600x745.jpg",
    img1: "./img/product/2_3-copy-600x745.jpg",
    isSale: true,
    isBest: true,
    type: "Womens",
  },
  {
    id: 14,
    name: "Fashion Show Edition",
    price: "39.00",
    img: "./img/product/6_1-copy-600x745.jpg",
    img1: "",
    isSale: false,
    isBest: true,
    type: "Womens",
  },
];

const bestSale = products.filter((item) => item.isBest);

function renderOwl(data, owl) {
  data.map((item, index) => {
    if (index % 2 != 1 && index < 8) {
      owl
        .trigger("add.owl.carousel", [
          `
                <div class="item">
                    <div class="product" data-id = ${item.id} >
                        <div class="img">
                            <a href="#">
                                <img src="${item.img}"  alt="">
                                <img src="${item.img1}"  alt="">
                            </a>
                              <button class="btn d-flex addCartItem" >
                                <i class="bi bi-handbag"></i> Add To Card
                            </button>
                            <ul class="action action1">
                                <li class="wishlist"><i class="far fa-heart"></i><span>Add to Wishlist</span>
                                </li>
                                <li class="compare"><i class="fas fa-sliders-h"></i><span>Compare</span> </li>
                                <li class="detail"><i class="fas fa-eye"></i><span>View Details</span></li>
                            </ul>
                        </div>
                        <div class="content">
                            <h4>${item.name}</h4>
                            <div class="price">
                                $${item.price}
                            </div>
                        </div>
                    </div>

                      <div class="product" data-id = ${data[index + 1].id} >
                        <div class="img">
                            <a href="#">
                                <img src="${data[index + 1].img}" alt="">
                                <img src="${data[index + 1].img1}"  alt="">
                            </a>
                              <button class="btn d-flex addCartItem" >
                                <i class="bi bi-handbag"></i> Add To Card
                            </button>
                               <ul class="action action1">
                                <li class="wishlist"><i class="far fa-heart"></i><span>Add to Wishlist</span>
                                </li>
                                <li class="compare"><i class="fas fa-sliders-h"></i><span>Compare</span> </li>
                                <li class="detail"><i class="fas fa-eye"></i><span>View Details</span></li>
                            </ul>
                        </div>

                        <div class="content">
                            <h4>${data[index + 1].name}</h4>
                            <div class="price">
                                $${data[index + 1].price}
                            </div>
                        </div>
                    </div>
                </div>

                
            `,
        ])
        .trigger("refresh.owl.carousel");
    }
  });
}

function getAllItemProduct() {
  return products;
}
