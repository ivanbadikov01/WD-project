<?php
   //$json = $_POST['json'];
  $file = fopen("posts.json", "r")
  $json = fread($file, filesize("posts.json"));
  echo $json;
   /* sanity check 
   if (json_decode($json) != null)
   {
     $file = fopen('../scripts/admin/posts.json','w+');
     fwrite($file, $json);
     fclose($file);
   }
   else
   { 
      echo readfile('posts.json')
   }*/
?>