import { useEffect, useState } from 'react'
import SideBar from './components/SideBar'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  function handleModal(){
    setShowModal(!showModal)
  }

  useEffect(() => {
    async function fetchData(){
      const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_API_KEY}`
      try{
        const res = await fetch(url)
        const api_data = await res.json()
        // console.log('DATA\n', data)
        setData(api_data)
      } catch(err){
        console.log(err.message)
      }
    }
    fetchData()
  }, [])

  return (
    <>
    {data ? (<Main data={data} />): (
      <div className='loadingState'>
        <i className="fa-solid fa-gear"></i>
      </div>
    )}
    {showModal && (
      <SideBar data={data} handleModal={handleModal}/>
    )}
    {data && (<Footer data={data} handleModal={handleModal}/>)}
    </>
  )
}

export default App