const d = document,
$btnContinuar = d.querySelector(".nota button"),
$nota = d.querySelector(".nota"),
$notaTitulo = d.querySelector(".nota h2"),
$notaParrafo = d.querySelector(".nota p"),
$clave = d.querySelector(".clave"),
$panel = d.querySelector(".panel"),
$libro = d.querySelector(".libro"),
$florero = d.querySelector(".florero"),
$cuadro = d.querySelector(".cuadro"),
$puerta = d.querySelector(".puerta"),
$cajones = d.querySelectorAll(".cajon"),
$salirPanelBtn = d.querySelector(".salirPanel")

let puerta = false

/*Continuar al presionar botón*/

$btnContinuar.addEventListener("click", e => {
  $nota.classList.add("bajarOpacidad")
})

/*Mostrar panel con clave*/

$clave.addEventListener("click", e => {
  $panel.classList.add("aparecer")
})

$salirPanelBtn.addEventListener("click", e => {
  $panel.classList.remove("aparecer")
})

/*Mostrar nota*/

const mostrarNota = (titulo, texto)  => {
  $notaTitulo.textContent = titulo
  $notaParrafo.textContent = texto

  $nota.classList.remove("bajarOpacidad")
    $nota.classList.remove("desaparecer")
}

$libro.addEventListener("click", e => mostrarNota("Una página extraña", "Acabo de encontrar un libro sobre una mesita de noche. Aquí dice que la primera letra de la clave para salir corresponde a "))
$florero.addEventListener("click", e => mostrarNota("Una nota en el florero", "En la habitación hay un hermoso tulipán. Quería sacarlo para llevarlo a mi casa cuando saliera, pero encontré una notita dentro del florero que decía que la tercera letra de la clave para salir de aquí era"))
$cuadro.addEventListener("click", e => mostrarNota("Un cuadro misterioso", "Aquí hay una imagen de alguien, me suena un poco su cara"))

$cajones.forEach(cajon => {
  cajon.addEventListener("click", e => mostrarNota("Vacío", "El cajón está vacío"))
});

$puerta.addEventListener("click", e => {
  (puerta)
  ? location.href ="https://trabajocolegio.github.io/escape-room/felicitaciones.html"
  : mostrarNota("Cerrada", "Aquí hay un panel, creo que debo ingresar una clave")
})

const d = document,
$btnContinuar = d.querySelector(".nota button"),
$nota = d.querySelector(".nota"),
$notaTitulo = d.querySelector(".nota h2"),
$notaParrafo = d.querySelector(".nota p"),
$clave = d.querySelector(".clave"),
$panel = d.querySelector(".panel"),
$libro = d.querySelector(".libro"),
$florero = d.querySelector(".florero"),
$cuadro = d.querySelector(".cuadro"),
$puerta = d.querySelector(".puerta"),
$cajones = d.querySelectorAll(".cajon"),
$panelBtn = d.querySelector(".panel button"),
$panelInput = d.querySelector(".panel input"),
$salirPanelBtn = d.querySelector(".salirPanel")

let puerta = false

/*Continuar al presionar botón*/

$btnContinuar.addEventListener("click", e => {
  $nota.classList.add("bajarOpacidad")
})

/*Mostrar panel con clave*/

$clave.addEventListener("click", e => {
  $panel.classList.add("aparecer")
})

$salirPanelBtn.addEventListener("click", e => {
  $panel.classList.remove("aparecer")
})

/*Mostrar nota*/

const mostrarNota = (titulo, texto)  => {
  $notaTitulo.textContent = titulo
  $notaParrafo.textContent = texto

  $nota.classList.remove("bajarOpacidad")
    $nota.classList.remove("desaparecer")
}

$libro.addEventListener("click", e => mostrarNota("Una página extraña", "Acabo de encontrar un libro sobre una mesita de noche. Aquí dice que la primera letra de la clave para salir corresponde a "))
$florero.addEventListener("click", e => mostrarNota("Una nota en el florero", "En la habitación hay un hermoso tulipán. Quería sacarlo para llevarlo a mi casa cuando saliera, pero encontré una notita dentro del florero que decía que la tercera letra de la clave para salir de aquí era"))
$cuadro.addEventListener("click", e => mostrarNota("Un cuadro misterioso", "Aquí hay una imagen de alguien, me suena un poco su cara"))

$cajones.forEach(cajon => {
  cajon.addEventListener("click", e => mostrarNota("Vacío", "El cajón está vacío"))
});

$puerta.addEventListener("click", e => {
  mostrarNota("Cerrada", "Aquí hay un panel, creo que debo ingresar una clave")
})

$panelBtn.addEventListener("click", e => {
  $panel.classList.remove("aparecer")

  if($panelInput.value.toLowerCase() == "turing") {
    location.href ="https://trabajocolegio.github.io/escape-room/felicitaciones.html"
  }
  else{
    mostrarNota("Clave Incorrecta", "Parece ser que la puerta sigue cerrada")
  }
})
