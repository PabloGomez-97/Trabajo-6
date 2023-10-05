import React from 'react';
import AlfonsoImage from './img/Alfonso.jpg';
import PabloImage from './img/Pablo.jpeg';
import JorgeImage from './img/Jorge.jpg';

const Paragraph = () => {
  return (
    <div>

      <div className="subjects">
        <section className="subject">
          <div className="persona">
            <h2>¿Quiénes Somos?</h2>
            <p>
              Nos definimos como un equipo de estudiantes que realmente se apasionan por idear soluciones tecnológicas
              innovadoras. Nuestro enfoque principal radica en comprender y aplicar los principios esenciales del diseño
              de software para abordar problemas complejos de manera efectiva. Aprovechamos al máximo nuestra variedad de
              habilidades y perspectivas individuales para colaborar de manera colaborativa en la concepción, planificación
              y ejecución de proyectos. Valoramos especialmente la comunicación abierta, el intercambio constante de ideas
              y nuestra capacidad de adaptación, lo que nos permite afrontar cambios en los requisitos y encontrar soluciones
              originales. En última instancia, nuestra meta radica en desarrollar nuestras habilidades en el diseño de software
              mientras trabajamos conjuntamente para dar vida a aplicaciones funcionales y de excelencia.
            </p>
          </div>
        </section>

        <section className="subject">
          <div className="persona">
            <h2>¿Cuáles son nuestros objetivos?</h2>
            <ul>
              <li>Comprender los conceptos fundamentales del diseño de software.</li>
              <li>Aplicar patrones de diseño en la creación de soluciones técnicas.</li>
              <li>Desarrollar habilidades en la planificación y gestión de proyectos de software.</li>
              <li>Explorar técnicas de optimización de código para mejorar la eficiencia.</li>
              <li>Aprender a trabajar en equipo en entornos de desarrollo colaborativo.</li>
              <li>Profundizar en la resolución de problemas relacionados con el software.</li>
              <li>Adquirir conocimientos en el uso de herramientas de control de versiones.</li>
            </ul>
          </div>
        </section>

        <section className="subject">
          <div className="persona">
            <h2>Formación del grupo</h2>
            <section className="persona center">
                <div className="image-container">
                    <img src={PabloImage} alt="Programador Alfonso" width="120" height="200" />
                    <img src={AlfonsoImage} alt="Programador Alfonso" width="120" height="200" />
                    <img src={JorgeImage} alt="Programador Alfonso" width="120" height="200" />
                </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Paragraph;
