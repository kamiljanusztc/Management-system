/* global Chart */
/* eslint-disable no-unused-vars */

const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

const modalChat = document.querySelector('.sidebar__profile-manager');
const modalLogin = document.querySelector('.login');
const modalQuit = document.querySelector('.quit');

const navMobile = document.querySelector('.hamburger-mobile');
const navOptions = document.querySelector('.navbar__options');

const pageLinks = document.querySelectorAll('.pages li');
// const mainSection = document.getElementById('.main__section');
// const linkId = pageLinks.getAttribute('href');
const pageId = document.getElementById('links');



for (let pageLink of pageLinks) {
  pageLink.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('link clicked');
    const clickedElement = this;

    pageId.classList.add('active');
    console.log('active class added');

    const linkId = pageLink.getAttribute('href');



    if (linkId == pageId) {
      pageId.classList.add('active');
      console.log('active class added');
    }


  });
}






function toggleMenu(visible) {
  sidebar.classList.toggle('show', visible);
}

hamburger.addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});

// Close modal (remove class 'show' from overlay)
function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

// Add to buttons
document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
});

// Close modal if overlay clicked
document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal();
  }
});

// Close modal if escape icon clicked
document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal();
  }
});

// Open modal and close all others
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

// Modal chat
modalChat.addEventListener('click', function (e) {
  e.preventDefault();
  openModal('#modal-chat');
});

// Modal login
modalLogin.addEventListener('click', function (e) {
  e.preventDefault();
  openModal('#modal-login');
});

// Modal quit
modalQuit.addEventListener('click', function (e) {
  e.preventDefault();
  openModal('#modal-quit');
});

// Navigation mobile
navMobile.addEventListener('click', function (e) {
  e.preventDefault();
  navOptions.classList.toggle('hidden');
});

// Diagram
var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
  // 1
  type: 'bar',
  data: {
    // 2
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // 3
    datasets: [{
      // 4
      label: 'Signups',
      // 5
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      // 6
      data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
      // 7
      hidden: true,
    }]
  },
});
