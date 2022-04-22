import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import Footer from '../components/footer/Footer';
import HeaderPages from '../components/header/HeaderPages';
import { AUTHORS } from '../services/constants';
import "./contacts.css";

export default function Contacts() {
  
  return (
    <>
      <HeaderPages />
      <main className='main-authors'>
        {
          AUTHORS.map((author, index) => (
            <nav key={index}>
              <img src={author.avatar} alt={`perfil image of ${author.name}`} />
              <section>
                <h2>{author.name}</h2>
                <div>
                  <a target={'_blank'} href={author.github}>
                    <BsGithub />
                  </a>
                  <a target={'_blank'} href={author.linkedin}>
                    <BsLinkedin />
                  </a>
                </div>
              </section>
            </nav>
          )
          )}
      </main>
      <Footer />
    </>
  )
}

