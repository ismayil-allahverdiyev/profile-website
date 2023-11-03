import './App.css'
import './index.css'
import NavBar from './components/navbar'
import HomeDisplay from './components/homedisplay'
import ProjectDisplay from './components/projects/project_display'
import BottomBarView from './components/bottombar/view/bottom_bar_view'

function App() {
  return (
    <>
      <div className='flex flex-col'>
        <NavBar />
        <HomeDisplay />
        <ProjectDisplay />
        <BottomBarView />
      </div >
    </>
  )
}

export default App
