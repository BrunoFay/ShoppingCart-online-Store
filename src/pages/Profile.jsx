import React from 'react'
import Footer from '../components/footer/Footer'
import HeaderPages from '../components/header/HeaderPages'
import './profile.css'

export default function Profile() {
  return (
    <>
      <HeaderPages />
      <main className='main-profile'>
        <section>
          <div className="container">
            <img src="https://i.pinimg.com/564x/66/52/ba/6652bab65936a2a8bc51b9a0549c2370.jpg" alt="avatar" />
            <div className="user-info">
              <h1>Nome do usuário</h1>
              <span>Endereço do usuario</span>
              <button>Sair</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
