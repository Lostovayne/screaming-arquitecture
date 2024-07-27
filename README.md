# Screaming Arquitecture

src/
├── core/
│ ├── components/
│ ├── hooks/
│ ├── services/
│ ├── utils/
│ ├── contexts/
│ ├── types/
│ └── index.js
├── payment/
│ ├── components/
│ ├── hooks/
│ ├── services/
│ ├── contexts/
│ ├── types/
│ └── index.js
├── auth/
│ ├── components/
│ ├── hooks/
│ ├── services/
│ ├── contexts/
│ ├── types/
│ └── index.js
├── employees/
│ ├── components/
│ ├── hooks/
│ ├── services/
│ ├── contexts/
│ ├── types/
│ └── index.js
├── assets/
│ ├── images/
│ ├── styles/
│ └── index.js
├── App.js
├── index.js
└── routes/
└── index.js


# Descripción de Directorios

## core
Contiene los componentes y lógica comunes a toda la aplicación. Aquí puedes tener hooks reutilizables, servicios que se usan en varios módulos, utilidades, contextos globales y tipos generales.

## components
Componentes reutilizables en toda la aplicación.

## hooks
Hooks personalizados reutilizables.

## services
Servicios que se comunican con API's o lógica compartida.

## utils
Funciones utilitarias comunes.

## contexts
Contextos globales que se usan en toda la aplicación.

## types
Definiciones de tipos (si estás usando TypeScript).

## payment
Lógica específica del dominio de pagos. Esto incluye componentes relacionados con pagos, hooks específicos de pagos, servicios de pago, contextos de pago y tipos específicos de pagos.

### components
Componentes específicos de pagos.

### hooks
Hooks personalizados para pagos.

### services
Servicios de pago.

### contexts
Contextos relacionados con pagos.

### types
Definiciones de tipos específicos de pagos.

## auth
Lógica específica del dominio de autenticación. Similar a payment, pero enfocado en autenticación y autorización.

### components
Componentes específicos de autenticación.

### hooks
Hooks personalizados para autenticación.

### services
Servicios de autenticación.

### contexts
Contextos relacionados con autenticación.

### types
Definiciones de tipos específicos de autenticación.

## employees
Lógica específica del dominio de empleados. Similar a payment y auth, pero enfocado en la gestión de empleados.

### components
Componentes específicos de empleados.

### hooks
Hooks personalizados para empleados.

### services
Servicios de empleados.

### contexts
Contextos relacionados con empleados.

### types
Definiciones de tipos específicos de empleados.

## assets
Archivos estáticos como imágenes y estilos CSS.

## routes
Definiciones de las rutas de la aplicación.

## App.js
Punto de entrada principal de la aplicación.

## index.js
Archivo de entrada de ReactDOM.render().