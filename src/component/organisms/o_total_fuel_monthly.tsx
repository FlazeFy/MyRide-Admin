"use client"
import { getTotalFuelMonthly } from '@/service/sv_stats';
import * as React from 'react';
import OrganismsLineChart from './o_line_chart';
import Swal from "sweetalert2";
import AtomText from '../atoms/a_text';

interface IOrganismsTotalFuelMonthlyProps {
}

const OrganismsTotalFuelMonthly: React.FunctionComponent<IOrganismsTotalFuelMonthlyProps> = (props) => {
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getTotalFuelMonthly(2025, 'fuel_volume')
                setData(data)
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
        return <OrganismsLineChart title='Fuel Consumption Monthly' data={data}/>
    }

    return (
        <div className='container p-4 border-black border-2 rounded-2xl mx-autp'>
            {
                loading ? ( 
                    <AtomText type="sub-title-small" text="Loading..."/>
                ) : data ? (
                    printData(data)
                ) : (
                    <AtomText type="sub-title-small" text="No data available"/>
                )
            }
        </div>
    )
};

export default OrganismsTotalFuelMonthly;
