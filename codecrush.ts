import React, { useState } from 'react';
import { AppProvider } from '@/context/AppContext';
import NavBar from '@/components/NavBar';
import HomeScreen from '@/screens/HomeScreen';
import UsersScreen from '@/screens/UsersScreen';
import StatusScreen from '@/screens/StatusScreen';
import SettingsScreen from '@/screens/SettingsScreen';

type Tab = 'home' | 'users' | 'status' | 'settings';

const TrustTrackApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  const handleNavigate = (tab: Tab) => {
    setActiveTab(tab);
  };

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen onNavigate={handleNavigate} />;
      case 'users':
        return (
          <UsersScreen
            onBack={() => setActiveTab('home')}
            onSelectUser={() => setActiveTab('status')}
          />
        );
      case 'status':
        return <StatusScreen onBack={() => setActiveTab('home')} />;
      case 'settings':
        return <SettingsScreen onBack={() => setActiveTab('home')} />;
      default:
        return <HomeScreen onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderScreen()}
      <NavBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

const Index: React.FC = () => {
  return (
    <AppProvider>
      <TrustTrackApp />
    </AppProvider>
  );
};

export default Index;