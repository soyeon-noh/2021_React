import React from "react";

import AppContextProvider from "../context/AppContextProvider";

function FormLayout({ form, children }) {
  return (
    <AppContextProvider>
      <main>
        <section className="input">{form}</section>
        <section className="list">{children}</section>
      </main>
    </AppContextProvider>
  );
}

export default FormLayout;
