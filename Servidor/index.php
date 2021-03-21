<?php
    function getConnection() {
        $credentials = array(
            'local' => array(
            'hostname' => "localhost",
            'database' => "db_contactos",
            'username' => "root",
            'password' => ""
            ));
    try {
        $conn = new PDO(
        "mysql:host={$credentials['local']['hostname']};dbname={$credentials['local']['database']}",
            $credentials['local']['username'],
            $credentials['local']['password'],
            [
                PDO::ATTR_EMULATE_PREPARES => FALSE,
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
            ]
            );
            $stm = $conn->prepare("SET NAMES 'utf8'");
            $stm->execute();
            return $conn;
    } catch (PDOException $ex) {
        return $ex->getMessage();
    }
}
?>