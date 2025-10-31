import OrganismsSummaryAppsBox from '@/component/organisms/o_summary_apps_box';
import OrganismsTotalFuelMonthly from '@/component/organisms/o_total_fuel_monthly';
import OrganismsTotalServiceMonthly from '@/component/organisms/o_total_service_monthly';
import OrganismsTotalTripMonthly from '@/component/organisms/o_total_trip_monthly';
import OrganismsVehicleReadinessBox from '@/component/organisms/o_vehicle_readiness_box';
import * as React from 'react';

interface IDashboardPageProps {
}

const DashboardPage: React.FunctionComponent<IDashboardPageProps> = (props) => {
    return (
        <div className='items-center justify-center min-h-screen bg-warning p-5'>
            <OrganismsSummaryAppsBox/>
            <OrganismsVehicleReadinessBox/>
            <OrganismsTotalTripMonthly/>
            <OrganismsTotalFuelMonthly/>
            <OrganismsTotalServiceMonthly/>
        </div>
    )
};

export default DashboardPage;
