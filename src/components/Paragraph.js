import React from 'react';
import miGif from './img/giphy.gif'; // Importa el GIF

const Paragraph = () => {
  return (
    <div>
      <div className="subjects">
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
          <div className="persona">
          <img src={miGif} alt="Mi GIF" /> {}
          </div>
      </div>
    </div>
  );
};

export default Paragraph;

/*  <section className="subject">
      <div className="persona">
          <h2>¿Cuáles son nuestros objetivos?</h2>
            <div className="objetivos">
              <li>Comprender los conceptos fundamentales del diseño de software.</li>
              <li>Aplicar patrones de diseño en la creación de soluciones técnicas.</li>
              <li>Desarrollar habilidades en la planificación y gestión de proyectos de software.</li>
              <li>Explorar técnicas de optimización de código para mejorar la eficiencia.</li>
              <li>Aprender a trabajar en equipo en entornos de desarrollo colaborativo.</li>
              <li>Profundizar en la resolución de problemas relacionados con el software.</li>
              <li>Adquirir conocimientos en el uso de herramientas de control de versiones.</li>
            </div>
          </div>
      </section>
        
*/