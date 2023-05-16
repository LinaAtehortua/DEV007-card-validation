# Tarjeta de crédito válida

## Índice

* [1. Resumen del proyecto](#1-preámbulo)
* [2. Objetivos de aprendizaje](#2-resumen-del-proyecto)
* [3. ¿A quién va dirigido el proyecto?](#3-consideraciones-generales)
* [4. Consideraciones técnicas](#6-consideraciones-técnicas)


***

## 1. Resumen del proyecto

Este proyecto tuvo como finalidad diseñar una aplicación web que le permitiera al usuario final 
validar el número de una tarjeta de crédito, implementando también la funcionalidad de ocultar 
todos los dígitos de la tarjeta exceptuando los últimos cuatro.
En este caso se realizó como primera instancia un prototipo de baja fidelidad el cual permitió 
dar una idea de lo que se quería mostrar a nivel de diseño, ya que las pautas de funcionalidad 
estaban dadas.

En este caso se realizó como primera instancia un prototipo de baja fidelidad el cual
permitió dar una idea de lo que se quería mostrar a nivel de diseño, ya que las pautas de 
funcionalidad estaban dadas.

![image](https://github.com/LinaAtehortua/DEV007-card-validation/assets/129763647/e20b5783-233e-4d0a-9203-c4b74ea8c633)



Se trabajo bajo los fundamentos de JavaScript, incluyendo conceptos como variables, condicionales, y funciones, 
así como eventos y manejo básico del DOM, fundamentos de HTML y CSS. Aunque el proyecto se desarrolló de manera 
individual, siempre tuve apoyo a mi alrededor lo que me permitió avanzar en el proyecto.







## 2. Objetivos de aprendizaje

•	Trabajar con base a un modelo estándar, la estructura básica de un proyecto en distintas carpetas 
(a través de módulos en JS).

En este objetivo logré entender las distintas carpetas que se manejan y la estructura básica de cada una de ellas.


•	Conocer las herramientas de mantenimiento y mejora del código (linters y pruebas unitarias).

Entender la importancia de la mejora en el código y de la verificación del mismo para que nuestro código sea más eficiente.


•	Aprender sobre objetos, estructuras, métodos e iteración (bucles) en JavaScript
Logre aprender varios temas de este objetivo, sin embargo debo seguir reforzando conocimiento para sentir más seguridad al momento de codear.


•	Implementar control de versiones con git (y la plataforma github)


## 3. ¿A quién va dirigido el proyecto?

Este producto va dirigido a cualquier persona o empresa que desee implementar métodos de pago ágiles, 
a través del pago en línea con tarjeta de crédito. 


Funcionamiento:
El funcionamiento es muy sencillo e intuitivo ya que una vez realice la compra el sistema le genera
una página donde solo debe ingresar 4 datos, con uno de éstos, más específicamente número de tarjeta 
de crédito lograremos verificar si la tarjeta es válida o no.
La usuaria debe ingresar los números de la tarjeta de crédito y dar clic en el botón validar allí podrá 
verificar la validación o no del número ingresado y al final el sistema cubrirá todos los números menos 
los últimos 4 (cuatro), esto para mayor seguridad. 


![image](https://github.com/LinaAtehortua/DEV007-card-validation/assets/129763647/b75f732c-ac56-4c4b-9e7d-472943b4e94f)



Vemos que cada input tiene la especificación del dato que el usuario debe ingresar, lo que permite que sea muy sencillo su diligenciamiento, cuenta con colores sobrios, letras de buen tamaño y claras y un botón grande de validación.





## 4. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript. En
este proyecto NO está permitido usar librerías o frameworks, solo JavaScript
puro también conocido como Vanilla JavaScript.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio que contiene un _boilerplate_ con tests (pruebas). Un _boilerplate_
es la estructura basica de un proyecto que sirve como un punto de partida con
archivos inicial y configuración basica de dependencias y tests.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm
test`.

El boilerplate que les damos contiene esta estructura:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── validator.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── validator.spec.js
```

### Descripción de scripts / archivos

* `README.md`: debe explicar la información necesaria para el uso de tu aplicación
  web, así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/style.css`: este archivo debe contener las reglas de estilo. Queremos que
  escribas tus propias reglas, por eso NO está permitido el uso de frameworks de
  CSS (Bootstrap, Materialize, etc).
* `src/validator.js`: acá debes implementar el objeto `validator`, el cual ya está
  _exportado_ en el _boilerplate_. Este objeto (`validator`) debe contener dos
  métodos:
  - `validator.isValid(creditCardNumber)`: `creditCardNumber` es un `string`
     con el número de tarjeta que se va a verificar. Esta función debe retornar
     un `boolean` dependiendo si es válida de acuerdo al [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).
  - `validator.maskify(creditCardNumber)`: `creditCardNumber` es un `string` con
    el número de tarjeta y esta función debe retornar un `string` donde todos menos
    los últimos cuatro caracteres sean reemplazados por un numeral (`#`) o 🐱.
    Esta función deberá siempre mantener los últimos cuatro caracteres
    intactos, aún cuando el `string` sea de menor longitud.

    Ejemplo de uso

    ```js
    maskify('4556364607935616') === '############5616'
    maskify(     '64607935616') ===      '#######5616'
    maskify(               '1') ===                '1'
    maskify(               '')  ===                ''
    ```

* `src/index.js`: acá debes escuchar eventos del DOM, invocar
  `validator.isValid()` y `validator.maskify()` según sea necesario y
  actualizar el resultado en la UI (interfaz de usuario).
* `test/validator.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `validator.isValid()` y `validator.maskify()`.

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el parser que usar (qué version de JavaScript/ECMAScript), el
entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.

***

