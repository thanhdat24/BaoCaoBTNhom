window.addEventListener("load", function (e) {
  const products = getAllItemProduct();
  e.preventDefault();
  // renderProductCate(products);

  // // thêm sản phẩm có id vào trong mảng
  // addWishList(dataID);
  // addMiniCart(dataID);
  // render lại giỏ hàng
  renderMiniCart(miniCart);
  renderWishList(wishList);
});
const getELE = (id) => {
  return document.getElementById(id);
};
window.addEventListener("load", function (e) {
  function renderProductCate(data) {
    let divProduct = getELE("listProductCategory");
    let productItem = "";
    for (let item of data) {
      productItem += `
            <div class="col-sm-6 col-lg-4 col-xl-4 item">
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
                            đ ${(item.price * 1).toLocaleString()}
                        </div>
                    </div>
                </div>
            </div>
    `;
    }
    divProduct.innerHTML = productItem;
  }

  // filter sort

  const sortLow = getELE("low");
  sortLow.addEventListener("click", function () {
    const data = products.sort((a, b) => +a.price - +b.price);
    renderProductCate(data.reverse());
  });

  const sortHight = getELE("high");
  sortHight.addEventListener("click", function () {
    const data = products.sort((a, b) => +a.price - +b.price);
    renderProductCate(data);
  });

  const optionInput = document.querySelectorAll("input[name='checkproduct']");
  const findSelected = () => {
    const type = document.querySelector(
      "input[name='checkproduct']:checked"
    ).value;
    if (type == "All") {
      renderProductCate(products);
    } else {
      const data = products.filter((val) => {
        return val.type == type;
      });
      renderProductCate(data);
    }
  };

  optionInput.forEach((item) => {
    item.addEventListener("change", findSelected);
  });

  findSelected();
});

/* Get , Set LocalStorage */
function setLocal(data, name) {
  if (data) return localStorage.setItem(`${name}`, JSON.stringify(data));
}

function parseLocal(name) {
  const data = localStorage.getItem(name);
  return JSON.parse(data);
}

//======Render miniCart=========
// Hàm dùng để show ra sản phẩm trong giỏ hàng
window.addEventListener("load", function (e) {
  renderMiniCart(miniCart);
});

function renderMiniCart(data) {
  let mini_cart = getELE("mini-cart-product");
  console.log("mini_cart", mini_cart);
  let subTotal = getELE("sub-total");
  let amount = getELE("before");
  let sumPrice = 0;
  let sumQuantity = 0;
  let content = "";
  for (let item of data) {
    content += `
      <tr data-id=${item.id} style="text-align:center">
        <td><img style="width:90px; height="90px" src="${item.img}" alt="${
      item.name
    }"/></td>
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>${(item.price * 1).toLocaleString("vi-VN")}</td>
        <td>${(item.price * item.quantity).toLocaleString("vi-VN")}</td>
        <td><button type="button" class="btn btn-danger" onclick="removeItemMiniCart(${
          item.id
        })">Xoá</button></td>
    </tr>`;
    sumPrice += item.quantity * item.price;
    sumQuantity += item.quantity;
  }

  // render item content
  mini_cart.innerHTML = content;
  // render tổng tiền trong miniCart
  subTotal.innerHTML = sumPrice.toLocaleString("vi-VN");
  // render tổng số lượng  sản phẩm
  amount.innerHTML = sumQuantity;
}

function addMiniCart(id) {
  console.log("miniCart", miniCart);
  // duyệt giỏ hàng và kiểm tra id trong giỏ hàng có bằng với id người dùng click không
  let index = miniCart.findIndex((spGioHang) => spGioHang.id === id);

  // Lấy ra product = id và đẩy lên miniCart
  const element = products.find((spGioHang) => spGioHang.id == id);

  // Nếu index != -1 thì giỏ hàng đã tồn tại trong giỏ hàng , chỉ việc tăng quantity++
  if (index != -1) {
    // Tìm ra sản phẩm trong giỏ hàng thứ index => tắng số lượng
    miniCart[index].quantity += 1;
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
clickAddToCard = (dataID, e) => {
  e.preventDefault();

  const parent = document.querySelector(".listProduct");
  // Tìm tất cả class='item' bên trong class cho page-main__list
  const children = [...parent.querySelectorAll(".product")];
  console.log("children", children);
  // duyệt mạng tìm ra class con có thuộc tính data-id = dataId click vào
  children.forEach((child) => {
    child.dataset.id === dataID;
  });

  // thêm sản phẩm có id vào trong mảng
  addMiniCart(dataID);
  // render lại giỏ hàng
  renderMiniCart(miniCart);
};

removeItemMiniCart = (id) => {
  const newMiniCart = [...miniCart];
  // Tìm các phần tử có trong giỏ hàng
  let index = newMiniCart.findIndex((spGioHang) => spGioHang.id === id);
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
/*=========wishlist========== */
window.addEventListener("load", function () {
  renderWishList(wishList);
});

function renderWishList(data) {
  let wish_list = getELE("add-to-wish");
  let amount = getELE("before1");
  let content = "";
  for (let item of data) {
    content += `
      <tr class="itemWishList" data-id=${
        item.id
      } style="text-align:center ;vertical-align: middle">
         <td><button type="button" class="btn btn-danger" onclick="removeItemWishLish(${
           item.id
         })">Xoá</button></td>
        <td><img style="width:90px; height="90px" src="${item.img}" alt="${
      item.name
    }"/></td>
        <td>${item.name}</td>
        <td>${(item.price * 1).toLocaleString("vi-VN")}</td>
        <td><span class="stocked">Trong kho</span></td>
         <td>
              <button class ="addCartItem" onclick="clickAddToCardWishList(${
                item.id
              },event)">Add to card</button>
         </td>

    </tr>`;
  }
  // render tổng số lượng  sản phẩm
  amount.innerHTML = wishList.length;
  // render item content
  wish_list.innerHTML = content;
}
function addWishList(id) {
  console.log("wishList", wishList);
  // duyệt giỏ hàng và kiểm tra id trong giỏ hàng có bằng với id người dùng click không
  let index = wishList.findIndex((spWishList) => spWishList.id === id);

  // Lấy ra product = id và đẩy lên miniCart
  const element = products.find((spWishList) => spWishList.id == id);

  // Nếu index != -1 thì giỏ hàng đã tồn tại trong giỏ hàng , chỉ việc tăng quantity++
  if (index != -1) {
    // Tìm ra sản phẩm trong giỏ hàng thứ index => tắng số lượng
    alert("Đã thêm!");
  }
  // Nếu sản phẩm chưa tồn tại trong giỏ hàng thì thêm sản phẩm vào giỏ hàng kèm theo thuộc tính quantity:1
  else {
    const newValue = {
      ...element,
      quantity: 1,
    };

    wishList.push(newValue);
  }

  setLocal(wishList, "WishListProduct");
}
clickAddWishList = (dataID, e) => {
  e.preventDefault();

  const parent = document.querySelector(".listProduct");
  // Tìm tất cả class='item' bên trong class cho page-main__list
  const children = [...parent.querySelectorAll(".product")];
  // duyệt mạng tìm ra class con có thuộc tính data-id = dataId click vào
  children.forEach((child) => {
    child.dataset.id === dataID;
  });
  // thêm sản phẩm có id vào trong mảng
  addWishList(dataID);
  // render lại giỏ hàng
  renderWishList(wishList);
};

removeItemWishLish = (id) => {
  const newWishList = [...wishList];
  // Tìm các phần tử có trong giỏ hàng
  let index = newWishList.findIndex((spWishList) => spWishList.id === id);
  // Nếu tìm được phần tử có trong giỏ hàng
  if (index != -1) {
    // Xoá 1 phần từ tại vị trí index
    wishList.splice(index, 1);
  } else {
    // set lại giỏ hàng mới
    wishList = [...newWishList];
  }

  // Cập nhật lại giỏ hàng mới
  renderWishList(wishList);
  setLocal(wishList, "WishListProduct");
};

clickAddToCardWishList = (dataID, e) => {
  e.preventDefault();

  const parent = document.querySelector(".add-to-wish");
  // Tìm tất cả class='item' bên trong class cho page-main__list
  const children = [...parent.querySelectorAll(".itemWishList")];
  console.log("children", children);
  // duyệt mạng tìm ra class con có thuộc tính data-id = dataId click vào
  children.forEach((child) => {
    child.dataset.id === dataID;
  });

  // thêm sản phẩm có id vào trong mảng
  addMiniCart(dataID);
  // render lại giỏ hàng
  renderMiniCart(miniCart);

  removeItemWishLish(dataID);
};
