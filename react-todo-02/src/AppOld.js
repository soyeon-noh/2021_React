import React from "react";
function AppOld() {
  return (
    <AppContextProvider>
      <main className="todo_main_layout">
        <div>{header}</div>
        <section>{form}</section>
        <section>{children}</section>
      </main>
    </AppContextProvider>
  );
}

export default AppOld;
