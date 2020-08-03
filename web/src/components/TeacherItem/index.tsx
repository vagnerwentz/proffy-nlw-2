import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/26815672?s=460&u=4523985fe51eda4eebc170221cb99aa0ae713c8a&v=4" alt="Vagner Wentz"/>
        <div>
          <strong>Vagner Wentz</strong>
          <span>Cálculo Diferencial e Integral II</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores formas de aprender cálculo avançado.
        <br /><br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através
        da matemática. Mais de 200.000 pessoas já passaram pelos meus cálculos e também 
        Isaac Newton foi aluno de Vagner Wentz. 
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;