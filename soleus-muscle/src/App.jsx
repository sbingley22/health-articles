import './App.css'
import pushupGif from './assets/soleusPushup.gif'

function App() {
  

  return (
    <>
      <h1>Soleus Muscle</h1>
      <div className="card">
        <h3>Functions</h3>
        <ul>
          <li>Flexes the ankle joint</li>
          <li>Pumps blood back up through veins</li>
          <li>Lowers blood glucose</li>
        </ul>
      </div>
      <div className="card">
        <h3>Soleus Pushup</h3>
        <p>
          Sit down which causes your knee to bend which prevents the gastrocnemeius from getting involved.
        </p>
        <p>
          Then using only your soleus muscle lift heel up off the floor to maximal contraction.
        </p>
        <p>
          Lower the heel back to the floor and repeat. Aim for one contraction per second.
        </p>
        <img src={pushupGif} alt="soleus pushup" />
      </div>
    </>
  )
}

export default App
