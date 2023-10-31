import './App.css'
import './index.css'
import NavBar from './components/navbar'
import HomeDisplay from './components/homedisplay'
import ProjectDisplay from './components/projects/project_display'

function App() {
  return (
    <>
      <div className='bg-gradient-to-r backdrop-filter backdrop-blur-[100px] backdrop:{#4ea8de}'>
        <div className='flex flex-col relative'>
          <NavBar />
          <HomeDisplay />
          <ProjectDisplay />
        </div>
      </div>
    </>
  )
}

export default App
