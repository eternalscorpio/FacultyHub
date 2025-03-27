
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('.main-header').innerHTML = data;
    });
