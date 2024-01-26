import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

export default function Polarchart() {

    const chartRef = useRef(null);
    const charInstance = useRef(null);

    useEffect(() => {
        if (charInstance.current) {
            charInstance.current.destroy();
        }
        const myChartRef = chartRef.current.getContext('2d');

        charInstance.current = new Chart(myChartRef, {
            type: "polarArea",
            data: {
                labels: ["Salud", "Vida", "Profesión", "Pareja", "Familia"],
                datasets: [{
                    data: [15, 12, 7, 3, 14],
                    backgroundColor: [
                        'rgb(255, 255, 132)',
                        'rgb(255, 192, 192)',
                        'rgb(255, 205, 86)',
                        'rgb(255, 203, 207)',
                        'rgb(54, 162, 235)'
                    ]
                }]
            }
        });
        return()=>{
            if(charInstance.current){
                charInstance.current.destroy();
            }
        }
    }, [])
    return (
        <div>
            <canvas ref={chartRef} style={{width:"auto", height:"auto"}}/>
        </div>
    )
}