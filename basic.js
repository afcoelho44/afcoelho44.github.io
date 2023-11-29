const establishments = [
  {
    "id": 1,
    "name": "Praça Verde",
    "active": true,
    "latitude": -27.056837,
    "longitude": -49.5336349,
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
    "latitude": -27.056864,
    "longitude": -49.5317067,
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
      alert(
        `Pegue a primeira posicao: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`
      );
      establishments.forEach(establishment => {
        alert(
          `Chegou aqui!! ${establishment}`
        );
        const entity = document.querySelector("a-entity");
        entity.setAttribute("scale", {
          x: 9,
          y: 9,
          z: 9,
        });
        entity.setAttribute("gps-new-entity-place", {
          latitude: establishment.latitude,
          longitude: establishment.longitude,
        });
        console.log(establishment.latitude, establishment.longitude);
        document.querySelector("a-scene").append(entity);
      });
    }
    testeEntityAdded = true;
  });
};
