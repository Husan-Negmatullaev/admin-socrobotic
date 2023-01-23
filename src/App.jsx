import React from "react";
import { Routes, Route } from "react-router-dom";

import { Wrapper } from "@layouts";
import {
  AdminsPage,
  ConstructorPage,
  DepositsPage,
  LabelsPage,
  PanelPage,
  PermanentDiscountPage,
  SettingsPage,
  SupportPage,
  СouponsPage,
} from "@views";
import { MailingPage, MailingListPage } from "@views/mailing";
import { BriefingPage, SellsPage, ViewsPage } from "@views/stats";
import {
  CategoriesPage,
  AddCategory,
  NewHeading,
  AllHeadings,
  ListHeadings,
  PromoPage,
  ListSuppliersPage,
  AddAdminPage,
} from "@views/catalog-and-products";
import { PayokSettingPage, QiwiSettingPage, UMoneySettingPage } from "@views/money-settings";
import { ProviderListPage, ProviderNewPositionPage, ProviderSalesStatisticsPage } from "@views/provider";

import { isMobile } from "@utils/helpers/isMobile.helpers.js";
import PaymentMethodsPage from "./views/catalog-and-products/PaymentMethodsPage/PaymentMethodsPage";

const App = () => {
  React.useEffect(() => {
    if (isMobile.any()) document.documentElement.classList.add("touch");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route index element={<PanelPage />} /> {/* path="users" */}
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
        <Route path="categories/">
          <Route index element={<CategoriesPage />} />
          <Route path="add" element={<AddCategory />} />
          <Route path="new-heading" element={<NewHeading />} />
          <Route path="all-headings" element={<AllHeadings />} />
          <Route path="list-headings" element={<ListHeadings />} />
          <Route path="promo" element={<PromoPage />} />
          <Route path="list-suppliers" element={<ListSuppliersPage />} />
          <Route path="add-admin" element={<AddAdminPage />} />
          <Route path="payment-method" element={<PaymentMethodsPage />} />
        </Route>
        <Route path="methods/">
          <Route path="qiwi" element={<QiwiSettingPage />} />
          <Route path="payok" element={<PayokSettingPage />} />
          <Route path="umoney" element={<UMoneySettingPage />} />
        </Route>
        <Route path="provider/">
          <Route index element={<ProviderListPage />} />
          <Route path={"new-position"} element={<ProviderNewPositionPage />} />
          <Route path={"stats"} element={<ProviderSalesStatisticsPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
