import { createBrowserRouter } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { LoginPage } from './components/LoginPage';
import { DevicesPage } from './components/DevicesPage';
import { ConfigurationPage } from './components/ConfigurationPage';
import { HistoryPage } from './components/HistoryPage';
import { Layout } from './components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: LandingPage },
      { path: 'login', Component: LoginPage },
      { path: 'devices', Component: DevicesPage },
      { path: 'configuration', Component: ConfigurationPage },
      { path: 'history', Component: HistoryPage },
    ],
  },
]);
