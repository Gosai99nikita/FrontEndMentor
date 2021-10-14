var myaccesskey_map = config.myaccesskey_map;
var myaccesskey_ip = config.myaccesskey_ip;

var mymap = L.map('mapid').setView([0,0], 16);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    
    maxZoom: 28,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: myaccesskey_map,
}).addTo(mymap);


var greenIcon = L.icon({
    iconUrl: './images/icon-location.svg',
    shadowUrl: './images/icon-location.svg',
    
});


var marker = L.marker([34.0614, -118.08162], {icon: greenIcon}).addTo(mymap);

document.querySelector('#button1').addEventListener('click', async function(e){
    e.preventDefault();
    var input = document.querySelector('#IP');
    const response = await fetch('https://geo.ipify.org/api/v1?apiKey='+myaccesskey_ip+input.value)
    const data = await response.json();
    var span = document.querySelectorAll('span');
    
    try{
        console.log(data);

    
    span[0].innerText=data.ip;
    span[1].innerText=data.location.city + ", " + data.location.country + " " + data.location.postalCode;
    span[2].innerText= "UTC " + data.location.timezone;
    span[3].innerText=data.isp;
    mymap.setView([data.location.lat, data.location.lng], 13);
    marker.setLatLng([data.location.lat, data.location.lng]);
    input.value="";
    }
    catch{
        alert('Invalid IP Address !! Please Enter a valid IP');
        span[0].innerText="--";
        span[1].innerText="--";
        span[2].innerText="--";
        span[3].innerText="--";
        input.value="";
    }
    
});

