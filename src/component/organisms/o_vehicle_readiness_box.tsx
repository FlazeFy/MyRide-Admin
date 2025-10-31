"use client"
import * as React from 'react';
import AtomText from '../atoms/a_text';
import { getVehicleReadiness } from '@/service/sv_vehicle';
import Swal from "sweetalert2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/button';

interface IVehicleReadinessBoxProps {
}

const OrganismsVehicleReadinessBox: React.FunctionComponent<IVehicleReadinessBoxProps> = (props) => {
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getVehicleReadiness()
                setData(data.data)
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Failed",
                    text: "Something went wrong"
                });
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    },[])

    const printData = (data: any) => {
        return data.map((dt: any, idx: number) => {
            return (
                <tr className="border-b border-gray-200" key={idx}>
                    <td className="py-2">
                        <span className="font-medium plate-number">{dt.vehicle_plate_number}</span>
                    </td>
                    <td className="text-left py-2">
                        <p className="m-0 font-medium">
                        {dt.vehicle_name} 
                        {dt.vehicle_transmission == 'Automatic' ? 'AT' : dt.vehicle_transmission == 'Manual' ? 'MT' : dt.vehicle_transmission}
                        {dt.deleted_at ? '<span className="ml-2 inline-block rounded-full bg-red-500 text-white text-xs px-2 py-[2px]">Deleted</span>' : ''}
                        </p>
                        <p className="m-0 text-gray-500 text-sm">{dt.vehicle_type}</p>
                    </td>
                    <td className="py-2">
                        <span className={`chip ${dt.vehicle_status === 'Available' ? 'bg-success' : dt.vehicle_status === 'Reserved' ? 'bg-warning' : 'bg-danger'}`}>
                            {dt.vehicle_status}
                        </span>
                    </td>
                    <td className="py-2">
                        <span className={`chip ${dt.vehicle_fuel_status === 'Full' || dt.vehicle_fuel_status === 'High' ? 'bg-success' : dt.vehicle_fuel_status === 'Normal' ? 'bg-warning' : 'bg-danger'}`}>
                            {dt.vehicle_fuel_status}
                        </span>
                    </td>
                    <td className="py-2">
                        <span className='mr-1'><FontAwesomeIcon icon={faUsers}/></span> {dt.vehicle_capacity}
                    </td>
                    <td className="py-2">
                        <Button type="submit" className="btn-success"><FontAwesomeIcon icon={faPlay}/> </Button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <div className='container p-4 border-black border-2 rounded-2xl mx-autp'>
            <AtomText type='sub-title' text='Vehicle Readiness'/>
            <table className="table text-center table-bordered">
                <thead>
                    <tr>
                        <th className="w-[140px] border p-2">Plate Number</th>
                        <th className="border p-2">Vehicle Name & Type</th>
                        <th className="border p-2">Status</th>
                        <th className="border p-2">Fuel</th>
                        <th className="border p-2">Capacity</th>
                        <th className="border p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                        loading ? (
                            <tr>
                                <td colSpan={6} className="px-2 py-4 text-gray-500">
                                    <AtomText type="sub-title-small" text="Loading..."/>
                                </td>
                            </tr>
                        ) : data ? (
                            printData(data)
                        ) : (
                            <tr>
                                <td colSpan={6} className="px-2 py-4 text-gray-500">
                                    <AtomText type="sub-title-small" text="No data available"/>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
};

export default OrganismsVehicleReadinessBox;
