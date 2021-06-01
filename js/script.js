//#region Nav
const btn = document.getElementById("btn2");
const nav = document.getElementById("nav");

btn.addEventListener("click", () => {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
});
//#endregion
//#region Google Maps

function initMap() {
    // The location of Uluru
    const MemramcookStation = {
        lat: 45.98426128058083,
        lng: -64.56808874498371
    };
    const PreDenHautStation = {
        lat: 45.962015144510474,
        lng: -64.63179952408969
    };
    const center = {
        lat: 45.9726089860147,
        lng: -64.59518323866264
    };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: center,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: MemramcookStation,
        map: map,
    });
    const marker2 = new google.maps.Marker({
        position: PreDenHautStation,
        map: map,
    })
}
//#endregion
