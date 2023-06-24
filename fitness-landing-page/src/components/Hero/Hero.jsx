import React from 'react'
import Heart from '../../assets/heart.png'
import Header from '../Header/Header'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />

        <div className="the-best">
          <div></div>
          <span>a melhor academia da sua cidade </span>
        </div>

        <div className="hero-text">
          <div>
            <span className='stroke-text'>Molde </span>
            <span>Seu
            </span>
          </div>

          <div>
            <span>Corpo Ideal</span>

          </div>
          <div>
            <span>Aqui, vamos ajudá-lo a moldar e construir o seu corpo ideal e aproveitar ao máximo a vida. </span>
          </div>
        </div>

        <div className='count'>
          <div>
            <span>+140</span>
            <span>personais experientes</span>
          </div>
          <div>
            <span>+987</span>
            <span>alunos matriculados</span>
          </div>
          <div>
            <span>+50</span>
            <span>treinos personalizados</span>
          </div>
        </div>

        <div className="hero-buttons">
          <buttons className='btn'>Começar</buttons>
          <buttons className='btn' >Saiba Mais</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className='btn'>Comece Agora</button>

        <div className='heart-rate'>
          <img src={Heart} alt="heart" />
          <span>Frequência Cardíaca</span>116 bpm<span></span>
        </div>

      </div>
    </div>
  )
}

export default Hero