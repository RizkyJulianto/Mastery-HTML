
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



// Kalender
const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
];

const weekdays = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];




let date = new Date();


function getCurrentDate(element, asString) {
    if (element) {
        if (asString) {
            return element.textContent =   + date.getDate() + '  ' + months[date.getMonth()] + '  ' + date.getFullYear();
        }
        return element.value = date.toISOString().substr(0, 10);
    }
    return date;
}



function generateCalendar() {

    
    const calendar = document.getElementById('calendar');
    if (calendar) {
        calendar.remove();
    }

    
    const table = document.createElement("table");
    table.id = "calendar";

    
    const trHeader = document.createElement('tr');
    trHeader.className = 'weekends';
    weekdays.map(week => {
        const th = document.createElement('th');
        const w = document.createTextNode(week.substring(0, 3));
        th.appendChild(w);
        trHeader.appendChild(th);
    });

    
    table.appendChild(trHeader);

    
    const weekDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        1
    ).getDay();

    
    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    let tr = document.createElement("tr");
    let td = '';
    let empty = '';
    let btn = document.createElement('button');
    let week = 0;

    
    while (week < weekDay) {
        td = document.createElement("td");
        empty = document.createTextNode(' ');
        td.appendChild(empty);
        tr.appendChild(td);
        week++;
    }

    
    for (let i = 1; i <= lastDay;) {
      
        while (week < 7) {
            td = document.createElement('td');
            let text = document.createTextNode(i);
            btn = document.createElement('button');
            btn.className = "btn-day";
            btn.addEventListener('click', function () { changeDate(this) });
            week++;



            
            if (i <= lastDay) {
                i++;
                btn.appendChild(text);
                td.appendChild(btn)
            } else {
                text = document.createTextNode(' ');
                td.appendChild(text);
            }
            tr.appendChild(td);
        }
        
        table.appendChild(tr);

        
        tr = document.createElement("tr");

        
        week = 0;
    }
    
    const content = document.getElementById('table');
    content.appendChild(table);
    changeActive();
    changeHeader(date);
    getCurrentDate(document.getElementById("currentDate"), true);
}


function setDate(form) {
    let newDate = new Date(form.date.value);
    date = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 1);
    generateCalendar();
    return false;
}


function changeHeader(dateHeader) {
    const month = document.getElementById("month-header");
    if (month.childNodes[0]) {
        month.removeChild(month.childNodes[0]);
    }
    const headerMonth = document.createElement("h1");
    const textMonth = document.createTextNode(months[dateHeader.getMonth()].substring(0, 3) + " " + dateHeader.getFullYear());
    headerMonth.appendChild(textMonth);
    month.appendChild(headerMonth);
}


function changeActive() {
    let btnList = document.querySelectorAll('button.active');
    btnList.forEach(btn => {
        btn.classList.remove('active');
    });
    btnList = document.getElementsByClassName('btn-day');
    for (let i = 0; i < btnList.length; i++) {
        const btn = btnList[i];
        if (btn.textContent === (date.getDate()).toString()) {
            btn.classList.add('active');
        }
    }
}


function resetDate() {
    date = new Date();
    generateCalendar();
}


function changeDate(button) {
    let newDay = parseInt(button.textContent);
    date = new Date(date.getFullYear(), date.getMonth(), newDay);
    generateCalendar();
}


function nextMonth() {
    date = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    generateCalendar(date);
}

function prevMonth() {
    date = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    generateCalendar(date);
}


function prevDay() {
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
    generateCalendar();
}

function nextDay() {
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    generateCalendar();
}

document.onload = generateCalendar(date);


// Munculkan Kalender 
const from = document.getElementById('from');
const kalender = document.getElementById('kalender');
const rumah = document.getElementById('rumah');
const kalenderRumah = document.getElementById('kalenderRumah');
from.addEventListener('change', () => {
    if(from.checked) {
        kalender.style.display = 'block';
    } else {
        kalender.style.display = 'none';
    }
});


const inputDate = document.getElementById('tanggal-jemput');
const labelDate = document.getElementById('label-jemput');
const displayDate = document.getElementById('display-date');

// Fungsi untuk memformat tanggal
function formatTanggal(date) {
    const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const bulan = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];

    const dayName = hari[date.getDay()];
    const day = date.getDate();
    const monthName = bulan[date.getMonth()];
    const year = date.getFullYear();

    return `${dayName}, ${day} ${monthName} ${year}`;
}

// Fungsi untuk mengatur tanggal hari ini ke dalam input date dan menampilkan format text
function setTanggalHariIni() {
    const today = new Date();
    // Format tanggal dalam format YYYY-MM-DD
    const formattedDate = today.toISOString().substr(0, 10);
    inputDate.value = formattedDate;

    // Tampilkan format teks
    displayDate.textContent = formatTanggal(today);
}

// Ketika label diklik, buka input date
labelDate.addEventListener('click', () => {
    inputDate.focus();
    inputDate.click();
});

// Ketika tanggal diubah, tampilkan format teks
inputDate.addEventListener('change', (event) => {
    const selectedDate = new Date(event.target.value);
    displayDate.textContent = formatTanggal(selectedDate);
});

// Set tanggal hari ini saat halaman dimuat
setTanggalHariIni();

const hitungPenumpangSpan = document.getElementById('hitungPenumpang');
const jumlahPenumpangSpan = document.getElementById('jumlah-penumpang');
const tambahPenumpang = document.getElementById('tambahPenumpang');
const kurangiPenumpang = document.getElementById('kurangiPenumpang');

function cekPenumpang(currentPenumpang) {
    if(currentPenumpang <= 1) {
        kurangiPenumpang.disabled = true;
    } else {
        kurangiPenumpang.disabled = false;
    }
} 

cekPenumpang(parseInt(jumlahPenumpangSpan.textContent));

tambahPenumpang.addEventListener('click', function() {

    let currentPenumpang = parseInt(hitungPenumpangSpan.textContent);
    if(currentPenumpang < 10) {
        currentPenumpang += 1;
        hitungPenumpangSpan.textContent = currentPenumpang;
        jumlahPenumpangSpan.textContent = currentPenumpang;
    } else {
        alert('Jumlah telah mencapai batas');
    }

    cekPenumpang(currentPenumpang);
});

kurangiPenumpang.addEventListener('click', function() {

    let currentPenumpang = parseInt(jumlahPenumpangSpan.textContent);
    if(currentPenumpang > 0) {
        currentPenumpang -= 1;
        hitungPenumpangSpan.textContent = currentPenumpang;
        jumlahPenumpangSpan.textContent = currentPenumpang;
    } 

    cekPenumpang(currentPenumpang);

});



