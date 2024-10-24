const heroSection = document.getElementById('hero')

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { 
    heroSection.classList.add('bgWhite');
    
  } else {
    heroSection.classList.remove('bgWhite')
      
  }
})

// Toggle Button

const btn = document.getElementById('menu-btn')
const menuList = document.getElementById('menu')

function toggleBtn() {
  btn.classList.toggle('open')
  menuList.classList.toggle('hidden')
  menuList.classList.toggle('block')

  
}

btn.addEventListener('click', toggleBtn)


// Dark Mode

document.getElementById('toggle').addEventListener('change', function () {
  if (this.checked) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})


// remove menuslider once a button is click

const clickLink = document.querySelectorAll('.click'); 


function removeMenu() {
  menuList.classList.add('hidden');
  btn.classList.remove('open')
}


clickLink.forEach((link) => {
  link.addEventListener('click', () => {
    removeMenu(); 
  });
});