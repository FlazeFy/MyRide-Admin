import OrganismsSummaryAppsBox from '@/component/organisms/o_summary_apps_box';
import OrganismsVehicleReadinessBox from '@/component/organisms/o_vehicle_readiness_box';
import * as React from 'react';

interface IDashboardPageProps {
}

const DashboardPage: React.FunctionComponent<IDashboardPageProps> = (props) => {
    return (
        <div className='items-center justify-center min-h-screen bg-warning p-5'>
            <OrganismsSummaryAppsBox/>
            <OrganismsVehicleReadinessBox/>
        </div>
    )
};

export default DashboardPage;
