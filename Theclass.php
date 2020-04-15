<? 

   php
   class person  {
   //name
   //height
   //age
   //eyecolor
   
   public $name ="Kumar Ojas";
   public $height="5.8";
   public $age="23";
   public $eyeColour="brown";
   
   function note () {
   $noteVal ="Show some respect";
    }
   }
   $var1= new person ();
   $var2= new person ();
   echo $var1 -> name ();
   echo "<br>";
   echo $var1-> height ;
   echo "The Person name is" .$var1->name.".His eye color is  ".$var2-> beyecolor;
   
 ?>
   
