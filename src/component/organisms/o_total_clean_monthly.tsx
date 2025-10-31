"use client"
import * as React from 'react';
import OrganismsLineChart from './o_line_chart';
import Swal from "sweetalert2";
import AtomText from '../atoms/a_text';
import { getTotalCleanMonthly } from '@/service/sv_stats';

interface IOrganismsTotalCleanMonthlyProps {
}

const OrganismsTotalCleanMonthly: React.FunctionComponent<IOrganismsTotalCleanMonthlyProps> = (props) => {
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getTotalCleanMonthly(2025, 'total_item')
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
        return <OrganismsLineChart title='Total Clean Monthly' data={data}/>
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

export default OrganismsTotalCleanMonthly;
