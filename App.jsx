import { Header } from "./Components/Header";
import { Posts } from "./Components/Post";
import { Sidebar } from "./Components/sidebar"
import  "./Global.css";
import style from "./App.module.css"



export function App() {

  return (
   
     <div>
      <Header />
      <div className={style.wrapper}>
       <Sidebar />
       <main>
         <Posts />
       </main>
      
      </div>
     </div>
  )
}

