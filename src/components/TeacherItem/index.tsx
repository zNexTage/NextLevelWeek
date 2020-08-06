import React from 'react'

import "./styles.css"
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://lastfm.freetls.fastly.net/i/u/770x0/5b54d5ecc1c2e5d24dd1f391a158358c.jpg" alt="Majiko" />
                <div>
                    <strong>Majiko</strong>
                    <span>
                        Química
                    </span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada.
              <br />    <br />
          Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
          </p>
            <footer>
                <p>
                    Preço/hora
              <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
            </footer>
        </article>
    )
}

export default TeacherItem