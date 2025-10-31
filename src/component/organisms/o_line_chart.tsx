'use client'
import * as React from 'react';
import dynamic from 'next/dynamic';
import AtomText from '../atoms/a_text';
import MoleculesNoDataBox from '../molecules/m_no_data_box';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const colorPalleteChart = ['#46dca2', '#f55d86', '#FFC352', '#00b8ff']

interface IOrganismsLineChartProps {
    title: string
    data: any
}

const OrganismsLineChart: React.FunctionComponent<IOrganismsLineChartProps> = ({ title, data} ) => {
    if (!data || data.length === 0) return <MoleculesNoDataBox/>

    const hasValidStructure = Object.keys(data[0]).length === 2 && typeof data[0].context === 'string' && Number.isInteger(data[0].total)

    if (!hasValidStructure) return <MoleculesNoDataBox/>

    const totals = data.map(d => d.total)
    const contexts = data.map(d => d.context)

    const options: ApexCharts.ApexOptions = {
        chart: {
            type: 'area',
            height: 350,
            toolbar: { show: false },
            zoom: { enabled: false },
        },
        colors: colorPalleteChart || ['#008FFB', '#00E396', '#FEB019'],
        legend: { position: 'bottom', },
        xaxis: { categories: contexts },
        stroke: { curve: 'smooth',},
        responsive: [
            {
                options: {
                    chart: { width: 160 },
                    legend: { position: 'bottom' },
                },
            },
        ],
    }

    const series = [
        { name: title, data: totals },
    ]

    return (
        <div className="w-full">
            <AtomText type='sub-title' text={title} />
            <ApexChart options={options} series={series} type="area" height={350} />
        </div>
    )
};

export default OrganismsLineChart;
