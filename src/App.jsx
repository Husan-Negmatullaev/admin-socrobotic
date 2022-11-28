import React from "react";
import { Routes, Route } from "react-router-dom";

import { Wrapper } from "@layouts";
import {
  AdminsPage,
  ConstructorPage,
  DepositsPage,
  LabelsPage,
  PannelPage,
  PermanentDiscountPage,
  SettingsPage,
  SupportPage,
  СouponsPage,
} from "@views";
import { MailingPage, MailingListPage } from "@views/mailing";
import { BriefingPage, SellsPage, ViewsPage } from "@views/stats";

import { isMobile } from "@utils/helpers/isMobile.helpers.js";

const App = () => {

  React.useEffect(() => {
    if (isMobile.any()) document.documentElement.classList.add("touch");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route index element={<PannelPage />} /> {/* path="users" */}
        <Route path="deposits" element={<DepositsPage />} />
        <Route path="constructor" element={<ConstructorPage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="mailing/">
          <Route index element={<MailingPage />} />
          <Route path="list" element={<MailingListPage />} />
        </Route>
        <Route path="permanent_discount" element={<PermanentDiscountPage />} />
        <Route path="coupons" element={<СouponsPage />} />
        <Route path="admins" element={<AdminsPage />} />
        <Route path="labels" element={<LabelsPage />} />
        <Route path="stats" element={<BriefingPage />} />
        <Route path="sells" element={<SellsPage />} />
        <Route path="views" element={<ViewsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
