import React from 'react'
import Loading from './Loading'
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';



export default function Footer() {

    return (
        <footer>
            <Loading />
            <p> By:</p>
            <nav>
                <p>Bruno Fay</p>
                <a target={'_blank'} href='https://github.com/BrunoFay'>
                    <BsGithub />
                </a>
                <a target={'_blank'} href='https://www.linkedin.com/in/brunofay/'>
                    <BsLinkedin />
                </a>
            </nav>
            <nav>
                <p>Felipe Sanches</p>
                <a target={'_blank'} href='https://www.google.com'>
                    <BsGithub />
                </a>
                <a target={'_blank'} href='https://www.linkedin.com/in/felipesanchesm/'>
                    <BsLinkedin />
                </a>
            </nav>
            <nav>
                <p>Felipe Pulgas</p>
                <a target={'_blank'} href='https://www.google.com'>
                    <BsGithub />
                </a>
                <a target={'_blank'} href='https://www.linkedin.com/in/felipe-pugas/'>
                    <BsLinkedin />
                </a>
            </nav>
            <nav>
                <p>Kevin Senna</p>
                <a target={'_blank'} href='https://www.google.com'>
                    <BsGithub />
                </a>
                <a target={'_blank'} href='https://www.linkedin.com/in/kevinsena/'>
                    <BsLinkedin />
                </a>

            </nav>

        </footer>
    )

}
