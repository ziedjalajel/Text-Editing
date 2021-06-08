import styled,{createGlobalStyle}  from "styled-components"

export const GlobalStyle=createGlobalStyle `
 background-color: #fb9300;
 min-height: 100vh;
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
body{
    
    color:white;
}
div{
    display:flex;
    align-items:center;
    justify-content:center;
    color:red;
    flex-direction:column;
    margin:5px;
}
p{
    display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
}
.colorBoxyellow{
background-color:yellow;
width:50px;
height:50px;
border:2px solid #343f56;
}
.colorBoxblue{
background-color:blue;
width:50px;
height:50px;
border:2px solid #343f56;
}
.colorBoxred{
background-color:red;
width:50px;
height:50px;
border:2px solid #343f56;
}
.colorBoxblack{
background-color:black;
width:50px;
height:50px;
border:2px solid #343f56;
}
.colorBoxpurple{
background-color:purple;
width:50px;
height:50px;
border:2px solid #343f56;
}





`
export const theme = {
    mainColor:"#242424",
    backgroundColor:"#fefafb",
}