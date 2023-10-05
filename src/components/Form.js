import React from 'react';

const Form = () => {
  return (
    <form className="form" id="contactForms" action="#">
      <fieldset>
        <legend>Completa el formulario</legend>

        <div className="inputs">
          <div className="input">
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" id="name" placeholder="Nombre" />
          </div>

          <div className="input">
            <label htmlFor="phone">Telefono</label>
            <input type="number" name="phone" id="phone" placeholder="99999999" />
          </div>

          <div className="input">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="example@example.com" />
          </div>

          <div className="input">
            <label htmlFor="message">Mensaje</label>
            <textarea name="message" id="message" cols="30" rows="2"></textarea>
          </div>
        </div>
        <input className="button full" type="submit" />
      </fieldset>
    </form>
  );
};

export default Form;
