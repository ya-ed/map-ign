//__________RETRIEVE DOM ELTS
let latitude = document.querySelector("#lat-field");
let longitude = document.querySelector("#long-field");
let state = document.querySelector("#state-select");
let type = document.querySelector("#type-select");
const btnSubtmit = document.querySelector("#icon-submit");

//__________INTIALIZE THE MAP AND HIS LAYERS

const map = L.map("map").setView([47.4989788, 0.5783512], 15);

L.tileLayer(
  "https://wxs.ign.fr/{ignApiKey}/geoportail/wmts?" +
    "&REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&TILEMATRIXSET=PM" +
    "&LAYER={ignLayer}&STYLE={style}&FORMAT={format}" +
    "&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}",
  {
    ignApiKey: "pratique",
    ignLayer: "ORTHOIMAGERY.ORTHOPHOTOS",
    style: "normal",
    format: "image/jpeg",
    service: "WMTS",
  }
).addTo(map);

const HydroIGN = L.tileLayer(
  "https://wxs.ign.fr/{ignApiKey}/geoportail/wmts?" +
    "&REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&TILEMATRIXSET=PM" +
    "&LAYER={ignLayer}&STYLE={style}&FORMAT={format}" +
    "&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}",
  {
    ignApiKey: "agriculture",
    ignLayer: "HYDROGRAPHY.BCAE.2022",
    style: "normal",
    format: "image/png",
    service: "WMTS",
  }
).addTo(map);

//_____________ CREATE CUSTOM MARKERS (x24) - Leaflet

// DONE state Icons (x8)

const doneStudy = L.icon({
  iconUrl: "../assets/done-study.svg",
  iconSize: [50, 60], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

const doneRiver = L.icon({
  iconUrl: "../assets/done-restore-river.svg",
  iconSize: [50, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const doneEco = L.icon({
  iconUrl: "../assets/done-eco.svg",
  iconSize: [50, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const doneTrim = L.icon({
  iconUrl: "../assets/done-trim-veg.svg",
  iconSize: [50, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const doneZone = L.icon({
  iconUrl: "../assets/done-create-zone.svg",
  iconSize: [50, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const doneMoist = L.icon({
  iconUrl: "../assets/done-restore-moist.svg",
  iconSize: [50, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const doneInvaders = L.icon({
  iconUrl: "../assets/done-treat-invaders.svg",
  iconSize: [50, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const doneHedge = L.icon({
  iconUrl: "../assets/done-create-hedge.svg",
  iconSize: [50, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

// PLANNED state Icons (x8)

const plannedStudy = L.icon({
  iconUrl: "../assets/planned-study.svg",
  iconSize: [50, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const plannedRiver = L.icon({
  iconUrl: "../assets/planned-restore-river.svg",
  iconSize: [50, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const plannedEco = L.icon({
  iconUrl: "../assets/planned-eco.svg",
  iconSize: [50, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const plannedTrim = L.icon({
  iconUrl: "../assets/planned-trim-veg.svg",
  iconSize: [50, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const plannedZone = L.icon({
  iconUrl: "../assets/planned-create-zone.svg",
  iconSize: [50, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});
const plannedMoist = L.icon({
  iconUrl: "../assets/planned-restore-moist.svg",
  iconSize: [50, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const plannedInvaders = L.icon({
  iconUrl: "../assets/planned-treat-invaders.svg",
  iconSize: [50, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const plannedHedge = L.icon({
  iconUrl: "../assets/planned-create-hedge.svg",
  iconSize: [50, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

// STUDIED state Icons (x8)

const studiedStudy = L.icon({
  iconUrl: "../assets/studied-study.svg",
  iconSize: [50, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const studiedRiver = L.icon({
  iconUrl: "../assets/studied-restore-river.svg",
  iconSize: [50, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const studiedEco = L.icon({
  iconUrl: "../assets/studied-eco.svg",
  iconSize: [50, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const studiedTrim = L.icon({
  iconUrl: "../assets/studied-trim-veg.svg",
  iconSize: [50, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const studiedZone = L.icon({
  iconUrl: "../assets/studied-create-zone.svg",
  iconSize: [50, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const studiedMoist = L.icon({
  iconUrl: "../assets/studied-restore-moist.svg",
  iconSize: [50, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const studiedInvaders = L.icon({
  iconUrl: "../assets/studied-treat-invaders.svg",
  iconSize: [50, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const studiedHedge = L.icon({
  iconUrl: "../assets/studied-create-hedge.svg",
  iconSize: [50, 60],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

// HANDLE CLICK EVENT - Generate Icons with leaflet functions.

btnSubtmit.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (state.value === "done") {
    switch (type.value) {
      case "Étude":
        console.log(state.value + " study ok");
        L.marker([latitude.value, longitude.value], { icon: doneStudy })
          .addTo(map)
          .bindPopup("<b>Travaux réalisés</b><br>" + type.value);

        break;
      case "Restoration hydromorphologique":
        console.log(state.value + " restore-river ok");
        L.marker([latitude.value, longitude.value], { icon: doneRiver })
          .addTo(map)
          .bindPopup("<b>Travaux réalisés</b><br>" + type.value);
        break;
      case "Continuité écologique":
        console.log(state.value + " cycle-eco ok");
        L.marker([latitude.value, longitude.value], { icon: doneEco })
          .addTo(map)
          .bindPopup("<b>Travaux réalisés</b><br>" + type.value);
        break;
      case "Entretien végétation":
        console.log(state.value + " trim-veg ok");
        L.marker([latitude.value, longitude.value], { icon: doneTrim })
          .addTo(map)
          .bindPopup("<b>Travaux réalisés</b><br>" + type.value);
        break;
      case "Création zone tampon":
        console.log(state.value + " create-zone ok");
        L.marker([latitude.value, longitude.value], { icon: doneZone })
          .addTo(map)
          .bindPopup("<b>Travaux réalisés</b><br>" + type.value);
        break;
      case "Restoration zone humide":
        console.log(state.value + " restore-moist ok");
        L.marker([latitude.value, longitude.value], { icon: doneMoist })
          .addTo(map)
          .bindPopup("<b>Travaux réalisés</b><br>" + type.value);
        break;
      case "Traitement des espèces envahissantes":
        console.log(state.value + " treat-invaders ok");
        L.marker([latitude.value, longitude.value], { icon: doneInvaders })
          .addTo(map)
          .bindPopup("<b>Travaux réalisés</b><br>" + type.value);
        break;
      case "Plantation de haies":
        console.log(state.value + " create-hedge ok");
        L.marker([latitude.value, longitude.value], { icon: doneHedge })
          .addTo(map)
          .bindPopup("<b>Travaux réalisés</b><br>" + type.value);
        break;
    }
  } else if (state.value === "planned") {
    switch (type.value) {
      case "Étude":
        console.log(state.value + " study ok");
        L.marker([latitude.value, longitude.value], { icon: plannedStudy })
          .addTo(map)
          .bindPopup("<b>Travaux programmés</b><br>" + type.value);
        break;
      case "Restoration hydromorphologique":
        console.log(state.value + " restore-river ok");
        L.marker([latitude.value, longitude.value], { icon: plannedRiver })
          .addTo(map)
          .bindPopup("<b>Travaux programmés</b><br>" + type.value);
        break;
      case "Continuité écologique":
        console.log(state.value + " cycle-eco ok");
        L.marker([latitude.value, longitude.value], { icon: plannedEco })
          .addTo(map)
          .bindPopup("<b>Travaux programmés</b><br>" + type.value);
        break;
      case "Entretien végétation":
        console.log(state.value + " trim-veg ok");
        L.marker([latitude.value, longitude.value], { icon: plannedTrim })
          .addTo(map)
          .bindPopup("<b>Travaux programmés</b><br>" + type.value);
        break;
      case "Création zone tampon":
        console.log(state.value + " create-zone ok");
        L.marker([latitude.value, longitude.value], { icon: plannedZone })
          .addTo(map)
          .bindPopup("<b>Travaux programmés</b><br>" + type.value);
        break;
      case "Restoration zone humide":
        console.log(state.value + " restore-moist ok");
        L.marker([latitude.value, longitude.value], { icon: plannedMoist })
          .addTo(map)
          .bindPopup("<b>Travaux programmés</b><br>" + type.value);
        break;
      case "Traitement des espèces envahissantes":
        console.log(state.value + " treat-invaders ok");
        L.marker([latitude.value, longitude.value], { icon: plannedInvaders })
          .addTo(map)
          .bindPopup("<b>Travaux programmés</b><br>" + type.value);
        break;
      case "Plantation de haies":
        console.log(state.value + " create-hedge ok");
        L.marker([latitude.value, longitude.value], { icon: plannedHedge })
          .addTo(map)
          .bindPopup("<b>Travaux programmés</b><br>" + type.value);
        break;
    }
  } else if (state.value === "studied") {
    switch (type.value) {
      case "Étude":
        console.log(state.value + " study ok");
        L.marker([latitude.value, longitude.value], { icon: studiedStudy })
          .addTo(map)
          .bindPopup("<b>Travaux à l'Étude</b><br>" + type.value);
        break;
      case "Restoration hydromorphologique":
        console.log(state.value + " restore-river ok");
        L.marker([latitude.value, longitude.value], { icon: studiedRiver })
          .addTo(map)
          .bindPopup("<b>Travaux à l'Étude</b><br>" + type.value);
        break;
      case "Continuité écologique":
        console.log(state.value + " cycle-eco ok");
        L.marker([latitude.value, longitude.value], { icon: studiedEco })
          .addTo(map)
          .bindPopup("<b>Travaux à l'Étude</b><br>" + type.value);
        break;
      case "Entretien végétation":
        console.log(state.value + " trim-veg ok");
        L.marker([latitude.value, longitude.value], { icon: studiedTrim })
          .addTo(map)
          .bindPopup("<b>Travaux à l'Étude</b><br>" + type.value);
        break;
      case "Création zone tampon":
        console.log(state.value + " create-zone ok");
        L.marker([latitude.value, longitude.value], { icon: studiedZone })
          .addTo(map)
          .bindPopup("<b>Travaux à l'Étude</b><br>" + type.value);
        break;
      case "Restoration zone humide":
        console.log(state.value + " restore-moist ok");
        L.marker([latitude.value, longitude.value], { icon: studiedMoist })
          .addTo(map)
          .bindPopup("<b>Travaux à l'Étude</b><br>" + type.value);
        break;
      case "Traitement des espèces envahissantes":
        console.log(state.value + " treat-invaders ok");
        L.marker([latitude.value, longitude.value], { icon: studiedInvaders })
          .addTo(map)
          .bindPopup("<b>Travaux à l'Étude</b><br>" + type.value);
        break;
      case "Plantation de haies":
        console.log(state.value + " create-hedge ok");
        L.marker([latitude.value, longitude.value], { icon: studiedHedge })
          .addTo(map)
          .bindPopup("<b>Travaux à l'Étude</b><br>" + type.value);
        break;
    }
  } else {
    alert("Erreur: Sélectionnez un état");
  }

  latitude.value = "";
  longitude.value = "";
  state.value = "";
  type.value = "";
});
