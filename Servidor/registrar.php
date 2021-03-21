

<?php require "index.php";
//<!-- tener cuidado con los [] {} () -->

    $conn = getConnection();
    if(is_string($conn)) {
        echo $conn; 
    } else {
        $pers_nombre = $_POST["pers_nombre"];
        $pers_fijo = $_POST["tele_fijo"];
        $pers_celular = $_POST["tele_celular"];
    if($pers_fijo != "" && $pers_celular != "") {
        $query = "INSERT INTO persona (pers_nombre, pers_fijo, pers_celular)
        VALUES ('{$pers_nombre}', {$pers_fijo}, {$pers_celular})";
    } else if($pers_fijo != "") {
        $query = "INSERT INTO persona (pers_nombre, pers_fijo)
        VALUES ('{$pers_nombre}', {$pers_fijo})";
    } else {
        $query = "INSERT INTO persona (pers_nombre, pers_celular)
        VALUES ('{$pers_nombre}', {$pers_celular})";
    }
    try {
        $stm = $conn->prepare($query);
        $stm->execute();
        echo 1;
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
}
