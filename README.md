# uso-profesional-de-github
Fundamentos teoricos
¿Qué es Git?
Git es un sistema de control de versiones distribuido que me permite llevar el historial de cambios de un proyecto. Con Git puedo saber qué se cambió, cuándo, quién lo cambió y por qué, además de volver a versiones anteriores si es necesario.
Lo uso principalmente para trabajar con código, ya sea solo o en equipo, manteniendo orden y trazabilidad.
Ejemplo:
Si estoy desarrollando una aplicación y hago un cambio que rompe algo, con Git puedo regresar a una versión anterior que sí funcionaba.

¿Qué es GitHub?
GitHub es una plataforma en la nube que aloja repositorios Git y facilita el trabajo colaborativo.
Además de almacenar el código, GitHub ofrece herramientas como control de acceso, revisión de código, issues y pull requests.
Ejemplo:
Aunque yo tenga Git instalado en mi computadora, uso GitHub para subir mi proyecto y compartirlo con otros desarrolladores del equipo.

Diferencia entre repositorio local y remoto
Repositorio local:
Está en mi computadora. Ahí hago los cambios, pruebas y commits.

Repositorio remoto:
Está en un servidor (por ejemplo GitHub). Sirve como punto central para compartir el código y sincronizar el trabajo del equipo.

Ejemplo:
Yo trabajo localmente, guardo cambios con commits y luego los envío al repositorio remoto para que los demás los vean.

Conceptos fundamentales de Git
Commit
Un commit es un registro de cambios en el repositorio. Representa un punto estable del proyecto y va acompañado de un mensaje descriptivo.
Ejemplo:
“Agrego validación al formulario de login”.

Push
Push es la acción de enviar mis commits desde el repositorio local al repositorio remoto.
Ejemplo:
Después de terminar una funcionalidad, hago push para subir mis cambios a GitHub.

Pull
pull sirve para traer al repositorio local los cambios que existen en el repositorio remoto.
Ejemplo:
Antes de empezar a trabajar, hago pull para asegurarme de tener la última versión del proyecto.

Branch
Una branch es una línea de desarrollo independiente dentro del mismo repositorio. Me permite trabajar en nuevas funcionalidades sin afectar el código principal.
Ejemplo:
Creo una rama llamada feature/login para desarrollar el login sin tocar la rama main.

Merge
merge es el proceso de unir los cambios de una rama con otra, normalmente integrando una rama de desarrollo a la rama principal.
Ejemplo:
Cuando termino la funcionalidad del login, hago un merge de feature/login a main.

Fork
Un fork es una copia completa de un repositorio, normalmente en mi propia cuenta de GitHub. Se usa mucho en proyectos open source.
Ejemplo:
Hago un fork de un proyecto público para modificarlo sin afectar el repositorio original.

Pull request
Un pull request es una solicitud para que mis cambios sean revisados e integrados en otro repositorio o rama. Facilita la revisión de código y el trabajo en equipo.
Ejemplo:
Después de hacer cambios en una rama o en un fork, creo un pull request para que el responsable del proyecto revise y acepte mis cambios.

