#  E-commerce React App

Read in: [English](README.md) | [Español](README.es.md)



## Overview
An e-commerce web application built as the final project for a React.js course.  

Users can browse products by category, view details, add items to the cart, and simulate a checkout process. Orders are stored in Firebase Firestore.
## Demo

No aplica (aplicación de consola). Se ejecuta en local siguiendo los pasos de instalación.



## Features
- Browse products by category
- Product detail page
- Shopping cart with total and summary
- Checkout form with basic validation
- Order storage in Firestore
- Responsive layout (mobile and desktop)
## Tech Stack
- **React** – Component-based UI for building the storefront.
- **React Router DOM** – Client-side routing for navigation between pages.
- **Firebase Firestore** – Stores products/orders in a cloud database without building a custom backend.
- **CSS + UI libraries** – Styling and layout.
## Screenshots / GIF

![E-commerce Demo](https://github.com/JoseI11/Proyecto-ecommerce-final-ImhoffJose/blob/main/public/images/gif-ecommerce.gif)## Getting Started

Clone the repository:
```bash
git clone https://github.com/JoseI11/Proyecto-ecommerce-final-ImhoffJose.git
cd Proyecto-ecommerce-final-ImhoffJose
```

#### Install dependencies:

```bash
npm install
```

#### Run the project:

```bash
npm run dev
```
Ejecutar:
```bash
java -cp "out;src/lib/gson-2.13.1.jar" Main
```
En macOS/Linux, reemplazar ; por : en el classpath.

## Variables de entorno

Para ejecutar este proyecto, es necesario agregar las siguientes variables de entorno en un archivo `.env.local` en la raíz del proyecto:

```env
REACT_APP_apiKey=
REACT_APP_authDomain=
REACT_APP_projectId=
REACT_APP_storageBucket=
REACT_APP_messagingSenderId=
REACT_APP_appId=
```
## Roadmap

- Improve UI consistency and responsiveness
- Add product search and sorting
- Add user authentication (optional)
- Add cart persistence between sessions
## Autor

- [@José Imhoff](https://www.linkedin.com/in/joseimhoff/)
