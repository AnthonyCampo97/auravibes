# Aura Vibes Fest

Sitio web del festival trimestral de música electrónica **Aura Vibes Fest** (Cali, Colombia).
Desarrollado con HTML, CSS y JavaScript, bajo la filosofía *Mobile First*.

## Estructura del proyecto

```
aura-vibes-fest/
├── index.html            # Página principal
├── styles/
│   └── styles.css        # Hoja de estilos (mobile first)
├── js/
│   └── main.js           # Lógica: menú, cuenta regresiva, animaciones
├── multimedia/
│   ├── imagenes/         # Fotografías, logotipo, cartel de artistas
│   └── videos/           # Aftermovies y clips (preferible enlazar YouTube/Vimeo para archivos pesados)
├── .gitignore
└── README.md
```

## Ejecución local

1. Abrir la carpeta en Visual Studio Code.
2. Instalar la extensión **Live Server**.
3. Clic derecho sobre `index.html` → *Open with Live Server*.

## Configuración básica

- **Fecha del próximo evento:** constante `FECHA_EVENTO` en `js/main.js`.
- **Redes sociales:** enlaces de Instagram y WhatsApp en la sección `#contacto` de `index.html`.
- **Fotografías:** guardarlas en `multimedia/imagenes/` y referenciarlas en `styles/styles.css` (clases `.g1` a `.g6`).

## Hoja de ruta

- [ ] Logotipo y paleta de colores definitivos
- [ ] Contenido audiovisual real de las ediciones anteriores
- [ ] Optimización de imágenes y SEO
- [ ] Conexión de dominio y publicación
