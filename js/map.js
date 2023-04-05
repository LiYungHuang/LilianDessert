function Location(country, shopname, lat, lng) {
    this.country = country
    this.shopname = shopname
    this.lat = lat
    this.lng = lng

    // this.title = country + shopname
    this.center = { lat: parseFloat(lat), lng: parseFloat(lng) }
}

function usejQuery() {
    $.ajax({
        url: "/Liliandessert/js/json/shoplocation.js",
        success: function () {
            let jsonObj2 = JSON.parse(shoplocation)

            const location = []
            jsonObj2.forEach(function (rd) {
                location.push(new Location(rd.country, rd.shopname, rd.latitude, rd.longitude))
            })
            pinMarkers(location)
        }
    });
}

window.onload = function () {
    usejQuery()
}


function pinMarkers(location) {
    location.forEach(function (rd) {
        new google.maps.Marker({
            position: rd.center,
            map: map,
            // label:rd.shopname
        })
    })
}

let map;
let marker;
let infowindow;

function initMap() {
    let center = { lat: 23.72668659190344, lng: 120.875495021423 }
    map = new google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: 7,
    });
}

window.initMap = initMap;

