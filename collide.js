
function hasCollide(lbullet,lwall)
{
    
   bulletRightEdge = lbullet.x + lbullet.getScaledWidth()/2;
   wallLeftEdge = lwall.x;
   if(bulletRightEdge >= wallLeftEdge)

   {

         return true

   }

    return false;

}


   