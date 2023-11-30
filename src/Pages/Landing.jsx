import React from 'react'
import { Navxd } from '../Components/Navxd'
import '../index.css';

export const Landing = () => {
  return (
    <>
    <div className="landing">
    <div className='heroxdxd'>
        <Navxd/>
        <div className="hero">
            <div className="textoshero">
            <h1>StockMaster</h1>
            <p>Creamos soluciones para todos tus problemas de conteo de productos en tu empresa.
            </p>
            <ul>
                <li> <i class="fa-solid fa-user"></i> Usado por miles</li>
                <li> <i class="fa-solid fa-list"></i>Control de stock</li>
                <li> <i class="fa-solid fa-globe"></i>100% online</li>
            </ul>
            <div className="imagen">
                <img src="" alt="" />
            </div>
            <button>Adquiere StockMaster <i class="fa-solid fa-arrow-right"></i></button>
            <p>Garantia de 30 dias</p>
            </div>
        </div>
        </div>
        <div className="nosotros">
            <h2>¿Porque Nosotros?</h2>
            <p>Somos los lideres en controles de stock, Gracias a nuestros avances dentro de la UI de nuestro software logramos generar simpleza dentro de la vida de nuestros clientes.</p>
            <div className="logocards">
                <div className="logo">
                <i class="fa-solid fa-user"></i>
                    <div className="textologo">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nemo molestias, modi molestiae laudantium fuga fugiat sunt deserunt, blanditiis voluptatibus nostrum odit quas commodi laborum explicabo temporibus tempora? Eaque, enim.
                    </div>
                </div>
                <div className="logo">
                <i class="fa-solid fa-briefcase"></i>
                    <div className="textologo">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quas illum alias perspiciatis molestias, velit perferendis, nisi reprehenderit distinctio ab quos corrupti, blanditiis voluptatum sunt explicabo necessitatibus porro ea aperiam!
                    </div>
                </div>
                <div className="logo">
                <i class="fa-solid fa-pencil"></i>
                    <div className="textologo">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vel quis iusto nesciunt nulla? Veniam pariatur quas, magnam iste, modi suscipit fuga provident eum nulla animi, officia ex facere quo.
                    </div>
                </div>
            </div>
        </div>
        <div className='Beneficios'>
        <h2>¿Que conseguiras?</h2>
        <ol>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
        </ol>
        <img src="" alt="" />
        <button>Consigue tus primeros 30 dias gratis</button>
        <p>Luego $40 por mes, cancela cuando quieras</p>
        </div>
        </div>
    </>
  )
}
