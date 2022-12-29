import React, { useState, useEffect } from 'react';
import { createMemoryHistory } from 'history';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

// IMPORT PAGES
import WelcomePage from './OnboardingPages/WelcomePage';
import ImportSecretKey from './OnboardingPages/OldUser/ImportSecretKey';
import OldUserSignature from './OnboardingPages/OldUser/OldUserSignature';
import GetSecretKey from './OnboardingPages/NewUser/GetSecretKey';
import CreatePassword from './OnboardingPages/NewUser/CreatePassword';
import Signature from './OnboardingPages/NewUser/Signature';
import SettingsHome from './DropDown/Settings/SettingsHome';
import ShowSecretKey from './DropDown/Settings/Options/ShowSecretKey';
import Feedback from './DropDown/Feedback';
import Profile from './DropDown/Profile';
import DashboardHome from './HomePages/Dashboard/DashboardHome';
import WalletHome from './HomePages/Wallet/WalletHome';
import Logout from './DropDown/Logout';

const history = createMemoryHistory();
const App = () => {
  const [tabId, setTabId] = useState('');
  const [dynamicURL, setDynamicURL] = useState('');
  const [domain, setDomain] = useState('')
  const dispatch = useDispatch();

  useEffect(() => {
    chrome.tabs.onActivated.addListener(function (activeInfo) {
      setTabId(activeInfo?.tabId);
    });
  }, []);

  useEffect(() => {
    function getActiveTab() {
      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var tab = tabs[0]?.url;
        if (tab) {
          setDynamicURL(tab)
          let val = tab?.split('/');
          let result = val[0] + '//' + val[2];
          setDomain(result);
        }
      });
    }
    getActiveTab();
  }, [tabId]);

  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/GetSecretKey" element={<GetSecretKey />} />
        <Route path="/ImportSecretKey" element={<ImportSecretKey />} />
        <Route path="/CreatePassword" element={<CreatePassword />} />
        <Route path="/Signature" element={<Signature />} />
        <Route path="/SettingsHome" element={<SettingsHome />} />
        <Route path="/ShowSecretKey" element={<ShowSecretKey />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/DashboardHome" element={<DashboardHome dynamicURL={dynamicURL} domain={domain}/>} />
        <Route path="/WalletHome" element={<WalletHome />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/OldUserSignature" element={<OldUserSignature />} />
      </Routes>
    </Router>
  );
}

export default App;
