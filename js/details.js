/*File: details.js
@Author: Le Thanh Dat, datb1910205@student.ctu.edu.vn
@Created date:  15-12-2021, updated 18-12-2021*/
// Lưu id vào localStorage với tên là "id-item"
const id = localStorage.getItem("id-item");

window.addEventListener("load", function (e) {
  e.preventDefault();

  renderDetails(id);
  renderContentDetails(id);

  renderNavTop(id);
});

function renderDetails(id) {
  let details__left = getELE("details__left");
  let content = "";
  const sliderItem = getAllimg().find((val) => val.id == id);
  sliderItem.img.forEach((item) => {
    content = `
       <div class="item">
            <img src="${item}" alt="">
        </div>`;
  });

  // render item content
  if (details__left !== null) {
    details__left.innerHTML = content;
  }
}

function renderContentDetails(id) {
  const item = products.find((val) => val.id == id);
  let details__right = getELE("details__right");
  let content1 = "";
  content1 = `
    <h2 class="heading">
        ${item.name}
    </h2>

    <div class="rate">
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        (1 customer review)
    </div>
    <p class="price">
        $${(item.price * 1).toLocaleString("vi-VN")}
    </p>
    <p class="description-products">
        Tailored line. Wool mix fabric. Long design. Long buttoned sleeve. Lapel with notch. <br>
        Back slit.Two pockets with flaps on the front. Button up. Inner lining. Inner pocket.<br>
        Back length 95.0 cm.<br>
        Summer tops for women<br>
        Cheetah kimonos ,beach cover ups<br>
        Lightweight chiffon casual shirts<br>
        Open front outwear,short sleeve blouse.
    </p>

    <div class="action d-flex a-center" data-id=${item.id}>
        <div class="control-item d-flex a-center">
            <a class="dash-1"><i class="bi bi-dash"></i></a>
            <input type="text" class="InputAmountProduct" value="1">
            <a class="plus-1" ><i class="bi bi-plus"></i></a>
        </div>
        <button  class="btn a-center d-flex addCartItem" onclick="clickAddToCardDetails(${
          item.id
        },event)">
            <i class="bi bi-handbag me-2"></i> Add To Card
        </button>
    </div>

`;
  if (details__right !== null) {
    details__right.innerHTML = content1;
  }
}
clickDetails = (dataID, e) => {
  e.preventDefault();

  const parent = document.querySelector(".listProduct");
  // Tìm tất cả class='item' bên trong class cho page-main__list
  const children = [...parent.querySelectorAll(".product")];
  // duyệt mạng tìm ra class con có thuộc tính data-id = dataId click vào
  children.forEach((child) => {
    child.dataset.id === dataID;
  });
  localStorage.setItem("id-item", dataID);

  // render lại giỏ hàng
  renderDetails(dataID);
  renderContentDetails(dataID);

  window.location.href = "details.html";
};

function renderNavTop(id) {
  let nav_top = document.querySelector(".nav-top");
  const item = products.find((val) => val.id == id);
  let content = "";
  content = `
    <li><a href="index.html">Home <span>/</span></a></li>
    <li><a href="products.html">Shop <span>/</span></a></li>
    <li><a href="products.html">Fashion <span>/</span></a></li>
    <li><a href="products.html">${item.type}<span>/</span></a></li>
    <li><a class ="active" > ${item.name} </a></li>
  `;
  if (nav_top !== null) {
    nav_top.innerHTML = content;
  }
}
clickAddToCardDetails = (dataID, e) => {
  e.preventDefault();

  // thêm sản phẩm có id vào trong mảng
  addMiniCart(dataID);
  // render lại giỏ hàng
  renderMiniCart(miniCart);
};
