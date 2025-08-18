import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'



const counterEl = document.querySelector('#counter')
if (counterEl) {
  setupCounter(counterEl)
}

// Mobile menu toggle (smooth open/close)
const menuButton = document.getElementById('menu-button')
const mobileMenu = document.getElementById('mobile-menu')

if (menuButton && mobileMenu) {
  const openMenu = () => {
    mobileMenu.classList.remove('hidden')
    mobileMenu.classList.add('opacity-0', '-translate-y-2', 'pointer-events-none')
    requestAnimationFrame(() => {
      mobileMenu.classList.remove('opacity-0', '-translate-y-2', 'pointer-events-none')
    })
  }

  const closeMenu = () => {
    mobileMenu.classList.add('opacity-0', '-translate-y-2', 'pointer-events-none')
    const handle = () => {
      mobileMenu.classList.add('hidden')
      mobileMenu.removeEventListener('transitionend', handle)
    }
    mobileMenu.addEventListener('transitionend', handle)
  }

  let isOpen = false
  menuButton.addEventListener('click', () => {
    if (isOpen) {
      closeMenu()
    } else {
      openMenu()
    }
    isOpen = !isOpen
    menuButton.setAttribute('aria-expanded', String(isOpen))
  })
}

document.addEventListener('DOMContentLoaded', () => {
  // linkedin
  const linkedinBtn = document.getElementById('linkedinBtn');
  if (linkedinBtn) {
    linkedinBtn.addEventListener('click', () => {
      window.open('https://www.linkedin.com/in/o%C4%9Fuz-karag%C3%B6z-887b18332/', '_blank');
    });
  }

  // email
  const emailBtn = document.getElementById('emailBtn');
  if (emailBtn) {
    emailBtn.addEventListener('click', () => {
      window.location.href = 'mailto:ooguzkaragoz@gmail.com';
    });
  }

  // instagram
  const instagramBtn = document.getElementById('instagramBtn');
  if (instagramBtn) {
    instagramBtn.addEventListener('click', () => {
      window.open('https://www.instagram.com/ouz.p627', '_blank');
    });
  }
});
