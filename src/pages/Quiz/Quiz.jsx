import { Fragment, useEffect } from "react";
import { Navbar , QNA } from "../../component";
import axios from "axios";
import { useQuiz } from "../../context";

export const Quiz = () =>{
  

      
      const { quizCategory,quiz,quizDispatch } = useQuiz();


      useEffect(()=>{
            (async ()=>{
                  try{
                   const {data : {data}} = await axios.get("https://quizapp-backend-vlsg.onrender.com/quiz",{
                     headers: { authorization: localStorage.getItem("token") }
                       
                  })
                    const filteredData = data.filter(({category}) => category === quizCategory)
                     if(filteredData && filteredData.length > 0){
                        quizDispatch({
                            type: "SET_QUIZ",
                            payload: filteredData
                        })
                        localStorage.setItem("quiz",JSON.stringify(filteredData))
                     }
                  }catch(err){
                     console.log(err); 
                  }
             })() 
         },[quizCategory]);
      


      return(
         <Fragment>
             <Navbar route="quiz"/>
             {
               quiz && quiz.length > 0 && <QNA quizData={quiz}/>
             }
             
         </Fragment>
      );
}