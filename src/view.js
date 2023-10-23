export const renderItems = (data) => {
  console.log(data);
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  return "example";
};

const mostrarMenu = document.getElementById("mostrar-menu");
const menuOculto = document.querySelector(".menu-oculto");

mostrarMenu.addEventListener("click", () => {
  menuOculto.classList.toggle("menu-oculto-activo");
});
