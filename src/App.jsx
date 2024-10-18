import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <div>
        <img className='img-profile' src='https://media.licdn.com/dms/image/v2/C4D03AQHQ1thn29vJkw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1660099221341?e=2147483647&v=beta&t=NneOWWwM3UIgLPEST9vdgLdmUXMKBpUqOLaimQ9hkJY'/>
      </div>
      <div>
        <div className='header'>
          <h1>Hello, Vite!</h1>
          <div>

          </div>
        </div>
        <p>
        Even with the similar props as the React Native FlatList, FlashList recycles components under the hood to maximize performance.
        </p>
        <img className='img-post' src='https://media.licdn.com/dms/image/D4D05AQFulskigs6Pog/feedshare-thumbnail_720_1280/0/1720283259185?e=2147483647&v=beta&t=hG3RCCKC8aHFrf02xyK4T12nrG34JKp8da6F4sUb5rM'/>
      </div>
    </main>
  )
}

export default App
