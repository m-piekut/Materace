const burgerBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.nav');

//Wysywanie menu
burgerBtn.addEventListener('click', () => menu.classList.toggle('show-menu'));
let tel = document.getElementsByClassName('products__card-buy--phone');

//odwaracanie loga

const logoFront = document.querySelector('.heroimg__logo-front');
const logoBack = document.querySelector('.heroimg__logo-back');

setInterval(() => {
    logoFront.classList.toggle('logoAnimationF')
    logoBack.classList.toggle('logoAnimationB')
}, 5000);


window.addEventListener('resize', () => {
    if (window.innerWidth >= 900) {
        console.log(window.innerWidth)
        for (const el of tel) {
            console.log(el.innerHTML)
            const changeTonuber = (e) => {
                e.preventDefault()
                el.outerHTML = '<p class="products__card-buy products__card-buy--phone">728 823 920</p>'
            }
            el.addEventListener('click', changeTonuber)
        }

    } else {
        console.log(tel)
        for (const el of tel) {
            el.outerHTML = '<a class="products__card-buy products__card-buy--phone" href="tel:728 823 920">zamów przez telefon</a>'
        }

    }
})

if (window.innerWidth >= 961) {
    console.log(window.innerWidth)
    for (const el of tel) {
        console.log(el.innerHTML)
        const changeTonuber = (e) => {
            e.preventDefault()
            el.outerHTML = '<p class="products__card-buy products__card-buy--phone">728 823 920</p>'
        }
        el.addEventListener('click', changeTonuber)
    }
}

//MAOS


mapboxgl.accessToken = 'pk.eyJ1IjoibS1waWVrdXQiLCJhIjoiY2tpZWdjeHB5MTNrMjJ4cGVtOHN2dzl0YSJ9.9KXXsvqp4cMnWekbtL3tJA';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [22.21375828671849, 50.51511182355613],
    zoom: 13
});

var geojson = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [22.21375828671849, 50.51511182355613]
        },
        properties: {
            title: 'Este',
            description: 'Zarzecze, Ul. Bukowina 10 B'
        }
    }]
};

// add markers to map
geojson.features.forEach(function (marker) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({
                offset: 25
            }) // add popups
            .setHTML('<h4>' + marker.properties.title + '</h4><p>' + marker.properties.description + '</p>'))
        .addTo(map);
});