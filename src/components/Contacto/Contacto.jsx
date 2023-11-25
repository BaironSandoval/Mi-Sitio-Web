import React from 'react';
import "./Contacto.css"
const Contacto = () => {
  return (
    <section id="contacto" className="contacto">
      <div className="content-section">
      <h2>Contacto</h2>
        <div className="row">
          <form
            id="form"
            className="column"
            action="https://formsubmit.co/baironalfonsosandovalnino@gmail.com"
            method="POST"
          >
            <label htmlFor="name"></label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Tu nombre completo"
              required
            />
            <label htmlFor="phone"></label>
            <input
              name="phone"
              id="phone"
              type="text"
              placeholder="Teléfono"
              required
            />
            <label htmlFor="email"></label>
            <input
              name="email"
              id="email"
              type="text"
              placeholder="Dirección de correo"
              required
            />
            <label htmlFor="message"></label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Mensaje"
              required
            ></textarea>
            <input type="hidden" name="_captcha" value="false" />

            <input
              type="hidden"
              name="_next"
              value="https://baironsandoval.netlify.app/"
            />

            <input
              type="hidden"
              name="_blacklist"
              value="spammy pattern, banned term, phrase"
            />
            <button type="submit">
              Enviar Mensaje <i className="fa-regular fa-paper-plane"></i>
              <span className="overlay"></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
