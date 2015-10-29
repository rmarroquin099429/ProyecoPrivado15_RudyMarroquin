define({ "api": [

// *************     -------------------------  *******************
// *************     -------------------------  *******************
// *************               GET              *******************
// *************     -------------------------  *******************
// *************     -------------------------  *******************

  // *************     SELECCIONAR USUARIO  *******************
{
    "type": "GET",
    "url": "/usuarios/:idusuario",
    "title": "      Obtiene la información de un usuario",
    "version": "0.0.1",
    "name": "GetUsuario",
    "group": "USUARIO",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "idusuario",
            "description": "<p>identificador del usuario a seleccionar</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "200 OK",
            "description": "<p>Seleccion Exitosa</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n        idusuario : 2,\n        tipo_usuario : 2,\n        nombre : \"Luis\",\n        correo : \"l@gmail.com,\"\n        nic : \"Luis\",\n        password : \"1234\",\n        telefono : \"6666666\",\n     }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "userNotFound",
            "description": "<p>El Id del usuario no fue encontrado.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"userNotFound\"\n}",
          "type": "json"
        }
      ]
   },
    "filename": "classes/Users.php",
    "groupTitle": "USUARIOS"
  },

  // *************     SELECCIONAR TODOS LOS USUARIOS  *******************

  {
    "type": "GET",
    "url": "/usuarios",
    "title": "      Obtiene la información de todos los usuarios Existentes",
    "version": "0.0.1",
    "name": "GetUsuarios",
    "group": "USUARIO",
    "parameter": {
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "200 OK",
            "description": "<p>Seleccion Exitosa</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n        idusuario : 2,\n        tipo_usuario : 2,\n        nombre : \"Luis\",\n        correo : \"l@gmail.com,\"\n        nic : \"Luis\",\n        password : \"1234\",\n        telefono : \"6666666\",\n     }\n],\n [\n     {\n        idusuario : 2,\n        tipo_usuario : 2,\n        nombre : \"Luis\",\n        correo : \"l@gmail.com,\"\n        nic : \"Luis\",\n        password : \"1234\",\n        telefono : \"6666666\",\n     }\n],\n [\n     {\n        idusuario : 2,\n        tipo_usuario : 2,\n        nombre : \"Luis\",\n        correo : \"l@gmail.com,\"\n        nic : \"Luis\",\n        password : \"1234\",\n        telefono : \"6666666\",\n     }\n],\n [\n     {\n        idusuario : 2,\n        tipo_usuario : 2,\n        nombre : \"Luis\",\n        correo : \"l@gmail.com,\"\n        nic : \"Luis\",\n        password : \"1234\",\n        telefono : \"6666666\",\n     }\n],\n [\n     {\n        idusuario : 2,\n        tipo_usuario : 2,\n        nombre : \"Luis\",\n        correo : \"l@gmail.com,\"\n        nic : \"Luis\",\n        password : \"1234\",\n        telefono : \"6666666\",\n     }\n],\n [\n     {\n        idusuario : 2,\n        tipo_usuario : 2,\n        nombre : \"Luis\",\n        correo : \"l@gmail.com,\"\n        nic : \"Luis\",\n        password : \"1234\",\n        telefono : \"6666666\",\n     }\n]",

          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "userNotFound",
            "description": "<p>Error al seleccionar los usuarios.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
   },
    "filename": "classes/Users.php",
    "groupTitle": "USUARIOS"
  },

  // *************     SELECCIONAR UN COMENTARIO  *******************
{
    "type": "GET",
    "url": "/comentario/:idcomentario",
    "title": "      Obtiene la información de un comentario especifico",
    "version": "0.0.1",
    "name": "GetComentario",
    "group": "COMENTARIO",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "idusuario",
            "description": "<p>identificador del comentario a seleccionar</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "200 OK",
            "description": "<p>Seleccion Exitosa</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n        idcomentario : 2,\n        publicacion_idpublicacion : 2,\n        fecha_public : \"2015-10-31T06:00:00.000Z\",\n        usuario_idusuario : 9,\n        comentario : \"gracias por la informacion\",\n        estado : 0,\n     }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>Error en la seleccion del comentario.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
   },
    "filename": "classes/Users.php",
    "groupTitle": "COMENTARIOS"
  },

  // *************     SELECCIONAR TODOS LOS cOMENTARIO  *******************

  {
    "type": "GET",
    "url": "/comentario",
    "title": "      Obtiene la información de todos los Comentarios Existentes",
    "version": "0.0.1",
    "name": "GetComentarios",
    "group": "COMENTARIO",
    "parameter": {
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "200 OK",
            "description": "<p>Seleccion Exitosa</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n        idcomentario : 2,\n        publicacion_idpublicacion : 2,\n        fecha_public : \"2015-10-31T06:00:00.000Z\",\n        usuario_idusuario : 9,\n        comentario : \"gracias por la informacion\",\n        estado : 0,\n     }\n],\n [\n     {\n        idcomentario : 3,\n        publicacion_idpublicacion : 3,\n        fecha_public : \"2015-11-30T07:00:00.000Z\",\n        usuario_idusuario : 7,\n        comentario : \"Gracias\",\n        estado : 0,\n     }\n],\n [\n     {\n        idcomentario : 4,\n        publicacion_idpublicacion : 4,\n        fecha_public : \"2015-09-27T08:00:00.000Z\",\n        usuario_idusuario : 3,\n        comentario : \"falta claridad en el tema\",\n        estado : 0,\n     }\n]",

          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>Error al seleccionar los Comentarios.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
   },
    "filename": "classes/Users.php",
    "groupTitle": "COMENTARIOS"
  },

 // *************     SELECCIONAR UNA PUBLICACION  *******************
{
    "type": "GET",
    "url": "/publicacion/:idpublicacion",
    "title": "      Obtiene la información de una Publicación especifica",
    "version": "0.0.1",
    "name": "GetPublicaion",
    "group": "PUBLICACIÓN",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "idusuario",
            "description": "<p>identificador de la Publicación a seleccionar</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "200 OK",
            "description": "<p>Seleccion Exitosa</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n        idpublicacion : 1,\n        usuario_idusuario : 1,\n        categoria_idcategoria : 1,\n        titulo : \"primera Practica\",\n        descripcion : \"veremos la teoria de esta calse\",\n        fecha_public : \"2015-10-27\",\n        Estado : 0\n      }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>Error en la seleccion de la Publicación.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
   },
    "filename": "classes/Users.php",
    "groupTitle": "PUBLICACIONES"
  },

  // *************     SELECCIONAR TODAS LAS PUBLICACIONES  *******************

  {
    "type": "GET",
    "url": "/publicacion",
    "title": "      Obtiene la información de todas las Publicaciones Existentes",
    "version": "0.0.1",
    "name": "GetPublicaiones",
    "group": "PUBLICACIÓN",
    "parameter": {
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "200 OK",
            "description": "<p>Seleccion Exitosa</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n        idpublicacion : 1,\n        usuario_idusuario : 1,\n        categoria_idcategoria : 1,\n        titulo : \"primera Practica\",\n        descripcion : \"veremos la teoria de esta calse\",\n        fecha_public : \"2015-10-27\",\n        Estado : 0\n      }\n],\n [\n     {\n        idpublicacion : 2,\n        usuario_idusuario : 5,\n        categoria_idcategoria : 2,\n        titulo : \"Practicando\",\n        descripcion : \"veremos la teoria\",\n        fecha_public : \"2015-11-23\",\n        Estado : 0\n      }\n],\n [\n     {\n        idpublicacion : 2,\n        usuario_idusuario : 7,\n        categoria_idcategoria : 5,\n        titulo : \"inicinado las practicas\",\n        descripcion : \"programar... programar...\",\n        fecha_public : \"2015-08-02\",\n        Estado : 0\n      }\n]",

          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>Error al seleccionar las Publicaciones.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
   },
    "filename": "classes/Users.php",
    "groupTitle": "PUBLICACIONES"
  },

   // *************     SELECCIONAR UNA CATEGORIA  *******************
{
    "type": "GET",
    "url": "/categoria/:idcategoria",
    "title": "      Obtiene la información de una Publicación especifica",
    "version": "0.0.1",
    "name": "GetPCategoria",
    "group": "CATEGORIAS",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "idcategoria",
            "description": "<p>identificador de la Categoria a seleccionar</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "200 OK",
            "description": "<p>Seleccion Exitosa</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n        idcategoria : 1,\n        nombre : \"Matematica\",\n        descripcion : \"curso instructivo\",\n        fecha : \"2015-10-02T06:00:00.000Z\",\n        usuario_idusuario : 1,\n     }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>Error en la seleccion de la Categoria.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
   },
    "filename": "classes/Users.php",
    "groupTitle": "CATEGORIAS"
  },

  // *************     SELECCIONAR TODAS LAS CATEGORIAS  *******************

  {
    "type": "GET",
    "url": "/categoria",
    "title": "      Obtiene la información de todas las Categorias Existentes",
    "version": "0.0.1",
    "name": "GetPublicaiones",
    "group": "CATEGORIAS",
    "parameter": {
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "200 OK",
            "description": "<p>Seleccion Exitosa</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n        idcategoria : 1,\n        nombre : \"Matematica\",\n        descripcion : \"curso instructivo\",\n        fecha : \"2015-10-02T06:00:00.000Z\",\n        usuario_idusuario : 1,\n     }\n],\n [\n     {\n        idcategoria : 2,\n        nombre : \"Fisica\",\n        descripcion : \"curso instructivo\",\n        fecha : \"2015-10-21T06:00:00.000Z\",\n        usuario_idusuario : 3,\n     }\n],\n [\n     {\n        idcategoria : 4,\n        nombre : \"Calculo\",\n        descripcion : \"curso instructivo\",\n        fecha : \"2015-10-25T06:00:00.000Z\",\n        usuario_idusuario : 5,\n     }\n]",

          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>Error al seleccionar las Categorias.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
   },
    "filename": "classes/Users.php",
    "groupTitle": "CATEGORIAS"
  },

   // *************     SELECCIONAR UN TIPO DE USUARIO  *******************
{
    "type": "GET",
    "url": "/tipo_usuario/:idtipo",
    "title": "      Obtiene la información de un tipo de usuario especifico",
    "version": "0.0.1",
    "name": "GetTipo",
    "group": "TIPOS DE USUARIO",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "idtipo",
            "description": "<p>identificador del tipo de usuario a seleccionar</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "200 OK",
            "description": "<p>Seleccion Exitosa</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n        idtipo_usuario : 1,\n        nombre : \"Administrador\"\n     }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>Error en la seleccion del tipo de usuario.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
   },
    "filename": "classes/Users.php",
    "groupTitle": "TIPOS DE USUARIOS"
  },


// *************     SELECCIONAR TODOS LOS TIPOS DE USUARIO  *******************

{
    "type": "GET",
    "url": "/tipo_usuario",
    "title": "      Obtiene la información de todos los tipos de usuarios",
    "version": "0.0.1",
    "name": "GetTipo1",
    "group": "TIPOS DE USUARIO",

    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "200 OK",
            "description": "<p>Seleccion Exitosa</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n     {\n        idtipo_usuario : 1,\n        nombre : \"Administrador\"\n     }\n],\n [\n     {\n        idtipo_usuario : 2,\n        nombre : \"Usuario\"\n     }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>Error en la seleccion de los tipos de usuarios.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
   },
    "filename": "classes/Users.php",
    "groupTitle": "TIPOS DE USUARIOS"
  },
// *************     -------------------------  *******************
// *************     -------------------------  *******************
// *************              DELETE            *******************
// *************     -------------------------  *******************
// *************     -------------------------  *******************

// ********************     ELIMINAR COMENTARIO  ***********************

{
    "type": "DELETE",
    "url": "/comentario_eliminar/:idcomentario",
    "title": "      Eliminar un Comentario",
    "version": "0.0.1",
    "name": "DeleteComentario",
    "group": "COMENTARIO",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "idcomentario",
            "description": "<p>identificador del comentario a eliminar.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>código HTTP</p> ",
            "optional": false,
            "field": "200 OK",
            "description": "<p>La solicitud se a realizado con exito</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Json</p> ",
            "optional": false,
            "field": "Eliminado con exito",
            "description": "<p>Dependiendo del resultado de la solicitud.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"Eliminado con exito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>eliminar comentario no existe</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  code: \"ResourceNotFound\",\n  message: \"/comentario_eliminar does not exist\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "classes/Users.php",
    "groupTitle": "COMENTARIOS"
  },

// ********************     ELIMINAR USUARIO  ***********************
  {
    "type": "DELETE",
    "url": "/eliminar_usuario/:idusuario",
    "title": "     Elimina un usuario",
    "version": "0.0.1",
    "name": "DeleteUser",
    "group": "USUARIO",
    "parameter": {
      "fields": {
        "Parametros": [
          {
            "group": "Parametros",
            "type": "<p>Numero</p> ",
            "optional": false,
            "field": "idusuario",
            "description": "<p>identificador del Usuario a eliminar.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>código HTTP</p> ",
            "optional": false,
            "field": "200 OK",
            "description": "<p>La solicitud se a realizado con exito</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Json</p> ",
            "optional": false,
            "field": "Eliminado con exito",
            "description": "<p>Dependiendo del resultado de la solicitud.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"Eliminado con exito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>eliminar Usuario no existe</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  code: \"ResourceNotFound\",\n  message: \"/eliminar_usuario does not exist\"\n}",
          "type": "json"
        }
      ]
    },
    
    "filename": "classes/Users.php",
    "groupTitle": "USUARIOS"
  },


// ********************     ELIMINAR PUBLICACIÓN  ***********************

{
    "type": "DELETE",
    "url": "/publicacion_eliminar/:idpublicacion",
    "title": "      Eliminar una Publicación",
    "version": "0.0.1",
    "name": "DeletePublicacion",
    "group": "PUBLICACIÓN",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "idpublicacion",
            "description": "<p>identificador de la Publicación a eliminar.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>código HTTP</p> ",
            "optional": false,
            "field": "200 OK",
            "description": "<p>La solicitud se a realizado con exito</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Json</p> ",
            "optional": false,
            "field": "Eliminado con exito",
            "description": "<p>Dependiendo del resultado de la solicitud.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"Eliminado con exito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>eliminar Publicación no existe</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  code: \"ResourceNotFound\",\n  message: \"/publicacion_eliminar does not exist\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "classes/Users.php",
    "groupTitle": "PUBLICACIONES"
  },

// ********************     ELIMINAR  CATEGORÍA  ***********************

{
    "type": "DELETE",
    "url": "/categoria_eliminar/:idcategoria",
    "title": "      Eliminar una Categoría",
    "version": "0.0.1",
    "name": "DeleteCategoria",
    "group": "CATEGORIAS",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "idcategoria",
            "description": "<p>identificador de la Categoría a eliminar.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>código HTTP</p> ",
            "optional": false,
            "field": "200 OK",
            "description": "<p>La solicitud se a realizado con exito</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Json</p> ",
            "optional": false,
            "field": "Eliminado con exito",
            "description": "<p>Dependiendo del resultado de la solicitud.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"Eliminado con exito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>eliminar Categoría no existe</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  code: \"ResourceNotFound\",\n  message: \"/categoria_eliminar does not exist\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "classes/Users.php",
    "groupTitle": "CATEGORIAS"
  },

// ********************     ELIMINAR TIPO DE USUARIO  ***********************

{
    "type": "DELETE",
    "url": "/tipo_usuario_eliminar/:idtipo",
    "title": "      Eliminar un Tipo de Usuario",
    "version": "0.0.1",
    "name": "DeleteTipoUsuarioD",
    "group": "TIPOS DE USUARIO",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "idtipo",
            "description": "<p>identificador del tipo de usuario a eliminar.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>código HTTP</p> ",
            "optional": false,
            "field": "200 OK",
            "description": "<p>La solicitud se a realizado con exito</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Json</p> ",
            "optional": false,
            "field": "Eliminado con exito",
            "description": "<p>Dependiendo del resultado de la solicitud.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"Eliminado con exito\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "ResourceNotFound",
            "description": "<p>eliminar Tipo de Usuario no existe</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  code: \"ResourceNotFound\",\n  message: \"/tipo_usuario_eliminar does not exist\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "classes/Users.php",
    "groupTitle": "TIPOS DE USUARIOS"
  },





// *************     -------------------------  *******************
// *************     -------------------------  *******************
// *************               POST             *******************
// *************     -------------------------  *******************
// *************     -------------------------  *******************

// *************     INSERTAR UN USUARIO  *******************

{
    "type": "post",
    "url": "/nuevo_usuario",
    "title": "Crea un usuario",
    "version": "0.0.1",
    "name": "PostUsuarioN",
    "group": "USUARIO",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "200 OK",
            "description": "<p>Código 0 conforme todo ha ido bien.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "userId",
            "description": "<p>Id del Nuevo usuario registrado.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"results\": userId\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "UserBadResponse",
            "description": "<p>El usuario no ha podido crearse</p> "
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "BaD-Response",
            "description": "<p>: HTTP/1.1 400 Bad Response { &quot;error&quot;: &quot;BadResponse&quot; }</p> "
          }
        ]
      }
    },
    "filename": "classes/Users.php",
    "groupTitle": "USUARIOS"
  },

// *************     INSERTAR UN COMENTARIO  *******************

{
    "type": "post",
    "url": "/comentario_nuevo",
    "title": "Crea un Comentario",
    "version": "0.0.1",
    "name": "PostComentarioN",
    "group": "COMENTARIO",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "200 OK",
            "description": "<p>Código 0 conforme todo ha ido bien.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "Idcomentario",
            "description": "<p>Id del Nuevo comenrario que a sido registrado.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"results\": idcomentario\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "ComentarioBadResponse",
            "description": "<p>El Comentario no ha podido crearse</p> "
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "BaD-Response",
            "description": "<p>: HTTP/1.1 400 Bad Response { &quot;error&quot;: &quot;BadResponse&quot; }</p> "
          }
        ]
      }
    },
    "filename": "classes/Users.php",
    "groupTitle": "COMENTARIOS"
  },

// *************     INSERTAR UNA PUBLICACION  *******************

{
    "type": "post",
    "url": "/publicacion_nuevo",
    "title": "Crea una nueva Publicación",
    "version": "0.0.1",
    "name": "PostPublicaciónN",
    "group": "PUBLICACIÓN",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "200 OK",
            "description": "<p>Código 0 conforme todo ha ido bien.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "idpublicacion",
            "description": "<p>Id de la nueva Publicación que ha sido registrada.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"results\": idpublicacion\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "PublicacionBadResponse",
            "description": "<p>La Publicación no ha podido crearse</p> "
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "BaD-Response",
            "description": "<p>: HTTP/1.1 400 Bad Response { &quot;error&quot;: &quot;BadResponse&quot; }</p> "
          }
        ]
      }
    },
    "filename": "classes/Users.php",
    "groupTitle": "PUBLICACIONES"
  },

// *************     INSERTAR UNA CATEGORIA  *******************

{
    "type": "post",
    "url": "/categoria_nuevo",
    "title": "Crea un Nueva Categoria",
    "version": "0.0.1",
    "name": "PostCategoriaN",
    "group": "CATEGORIAS",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "200 OK",
            "description": "<p>Código 0 conforme todo ha ido bien.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "idcategoria",
            "description": "<p>Id de la Nueva Categoria que ha sido registrado.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"results\": idcategoria\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "CategoriaBadResponse",
            "description": "<p>La Categoria no ha podido crearse</p> "
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "BaD-Response",
            "description": "<p>: HTTP/1.1 400 Bad Response { &quot;error&quot;: &quot;BadResponse&quot; }</p> "
          }
        ]
      }
    },
    "filename": "classes/Users.php",
    "groupTitle": "CATEGORIAS"
  },

// *************     INSERTAR UN TIPO DE USUARIO  *******************

{
    "type": "post",
    "url": "/tipo_usuario_nuevo",
    "title": "Crea un Nuevo tipo de usuario ",
    "version": "0.0.1",
    "name": "PostTipoUsuarioN",
    "group": "TIPOS DE USUARIO",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "200 OK",
            "description": "<p>Código 0 conforme todo ha ido bien.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "idtipo",
            "description": "<p>Id del Nuevo Tipo de usuario ha registrarse.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"results\": idcategoria\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "CategoriaBadResponse",
            "description": "<p>La categoria no ha podido crearse</p> "
          },
          {
            "group": "Error 400",
            "optional": false,
            "field": "BaD-Response",
            "description": "<p>: HTTP/1.1 400 Bad Response { &quot;error&quot;: &quot;BadResponse&quot; }</p> "
          }
        ]
      }
    },
    "filename": "classes/Users.php",
    "groupTitle": "TIPOS DE USUARIOS"
  },

// *************     -------------------------  *******************
// *************     -------------------------  *******************
// *************               PUT              *******************
// *************     -------------------------  *******************
// *************     -------------------------  *******************


// *************     ACTUALIZAR UN USUARIO  *******************

{
    "type": "put",
    "url": "/actulizar_usuario/:idusuario",
    "title": "Actualiza la información de un usuario",
    "version": "0.0.1",
    "name": "PutUsuarioA",
    "group": "USUARIO",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "idusuario",
            "description": "<p>Id del usuairio que se desea Actualizar.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "200 OK",
            "description": "<p>Código 200 conforme todo ha ido bien.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": Transaccion Exitosa\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>El id del usuario no se encontro.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "classes/Users.php",
    "groupTitle": "USUARIOS"
  },

// *************     ACTUALIZAR UN COMENTARIO  *******************

{
    "type": "put",
    "url": "/comentario_actualizar/:idcomentario",
    "title": "Actualiza la información de un comentario",
    "version": "0.0.1",
    "name": "PutComentarioA",
    "group": "COMENTARIO",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "idcomentario",
            "description": "<p>Id del comentario que se desea Actualizar.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "200 OK",
            "description": "<p>Código 200 conforme todo ha ido bien.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": Transaccion Exitosa\n}",          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "comentarioNotFound",
            "description": "<p>El id del comentario no se encontro.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "classes/Users.php",
    "groupTitle": "COMENTARIOS"
  },


// *************     ACTUALIZAR UN PUBLICACION  *******************

{
    "type": "put",
    "url": "/publicacion_actualizar/:idpublicacion",
    "title": "Actualiza la información de una Publicación",
    "version": "0.0.1",
    "name": "PutPublicaionA",
    "group": "PUBLICACIÓN",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "idpublicacion",
            "description": "<p>Id de la Publicación que se desea Actualizar.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "200 OK",
            "description": "<p>Código 200 conforme todo ha ido bien.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
           "content": "HTTP/1.1 200 OK\n{\n  \"message\": Transaccion Exitosa\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>El id de la Publicación no se encontro.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"puclicacionNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "classes/Users.php",
    "groupTitle": "PUBLICACIONES"
  },

  // *************     ACTUALIZAR UN CATEGORIA  *******************

{
    "type": "put",
    "url": "/categoria_actualizar/:idcategoria",
    "title": "Actualiza la información de un categoria",
    "version": "0.0.1",
    "name": "PutCategoriaA",
    "group": "CATEGORIAS",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "idcategoria",
            "description": "<p>Es el id de la categoria que se desea Actualizar.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "200 OK",
            "description": "<p>Código 200 conforme todo ha ido bien.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
           "content": "HTTP/1.1 200 OK\n{\n  \"message\": Transaccion Exitosa\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "categoriaNotFound",
            "description": "<p>El id de la categoria no se encontro.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"categoriaNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "classes/Users.php",
    "groupTitle": "CATEGORIAS"
  },

// *************     ACTUALIZAR UN TIPO DE USUARIO  *******************

{
    "type": "put",
    "url": "/tipo_usuario_actualizar/:idtipo",
    "title": "Actualiza la información de un tipo de usuario",
    "version": "0.0.1",
    "name": "PutTipoUsuarioA",
    "group": "TIPOS DE USUARIO",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "idtipo",
            "description": "<p>es el id del tipo de usuario que se desea Actualizar</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "200 OK",
            "description": "<p>Código 200 conforme todo ha ido bien.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
           "content": "HTTP/1.1 200 OK\n{\n  \"message\": Transaccion Exitosa\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "tipoUNotFound",
            "description": "<p>El id del tipo de usuario no se encontro.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"tipoUNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "classes/Users.php",
    "groupTitle": "TIPOS DE USUARIOS"
  }


] });