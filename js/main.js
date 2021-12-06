// ====== Product Category ========
$(document).ready(function () {
  const viewAmount = 9;

  renderBtn(products);
  renderProductCate(products);

  // filter category type
  $(".Sidebar__listOption input").on("change", function () {
    const type = $("input[name=checkproduct]:checked").val();
    if (type == "All") {
      renderProductCate(products);
      renderBtn(products);
    } else {
      const data = products.filter((val) => {
        return val.type == type;
      });

      renderProductCate(data);
      renderBtn(data);
    }
  });

  // filter sort
  $("#high").on("click", function () {
    const data = products.sort((a, b) => +a.price - +b.price);
    renderProductCate(data.reverse());
  });

  $("#low").on("click", function () {
    const data = products.sort((a, b) => +a.price - +b.price);
    renderProductCate(data);
  });

  $(".SortCategory__filterList .SortCategory__filterItem").on(
    "click",
    function () {
      $(".SortCategory__filterList .SortCategory__filterItem").removeClass(
        "active"
      );
      $(this).addClass("active");
    }
  );


  // function render to view
  function renderProductCate(data) {
    $("#listProductCategory").empty();
    const products = data.map(
      (item) => `
            <div class="col-sm-6 col-lg-4 col-xl-4 item">
                <div class="product" data-id=${item.id}>
                    <div class="img">
                        <a href="#">
                            <img src="${item.img}" alt="">
                            <img src="${item.img1}" alt="">
                        </a>
                        <button class="btn a-center d-flex addCartItem" data-id=${item.id}>
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
                            $${item.price}
                        </div>
                    </div>
                </div>

                
            </div>`
    );
    $("#listProductCategory").append(products);
  }

  // render group btn
  function renderBtn(data) {
    const btn = $(".group-btn-products");
    btn.empty();
    const amount = Math.ceil(data.length / viewAmount);
    var html = ` `;
    for (let i = 1; i <= amount; i++) {
      html += `<li>
                <a href="#" class ="${
                  i == 1 ? "active" : ""
                }" data-id = ${i}> ${i}</a>
            </li>`;
    }
    btn.append(`
            <ul>${html}</ul>
        `);
  }
});
