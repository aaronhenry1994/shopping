import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <h1>Home Page</h1>
      </div>
      <div class="banner">
        <div>Home</div>
        <div>Shopping</div>
        <div>Cart</div>
      </div>
      <div>
        <div><h2>Things I am currently enjoying</h2></div>
      </div>
      <div class='picture-banner'>
        <div>
          <div><p>Donkey Kong: Banaza</p></div>
          <div class='picture-container'><img src="src/assets/DK.jpg" class='picture' alt="" /></div>
        </div>
        <div>
          <div><p>Hollow Knight</p></div>
          <div class='picture-container'><img src="src/assets/HK.jpg" class='picture' alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default App
