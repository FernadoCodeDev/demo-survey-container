> [!IMPORTANT]
> Este repositorio no contiene el código fuente del paquete NPM survey-container, sino que es una demo práctica que muestra cómo instalarlo, configurarlo y utilizarlo como dependencia en un proyecto real.
> Ambos repositorios (desarrollo y demo) están separados para evitar confusiones entre contribuir al paquete y simplemente consumirlo en tu proyecto.


Si estás buscando el repositorio del desarrollo del paquete, puedes encontrarlo aquí:

🔗 [Repositorio de desarrollo de survey-container](https://github.com/FernadoCodeDev/Survey-Container)

# 🚀 Demo - Survey Container
Este repositorio es una **aplicación de demostración** que utiliza el paquete NPM `survey-container` como dependencia. Aquí encontrarás ejemplos claros y documentación sobre:

- Cómo instalar el paquete
- Cómo integrarlo en tu proyecto front-End
- Configuraciones necesarias
- Backend
- Recomendaciones de uso y buenas prácticas

🧪 ¿Qué incluye esta demo?
Esta demo fue construida utilizando el siguiente stack:

**Front-End** | **Back-End** | **Bases de Datos** | 
:---: | :---: | :---: |
<img src="https://skillicons.dev/icons?i=js,react,tailwind,vite" alt="frontend Skills" /> |<img src="https://skillicons.dev/icons?i=php" alt="Backend Skills" /> | <img src="https://skillicons.dev/icons?i=mysql" alt="Databases Skills" /> |

Paquete: `survey-container` como dependencia NPM

Este repositorio tiene como objetivo ayudarte a entender cómo implementar y usar el paquete `survey-container` en tu propio entorno. Toda la configuración necesaria está explicada paso a paso para que puedas adaptar esta solución a tus necesidades.

<details>
<summary>🛠️ Instalación</summary>

Para instalar el paquete `survey-container`, simplemente abre tu terminal y ejecuta el siguiente comando:

```
npm i survey-container
```

> Este paquete está publicado en [NPM](https://www.npmjs.com/package/survey-container), donde también encontrarás esta misma documentación.

En esta demo, el paquete se instala desde la carpeta del frontend.

Entrando a la carpeta frontend

```
cd frontend
```

y instalando esta dependencia 

```
npm i survey-container
```

Una vez instalado, podrás verificar que se encuentra en tu archivo `package.json` como una dependencia, junto a su versión correspondiente. Actualmente, la versión estable más reciente es:

```
"survey-container": "^1.1.8"
```
> Asegúrate de mantener siempre el paquete actualizado a su última versión.

Esta demo se utilizó como entorno de prueba para detectar y corregir bugs en versiones anteriores del paquete.
Por ello, se recomienda **no instalar versiones antiguas**, ya que podrían contener errores que ya fueron corregidos en versiones recientes.

Una vez instalado correctamente, puedes integrarlo en el frontend de tu proyecto sin importar la tecnología que estés utilizando. En esta demo se utilizó React, pero puedes adaptarlo a otros entornos si lo deseas.
</details>

<details>
<summary>⚙️ Integración en el Front-End</summary>

Esta demo incluye dos páginas clave que muestran cómo integrar el paquete `survey-container`:

### 📊 Página de Métricas

Esta pantalla permite visualizar todas las encuestas disponibles en tu base de datos. En esta demo se utiliza **MySQL** como sistema de base de datos.

Puedes encontrar el código fuente de esta página en:

`frontend/src/components/ui/MetricsUi.jsx`

La función principal aquí es obtener las métricas desde tu backend. Asegúrate de configurar correctamente la URL del `fetch`, como se muestra en el ejemplo:

`fetch("http://localhost:3000/api/metrics/metrics.php")`

cambiala por la URL de tú proyecto con esto te permitirá consultar y visualizar las métricas de tus encuestas o de lo contrario te mostrara el error en la consola.

![Demo-Image-1](https://github.com/FernadoCodeDev/demo-survey-container/blob/main/readme/Readme-Image-1.png)


### 📝 Página para Contestar Encuestas

Esta es la sección que probablemente más te interesa: cómo usar el componente `SurveyWidget` que exporta el paquete.

El código de esta página se encuentra en:

`frontend/src/components/ui/SurveyUi.jsx`

Aquí es donde se importa e integra el paquete survey-container en una aplicación real utilizando React.

El código se muestra a continuación:

```
import React from "react";
import { useParams } from "react-router-dom";
import { SurveyWidget } from "survey-container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SurveyUi() {
  const { surveyId } = useParams();

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold text-center">Contestar Encuesta</h1>
      <SurveyWidget
        surveyId={surveyId}
        fetchUrl="http://localhost:3000/api/surveys/survey.php?id="
        responseUrl="http://localhost:3000/api/response/postResponse.php"
        onAlert={(msg, type = "info") => {
          toast(msg, {
            type,
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }}
      />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </div>
  );
}

export default SurveyUi;
```

Como puedes ver, solo necesitas:

- Importar el componente desde el paquete:
  
```
import { SurveyWidget } from "survey-container";
```

- Obtener el ID de la encuesta usando useParams():
- 
```
const { surveyId } = useParams();
```
- Renderizar el componente `<SurveyWidget />` y pasarle los props necesarios como `surveyId`, `fetchUrl`, `responseUrl`.

### Cnfiguración de los Props

![Demo-Image-2](https://github.com/FernadoCodeDev/demo-survey-container/blob/main/readme/Readme-Image-2.png)


</details>

<details>
<summary>Configuraciones necesarias</summary>

</details>

<details>
<summary>Back-End</summary>

### Base de datos 

### Tablas necesarias

### endpoints 

</details>

<details>
<summary>Recomendaciones de uso y buenas prácticas</summary>


</details>














