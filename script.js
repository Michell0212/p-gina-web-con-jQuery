$(document).ready(function () {
  // Agregar tareas
  $("#agregarBtn").click(function () {
    const tarea = $("#nuevaTarea").val().trim();
    if (tarea !== "") {
      const nuevaTarea = `
        <li>
          <span class="texto">${tarea}</span>
          <input type="text" class="editInput" style="display:none;">
          <div class="acciones">
            <button class="completarBtn">✅</button>
            <button class="editarBtn">✏️</button>
            <button class="guardarBtn" style="display:none;">💾</button>
            <button class="eliminarBtn">🗑️</button>
          </div>
        </li>`;
      $("#listaTareas").append(nuevaTarea);
      $("#nuevaTarea").val("");
      $("#mensaje").hide().fadeIn(500).delay(1000).fadeOut(500);
    }
  });

  // Tarea completa
  $("#listaTareas").on("click", ".completarBtn", function () {
    $(this).closest("li").find(".texto").toggleClass("completada");
  });

  // Eliminar tarea
  $("#listaTareas").on("click", ".eliminarBtn", function () {
    $(this).closest("li").remove();
  });

  // Editar tarea
  $("#listaTareas").on("click", ".editarBtn", function () {
    const li = $(this).closest("li");
    const textoActual = li.find(".texto").text();
    li.find(".editInput").val(textoActual).show();
    li.find(".texto").hide();
    li.find(".editarBtn").hide();
    li.find(".guardarBtn").show();
  });

  // Guardar edición
  $("#listaTareas").on("click", ".guardarBtn", function () {
    const li = $(this).closest("li");
    const nuevoTexto = li.find(".editInput").val().trim();
    if (nuevoTexto !== "") {
      li.find(".texto").text(nuevoTexto).show();
      li.find(".editInput").hide();
      li.find(".editarBtn").show();
      li.find(".guardarBtn").hide();
    }
  });

  // Vaciar la lista
  $("#vaciarBtn").click(function () {
    $("#listaTareas").empty();
  });
});
