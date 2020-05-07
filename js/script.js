let dropdown = () => {
    let x = document.getElementById('dropdown');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

let quartosAirBnb = () => {
    let url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let json = JSON.parse(xhr.responseText);
            carregarQuartos(json);
        }
    }
    xhr.send();
}

let carregarQuartos = (quarto) => {
    for (let i = 0; i < quarto.length; i++) {
        let tag = '<div class="card">' +
            '<img src=' + quarto[i].photo + '>' +
            '<p>' + quarto[i].property_type + '</p>' +
            '<p>' + quarto[i].name + '</p>' +
            '<p>' + quarto[i].price + '</p>' +
            '</div>';
        document.querySelector('.quartos').insertAdjacentHTML('beforeend', tag);
    }
}

quartosAirBnb();