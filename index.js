// const slider = document.querySelector('.slider');
// const menuItems = document.querySelectorAll('.menuItem');

// const currentProductImg = document.querySelector('.productImg');
// const currentProductTitle = document.querySelector('.productTitle');
// const currentProductPrice = document.querySelector('.productPrice');
// const currentProductColors = document.querySelectorAll('.color'); // Corrected to querySelectorAll
// const currentProductSize = document.querySelectorAll('.size'); // Corrected to querySelectorAll

// // 



// const products = [
//     {
//         id: 1,
//         title: 'STUDIO RADIANCE SERUM-POWERED FOUNDATION',
//         price: 2450.00,
//         colors: [
//             {
//                 img: './assets/foundation.avif'
//             }
//         ],
//     },
//     {
//         id: 2,
//         title: 'PREP + PRIME FIX+',
//         price: 3950.00,
//         colors: [
//             {
//                 img: './assets/primer.webp'
//             }
//         ],
//     },
//     {
//         id: 3,
//         title: 'M·A·CXIMAL SILKY MATTE LIPSTICK',
//         price: 2550.00,
//         colors: [
//             {
//                 img: './assets/lipstick-mac.avif'
//             }
//         ],
//     },
//     {
//         id: 4,
//         title: 'STUDIO FIX PRO SET + BLUR WEIGHTLESS LOOSE POWDER',
//         price: 2950.00,
//         colors: [
//             {
//                 img: './assets/loose-powder.avif'
//             }
//         ],
//     },
//     {
//         id: 5,
//         title: 'SHEERTONE BLUSH',
//         price: 3100.00,
//         colors: [
//             {
//                 img: './assets/powder-blush.avif'
//             }
//         ],
//     },
//     {
//         id: 6,
//         title: 'PRO LONGWEAR PAINT POT',
//         price: 3100.00,
//         colors: [
//             {
//                 img: './assets/pro-longwear-paint-pot.avif'
//             }
//         ],
//     },
//     {
//         id: 7,
//         title: 'M.A.C Hyper Real Serumizer Skin Balancing Hydration Serum (30ml)',
//         price: 5900,
//         colors: [
//             {
//                 img: './assets/serum.avif'
//             }
//         ],
//     },
// ];
// let chosenProduct = products[0]; // Initialize chosenProduct
// menuItems.forEach((item, index) => {
//     item.addEventListener('click', () => {
//         // Change the current slide
//         slider.style.transform = `translateX(${-100 * index}vw)`;
//         // Change the chosen product
//         chosenProduct = products[index];

//         // Change texts of currentProduct
//         currentProductTitle.textContent = chosenProduct.title;
//         currentProductPrice.textContent = '₹' + chosenProduct.price;
//         currentProductImg.src = chosenProduct.colors[0].img;

//         // Assigning new colors
//         currentProductColors.forEach((color, colorIndex) => {
//             color.style.backgroundColor = chosenProduct.colors[index].code ; // Assuming there is a `code` property
//         });
//     });
// });

// // Adding click event listeners to each color option
// currentProductColors.forEach((color, index) => {
//     color.addEventListener('click', () => {
//         currentProductImg.src = chosenProduct.colors[index].img;
//     });
// });

const slider = document.querySelector('.slider');
const menuItems = document.querySelectorAll('.menuItem');

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductDesc = document.querySelector('.productDesc');
const currentProductColors = document.querySelectorAll('.color');
const colorsContainer = document.querySelector('.colors'); // Assuming this is the container for the colors
const colorContainer = document.querySelector('.color');

const products = [
    {
        id: 1,
        title: 'STUDIO RADIANCE SERUM-POWERED FOUNDATION',
        price: 2450.00,
        desc: 'A buildable, weightless, 24-hour hydrating foundation that smooths texture, evens tone, and blurs the look of pores.',
        colors: [
            {
                img: './assets/foundation.avif'
            }
        ],
    },
    {
        id: 2,
        title: 'PREP + PRIME FIX+',
        price: 3950.00,
        desc: 'A lightweight water mist that gently soothes and refreshes skin and finishes makeup.',
        colors: [
            {
                img: './assets/primer.webp'
            }
        ],
    },
    {
        id: 3,
        title: 'M·A·C MAXIMAL SILKY MATTE LIPSTICK',
        price: 2550.00,
        desc: 'An iconic lipstick formulated to shade, define and showcase the lips.',
        colors: [
            {
                img: './assets/lipstick-mac.avif'
            }
        ],
    },
    {
        id: 4,
        title: 'STUDIO FIX PRO SET + BLUR WEIGHTLESS LOOSE POWDER',
        price: 2950.00,
        desc: 'A loose powder that sets makeup and controls shine while blurring skin imperfections.',
        colors: [
            {
                img: './assets/loose-powder.avif'
            }
        ],
    },
    {
        id: 5,
        title: 'SHEERTONE BLUSH',
        price: 3100.00,
        desc: 'A lightweight blush that applies evenly and adheres lightly to skin for natural-looking color.',
        colors: [
            {
                img: './assets/powder-blush.avif'
            }
        ],
    },
    {
        id: 6,
        title: 'M.A.C Hyper Real Serumizer Skin Balancing Hydration Serum (30ml)',
        price: 5900,
        desc: 'A serum that delivers moisture and balances skin hydration for a smooth, glowing complexion.',
        colors: [
            {
                img: './assets/serum.avif' 
               
            }
        ],
    },
    {
        id: 7,
        title: 'PRO LONGWEAR PAINT POT',
        price: 3100.00,
        desc: 'A highly pigmented eye color that goes on creamy and dries to an intense, vibrant finish.',
        colors: [
            {
                img: './assets/pro-longwear-paint-pot.avif'
                
            }
        ],
    },
   
];

menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Change the current slide
        slider.style.transform = `translateX(${-100 * index}vw)`;
        
        // Change the chosen product
        const chosenProduct = products[index];
        
        // Update the texts of the current product
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = '₹' + chosenProduct.price;
        currentProductDesc.textContent = chosenProduct.desc;
        currentProductImg.src = chosenProduct.colors[0].img;
        if (chosenProduct.id === 6) {
            currentProductImg.style.width = '24cm';  // Adjust to the desired width
            currentProductImg.style.height = '17cm'; // Adjust to the desired height
        } 
        else if(chosenProduct.id === 7)
            {
                currentProductImg.style.width = '22cm';  // Adjust to the desired width
                currentProductImg.style.height = '17cm'; // Adjust to the desired height
                colorsContainer.classList.add('paint-pot');
                colorContainer.classList.add('paint-pot');
            } 
        else {
            currentProductImg.style.width = '30cm';  // Default width
            currentProductImg.style.height = '20cm'; // Default height
        }

        // Assigning new colors
        currentProductColors.forEach((color, colorIndex) => {
            color.style.backgroundColor = chosenProduct.colors[colorIndex].img;
        });
    });
});
const productButton=document.querySelector('.productButton');
const payment =document.querySelector('.payment');
const close =document.querySelector('.close');

productButton.addEventListener('click',()=>{
    payment.style.display='flex'
})
close.addEventListener('click',()=>{
    payment.style.display='none'
})
