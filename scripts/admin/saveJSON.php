<?php
   $json = $_POST['json'];

   /* sanity check */
   if (json_decode($json) != null)
   {
     $file = fopen('../scripts/admin/posts.json','w+');
     fwrite($file, $json);
     fclose($file);
   }
   else
   { 
    
   }
?>