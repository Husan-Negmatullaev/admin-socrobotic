import React from "react";
import { Routes, Route } from "react-router-dom";

import { Wrapper } from "@layouts";
import { PannelPage } from "@views";

import { isMobile } from "@utils/helpers/isMobile.helpers.js";

const App = () => {

  React.useEffect(() => {
    if (isMobile.any()) document.documentElement.classList.add('touch');
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route index element={<PannelPage />} />
      </Route>
    </Routes>
  )
};

export default App;