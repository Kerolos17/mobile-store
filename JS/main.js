let upBtn = document.querySelector('#up')
upBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

})
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    upBtn.style.opacity = '1'

  } else {
    upBtn.style.opacity = '0'
  }
})
let cards = document.getElementById('cards')
async function getdata() {
  let data = await fetch('https://dummyjson.com/products')
    .then((el) => el.json())
    .then((p) => { return p.products })
    .catch((error) => console.log(error))
  // console.log(data)
  let productCards = ``;
  data.forEach((el) => {
    productCards += `
        <div class="card">
        <div class="image_container">
        <img src="${el.thumbnail}" alt="" class='image'>
        </div>
        <div class="title">
          <span>${el.title}</span>
        </div>
        <div class="action">
          <div class="price">
            <span>${el.price}</span>
          </div>
          <button class="cart-button">
            <svg
              class="cart-icon"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
            <span>Add to cart</span>
          </button>
        </div>
      </div>
        `
    cards.innerHTML = productCards
  })
}

getdata()