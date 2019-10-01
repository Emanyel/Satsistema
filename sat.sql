-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-10-2019 a las 21:45:16
-- Versión del servidor: 10.3.16-MariaDB
-- Versión de PHP: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sat`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `conexion_equipos`
--

CREATE TABLE `conexion_equipos` (
  `ip` int(20) NOT NULL,
  `mac_inalambrico` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `host_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `vpn` int(5) NOT NULL,
  `mac_ethernet` varchar(25) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `conexion_impresoras`
--

CREATE TABLE `conexion_impresoras` (
  `ip` int(15) NOT NULL,
  `vpn` int(5) NOT NULL,
  `conectividad` varchar(10) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datosdf3`
--

CREATE TABLE `datosdf3` (
  `id_localidad` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `nombre_localidad` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `direccion_localidad` text COLLATE utf8_unicode_ci NOT NULL,
  `estado_localidad` varchar(15) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `datosdf3`
--

INSERT INTO `datosdf3` (`id_localidad`, `nombre_localidad`, `direccion_localidad`, `estado_localidad`) VALUES
('320', 'Subadministración Desconcentrada DF\"3\"', 'Viad. Río de la Piedad 507, Granjas México', 'CDMX');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `descripcion_accesorios`
--

CREATE TABLE `descripcion_accesorios` (
  `id_tipacces` int(10) NOT NULL,
  `tipo_equipo` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `proveedor` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `movimiento` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `tipo_ps` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `tipo_entrega` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `descripcion_equipos`
--

CREATE TABLE `descripcion_equipos` (
  `id_descequipos` int(10) NOT NULL,
  `provedor` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `tipo_equipo` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `tipo_entrega` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `tipo_ps` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `movimiento` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `folio` int(15) NOT NULL,
  `ip` int(20) NOT NULL,
  `reporte_ms` varchar(25) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `descripcion_impresoras`
--

CREATE TABLE `descripcion_impresoras` (
  `id_tiposervicio` int(10) NOT NULL,
  `tipo_servicio` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `componente` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `nivel_servicio` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `movimiento` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `observaciones` text COLLATE utf8_unicode_ci NOT NULL,
  `no_documento` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalles_equipos`
--

CREATE TABLE `detalles_equipos` (
  `no_documento` int(10) NOT NULL,
  `fecha` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `tipo_firma` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalles_impresoras`
--

CREATE TABLE `detalles_impresoras` (
  `no_documento` int(20) NOT NULL,
  `fecha_resguardo` date NOT NULL,
  `tipo_documento` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estatus_equipos`
--

CREATE TABLE `estatus_equipos` (
  `reporte_ms` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `fecha_baja` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `reportems_baja` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `id_accesuser`
--

CREATE TABLE `id_accesuser` (
  `no_empleado` int(10) NOT NULL,
  `no_serie` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `id_userimp`
--

CREATE TABLE `id_userimp` (
  `no_empleado` int(10) NOT NULL,
  `serie` varchar(15) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `info_accesorios`
--

CREATE TABLE `info_accesorios` (
  `no_serie` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `perfil` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `marca` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `modelo` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `id_tipacces` int(10) NOT NULL,
  `no_documento` int(15) NOT NULL,
  `ip` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `info_equipos`
--

CREATE TABLE `info_equipos` (
  `no_serie` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `modelo` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `marca` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `admon_gen` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `perfi` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `id_descequipos` int(10) NOT NULL,
  `no_empleado` int(10) NOT NULL,
  `no_documento` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `info_impresoras`
--

CREATE TABLE `info_impresoras` (
  `serie` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `modelo` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `marca` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `admon_gen` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `ip` int(20) NOT NULL,
  `id_tiposervicio` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `info_reportes`
--

CREATE TABLE `info_reportes` (
  `no_documento` int(10) NOT NULL,
  `fecha` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `reporte_ms` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `reportems_baja` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `folio` int(10) NOT NULL,
  `fecha_baja` varchar(10) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `info_usuario`
--

CREATE TABLE `info_usuario` (
  `no_empleado` int(10) NOT NULL,
  `rfc` varchar(13) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nombre` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `a_paterno` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `a_materno` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `puesto` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `admongeneral` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tipo_firma` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `no_serie` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_localidad` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reubicacion`
--

CREATE TABLE `reubicacion` (
  `id_localidad` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `nombre_localidad` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `estado_localidad` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `admon_gen` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `area_localidad` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `puesto_localidad` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `direccion_localidad` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `conexion_equipos`
--
ALTER TABLE `conexion_equipos`
  ADD PRIMARY KEY (`ip`);

--
-- Indices de la tabla `conexion_impresoras`
--
ALTER TABLE `conexion_impresoras`
  ADD PRIMARY KEY (`ip`);

--
-- Indices de la tabla `datosdf3`
--
ALTER TABLE `datosdf3`
  ADD PRIMARY KEY (`id_localidad`);

--
-- Indices de la tabla `descripcion_accesorios`
--
ALTER TABLE `descripcion_accesorios`
  ADD PRIMARY KEY (`id_tipacces`);

--
-- Indices de la tabla `descripcion_equipos`
--
ALTER TABLE `descripcion_equipos`
  ADD PRIMARY KEY (`id_descequipos`),
  ADD KEY `ip` (`ip`),
  ADD KEY `reporte_ms` (`reporte_ms`);

--
-- Indices de la tabla `descripcion_impresoras`
--
ALTER TABLE `descripcion_impresoras`
  ADD PRIMARY KEY (`id_tiposervicio`),
  ADD KEY `no_documento` (`no_documento`);

--
-- Indices de la tabla `detalles_equipos`
--
ALTER TABLE `detalles_equipos`
  ADD PRIMARY KEY (`no_documento`);

--
-- Indices de la tabla `detalles_impresoras`
--
ALTER TABLE `detalles_impresoras`
  ADD PRIMARY KEY (`no_documento`);

--
-- Indices de la tabla `estatus_equipos`
--
ALTER TABLE `estatus_equipos`
  ADD PRIMARY KEY (`reporte_ms`);

--
-- Indices de la tabla `id_accesuser`
--
ALTER TABLE `id_accesuser`
  ADD KEY `no_empleado` (`no_empleado`),
  ADD KEY `no_serie` (`no_serie`);

--
-- Indices de la tabla `id_userimp`
--
ALTER TABLE `id_userimp`
  ADD KEY `no_empleado` (`no_empleado`),
  ADD KEY `serie` (`serie`);

--
-- Indices de la tabla `info_accesorios`
--
ALTER TABLE `info_accesorios`
  ADD PRIMARY KEY (`no_serie`),
  ADD KEY `id_tipacces` (`id_tipacces`),
  ADD KEY `no_documento` (`no_documento`);

--
-- Indices de la tabla `info_equipos`
--
ALTER TABLE `info_equipos`
  ADD PRIMARY KEY (`no_serie`),
  ADD KEY `id_descequipos` (`id_descequipos`),
  ADD KEY `no_empleado` (`no_empleado`),
  ADD KEY `no_documento` (`no_documento`);

--
-- Indices de la tabla `info_impresoras`
--
ALTER TABLE `info_impresoras`
  ADD PRIMARY KEY (`serie`),
  ADD KEY `ip` (`ip`),
  ADD KEY `id_tiposervicio` (`id_tiposervicio`);

--
-- Indices de la tabla `info_reportes`
--
ALTER TABLE `info_reportes`
  ADD PRIMARY KEY (`no_documento`);

--
-- Indices de la tabla `info_usuario`
--
ALTER TABLE `info_usuario`
  ADD PRIMARY KEY (`no_empleado`),
  ADD KEY `no_serie` (`no_serie`),
  ADD KEY `id_localidad` (`id_localidad`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `descripcion_equipos`
--
ALTER TABLE `descripcion_equipos`
  ADD CONSTRAINT `descripcion_equipos_ibfk_1` FOREIGN KEY (`ip`) REFERENCES `conexion_equipos` (`ip`),
  ADD CONSTRAINT `descripcion_equipos_ibfk_2` FOREIGN KEY (`reporte_ms`) REFERENCES `estatus_equipos` (`reporte_ms`);

--
-- Filtros para la tabla `descripcion_impresoras`
--
ALTER TABLE `descripcion_impresoras`
  ADD CONSTRAINT `descripcion_impresoras_ibfk_2` FOREIGN KEY (`no_documento`) REFERENCES `detalles_impresoras` (`no_documento`);

--
-- Filtros para la tabla `id_accesuser`
--
ALTER TABLE `id_accesuser`
  ADD CONSTRAINT `id_accesuser_ibfk_1` FOREIGN KEY (`no_empleado`) REFERENCES `info_usuario` (`no_empleado`),
  ADD CONSTRAINT `id_accesuser_ibfk_2` FOREIGN KEY (`no_serie`) REFERENCES `info_accesorios` (`no_serie`);

--
-- Filtros para la tabla `id_userimp`
--
ALTER TABLE `id_userimp`
  ADD CONSTRAINT `id_userimp_ibfk_1` FOREIGN KEY (`no_empleado`) REFERENCES `info_usuario` (`no_empleado`),
  ADD CONSTRAINT `id_userimp_ibfk_2` FOREIGN KEY (`no_empleado`) REFERENCES `info_usuario` (`no_empleado`),
  ADD CONSTRAINT `id_userimp_ibfk_3` FOREIGN KEY (`serie`) REFERENCES `info_impresoras` (`serie`);

--
-- Filtros para la tabla `info_accesorios`
--
ALTER TABLE `info_accesorios`
  ADD CONSTRAINT `info_accesorios_ibfk_1` FOREIGN KEY (`id_tipacces`) REFERENCES `descripcion_accesorios` (`id_tipacces`),
  ADD CONSTRAINT `info_accesorios_ibfk_2` FOREIGN KEY (`no_documento`) REFERENCES `info_reportes` (`no_documento`);

--
-- Filtros para la tabla `info_equipos`
--
ALTER TABLE `info_equipos`
  ADD CONSTRAINT `info_equipos_ibfk_1` FOREIGN KEY (`id_descequipos`) REFERENCES `descripcion_equipos` (`id_descequipos`),
  ADD CONSTRAINT `info_equipos_ibfk_2` FOREIGN KEY (`no_empleado`) REFERENCES `info_usuario` (`no_empleado`),
  ADD CONSTRAINT `info_equipos_ibfk_3` FOREIGN KEY (`no_documento`) REFERENCES `detalles_equipos` (`no_documento`);

--
-- Filtros para la tabla `info_impresoras`
--
ALTER TABLE `info_impresoras`
  ADD CONSTRAINT `info_impresoras_ibfk_1` FOREIGN KEY (`ip`) REFERENCES `conexion_impresoras` (`ip`),
  ADD CONSTRAINT `info_impresoras_ibfk_2` FOREIGN KEY (`id_tiposervicio`) REFERENCES `descripcion_impresoras` (`id_tiposervicio`);

--
-- Filtros para la tabla `info_usuario`
--
ALTER TABLE `info_usuario`
  ADD CONSTRAINT `info_usuario_ibfk_1` FOREIGN KEY (`no_serie`) REFERENCES `info_equipos` (`no_serie`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
