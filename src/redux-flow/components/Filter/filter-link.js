"use strict";

import React from "react";

// Componente que retorna um html dinâmico

const FilterLink = ({ action, activeFilter, children, onClick }) => {
  const span = { tag: "span" };
  const a = { tag: "a", href: "#", onClick };

  const component = action === activeFilter ? span : a;

  return (
    <component.tag // Pode utilizar letras minúsculas quando uma expressão é colocada como nome da tag. Não serve para componentes customizados.
      href={component.href}
      onClick={component.onClick}
      style={{ marginRight: 10 }}
    >
      {children}
    </component.tag>
  );
};

export default FilterLink;
