<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

  <?php
  $getweight=$_GET("getweight");
  $getheight=$_GET("getheight");

  mysqy_connect("localhost"."root","",);
  mysql_select_db ("patient_data");
  mysql_query("Instert in to values"("getweight","getheight"))  ;


  ?>



  </body>
</html>