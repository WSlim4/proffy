import React from 'react'
import PageHeader from '../../components/PageHeader'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'


import './styles.css'


export default function TeacherList() {
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form action="" id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>
                    
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da Semana</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>           
             
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/46944462?s=400&u=4937eef39bf3371ce4c21a41de3eba67e6790cb3&v=4" alt="Wesley Lima"/>
                        <div>
                            <strong>Wesley Lima</strong>
                            <span>Matemática</span>
                        </div>
                    </header>
                    <p>
                        Entusiasta dos números e da programação
                        <br/><br/>
                        Apaixonado por brincar com os números, pelo universo e a forma como ele se mostra através deles. Entusiasta de tudo o que se faz um bom desafio.
                    </p>
                    <footer>
                        <p> 
                            Preço/hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="WhatsApp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
            </main>
        </div>
    )
}