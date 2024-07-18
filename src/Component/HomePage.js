import biryani from "../images/biryani.jpg"; 
import chapati from "../images/chapati.jpg";
import macaroni from "../images/macaroni.jpg";
import sushi from "../images/sushi.jpg";
// import biryani from "../images/biryani.jpg";
// import chapati from "../images/chapati.jpg";


function HomePage (){
    return(
        <div className="homepage" >
             <div className="navbar">
        <h1> Your Recipes</h1>
        <ul className="nav-ul">
            <li> Home</li>
            <li>Types of food </li>
            <li> Recipes</li>
        </ul>
         
     </div>
        <h5 className="header"> Welcome to this Food App. This page is DIY page, on what food to eat wherever you find yourself in the world. 
            Both local and popular cuisines of the various continents. </h5>

           <div className="cuisines">
            <ul >
               
            <li> <h5> Popular North American Cuisines</h5>  <img src={biryani} alt="loading"/></li> 
            <li> <h5> Popular South American Cuisines</h5>  <img src={macaroni} alt="loading"/></li> 
            <li> <h5> Popular African Cuisines</h5>  <img src={sushi} alt="loading"/></li> 
            <li> <h5> Popular European Cuisines</h5>  <img src={chapati} alt="loading"/></li> 
            <li> <h5> Popular Asian Cuisines</h5>  <img src={biryani} alt="loading"/></li> 
            <li> <h5> Popular Australia and Oceania Cuisines</h5>  <img src={chapati} alt="loading"/></li> 
            </ul>
            </div>  
        </div>
   

    )
}


export default HomePage;