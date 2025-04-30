
---

# 🐉 Dragon Ball Webpage

Aplicación web desarrollada con React que permite explorar personajes del universo de Dragon Ball mediante una interfaz moderna y dinámica.

🌐 **Enlace del proyecto:** [https://dragon-ball-webpage.vercel.app/](https://dragon-ball-webpage.vercel.app/)

---

## 📌 Introducción

Este proyecto fue creado con el objetivo de practicar habilidades de desarrollo frontend usando React y Vite, consumiendo una API para mostrar información relevante de personajes de Dragon Ball. La página presenta una interfaz responsiva y amigable, con navegación entre vistas y detalle de personajes.

---

## 🚀 Funcionalidades principales

- Visualización de personajes en una galería.
- Detalle individual al hacer clic sobre un personaje.
- Navegación con React Router.
- Diseño adaptable a distintos dispositivos.
- Consumo de datos desde una API.

---

## 🧱 Tecnologías utilizadas

- **React** (con Vite como bundler)
- **React Router** (navegación entre páginas)
- **Material UI (MUI)** — para componentes estilizados (como Drawer y las Card)
- **CSS** (para los modulos CSS)
- **Vercel** — despliegue automático

---

## 🛠️ Instalación y ejecución local

```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/dragon-ball-webpage.git
cd dragon-ball-webpage

# Instala dependencias
npm install

# Ejecuta el servidor de desarrollo
npm run dev
```

---

## 🧭 Estructura del proyecto

```
/src
│
├── /components        # Componentes reutilizables (Card, Drawer, etc.)
├── /pages             # Vistas principales (Home, Detalle)
├── /routes            # Definición de rutas de la app
├── /assets            # Imágenes y estilos
├── App.jsx            # Componente principal con navegación
└── main.jsx           # Entrada de la aplicación
```

---

## 📂 Rutas de la aplicación
- `/` — Página principal con lista de personajes.
- `/character/:id` — Detalle de personaje seleccionado.
- `/masculino` - Página con la lista de personajes filtrada por el género masculino
- `/femenino` - Página con la lista de personajes filtrada por el género masculino
- `about` - Página con la información básica del autor
---

## 🧠 Lógica de estado

- Se utiliza `useState` y `useEffect` para manejo de datos.
- React Router (`useParams`) para identificar personajes en rutas dinámicas.
- Posible uso de `fetch` para llamadas a la API.
- Manejo de estados de carga y errores para una experiencia de usuario fluida.

---

## 🎨 Estilo y diseño

- Uso de componentes MUI personalizados.
- Paleta de colores oscura predominante.
- Diseño responsive (adaptado para desktop y mobile).
- Drawer lateral para navegación secundaria.

---

## 🌐 Despliegue en Vercel

- Deploy automático con Vercel a partir del repositorio de GitHub.
- URL pública generada por Vercel.
- Compatible con actualizaciones continuas tras cada push al repositorio.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente.
---
