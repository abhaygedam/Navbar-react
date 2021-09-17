import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
        
      <Navbar>
        
        <Logo  
             label="data:image/png;base64,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"
        ></Logo>
        

        <div className="right" style={{
          display: "flex",
         
        }}>
          <NavItem label="About"></NavItem>
          <NavItem label="Price"></NavItem>
        
        </div>
       </Navbar>

    </div>
  );
}


function NavItem({ label }) {
  return <div  style={{
    width: "80px",
    height: "30px",
    fontSize: "20px",
    color: "#F7F7F7",
    backgroundColor: "#43D8C9",
    margin: "10px 20px",
    border: "1px solid white",
  }}>{label}</div>
}


function Logo({ label }) {
  return <img src={label} style={{
    width: "150px",
    height:"50px",
    fontSize: "25px",
    margin: "0 20px", 
  }}/>
}

export default App;
