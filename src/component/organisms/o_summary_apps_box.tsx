"use client"
import * as React from 'react';
import AtomText from '../atoms/a_text';
import { getSummaryApps } from '@/service/sv_stats';
import Swal from "sweetalert2";

interface ISummaryAppsBoxProps {
}

const OrganismsSummaryAppsBox: React.FunctionComponent<ISummaryAppsBoxProps> = (props) => {
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const summary = await getSummaryApps()
                setData(summary)
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
        return (
            <div className="flex flex-wrap justify-center gap-4">
                <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
                    <AtomText type='title' text={data.total_vehicle}/>
                    <AtomText type='sub-title' text='Vehicle'/>
                </div>
                <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
                    <AtomText type='title' text={data.total_service}/>
                    <AtomText type='sub-title' text='Service'/>
                </div>
                <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
                    <AtomText type='title' text={data.total_clean}/>
                    <AtomText type='sub-title' text='Clean'/>
                </div>
                <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
                    <AtomText type='title' text={data.total_driver}/>
                    <AtomText type='sub-title' text='Driver'/>
                </div>
                <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
                    <AtomText type='title' text={data.total_trip}/>
                    <AtomText type='sub-title' text='Trip'/>
                </div>
            </div>
        )
    }

    return (
        <div className='container p-4 border-black border-2 rounded-2xl mx-autp'>
            <AtomText type='sub-title' text='Summary'/>
            {
                loading ? (
                    <AtomText type="sub-title-small" text="Loading..." />
                ) : data ? (
                    printData(data)
                ) : (
                    <AtomText type="sub-title-small" text="No data available" />
                )
            }
        </div>
    )
};

export default OrganismsSummaryAppsBox;
