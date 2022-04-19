import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import './footer.css';


export default function Footer() {
    return (
        <footer>
            <p>Bruno Fay</p>
            <div>
                <a target={'_blank'} href='https://github.com/BrunoFay'>
                    <BsGithub />
                </a>
                <a target={'_blank'} href='https://www.linkedin.com/in/brunofay/'>
                    <BsLinkedin />
                </a>
            </div>
        </footer>
    )

}
