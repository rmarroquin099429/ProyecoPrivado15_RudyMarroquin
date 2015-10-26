SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';

CREATE SCHEMA IF NOT EXISTS `blog` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci ;
USE `blog` ;

-- -----------------------------------------------------
-- Table `blog`.`tipo_usuario`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `blog`.`tipo_usuario` (
  `idtipo_usuario` INT NOT NULL ,
  `nombre` VARCHAR(45) NOT NULL ,
  PRIMARY KEY (`idtipo_usuario`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blog`.`usuario`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `blog`.`usuario` (
  `idusuario` INT NOT NULL AUTO_INCREMENT ,
  `tipo_usuario` INT NOT NULL ,
  `nombre` VARCHAR(45) NOT NULL ,
  `correo` VARCHAR(45) NULL ,
  `nic` VARCHAR(45) NOT NULL ,
  `password` VARCHAR(45) NOT NULL ,
  `telefono` VARCHAR(45) NULL ,
  PRIMARY KEY (`idusuario`) ,
  INDEX `fk_usuario_tipo_usuario` (`tipo_usuario` ASC) ,
  CONSTRAINT `fk_usuario_tipo_usuario`
    FOREIGN KEY (`tipo_usuario` )
    REFERENCES `blog`.`tipo_usuario` (`idtipo_usuario` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blog`.`categoria`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `blog`.`categoria` (
  `idcategoria` INT NOT NULL AUTO_INCREMENT ,
  `nombre` VARCHAR(45) NOT NULL ,
  `descripcion` VARCHAR(45) NULL ,
  `fecha` DATE NULL ,
  `usuario_idusuario` INT NOT NULL ,
  PRIMARY KEY (`idcategoria`) ,
  INDEX `fk_categoria_usuario1` (`usuario_idusuario` ASC) ,
  CONSTRAINT `fk_categoria_usuario1`
    FOREIGN KEY (`usuario_idusuario` )
    REFERENCES `blog`.`usuario` (`idusuario` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blog`.`Estado`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `blog`.`Estado` (
  `idEstado` INT NOT NULL ,
  `Nombre` VARCHAR(45) NOT NULL ,
  PRIMARY KEY (`idEstado`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blog`.`publicacion`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `blog`.`publicacion` (
  `idpublicacion` INT NOT NULL AUTO_INCREMENT ,
  `usuario_idusuario` INT NOT NULL ,
  `categoria_idcategoria` INT NOT NULL ,
  `titulo` VARCHAR(45) NOT NULL ,
  `descripcion` VARCHAR(45) NOT NULL ,
  `fecha_public` VARCHAR(45) NOT NULL ,
  `Estado` INT NOT NULL ,
  PRIMARY KEY (`idpublicacion`) ,
  INDEX `fk_publicacion_usuario1` (`usuario_idusuario` ASC) ,
  INDEX `fk_publicacion_categoria1` (`categoria_idcategoria` ASC) ,
  INDEX `fk_publicacion_Estado1` (`Estado` ASC) ,
  CONSTRAINT `fk_publicacion_usuario1`
    FOREIGN KEY (`usuario_idusuario` )
    REFERENCES `blog`.`usuario` (`idusuario` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_publicacion_categoria1`
    FOREIGN KEY (`categoria_idcategoria` )
    REFERENCES `blog`.`categoria` (`idcategoria` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_publicacion_Estado1`
    FOREIGN KEY (`Estado` )
    REFERENCES `blog`.`Estado` (`idEstado` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blog`.`comentario`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `blog`.`comentario` (
  `idcomentario` INT NOT NULL AUTO_INCREMENT ,
  `publicacion_idpublicacion` INT NOT NULL ,
  `fecha_public` DATE NOT NULL ,
  `usuario_idusuario` INT NOT NULL ,
  `comentario` VARCHAR(400) NOT NULL ,
  PRIMARY KEY (`idcomentario`) ,
  INDEX `fk_comentario_publicacion1` (`publicacion_idpublicacion` ASC) ,
  INDEX `fk_comentario_usuario1` (`usuario_idusuario` ASC) ,
  CONSTRAINT `fk_comentario_publicacion1`
    FOREIGN KEY (`publicacion_idpublicacion` )
    REFERENCES `blog`.`publicacion` (`idpublicacion` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comentario_usuario1`
    FOREIGN KEY (`usuario_idusuario` )
    REFERENCES `blog`.`usuario` (`idusuario` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `blog`.`tipo_usuario`
-- -----------------------------------------------------
START TRANSACTION;
USE `blog`;
INSERT INTO `blog`.`tipo_usuario` (`idtipo_usuario`, `nombre`) VALUES (NULL, 'cliente');
INSERT INTO `blog`.`tipo_usuario` (`idtipo_usuario`, `nombre`) VALUES (NULL, 'administrador');

COMMIT;

-- -----------------------------------------------------
-- Data for table `blog`.`usuario`
-- -----------------------------------------------------
START TRANSACTION;
USE `blog`;
INSERT INTO `blog`.`usuario` (`idusuario`, `tipo_usuario`, `nombre`, `correo`, `nic`, `password`, `telefono`) VALUES (NULL, 1, 'Carlos', 'c@gmail.com', 'Carlos', '1111', '5555');
INSERT INTO `blog`.`usuario` (`idusuario`, `tipo_usuario`, `nombre`, `correo`, `nic`, `password`, `telefono`) VALUES (NULL, 2, 'Luis', 'l@gmail.com', 'Luis', '1234', '66666');
INSERT INTO `blog`.`usuario` (`idusuario`, `tipo_usuario`, `nombre`, `correo`, `nic`, `password`, `telefono`) VALUES (NULL, 1, 'Marcos', 'n@gmail.com', 'Marcos', '1111', '425335');
INSERT INTO `blog`.`usuario` (`idusuario`, `tipo_usuario`, `nombre`, `correo`, `nic`, `password`, `telefono`) VALUES (NULL, 1, 'Pedro', 'p@hotmail.com', 'Pedro', '1111', '4235565');
INSERT INTO `blog`.`usuario` (`idusuario`, `tipo_usuario`, `nombre`, `correo`, `nic`, `password`, `telefono`) VALUES (NULL, 1, 'Marcelo', 'ma@gmail.com', 'Macelo', '2222', '34557568');
INSERT INTO `blog`.`usuario` (`idusuario`, `tipo_usuario`, `nombre`, `correo`, `nic`, `password`, `telefono`) VALUES (NULL, 1, 'Camilo', 'ca@gmail.com', 'Camilo', '3333', '23446457');
INSERT INTO `blog`.`usuario` (`idusuario`, `tipo_usuario`, `nombre`, `correo`, `nic`, `password`, `telefono`) VALUES (NULL, 1, 'Mercedes', 'me@outlook.com', 'merce', '4444', '86543453');
INSERT INTO `blog`.`usuario` (`idusuario`, `tipo_usuario`, `nombre`, `correo`, `nic`, `password`, `telefono`) VALUES (NULL, 1, 'Juanita', 'j@live.es', 'juanita', '5555', '346457568');
INSERT INTO `blog`.`usuario` (`idusuario`, `tipo_usuario`, `nombre`, `correo`, `nic`, `password`, `telefono`) VALUES (NULL, 1, 'Emperatris', 'em@live.co', 'Empe', '6666', '678456456');
INSERT INTO `blog`.`usuario` (`idusuario`, `tipo_usuario`, `nombre`, `correo`, `nic`, `password`, `telefono`) VALUES (NULL, 2, 'Manuel', 'm@live.es', 'Manuel', '1234', '3457465');
INSERT INTO `blog`.`usuario` (`idusuario`, `tipo_usuario`, `nombre`, `correo`, `nic`, `password`, `telefono`) VALUES (NULL, NULL, NULL, NULL, NULL, '', NULL);

COMMIT;

-- -----------------------------------------------------
-- Data for table `blog`.`categoria`
-- -----------------------------------------------------
START TRANSACTION;
USE `blog`;
INSERT INTO `blog`.`categoria` (`idcategoria`, `nombre`, `descripcion`, `fecha`, `usuario_idusuario`) VALUES (NULL, 'Matematica', 'curso instructivo', '2015-10-2', 1);
INSERT INTO `blog`.`categoria` (`idcategoria`, `nombre`, `descripcion`, `fecha`, `usuario_idusuario`) VALUES (NULL, 'Fisica', 'curso instructivo', '2015-10-21', 3);
INSERT INTO `blog`.`categoria` (`idcategoria`, `nombre`, `descripcion`, `fecha`, `usuario_idusuario`) VALUES (NULL, 'Electronica', 'curso instructivo', '2015-10-21', 4);
INSERT INTO `blog`.`categoria` (`idcategoria`, `nombre`, `descripcion`, `fecha`, `usuario_idusuario`) VALUES (NULL, 'Calculo', 'curso instructivo', '2015-10-25', 5);
INSERT INTO `blog`.`categoria` (`idcategoria`, `nombre`, `descripcion`, `fecha`, `usuario_idusuario`) VALUES (NULL, 'Base de Datos', 'curso instructivo', '2015-10-25', 6);
INSERT INTO `blog`.`categoria` (`idcategoria`, `nombre`, `descripcion`, `fecha`, `usuario_idusuario`) VALUES (NULL, 'Paginas web', 'aprendiendoando', '2015-10-1', 7);
INSERT INTO `blog`.`categoria` (`idcategoria`, `nombre`, `descripcion`, `fecha`, `usuario_idusuario`) VALUES (NULL, 'Peliculas', 'accion, suspenso', '2015-10-12', 8);
INSERT INTO `blog`.`categoria` (`idcategoria`, `nombre`, `descripcion`, `fecha`, `usuario_idusuario`) VALUES (NULL, 'Series', 'super heroes', '2015-10-20', 9);

COMMIT;

-- -----------------------------------------------------
-- Data for table `blog`.`Estado`
-- -----------------------------------------------------
START TRANSACTION;
USE `blog`;
INSERT INTO `blog`.`Estado` (`idEstado`, `Nombre`) VALUES (NULL, 'Activo');
INSERT INTO `blog`.`Estado` (`idEstado`, `Nombre`) VALUES (NULL, 'Desactivado');

COMMIT;

-- -----------------------------------------------------
-- Data for table `blog`.`publicacion`
-- -----------------------------------------------------
START TRANSACTION;
USE `blog`;
INSERT INTO `blog`.`publicacion` (`idpublicacion`, `usuario_idusuario`, `categoria_idcategoria`, `titulo`, `descripcion`, `fecha_public`, `Estado`) VALUES (NULL, 1, 1, 'primera Practica', 'veremos la teoria de esta calse', '2015-10-27', NULL);
INSERT INTO `blog`.`publicacion` (`idpublicacion`, `usuario_idusuario`, `categoria_idcategoria`, `titulo`, `descripcion`, `fecha_public`, `Estado`) VALUES (NULL, 2, 2, 'Teoria', 'veremos la teoria', '2015-10-27', NULL);
INSERT INTO `blog`.`publicacion` (`idpublicacion`, `usuario_idusuario`, `categoria_idcategoria`, `titulo`, `descripcion`, `fecha_public`, `Estado`) VALUES (NULL, 3, 3, 'teoria', 'veremos la teoria', '2015-10-28', NULL);
INSERT INTO `blog`.`publicacion` (`idpublicacion`, `usuario_idusuario`, `categoria_idcategoria`, `titulo`, `descripcion`, `fecha_public`, `Estado`) VALUES (NULL, 4, 4, 'primera Practica', 'iniciamos', '2015-10-29', NULL);
INSERT INTO `blog`.`publicacion` (`idpublicacion`, `usuario_idusuario`, `categoria_idcategoria`, `titulo`, `descripcion`, `fecha_public`, `Estado`) VALUES (NULL, 2, 5, 'inicio', 'visualizacion', '2015-10-30', NULL);
INSERT INTO `blog`.`publicacion` (`idpublicacion`, `usuario_idusuario`, `categoria_idcategoria`, `titulo`, `descripcion`, `fecha_public`, `Estado`) VALUES (NULL, 5, 6, 'efectos', 'contenido', '2015-10-27', NULL);
INSERT INTO `blog`.`publicacion` (`idpublicacion`, `usuario_idusuario`, `categoria_idcategoria`, `titulo`, `descripcion`, `fecha_public`, `Estado`) VALUES (NULL, 3, 7, 'efectos', 'descripcion', '2015-10-28', NULL);
INSERT INTO `blog`.`publicacion` (`idpublicacion`, `usuario_idusuario`, `categoria_idcategoria`, `titulo`, `descripcion`, `fecha_public`, `Estado`) VALUES (NULL, NULL, NULL, NULL, NULL, NULL, NULL);

COMMIT;
