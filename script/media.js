// const Btn = document.querySelector(".Snas-a")
//  function toggleMenu() {
//      var menu = document.getElementById("menu")
//      if (menu.style.display === "none") {
//          menu.style.display = "block";
//      }else {
//          menu.style.display = "none"
//      }
     
//  }

// const Sans = document.querySelector(".Sans-a")
// const Naver = document.querySelector(".navbar")

// function Sansserif() {
//     if (Sans) {
//         Sans:active
//     }

    
// }


const container = document.querySelector('.Container')
 const fonts = document.querySelector('.form-select')
 const Herro = document.querySelector('.site-Herro')
 console.log(fonts)
 fonts.addEventListener('change', () => {
     console.log(fonts.value)
     let font = fonts.value.toLowerCase()
     console.log(font)
     if (fonts.value === "SansSerif") {
         container.style.fontFamily = "Inter"
     }else if (fonts.value  === "Serif") {
         container.style.fontFamily = "Lora"
     }else {
         container.style.fontFamily = "Mono"
     }
    // if (fonts.value === "SansSerif") {
    //     Herro.style.fontFamily = "Inter"
    // }else if (fonts.value === "Serif") {
    //     Herro.style.fontFamily = "Lora"
    // }else if (fonts.value === "Mono") {
    //     Herro.style.fontFamily = "Mono"

    // }

     
 })

 