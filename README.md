# SPA Demo: Lista de Tareas en Angular

Este proyecto es una demostración de una aplicación de una sola página (SPA) construida con Angular, que simula una lista de tareas. Es una aplicación _sin servidor_ (serverless) que utiliza `localStorage` para la persistencia de datos, lo que la hace ideal para demostraciones, prototipos rápidos y aprendizaje de Angular.

## Características

- **SPA (Single Page Application):** Toda la interacción ocurre en una sola página, proporcionando una experiencia de usuario fluida y sin recargas completas de la página.
- **Angular:** Construido con el potente framework Angular, siguiendo las mejores prácticas y aprovechando sus características como:
  - Componentes reutilizables.
  - Servicios para la lógica de negocio.
  - Data binding bidireccional (`ngModel`).
  - Módulos de Angular (`FormsModule`).
- **Persistencia en `localStorage`:** Los datos de la lista de tareas se almacenan en el `localStorage` del navegador. Esto permite que los datos persistan entre sesiones (siempre y cuando no se borre el almacenamiento local del navegador).
- **Diseño responsivo con Bootstrap:** La interfaz de usuario se adapta a diferentes tamaños de pantalla gracias a Bootstrap, lo que la hace usable en dispositivos móviles, tablets y computadoras de escritorio.
- **Despliegue sencillo en GitHub Pages:** El proyecto está configurado para un despliegue fácil en GitHub Pages, lo que permite compartirlo rápidamente.
- **Standalone components** Se implementa la funcionalidad de Standalone components.

## Demostración

Puedes ver la aplicación en funcionamiento aquí: [https://3mmanu3lmois3s.github.io/spa-demo/](https://3mmanu3lmois3s.github.io/spa-demo/)

## Estructura del Proyecto

spa-demo/
├── docs/ # Archivos compilados para producción (después de ng build)
├── src/
│ ├── app/
│ │ ├── todo-list/ # Componente de la lista de tareas
│ │ │ ├── todo-list.component.html
│ │ │ ├── todo-list.component.ts
│ │ │ └── todo-list.component.css
│ │ ├── task.service.ts # Servicio para la gestión de tareas y localStorage
│ │ ├── app.component.html # Plantilla del componente raíz
│ │ ├── app.component.ts # Componente raíz
│ │ └── app.component.css # Estilos del componente raíz
│ ├── index.html # HTML principal
│ ├── main.ts # Punto de entrada de la aplicación
│ └── styles.css # Estilos globales
├── angular.json # Configuración de Angular CLI
├── package.json # Dependencias del proyecto y scripts
├── README.md # Este archivo
└── tsconfig.json # Configuración de TypeScript

## Instalación y Ejecución

1.  **Clonar el repositorio:**

    ```bash
    git clone [https://github.com/3mmanu3lmois3s/spa-demo.git](https://github.com/3mmanu3lmois3s/spa-demo.git)
    cd spa-demo
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    ```

3.  **Ejecutar la aplicación localmente:**

    ```bash
    ng serve --open
    ```

    Esto abrirá la aplicación en tu navegador predeterminado (generalmente en `http://localhost:4200`).

4.  **Compilar para producción (para despliegue):**

    ```bash
    ng build --configuration production --base-href="/spa-demo/"
    ```

    (Reemplaza `spa-demo` con el nombre de tu repositorio si es diferente). Esto generará los archivos optimizados en la carpeta `docs`.

## Despliegue

La aplicación está actualmente desplegada en GitHub Pages: [https://3mmanu3lmois3s.github.io/spa-demo/](https://3mmanu3lmois3s.github.io/spa-demo/)

Para desplegar una nueva versión:

1.  Asegurate de tener la rama main actualizada.
2.  Haz commit de tus cambios.
3.  Ejecuta: `ng build --configuration production --base-href="/spa-demo/"` (reemplazando `spa-demo` si es necesario).
4.  Ejecuta: `git push origin main`

GitHub Pages se encargará automáticamente de actualizar el sitio.

## Mejoras Futuras (Fases Siguientes)

Esta es una aplicación de demostración básica. Aquí hay algunas ideas para expandirla y mejorarla:

- **Conexión a un backend real:**
  - Reemplazar `localStorage` con una API RESTful.
  - Usar un servicio como Firebase, Supabase, o un backend Node.js/Express, Python/Flask, etc.
- **Autenticación de usuarios:**
  - Permitir a los usuarios registrarse e iniciar sesión.
  - Asociar las tareas a usuarios específicos.
- **Edición de tareas:**
  - Permitir a los usuarios editar el título de las tareas existentes.
- **Prioridades y categorías:**
  - Agregar campos para la prioridad (alta, media, baja) y/o categorías (trabajo, personal, etc.).
- **Fechas de vencimiento:**
  - Agregar fechas de vencimiento a las tareas.
  - Mostrar alertas o notificaciones cuando una tarea está por vencer o vencida.
- **Subtareas:**
  - Permitir a los usuarios dividir las tareas en subtareas más pequeñas.
- **Adjuntos:**
  - Permitir a los usuarios adjuntar archivos a las tareas.
- **Comentarios:**
  - Agregar un sistema de comentarios para cada tarea.
- **Compartir tareas:**
  - Permitir a los usuarios compartir tareas o listas de tareas con otros usuarios.
- **Búsqueda y filtrado:**
  - Implementar funciones de búsqueda y filtrado para encontrar tareas específicas.
- **Mejoras de UI/UX:**
  - Animaciones más elaboradas.
  - Mejor manejo de errores.
  - Un diseño más pulido y personalizado.
  - Drag and drop para reordenar tareas.
- **Pruebas unitarias y e2e:**
  - Escribir pruebas para asegurar la calidad del código y prevenir regresiones.
- **PWA (Progressive Web App)**
  - Convertir la aplicacion en una PWA.

## Contribuciones

¡Las contribuciones son bienvenidas! Si quieres mejorar esta aplicación, siéntete libre de hacer un fork del repositorio y enviar un pull request.
