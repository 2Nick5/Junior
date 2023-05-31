<?php
// Establecer la conexión con la base de datos PostgreSQL
$host = 'localhost';
$dbname = 'PostgresIn10';
$user = 'postgres';
$password = 'dormir333';
$port = 5432;
    $conexion=pg_connect("host=$host dbname=$bdname user=$user password=$password");
    $query = ("INSERT INTO Persona(ID, Tipo de identificación, Nombres, Apellidos, País, Ciudad) VALUES('_REQUEST[ID]','_REQUEST[Tipo de identificación]',
    '_REQUEST[Nombre]','_REQUEST[Apellido]','_REQUEST[País]','_REQUEST[Ciudad]')");
    $consulta=pg_query($conexion,$query);
        pg_close();
        echo  'Datos Guardados';
?>