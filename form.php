<?php 
   if (isset($_POST['submit'])){
       $name = $_POST['name'];
       $email = $_POST['email'];
       $phone = $_POST['phone'];
       $message = $_POST['message'];


        $mailTo = "kara@justdoyoulifecoaching.com";
        $headers = "From: ".$email;
        $txt = "Email From ".$name." sent from form on justdoyoulifecoaching.com";
        $email_body = $message, $phone;

       mail($mailTo, $txt, $email_body, $headers);
       header("Location: ./index.html");
   }
?>