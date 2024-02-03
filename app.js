// SUNARTISI GIA TH APOKRIPSI PERIEXOMENOU
function showSection(section) {
  document.querySelectorAll('.left-menu > div').forEach((el) => {
      el.style.display = 'none';
  });

  // TOPOTHETISH STH SELIDA
  document.querySelector(`.${section}-section`).style.display = 'block';

  // SCROLL FUCTION
  const targetSection = document.getElementById(section);
  if (targetSection) {
      window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
      });
  }

  if (section.startsWith('links/')) {
      fetch(`/api/${section.split('/')[1]}`) 
          .then(response => response.json())
          .then(data => displayLinks(data));
  }
}


function displayLinks(linksData) {

  const tableHtml = generateTableHtml(linksData);
  document.querySelector('#content').innerHTML = tableHtml;

  // EVENT LISTENER GIA ORAIA LINKS
  document.querySelectorAll('.links-section a').forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault();

          link.classList.add('clicked');

          setTimeout(() => {
              link.classList.remove('clicked');
              
          }, 500);
      });
  });
}



// APOTUXIMENH TABLE GENERATE FUCTION
function generateTableHtml(linksData) {

  let tableHtml = '<table>';
  tableHtml += '<thead><tr><th>Name</th><th>URL</th></tr></thead>';
  tableHtml += '<tbody>';
  linksData.forEach(link => {
    tableHtml += `<tr><td>${link.name}</td><td><a href="${link.url}" target="_blank">${link.url}</a></td></tr>`;
  });
  tableHtml += '</tbody></table>';
  return tableHtml;
}

function goToHome() {
  
  document.querySelectorAll('.left-menu > div').forEach((el) => {
    el.style.display = 'block';
  });

  // HIDE MAIN SECTION
  document.querySelector('#content').innerHTML = ''; 
}

// EVENT LISTENERS
document.querySelector('.main-menu button#home').addEventListener('click', () => {
  goToHome();
});

document.querySelector('.main-menu button#biography').addEventListener('click', () => {
  showSection('biography');
});

document.querySelector('.main-menu button#photos').addEventListener('click', () => {
  showSection('photos');
});

document.querySelector('.main-menu button#discography').addEventListener('click', () => {
  showSection('discography');
});

document.querySelector('.main-menu button#links').addEventListener('click', () => {
  showSection('links');
});

document.querySelector('.main-menu button#management').addEventListener('click', () => {
  showSection('management');
});

// AUTHENTICATION FUCTION
function login(username, password) {
  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Login successful:', data.message);
      console.log('LOGGED IN');
      
    })
    .catch(error => console.error('Error:', error));
}

// LOGOUT FUNCTION
function logout() {
  
  console.log('Logged out');
}

// LOGIN PART
document.querySelector('.login-btn').addEventListener('click', () => {

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  login(username, password);
});

// LOGOUT
document.querySelector('.logout-btn').addEventListener('click', () => {
  logout();
});

// RETURN 
goToHome();
