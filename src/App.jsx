import React from "react";
import { Routes, Route } from "react-router-dom";

import { Wrapper } from "@layouts";
import { ConstructorPage, DepositsPage, PannelPage, SettingsPage, SupportPage } from "@views";
import { MailingPage } from "@views/mailing";

import { isMobile } from "@utils/helpers/isMobile.helpers.js";

const App = () => {

  React.useEffect(() => {
    if (isMobile.any()) document.documentElement.classList.add('touch');
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route index element={<PannelPage />} /> {/* path="users" */}
        <Route path="deposits" element={<DepositsPage />} />
        <Route path="constructor" element={<ConstructorPage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="mailing" element={<MailingPage />} />
      </Route>
    </Routes>
  )
};

export default App;