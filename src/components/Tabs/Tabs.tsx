import { TView } from '../../types';

export type TabsProps = {
    activeTab: string;
    onTabChange: (view: TView) => void;
};

export const Tabs = ({ activeTab, onTabChange }: TabsProps) => {
    const handleViewSelection = (tab: TView) => () => {
        onTabChange(tab);
    };

    return (
        <div className="tabs-container">
            {
                Object.values(TView).map(tab => {
                    return (
                        <button
                            key={tab}
                            className={
                                [
                                    'tab',
                                    activeTab === tab ? 'active-tab' : ''
                                ].join(' ')
                            }
                            type="button"
                            onClick={handleViewSelection(tab)}
                        >
                                {tab}
                        </button>
                    );
                })
            }
        </div>
    );
};
