/* Hides the body scrollbar when the overlay menu is opened */

// Get the body element
const body = document.body;

// Get the checkbox element
const hamburgerToggler = document.querySelector(".toggler");

// Set event listener to the hamburger toggler
// so that we can detect when the overlay is opened and hide the body scrollbar
hamburgerToggler.addEventListener("change", (e) => {
  e.target.checked
    ? (body.style.overflowY = "hidden")
    : (body.style.overflowY = "scroll");
});




const products = [
  {
    'id': 0,
    'name': "parts1",
    'imgSrc': './images/images.jpg'
  },
  {
    'id': 1,
    'name': "parts2",
    'imgSrc': './images/images.jpg'
  },
  {
    'id': 2,
    'name': "parts3",
    'imgSrc': './images/images.jpg'
  },
  {
    'id': 3,
    'name': "parts4",
    'imgSrc': './images/images.jpg'
  },
  {
    'id': 4,
    'name': "parts5",
    'imgSrc': './images/images.jpg'
  },
  {
    'id': 5,
    'name': "parts6",
    'imgSrc': './images/images.jpg'
  },

]


const productli = document.querySelector(".albums-cards-container");


function renderProduct() {
  products.forEach((product) => {
    productli.innerHTML += `
         <div class="album">
         <img src="${product.imgSrc}" />
         <div class="album-info">
           <h2>Buy Now</h2>
           <h4>${product.name}</h4>
          
         </div>
       </div>

         `
  })
}


renderProduct()