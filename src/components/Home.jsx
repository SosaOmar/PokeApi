import React from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setTrainerName } from '../store/slices/nameTrainerInput'
import "../Styles/home.css"

const Home = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const submitName = e => {
    e.preventDefault()
    const inputValue = e.target.name.value.trim();
    if (inputValue.length !== 0) {
      dispatch(setTrainerName(inputValue))
      navigate("/pokedex")
    }
    e.target.name.value = ""
  }





  return (
    <div className='home'>
      <div className="home-welcome">
        <div className="img">
          <img className='home-img' src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1662336000&Signature=N1X9qsulhzXGisfCKemWIc5OOAORyAqqv8uhNYmn4l99gIrr8vDpkPairIFk6JlLWBLfoQHzx~qmjNFTO2HmGFhFEun8N7fYe0R3hsdNcETJ5KrR82JEkA38iorfLhqNqM9b-orkxDekrfcTWSQQnCInerypHJXlP28EdbaJpJZHhgWjWoM8YMaL98TfMQ1Cdj5toi5ZABw0X4NGz4R3N-qEyLX3PVVklmkYAgTuBZUVD13ckMJu-bEEDN~EJdlae52m~mfc2~Xf6lJ5dtv58ablLggRnuWTMpUxZ-zp6WOfMi9uOumbkh6nzSwFncC-RpMTw6Uj24G40yF0biaOrQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
        </div>
        <h1 className='home-welcomeh1'>¡Hi trainer!</h1>
        <p>Give me your name to start</p>

        <form className='home-form' action="" onSubmit={submitName}>
          <input className='home-input' id="name" type="text" placeholder='Your name...' />
          <button className='home-button-login'>Comenzar</button>
        </form>

      </div>
      <div className="home-pokestyle">
        <div className="home-pokestyle-red"></div>
        <div className="home-pokestyle-circle1"></div>
        <div className="home-pokestyle-circle2"></div>
        <div className="home-pokestyle-white"></div>
      </div>
    </div>
  )
}

export default Home