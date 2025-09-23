import { useCallback, useState } from 'react';

import { CardContainer } from './components/Cards/CardContainer';
import { Tabs } from './components/Tabs/Tabs';
import { TView } from './types';
import './App.css';

const ErrorComponent = () => {
    return <>Error!</>;
};

interface TabConfig {
    description: string;
    label: string;
    component: React.ReactNode;
}

const tabConfig: Record<TView, TabConfig> = {
    [TView.CARDS]: {
        label: TView.CARDS,
        description: 'Playing Cards',
        component: <CardContainer />
    },
    [TView.OTHER]: {
        label: 'Other',
        description: 'Other',
        component: <>Under Development</>
    }
};

function App() {
    const [view, setView] = useState<TView>(TView.CARDS);

    const handleTabChange = useCallback((tab: TView) => {
        setView(tab);
    }, []);

    return (
        <div id="app">
            <header id="view-controls">
                <div className="view-description">{tabConfig[view].description}</div>
                <Tabs activeTab={view} onTabChange={handleTabChange} />
            </header>
            <div className="component-display">
                {tabConfig[view].component ?? <ErrorComponent />}
            </div>
        </div>
    );
}

export default App
