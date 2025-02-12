import { useState } from "react"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Tech from "./components/Tech"
import Modal from "./components/Modal"


function App() {

  const [modalOpen, setModalOpen] = useState(false)
  const [modalProject, setModalProject] = useState("")
  const [showModal, setShowModal] = useState(false)

  const openModal = (project) => {
    setModalProject(project)
    setModalOpen(true)
    setTimeout(() => setShowModal(true), 10)
    // setTimeout(() => setModalOpen(true), 10)
  }

  const closeModal = () => {
    setShowModal(false)
    setTimeout(() => setModalOpen(false), 1000);
  }



  return (
    <>
    <div className='fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'></div>
    <main className={`flex flex-col items-center px-4 md:px-8`}>
      <Navbar />
      <Hero />
      <Tech />
      <Projects openModal={openModal}/>
      <Contact />
      {modalOpen && <Modal closeModal={closeModal} project={modalProject} modalOpen={modalOpen} showModal={showModal}/>}
    </main>
    </>
  )
}

export default App
