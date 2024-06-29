mapboxgl.accessToken = 'pk.eyJ1IjoiYmF5YW5qYXJvdXIiLCJhIjoiY2tqMWc0bTVvNHczbzJ1cWo5OWJlMWdxYyJ9.La6ySJQ47Dt267L3w1T6aw';
const position = [-74.5, 40]; 
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/bayanjarour/ckj1kh9rl9poi19s36im52v2y',
center: position, // starting position
zoom: 1// starting zoom
});
var marker = new mapboxgl.Marker({
    color: "#ff5f13",
    }).setLngLat(position)
    .addTo(map);