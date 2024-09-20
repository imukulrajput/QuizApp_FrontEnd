import axios from "axios";
import { Fragment, useEffect,useState } from "react";
import { Navbar,QuizCard } from "../../component";
import "./Home.css"

export const Home = () =>{

    const [categories,setCategories] = useState([]);

    useEffect(() =>{
        (async ()=>{
             try{
              const {data : {data}} = await axios.get("https://quizapp-backend-vlsg.onrender.com/categories");
               setCategories(data);
             }catch(err){
                console.log(err); 
             }
        })() 
    },[])

    return (
        <Fragment>
             <Navbar />
             <main className="main d-flex wrap gap-md align-center justify-center">
                {
                    categories.map(category=> < QuizCard category={category} key={category.id}/>)
                }
             </main> 
       </Fragment> 
     );
}