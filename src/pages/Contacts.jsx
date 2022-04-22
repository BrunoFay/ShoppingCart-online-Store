import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import Footer from '../components/footer/Footer';
import HeaderPages from '../components/header/HeaderPages';
import "./contacts.css";

const AUTHORS = [
  {
    name: 'Bruno Fay',
    avatar: 'https://scontent.fpoa8-1.fna.fbcdn.net/v/t1.6435-9/57308546_2185311971563376_8153247580340355072_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGRxhmS-uwGpCZavD_tlXEEIsnzFEUlWh4iyfMURSVaHj6Pw00D5GL6osHcHfpd0k7215RPeqO070tgUattjJqA&_nc_ohc=PwApsE03BZwAX8tVvoi&_nc_ht=scontent.fpoa8-1.fna&oh=00_AT9GWKH7tXwQyIeUqzTLnfpCE-J1XreKR6MJSVccNAMWNQ&oe=62863808',
    linkedin: 'https://www.linkedin.com/in/brunofay/',
    github: 'https://github.com/BrunoFay'
  },
  {
    name: 'Felipe Sanches',
    avatar: 'https://media-exp1.licdn.com/dms/image/D4E35AQHn1jGh-RrSSg/profile-framedphoto-shrink_800_800/0/1646687838805?e=2147483647&v=beta&t=_VmuukyXrvrBVHykZNPpLBN2nauESMkmZJg93EBJ3Rk',
    linkedin: 'https://www.linkedin.com/in/felipesanchesm/',
    github: 'https://github.com/sanchesm92'
  },
  {
    name: 'Felipe Pulgas',
    avatar: 'https://media-exp1.licdn.com/dms/image/D5635AQEIvSH3loRECA/profile-framedphoto-shrink_800_800/0/1649364478781?e=2147483647&v=beta&t=AGFS_Gc6Ks6eHMC4J6xVy_Q1WfQrzLlpxIGbFMir0xw',
    linkedin: 'https://www.linkedin.com/in/felipe-pugas/',
    github: 'https://github.com/felipepugas'
  },
  {
    name: 'Kevin Senna',
    avatar: 'https://media-exp1.licdn.com/dms/image/D4D35AQHO0mcDW0B4vg/profile-framedphoto-shrink_800_800/0/1646673944969?e=2147483647&v=beta&t=e2CzdxJG3C81kQYZJ8zR98FEl4Marst-GweFNoyeQj4',
    linkedin: 'https://www.linkedin.com/in/kevinsena/',
    github: 'https://github.com/KevinSena?tab=repositories'
  }]

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

