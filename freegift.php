<?php 
   if (isset($_POST['giftsubmit'])){
       $name = $_POST['name'];
       $email = $_POST['email'];

        $mailTo = "kara@justdoyoulifecoaching.com";
        $headers = "From: ".$email;
        $txt = "Free Gift Sign Up For ".$name." sent from popup on justdoyoulifecoaching.com";
        $email_body = "Free gift request from ".$name." their email is ".$email;

       mail($mailTo, $txt, $email_body, $headers);
       header("Location: ./index.html");
   }
?>