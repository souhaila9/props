import React from 'react'
import Profile from "./Profil/Profile";

function App() {
  App.defaultProps = { myName : "souhaila" , myBio : "Info" , myprofesion:"web"  };
   return (
    <div>
      <Profile myName="souhaila" myBio="Info" myprofesion="web" />
    </div>
 ) 
}


export default App;
