window.addEventListener('DOMContentLoaded', function() {
    showContainer();
})

// Pilih Card content mana yang akan ditampilkan pertama kali
function showContainer() {
    const allContents = document.querySelectorAll('.card-content');
    allContents.forEach(content => {
        content.style.display = 'none';
    });

    document.getElementById('hotel').style.display = 'block';
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


