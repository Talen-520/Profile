import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button_blue from './Button/Button_module.jsx'
import Button_red from './Button_inline.jsx'
import Button_animated from'./Button/animated_button.jsx'
import Student from './Student.jsx'
import UserGreating from './UserGreeting.jsx'
export function App() {
  return (
    <>
    <Header></Header>
    <UserGreating isLoggedIn={true} ></UserGreating>
    <div className='block1'>  <Card/> </div>
  
    <Student name = "Tao" age={26} isStudent={false}></Student>
    <Student name = "Farry"></Student> 
    <Button_blue></Button_blue>
    <Button_animated/>
    <Button_red></Button_red>
    <Footer></Footer>
    </>
  )
}

export default App