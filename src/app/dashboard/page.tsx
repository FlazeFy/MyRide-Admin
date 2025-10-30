import OrganismsSummaryAppsBox from '@/component/organisms/o_summary_apps_box';
import * as React from 'react';

interface IDashboardPageProps {
}

const DashboardPage: React.FunctionComponent<IDashboardPageProps> = (props) => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-primary'>
            <OrganismsSummaryAppsBox/>
        </div>
    )
};

export default DashboardPage;
