import React, { FormEvent, useEffect, useRef } from "react";

export const Refs: React.FC = () => {
  const inputNameRef = useRef<HTMLInputElement>(null); //{current : null}

  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  function handleOnSubmit(event: FormEvent) {
    event.preventDefault(); //evita que a pagina seja carregada ao submeter o formulario
  }

  return (
    <form
      style={{ padding: "2rem" }}
      onSubmit={(event) => handleOnSubmit(event)}
    >
      <h1>useRef</h1>

      <br />

      <input type="text" placeholder="Nome Completo" ref={inputNameRef} />
      <input type="text" placeholder="E-mail" ref={inputEmailRef} />

      <input type="text" placeholder="Senha" ref={inputPasswordRef} />

      <br />
      <button type="submit">Submeter</button>
    </form>
  );
};

//useRef serve para aplicaçoes grandes
//useState e para aplicaçoes pequenas
