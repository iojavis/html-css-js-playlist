const view_more = document.getElementById("view-more")

view_more.addEventListener("click", () => {
  addProduct()
})

const images = [
  "https://images.unsplash.com/photo-1533792344354-ed5e8fc12494?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhcnZlc3QlMjB2YXNlfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1606389378948-8298197f9408?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1589820583812-598e3669e4fa?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1578735095308-f0b712ff1983?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1606952460999-3478d2d51a47?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1622385889022-ab75227be50d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFydmVzdCUyMHZhc2V8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1676490356616-187aa70384a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHZhc2UlMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D",
]

function addProduct() {
  const random_image = images[Math.floor(Math.random() * images.length)]
  const product_info = `
  <div class="product-img">
  <img
    src="${random_image}"
    alt="Product image"
    srcset=""
    height="420px"
    width="327px"
  />
</div>
<div class="product-info">
  <div class="product-text">
    <h3>Potatoes</h3>
    <h4>From Amuru</h4>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Consectetur quidem consequatur iusto reprehenderit dolor
      consequuntur.
    </p>
  </div>
  <div class="product-buy">
    <p><span>12</span>$</p>
    <button type="button">buy now</button>
  </div>
`
  const product_div = document.createElement("div")
  product_div.classList.add("product-wrapper")
  product_div.innerHTML = product_info
  document.body.appendChild(product_div)
}
