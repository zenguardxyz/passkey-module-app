// import { RequireAuth, NotFound } from "../components";
import { createHashRouter,RouterProvider, Routes, Route } from 'react-router-dom';
import { RoutePath } from './route-path';
import { AccountPage } from '@/pages/account/account.page';


export const Navigation = () => {
  return (
    <Routes>
      <Route path={RoutePath.home} element={<AccountPage />} />
      <Route path={RoutePath.account} element={<AccountPage />} />
    </Routes>
  );
};

// eslint-disable-next-line arrow-body-style
export const LandingPageNavigation = () => {
  return (
    <>
      {/* <GlobalStyle /> */}
      <Routes>
        <Route path={RoutePath.home} element={<AccountPage />} />
      </Routes>
    </>
  );
};
