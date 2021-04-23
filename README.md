# Creando una Red Social

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Entrega](#7-entrega)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)

## 1. Preámbulo
  
Hay redes sociales de todo tipo y para todo tipo de intereses. Por ejemplo,
en una ronda de financiamiento con inversionistas, se presentó una red social
para químicos en la que los usuarios podían publicar artículos sobre sus
investigaciones, comentar en los artículos de sus colegas, y filtrar artículos
de acuerdo a determinadas etiquetas o su popularidad, lo más reciente, o lo
más comentado.

## 2. Resumen del proyecto
 

## 3. Objetivos de aprendizaje

El objetivo principal de aprendizaje de este proyecto es construir una
[Single-page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
[_responsive_](../../topics/css/02-responsive) (con más de una vista / página)
en la que podamos **leer y escribir datos.**
    
### 5.3 Historias de usuario

<!-- Output copied to clipboard! -->



<table>
  <tr>
   <td colspan="2" >HISTORIA DE USUARIO
   </td>
  </tr>
  <tr>
   <td>COD:
   </td>
   <td>001
   </td>
  </tr>
  <tr>
   <td>NOMBRE:
   </td>
   <td>Crear cuenta
   </td>
  </tr>
  <tr>
   <td>DESCRIPCIÓN: 
   </td>
   <td><strong>Como </strong>usuario nuevo <strong>Quiero </strong>poder crear una cuenta con nombre de usuario,  email y password <strong>para </strong>poder ingresar a la red social
   </td>
  </tr>
  <tr>
   <td>ACEPTACIÓN:
   </td>
   <td><strong><em>Dado que</em></strong> el usuario quiere crearse una cuenta <strong><em>cuando </em></strong>esté interesado en compartir información en la red social, y conocer sus beneficios<em> <strong>entonces </strong></em>se creará un apartado que permita al usuario llenar sus datos de username, email, password o registrarse con su cuenta gmail. Y luego estos datos serán guardados.
   </td>
  </tr>
  <tr>
   <td>DEFINICIÓN DE TERMINADO:
   </td>
   <td>El usuario ingresa satisfactoriamente sus datos de registro, el cual se usará para el ingreso al timeline del website.
   </td>
  </tr>
</table>



<table>
  <tr>
   <td colspan="2" >HISTORIA DE USUARIO
   </td>
  </tr>
  <tr>
   <td>COD:
   </td>
   <td>002
   </td>
  </tr>
  <tr>
   <td>NOMBRE:
   </td>
   <td>Login
   </td>
  </tr>
  <tr>
   <td>DESCRIPCIÓN: 
   </td>
   <td><strong>Como </strong>usuario registrado <strong>quiero </strong>poder ingresar con mi cuenta gmail o nombre de usuario y password <strong>para </strong>entrar al timeline del website
<p>
Definición de Terminado
   </td>
  </tr>
  <tr>
   <td>ACEPTACIÓN:
   </td>
   <td><strong><em>Dado que </em></strong>el usuario <strong>quiere </strong>ingresar a la cuenta con sus datos <strong><em>cuando</em> </strong>esté interesado en compartir o visualizar información en la red social <strong><em>entonces</em></strong> se creará un apartado que permita al usuario llenar sus datos de username, password o ingresar con su cuenta gmail. Y luego estos datos serán validados.
   </td>
  </tr>
  <tr>
   <td>DEFINICIÓN DE TERMINADO:
   </td>
   <td>El usuario ingresa satisfactoriamente sus datos de login, el cual se usará para el ingreso al timeline del website.
   </td>
  </tr>
</table>



<table>
  <tr>
   <td colspan="2" >HISTORIA DE USUARIO
   </td>
  </tr>
  <tr>
   <td>COD:
   </td>
   <td>003
   </td>
  </tr>
  <tr>
   <td>NOMBRE:
   </td>
   <td>Diseño Responsive
   </td>
  </tr>
  <tr>
   <td>DESCRIPCIÓN: 
   </td>
   <td><strong>Como </strong>usuario que uso frecuentemente el celular <strong>quiero </strong>poder manejar de manera sencilla el producto. (Responsive) <strong>para </strong>que pueda usar las herramientas del website de manera eficiente<strong> </strong>
   </td>
  </tr>
  <tr>
   <td>ACEPTACIÓN:
   </td>
   <td><strong><em>Dado que e</em></strong>l  usuario usa frecuentemente su dispositivo móvil<strong><em> cuando </em></strong>está interesado en compartir, visualizar, manipular información en la red social <strong><em>entonces</em></strong> se desarrollará el producto con la técnica mobile first (Responsive)
   </td>
  </tr>
  <tr>
   <td>DEFINICIÓN DE TERMINADO:
   </td>
   <td>El usuario manipula de manera eficiente los elementos del website desde su dispositivo móvil
   </td>
  </tr>
</table>



<table>
  <tr>
   <td colspan="2" >HISTORIA DE USUARIO
   </td>
  </tr>
  <tr>
   <td>COD:
   </td>
   <td>004
   </td>
  </tr>
  <tr>
   <td>NOMBRE:
   </td>
   <td>Entorno SPA
   </td>
  </tr>
  <tr>
   <td>DESCRIPCIÓN: 
   </td>
   <td><strong>Como </strong>usuario que frecuentemente usa la red social "FindMyPaw" <strong>quiero</strong> obtener los resultados de manera óptima (SPA) <strong>para </strong>reducir el tiempo de espera de las páginas.
   </td>
  </tr>
  <tr>
   <td>ACEPTACIÓN:
   </td>
   <td><strong><em>Dado que e</em></strong>l  usuario usa frecuentemente la red social <strong><em>cuando e</em></strong>stá interesado en compartir, visualizar, manipular información de manera rápida en la red social <strong><em>entonces s</em></strong>e construirá una Single-Page Application 
   </td>
  </tr>
  <tr>
   <td>DEFINICIÓN DE TERMINADO:
   </td>
   <td>El usuario puede manipular de manera óptima través de las diferentes páginas del SPA
   </td>
  </tr>
</table>



<table>
  <tr>
   <td colspan="2" >HISTORIA DE USUARIO
   </td>
  </tr>
  <tr>
   <td>COD:
   </td>
   <td>005
   </td>
  </tr>
  <tr>
   <td>NOMBRE:
   </td>
   <td>Diseño Responsive
   </td>
  </tr>
  <tr>
   <td>DESCRIPCIÓN: 
   </td>
   <td><strong>Como</strong> usuario registrado <strong>quiero</strong> pueda acceder al contenido de la red social <strong>para</strong> interactuar con las herramientas del producto 
   </td>
  </tr>
  <tr>
   <td>ACEPTACIÓN:
   </td>
   <td><strong><em>Dado que e</em></strong>l  usuario registrado quiere interactuar con el contenido del timeline <strong><em>cuando e</em></strong>stá interesado en compartir, visualizar, manipular información de la red social <strong><em>entonces s</em></strong>e creará el apartado de timeline, que tendrá interacción con los usuarios
   </td>
  </tr>
  <tr>
   <td>DEFINICIÓN DE TERMINADO:
   </td>
   <td>El usuario puede entrar al timeline y obtener información compartida por los usuarios.
   </td>
  </tr>
</table>



<table>
  <tr>
   <td colspan="2" >HISTORIA DE USUARIO
   </td>
  </tr>
  <tr>
   <td>COD:
   </td>
   <td>006
   </td>
  </tr>
  <tr>
   <td>NOMBRE:
   </td>
   <td>Crear publicación
   </td>
  </tr>
  <tr>
   <td>DESCRIPCIÓN: 
   </td>
   <td><strong>Como </strong>usuario registrado <strong>quiero</strong> compartir el estado de un animal mediante imagen o redacción <strong>para </strong>que pueda acceder al apartado de compartir y crear post
   </td>
  </tr>
  <tr>
   <td>ACEPTACIÓN:
   </td>
   <td><strong><em>Dado que e</em></strong>l usuario registrado quiere compartir información<em> <strong>cuando</strong> t</em>enga la oportunidad de encontrar animales que necesitan ayuda <strong>e<em>ntonces</em> </strong>se desarrollará el apartado de “crear post”
   </td>
  </tr>
  <tr>
   <td>DEFINICIÓN DE TERMINADO:
   </td>
   <td>El usuario es capaz de crear un post con la información que desea compartir.
   </td>
  </tr>
</table>



<table>
  <tr>
   <td colspan="2" >HISTORIA DE USUARIO
   </td>
  </tr>
  <tr>
   <td>COD:
   </td>
   <td>007
   </td>
  </tr>
  <tr>
   <td>NOMBRE:
   </td>
   <td>Consultar likes
   </td>
  </tr>
  <tr>
   <td>DESCRIPCIÓN: 
   </td>
   <td><strong>Como </strong>usuario autor <strong>quiero</strong> poder visualizar la cantidad de likes <strong>para </strong>obtener el conteo de interacción de los usuarios
   </td>
  </tr>
  <tr>
   <td>ACEPTACIÓN:
   </td>
   <td><strong><em>Dado que e</em></strong>l  usuario registrado quiere visualizar los likes <strong>c<em>uando l</em></strong>os usuarios interactúan con el post <strong><em>entonces </em></strong>se desarrollará una función de conteo de likes
   </td>
  </tr>
  <tr>
   <td>DEFINICIÓN DE TERMINADO:
   </td>
   <td>El usuario es capaz de visualizar el conteo de likes de su post.
   </td>
  </tr>
</table>



<table>
  <tr>
   <td colspan="2" >HISTORIA DE USUARIO
   </td>
  </tr>
  <tr>
   <td>COD:
   </td>
   <td>008
   </td>
  </tr>
  <tr>
   <td>NOMBRE:
   </td>
   <td>Eliminar publicación
   </td>
  </tr>
  <tr>
   <td>DESCRIPCIÓN: 
   </td>
   <td><strong>Como </strong>usuario autor <strong>quiero</strong> poder eliminar y confirmar la eliminación de un post <strong>para</strong> quitar información que haya publicado en el timeline
   </td>
  </tr>
  <tr>
   <td>ACEPTACIÓN:
   </td>
   <td><strong><em>Dado que e</em></strong>l  usuario quiere eliminar su post <strong><em>cuando </em></strong>quiera retirar la información ingresada <strong><em>entonces </em></strong>se desarrollará un apartado de “eliminar post” en la parte superior del post (tres puntos) y un modal para confirmar la eliminación.
   </td>
  </tr>
  <tr>
   <td>DEFINICIÓN DE TERMINADO:
   </td>
   <td>El usuario es capaz de eliminar su post, con una confirmación previa
   </td>
  </tr>
</table>



<table>
  <tr>
   <td colspan="2" >HISTORIA DE USUARIO
   </td>
  </tr>
  <tr>
   <td>COD:
   </td>
   <td>009
   </td>
  </tr>
  <tr>
   <td>NOMBRE:
   </td>
   <td>Editar publicación
   </td>
  </tr>
  <tr>
   <td>DESCRIPCIÓN: 
   </td>
   <td><strong>Como </strong>usuario autor <strong>quiero</strong> poder editar y guardar el post editado para corregir o incorporar nueva información 
   </td>
  </tr>
  <tr>
   <td>ACEPTACIÓN:
   </td>
   <td><strong><em>Dado que </em></strong>el  usuario quiere editar su post <strong>c<em>uando </em></strong>quiera corregir alguna información <strong>e<em>ntonces s</em></strong>e desarrollará un apartado de “editar post” en la parte superior del post (tres puntos).
   </td>
  </tr>
  <tr>
   <td>DEFINICIÓN DE TERMINADO:
   </td>
   <td>El usuario es capaz de editar de manera eficiente su post publicado.
   </td>
  </tr>
</table>



<table>
  <tr>
   <td colspan="2" >HISTORIA DE USUARIO
   </td>
  </tr>
  <tr>
   <td>COD:
   </td>
   <td>010
   </td>
  </tr>
  <tr>
   <td>NOMBRE:
   </td>
   <td>Visualizar publicación
   </td>
  </tr>
  <tr>
   <td>DESCRIPCIÓN: 
   </td>
   <td><strong>Como </strong>usuario autor quiero: poder visualizar mi post  despues de publicarlo <strong>para</strong> corregir o incorporar nueva información
   </td>
  </tr>
  <tr>
   <td>ACEPTACIÓN:
   </td>
   <td><strong><em>Dado que </em></strong>el  usuario quiere poder visualizar su post <strong>c<em>uando </em></strong>termine de publicarlo <strong>e<em>ntonces s</em></strong>e recargará la página después de enviar el post para poder visualizarlo y poder editarlo.
   </td>
  </tr>
  <tr>
   <td>DEFINICIÓN DE TERMINADO:
   </td>
   <td>El usuario es capaz de visualizar de manera eficiente su post publicado.
   </td>
  </tr>
</table>



<table>
  <tr>
   <td colspan="2" >HISTORIA DE USUARIO
   </td>
  </tr>
  <tr>
   <td>COD:
   </td>
   <td>011
   </td>
  </tr>
  <tr>
   <td>NOMBRE:
   </td>
   <td>Editar publicación
   </td>
  </tr>
  <tr>
   <td>DESCRIPCIÓN: 
   </td>
   <td><strong>Como </strong>usuario que interactúa con el contenido del website interesado en alguna publicación <strong>quiero </strong>poder dar likes y quitarlos <strong>cuando </strong>lo desee
   </td>
  </tr>
  <tr>
   <td>ACEPTACIÓN:
   </td>
   <td><strong><em>Dado que e</em></strong>l usuario quiere interactuar dando likes <strong>c<em>uando </em></strong>esté interesado o le guste alguna publicación <strong>e<em>ntonces s</em></strong>e desarrollará un botón  de corazón en la publicación para que interactúe con el post, mediante un solo click
   </td>
  </tr>
  <tr>
   <td>DEFINICIÓN DE TERMINADO:
   </td>
   <td>El usuario es capaz de dar y quitar un like en cada publicación.
   </td>
  </tr>
</table>


### 5.4 Diseño de la Interfaz de Usuario (prototipo de baja fidelidad)

Debes definir cuál será el flujo que seguirá el usuario dentro de tu aplicación
y, con eso, diseña la Interfaz de Usuario (UI por sus siglas en inglés) que
siga este flujo. 

## 7. Entrega

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages u otro servicio de hosting que
puedas haber encontrado en el camino.

***

## 8. Pistas, tips y Lecturas complementarias
  
### Otras:

* [Pildora SPA](https://www.loom.com/share/fa63a8ad0e9a43428222c15b6f6613d3)
* [Repositorio de pildora de SPA](https://github.com/betsyvies/bootcamp-spa)
* [Pildora de mock Firebase](https://www.youtube.com/watch?v=06myVn41OTY&t=1s)
* [Repositorio de pildora de mock Firebase](https://github.com/Danielalab/2018-2-Testing)
* [Pildora MVC](https://github.com/merunga/todomvc-vanillajs)
* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)
* [Diseño web, responsive design y la importancia del mobile first - Media Click](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
* [Mobile First: el enfoque actual del diseño web móvil - 1and1](https://www.1and1.es/digitalguide/paginas-web/diseno-web/mobile-first-la-nueva-tendencia-del-diseno-web/)
* [Mobile First - desarrolloweb.com](https://desarrolloweb.com/articulos/mobile-first-responsive.html)
* [Mobile First - ZURB](https://zurb.com/word/mobile-first)
* [Mobile First Is NOT Mobile Only - Nielsen Norman Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)
