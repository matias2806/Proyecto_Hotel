/* pk.eyJ1IjoibWF0aWFzMjgwNiIsImEiOiJjazJ1cXh5YngxOXJjM2JsN3d1enJlNW93In0.lD4H1IfLvpSwgzr0gtZ90g  */

mapboxgl.accessToken = 'pk.eyJ1IjoibWF0aWFzMjgwNiIsImEiOiJjazJ1cnN4ZHoxcGtkM2NudnhpN2dwMnk2In0.pcGuWnG3Sj0a-XFKJ64qYg'

let map = new mapboxgl.Map({
    container:'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center:[-58.382241, -34.617092],
    zoom:15

})

let element = document.createElement('div')
element.className = 'marker'

let marker = new mapboxgl.Marker(element).setLngLat({
    lng:-58.381812,
    lat:-34.616695,
    
})
.addTo(map)