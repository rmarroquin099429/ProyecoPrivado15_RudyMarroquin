var restify = require('restify');
var mysql = require('mysql');

/*         coneccion a base de datos           */

connection = mysql.createConnection({
               host : 'localhost',
               user : 'blog1',
               password : '',
               database: 'blog'
         });


/*         Creamos el servicio API REST          */

var ip_addr = '127.0.0.1';
var port    =  '8080';

var server = restify.createServer({
        name : "API RESTful"
    });
 
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());

/*      mostrar datos en consola :puerto        */

server.listen(port ,ip_addr, 
                            function()
                                {
                                    console.log('%s Escuchando en %s ', server.name , server.url);
                                }
             );

/*      creando las URN        */

/*          USUARIOS           */

var PATH = '/usuarios';
var PATH1 = '/nuevo_usuario';
var PATH2 = '/eliminar_usuario';
var PATH3 = '/actulizar_usuario';

/*      COMENTARIOS        */

var PATH4 = '/comentario';
var PATH5 = '/comentario_nuevo';
var PATH6 = '/comentario_eliminnar';
var PATH7 = '/comentario_actualizar';

/*      PUBLICACIONES        */

var PATH8 = '/publicacion';
var PATH9 = '/publicacion_nuevo';
var PATH10 = '/publicacion_eliminaro';
var PATH11 = '/publicacion_actualizar';

/*      CATEGORIAS        */

var PATH12 = '/categoria';
var PATH13 = '/categoria_nuevo';
var PATH14 = '/categoria_eliminar';
var PATH15 = '/categoria_actualizar';

/*      TIPO DE USUARIOS        */

var PATH16 = '/tipo_usuario';
var PATH17 = '/tipo_usuario_nuevo';
var PATH18 = '/tipo_usuario_eliminar';
var PATH19 = '/tipo_usuario_actualizar';

/*      FILTRO        */

var PATH20 = '/filtro/comentario';
var PATH21 = '/filtro/publicacion';

var PATH22 = '/filtro/comentario/usuario';
var PATH23 = '/filtro/publicacion/usuario';
var PATH24 = '/filtro/categoria/usuario';
var PATH25 = '/filtro/usuario/tipo_usuario';


/*      llamadas a los servicos GET        */

server.get({path : PATH , version : '0.0.1'} , TodosUsuarios);
server.get({path : PATH +'/:idusuario' , version : '0.0.1'} , Usuario);

server.get({path : PATH4 , version : '0.0.1'} , TodoComentarios);
server.get({path : PATH4 +'/:idcomentario' , version : '0.0.1'} , Comentario);

server.get({path : PATH8 , version : '0.0.1'} , TodoPublicacion);
server.get({path : PATH8 +'/:idpublicacion' , version : '0.0.1'} , Publicacion);

server.get({path : PATH12 , version : '0.0.1'} , TodoCategoria);
server.get({path : PATH12 +'/:idcategoria' , version : '0.0.1'} , Categoria);

server.get({path : PATH16 , version : '0.0.1'} , TodoTipoUsuario);
server.get({path : PATH16 +'/:idtipo_usuario' , version : '0.0.1'} , TipoUsuario);

server.get({path : PATH20 +'/:idpublicacion', version : '0.0.1'} , filtroComentario);
server.get({path : PATH21 +'/:idcomentario' , version : '0.0.1'} , filtroPublicacion);
server.get({path : PATH22 +'/:idusuario', version : '0.0.1'} , filtroComentarioUsuario);
server.get({path : PATH23 +'/:idusuario' , version : '0.0.1'} , filtroPublicacionUsuario);
server.get({path : PATH24 +'/:idusuario', version : '0.0.1'} , filtroCategoriaUsuario);
server.get({path : PATH25 +'/:idtipo' , version : '0.0.1'} , filtroTipoUsuario);



/*      llamadas a los servicos DELETE        */

server.del({path : PATH2 +'/:idusuario', version: '0.0.1'} , EliminarUsuario);

server.del({path : PATH6 +'/:idcomentario', version: '0.0.1'} , EliminarComentario);

server.del({path : PATH10 +'/:idpublicacion', version: '0.0.1'} , EliminarPublicacion);

server.del({path : PATH14 +'/:idcategoria', version: '0.0.1'} , EliminarCategoria);

server.del({path : PATH18 +'/:idtipo_usuario', version: '0.0.1'} , EliminarTipoUsuario);


/*      llamadas a los servicos POST        */

server.post({path : PATH1, version: '0.0.1'} , NuevoUsuario);

server.post({path : PATH5, version: '0.0.1'} , NuevoComentario);

server.post({path : PATH9, version: '0.0.1'} , NuevaPublicacion);

server.post({path : PATH13, version: '0.0.1'} , NuevaCategoria);

server.post({path : PATH17, version: '0.0.1'} , NuevoTipoUsuario);


/*      llamadas a los servicos PUT        */

server.put({path : PATH3, version: '0.0.1'} , ActualizarUsuario);

server.put({path : PATH7, version: '0.0.1'} , ActualizarComentario);

server.put({path : PATH11, version: '0.0.1'} , ActualizarPublicacion);

server.put({path : PATH15, version: '0.0.1'} , ActualizarCategoria);

server.put({path : PATH19, version: '0.0.1'} , ActualizarTipoUsuario);



/* *******************************************************************************  */
/* ********************              FUNCIONES          **************************  */

/*  ******************************** ( GET ) ************************************   */

/*  ++++++++++                          0                            ++++++++++++   */

function TodosUsuarios(req, res, next)
    {
      connection.query('SELECT * FROM `usuario`', 
                       function (error, results)
                            {
                                  if(error) throw error;
                                  console.log(results);
                                  res.send(200, results);
                                  return next();
                            }
                      );
    }

function Usuario(req, res, next)
    {
        connection.query('SELECT * FROM `usuario` WHERE `idusuario`='
                         +req.params.idusuario, 
                         function (error, results)
                            {
                               if(error) throw error;
                               console.log(results);
                               res.send(200, results);
                               return next();
                            }
                        );
    }


/* +++++++++++                          1                            ++++++++++++ */

function TodoComentarios(req, res, next)
    {
      connection.query('SELECT * FROM `comentario`', 
                       function (error, results)
                            {
                                  if(error) throw error;
                                  console.log(results);
                                  res.send(200, results);
                                  return next();
                            }
                      );
    }

function Comentario(req, res, next)
    {
        connection.query('SELECT * FROM `comentario` WHERE `idcomentario`='
                         +req.params.idcomentario, 
                         function (error, results)
                            {
                               if(error) throw error;
                               console.log(results);
                               res.send(200, results);
                               return next();
                            }
                        );
    }

/* +++++++++++                          2                            ++++++++++++ */

function TodoPublicacion(req, res, next)
    {
      connection.query('SELECT * FROM `publicacion`', 
                       function (error, results)
                            {
                                  if(error) throw error;
                                  console.log(results);
                                  res.send(200, results);
                                  return next();
                            }
                      );
    }

function Publicacion(req, res, next)
    {
        connection.query('SELECT * FROM `publicacion` WHERE `idpublicacion`='
                         +req.params.idpublicacion, 
                         function (error, results)
                            {
                               if(error) throw error;
                               console.log(results);
                               res.send(200, results);
                               return next();
                            }
                        );
    }

/* +++++++++++                          3                            ++++++++++++ */

function TodoCategoria(req, res, next)
    {
      connection.query('SELECT * FROM `categoria`', 
                       function (error, results)
                            {
                                  if(error) throw error;
                                  console.log(results);
                                  res.send(200, results);
                                  return next();
                            }
                      );
    }

function Categoria(req, res, next)
    {
        connection.query('SELECT * FROM `categoria` WHERE `idcategoria`='
                         +req.params.idcategoria, 
                         function (error, results)
                            {
                               if(error) throw error;
                               console.log(results);
                               res.send(200, results);
                               return next();
                            }
                        );
    }

/* +++++++++++                          4                            ++++++++++++ */

function TodoTipoUsuario(req, res, next)
    {
      connection.query('SELECT * FROM `tipo_usuario`', 
                       function (error, results)
                            {
                                  if(error) throw error;
                                  console.log(results);
                                  res.send(200, results);
                                  return next();
                            }
                      );
    }

function TipoUsuario(req, res, next)
    {
        connection.query('SELECT * FROM `tipo_usuario` WHERE `idtipo_usuario`='
                         +req.params.idtipo_usuario, 
                         function (error, results)
                            {
                               if(error) throw error;
                               console.log(results);
                               res.send(200, results);
                               return next();
                            }
                        );
    }

/* +++++++++++                          5                            ++++++++++++ */

function filtroComentario(req, res, next)
    {
      connection.query('SELECT * FROM `comentario` WHERE `idcomentario`='
                         +req.params.idpublicacion, 
                         function (error, results)
                            {
                               if(error) throw error;
                               console.log(results);
                               res.send(200, results);
                               return next();
                            }
                        );
    }
function filtroPublicacion(req, res, next)
    {
      connection.query('SELECT idpublicacion, titulo FROM `publicacion` WHERE idpublicacion = '
                         +req.params.idcomentario, 
                         function (error, results)
                            {
                               if(error) throw error;
                               console.log(results);
                               res.send(200, results);
                               return next();
                            }
                        );
    }

function filtroComentarioUsuario(req, res, next)
    {
      connection.query('SELECT * FROM `comentario` WHERE `usuario_idusuario`='
                         +req.params.idusuario, 
                         function (error, results)
                            {
                               if(error) throw error;
                               console.log(results);
                               res.send(200, results);
                               return next();
                            }
                        );
    } 

function filtroPublicacionUsuario(req, res, next)
    {
      connection.query('SELECT idpublicacion, titulo FROM `publicacion` WHERE usuario_idusuario = '
                         +req.params.idusuario, 
                         function (error, results)
                            {
                               if(error) throw error;
                               console.log(results);
                               res.send(200, results);
                               return next();
                            }
                        );
    }

function filtroCategoriaUsuario(req, res, next)
    {
        connection.query('SELECT * FROM `categoria` WHERE `usuario_idusuario`='
                         +req.params.idusuario, 
                         function (error, results)
                            {
                               if(error) throw error;
                               console.log(results);
                               res.send(200, results);
                               return next();
                            }
                        );
    }

function filtroTipoUsuario(req, res, next)
    {
        connection.query('SELECT * FROM `usuario` WHERE `tipo_usuario`='
                         +req.params.idtipo, 
                         function (error, results)
                            {
                               if(error) throw error;
                               console.log(results);
                               res.send(200, results);
                               return next();
                            }
                        );
    }  
   

/*  ******************************* ( DELETE ) ********************************   */

/* +++++++++++                          0                            ++++++++++++ */

function EliminarUsuario(req , res , next)
    {

        connection.query('DELETE FROM `usuario` WHERE `idusuario` = '
                         +req.params.idusuario, 
                         function (error, success)
                            {
                                if(error) throw error;
                                res.send(200, 'Eliminado con exito');
                            }
                        );
    }

/* +++++++++++                          1                            ++++++++++++ */

function EliminarComentario(req , res , next)
    {

        connection.query('DELETE FROM `comentario` WHERE `idcomentario` = '
                         +req.params.idcomentario, 
                         function (error, success)
                            {
                                if(error) throw error;
                                res.send(200, 'Eliminado con exito');
                            }
                        );
    }
/* +++++++++++                          2                            ++++++++++++ */

function EliminarPublicacion(req , res , next)
    {

        connection.query('DELETE FROM `publicacion` WHERE `idpublicacion` = '
                         +req.params.idpublicacion, 
                         function (error, success)
                            {
                                if(error) throw error;
                                res.send(200, 'Eliminado con exito');
                            }
                        );
    }
/* +++++++++++                          3                            ++++++++++++ */

function EliminarCategoria(req , res , next)
    {

        connection.query('DELETE FROM `categoria` WHERE `idcategoria` = '
                         +req.params.idcategoria, 
                         function (error, success)
                            {
                                if(error) throw error;
                                res.send(200, 'Eliminado con exito');
                            }
                        );
    }
/* +++++++++++                          4                            ++++++++++++ */

function EliminarTipoUsuario(req , res , next)
    {

        connection.query('DELETE FROM `tiptipo_usuario` WHERE `idtipo_usuario` = '
                         +req.params.idtipo_usuario, 
                         function (error, success)
                            {
                                if(error) throw error;
                                res.send(200, 'Eliminado con exito');
                            }
                        );
    }



/*  ******************************* ( POST ) **********************************   */

/* +++++++++++                          0                            ++++++++++++ */

function NuevoUsuario(req , res , next)
    {
        var user = {};
        user.tipo_usuario = req.params.tipo_usuario;
        user.nombre = req.params.nombre;
        user.correo = req.params.correo;
        user.nic = req.params.nic;
        user.password = req.params.password;
        user.telefono = req.params.telefono;

        connection.query('INSERT INTO `usuario`(`tipo_usuario`, `nombre`, `correo`, `nic`, `password`, `telefono`) VALUES(\''
                            +user.tipo_usuario+'\', \''
                            +user.nombre+'\', \''
                            +user.correo+'\', \''
                            +user.nic+'\', \''
                            +user.password+'\', \''
                            +user.telefono+'\', \')'
                            , function (error, success)
                                {
                                    if(error) throw error;
                                     console.log(success);
                                    res.send(200, success.insertId);
                                }
                        );
    }

/* +++++++++++                          1                            ++++++++++++ */

function NuevoComentario(req , res , next)
    {
        var user = {};
        user.publicacion_idpublicacion = req.params.publicacion_idpublicacion;
        user.fecha_public = req.params.fecha_public;
        user.usuario_idusuario = req.params.usuario_idusuario;
        user.comentario = req.params.comentario;
        user.estado = req.params.estado;

        connection.query('INSERT INTO `comentario`(`publicacion_idpublicacion`, `fecha_public`, `usuario_idusuario`, `comentario`, `estado`) VALUES(\''
                            +user.publicacion_idpublicacion+'\', \''
                            +user.fecha_public+'\', \''
                            +user.usuario_idusuario+'\', \''
                            +user.comentario+'\', \''
                            +user.estado+'\', \')'
                            , function (error, success)
                                {
                                    if(error) throw error;
                                     console.log(success);
                                    res.send(200, success.insertId);
                                }
                        );
    }

/* +++++++++++                          2                            ++++++++++++ */

function NuevaPublicacion(req , res , next)
    {
        var user = {};
        user.usuario_idusuario = req.params.usuario_idusuario;
        user.categoria_idcategoria = req.params.categoria_idcategoria;
        user.titulo = req.params.titulo;
        user.descripcion = req.params.descripcion;
        user.fecha_public = req.params.fecha_public;
        user.Estado = req.params.Estado;

        connection.query('INSERT INTO `publicacion`(`usuario_idusuario`, `categoria_idcategoria`, `titulo`, `descripcion`, `fecha_public`, `Estado`) VALUES(\''
                            +user.usuario_idusuario+'\', \''
                            +user.categoria_idcategoria+'\', \''
                            +user.titulo+'\', \''
                            +user.descripcion+'\', \''
                            +user.fecha_public+'\', \''
                            +user.Estado+'\', \')'
                            , function (error, success)
                                {
                                    if(error) throw error;
                                     console.log(success);
                                    res.send(200, success.insertId);
                                }
                        );
    }
/* +++++++++++                          3                            ++++++++++++ */

function NuevaCategoria(req , res , next)
    {
        var user = {};
        user.nombre = req.params.nombre;
        user.descripcion = req.params.descripcion;
        user.fecha = req.params.fecha;
        user.usuario_idusuario = req.params.usuario_idusuario;

        connection.query('INSERT INTO `categoria`(`nombre`, `descripcion`, `fecha`, `usuario_idusuario`) VALUES(\''
                            +user.nombre+'\', \''
                            +user.descripcion+'\', \''
                            +user.fecha+'\', \''
                            +user.usuario_idusuario+'\'\')'
                            , function (error, success)
                                {
                                    if(error) throw error;
                                     console.log(success);
                                    res.send(200, success.insertId);
                                }
                        );
    }
/* +++++++++++                          4                            ++++++++++++ */

function NuevoTipoUsuario(req , res , next)
    {
        var user = {};
        user.nombre = req.params.nombre;
        connection.query('INSERT INTO `tipo_usuario`(`nombre`) VALUES(, \''
                            +user.nombre+'\'\')'
                            , function (error, success)
                                {
                                    if(error) throw error;
                                     console.log(success);
                                    res.send(200, success.insertId);
                                }
                        );
    }

/*  ******************************* ( PUT ) **********************************   */

/* +++++++++++                          0                            ++++++++++++ */

function ActualizarUsuario(req , res , next)
    {
        var user = {};
        user.tipo_usuario = req.params.tipo_usuario;
        user.nombre = req.params.nombre;
        user.correo = req.params.correo;
        user.nic = req.params.nic;
        user.password = req.params.password;
        user.telefono = req.params.telefono;
        connection.query('UPDATE `usuario` SET (`tipo_usuario`= \''
                            +user.tipo_usuario+'\', `nombre`= \''
                            +user.nombre+'\', `correo`= \''
                            +user.correo+'\', `nic`= \''
                            +user.nic+'\', `password`= \''
                            +user.password+'\',`telefono`= \''
                            +user.telefono+'\', \') WHERE `idusuario` = '+req.params.idusuario
                            , function (error, success)
                                    {
                                        if(error) throw error;
                                         console.log(success);
                                        res.send(200, success);
                                    }
                        );
    }

/* +++++++++++                          1                            ++++++++++++ */

function ActualizarComentario(req , res , next)
    {
        var user = {};
        user.publicacion_idpublicacion = req.params.publicacion_idpublicacion;
        user.fecha_public = req.params.fecha_public;
        user.usuario_idusuario = req.params.usuario_idusuario;
        user.comentario = req.params.comentario;
        user.estado = req.params.estado;
        
        connection.query('UPDATE `usuario` SET (`publicacion_idpublicacion`= \''
                            +user.publicacion_idpublicacion+'\', `fecha_public`= \''
                            +user.fecha_public+'\', `usuario_idusuario`= \''
                            +user.usuario_idusuario+'\', `comentario`= \''
                            +user.comentario+'\', `estado`= \''
                            +user.estado+'\', \') WHERE `idcomentario` = '+req.params.idcomentario
                            , function (error, success)
                                    {
                                        if(error) throw error;
                                         console.log(success);
                                        res.send(200, success);
                                    }
                        );
    }


/* +++++++++++                          2                            ++++++++++++ */

function ActualizarPublicacion(req , res , next)
    {
        var user = {};
        user.usuario_idusuario = req.params.usuario_idusuario;
        user.categoria_idcategoria = req.params.categoria_idcategoria;
        user.titulo = req.params.titulo;
        user.descripcion = req.params.descripcion;
        user.fecha_public = req.params.fecha_public;
        user.Estado = req.params.Estado;
        
        connection.query('UPDATE `usuario` SET (`usuario_idusuario`= \''
                            +user.usuario_idusuario+'\', `categoria_idcategoria`= \''
                            +user.categoria_idcategoria+'\', `titulo`= \''
                            +user.titulo+'\', `descripcion`= \''
                            +user.descripcion+'\', `fecha_public`= \''
                            +user.fecha_public+'\', `Estado`= \''
                            +user.Estado+'\' \') WHERE `idpublicacion` = '+req.params.idpublicacion
                            , function (error, success)
                                    {
                                        if(error) throw error;
                                         console.log(success);
                                        res.send(200, success);
                                    }
                        );
    }


/* +++++++++++                          3                            ++++++++++++ */

function ActualizarCategoria(req , res , next)
    {
        var user = {};
        user.nombre = req.params.nombre;
        user.descripcion = req.params.descripcion;
        user.fecha = req.params.fecha;
        user.usuario_idusuario = req.params.usuario_idusuario;
        connection.query('UPDATE `categoria` SET (`nombre`= \''
                            +user.Nombre+'\',`descripcion`= \''
                            +user.descripcion+'\',`fecha`= \''
                            +user.fecha+'\',`usuario_idusuario`= \''
                            +user.usuario_idusuario+'\' \') WHERE `idcategoria` = '+req.params.idcategoria
                            , function (error, success)
                                    {
                                        if(error) throw error;
                                         console.log(success);
                                        res.send(200, success);
                                    }
                        );
    }

/* +++++++++++                          4                            ++++++++++++ */

function ActualizarTipoUsuario(req , res , next)
    {
        var user = {};
        user.nombre = req.params.nombre;
        connection.query('UPDATE `tipo_usuario` SET (`nombre`= \''
                            +user.nombre+'\' \') WHERE `idtipo_usuario` = '+req.params.idtipo_usuario
                            , function (error, success)
                                    {
                                        if(error) throw error;
                                         console.log(success);
                                        res.send(200, success);
                                    }
                        );
    }