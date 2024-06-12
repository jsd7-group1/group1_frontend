import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className='flex flex-col justify-between gap-6 font-bold'>
      <h1 className='text-center text-5xl'>Home Page for dev</h1>
      <Link to="/home"><button>home</button></Link>
      <Link to="/login"><button>login</button></Link>
      <Link to="/register"><button>register</button></Link>
      <Link to="/allProduct"><button>allProduct</button></Link>
      <Link to="/cart"><button>cart</button></Link>
      <Link to="/payment"><button>payment</button></Link>
    </div>
  )
}

export default App
