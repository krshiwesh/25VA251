import Demo from './component/demo';
import Props from './component/Props.jsx';
import UseStatehook from './component/hooks/UseStatehook.jsx';
import StudentReg from './component/StudentReg.jsx';

import './App.css'


function App() {

  return (
    <>
      <h1>Welcome to React</h1>
      <h2>Hello {name}</h2>
      <Demo/>
      <Props name = "Ayush" rollno = "2503215400088" course = "B-tech"/>
      <UseStatehook/>
      <StudentReg/>
    </>
  )
}

export default App;