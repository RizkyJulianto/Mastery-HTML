
window.addEventListener('DOMContentLoaded', function() {
    showContainer();
    showRumahContent();
});

// Pilih Card content mana yang akan ditampilkan pertama kali
function showContainer() {
    const allContents = document.querySelectorAll('.card-content');
    allContents.forEach(content => {
        content.style.display = 'none';
    });

    document.getElementById('hotel').style.display = 'block';
}

// Pilih Card content Rumah mana yang akan ditampilkan pertama kali
function showRumahContent() {
    const rumahContens = document.querySelectorAll('.card-rumah');
    rumahContens.forEach(content => {
        content.style.display = 'none';
    });

    document.getElementById('rumah-jakarta').style.display = 'flex';
}


// navigasi card-content
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);

        const allContents = document.querySelectorAll('.card-content');
        allContents.forEach(content => {
            content.style.display = 'none';
        });

        document.getElementById(targetId).style.display = 'block';
    });
});

// navigasi card-content rumah 
const navRumah = document.querySelectorAll('.link-rekomendasi a');
navRumah.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        navRumah.forEach(otherLink => {
            if(otherLink !== link) {
                otherLink.classList.remove('active');
            }
        });

        link.classList.toggle('active');

        const targetRumahId = link.getAttribute('href').substring(1);

        const rumah = document.querySelectorAll('.card-rumah');
        rumah.forEach(content => {
            content.style.display = 'none';
    
        });

       document.getElementById(targetRumahId).style.display = 'flex';
    });
});

// Munculkan transportasi & Lainnya
const link = document.getElementById('showTransport');
const linkLainnya = document.getElementById('showLainnya');
const transport = document.getElementById('transport');
const lainnya = document.getElementById('lainnya');
link.addEventListener('click', function() {
    if(transport.style.display === 'block') {
        transport.style.display = 'none';
    } else {
        transport.style.display = 'block'
    }
});

linkLainnya.addEventListener('click', function() {
    if(lainnya.style.display === 'block') {
        lainnya.style.display = 'none';
    } else {
        lainnya.style.display = 'block'
    }
});
