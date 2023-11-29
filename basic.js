const establishments = [
  {
    "id": 1,
    "name": "Praça Verde",
    "active": true,
    "latitude": -27.049384618553656,
    "longitude": -49.537353515625,
    "hour": [
      12,
      0
    ],
    "attractions": "bailão dos veios",
    "fees_costs": "R$ 10",
    "comments": [
      {
        "id": 52,
        "title": "Interessante",
        "content": "Não gostei, mas tem potencial",
        "media": "https://cdn.pnghd.pics/data/1759/dancing-gif-36.gif"
      }
    ],
    "tags": []
  },
  {
    "id": 2,
    "name": "Praça Azul",
    "active": true,
    "latitude": -27.049097960353766,
    "longitude": -49.53733205795288,
    "hour": [
      12,
      0
    ],
    "attractions": "bailão dos dos novos",
    "fees_costs": "R$ 20",
    "comments": [],
    "tags": []
  }
];

window.onload = () => {
  let testeEntityAdded = false;

  const el = document.querySelector("[gps-new-camera]");

  el.addEventListener("gps-camera-update-position", (e) => {
    if (!testeEntityAdded) {
      establishments.forEach(establishment => {
        const entity = document.createElement("a-entity");
        entity.setAttribute("scale", {
          x: 100,
          y: 100,
          z: 100,
        });
        entity.setAttribute("gps-new-entity-place", {
          latitude: establishment.latitude,
          longitude: establishment.longitude,
        });

        alert(
          `Olha a posição!! lat : ${establishment.latitude} lon : ${establishment.longitude}`
        );
        document.querySelector("a-scene").append(entity);
      });
    }
    testeEntityAdded = true;
  });
};
