window.onload = () => {
  let testeEntityAdded = false;

  const el = document.querySelector("[gps-new-camera]");

  el.addEventListener("gps-camera-update-position", (e) => {
    if (!testeEntityAdded) {
      alert(
        `Pegue a primeira posicao: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`
      );
      const entity = document.querySelector("a-gltf-model ");
      console.log(entity);
    }
  });
};
