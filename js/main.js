window.onload = function (e) {
  e.preventDefault();
  renderProductCate(products);

  renderMiniCart(miniCart);
  // renderProduct(products);
};
const getELE = (id) => {
  return document.getElementById(id);
};
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
                            <li class="wishlist"><i class="far fa-heart"></i><span>Add to Wishlist</span>
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
