

<?php
/* <!-- 
excecute no existe
se escribe es fetch 
--> */
require "./index.php";

    $conn = getConnection();
    if(is_string($conn)){
            echo $conn;
    } else {
        $stm = $conn -> prepare ("SELECT * FROM persona");
        $stm -> execute();
        $data = $stm -> fetchAll(PDO::FETCH_ASSOC);
        $data = array("results" => $data);
        echo json_encode($data);
    }
?>
