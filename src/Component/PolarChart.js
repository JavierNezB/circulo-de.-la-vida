import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

export default function Polarchart({ dataValues }) {
    const chartRef = useRef(null);
    const charInstance = useRef(null);

    useEffect(() => {
        if (charInstance.current) {
            charInstance.current.destroy();
        }
        const myChartRef = chartRef.current.getContext("2d");

        charInstance.current = new Chart(myChartRef, {
            type: "polarArea",
            data: {
                labels: [
                    "Familia",
                    "Salud",
                    "Desarrollo Personal",
                    "Carrera Profesional",
                    "Amistades",
                    "Pareja",
                    "Dinero",
                    "Diversión",
                ],
                datasets: [
                    {
                        data: dataValues || [30, 30, 30, 30, 100, 30, 30, 30],
                        backgroundColor: [
                            "rgba(255, 223, 186, 0.8)",
                            "rgba(255, 192, 203, 0.8)",
                            "rgba(173, 216, 230, 0.8)",
                            "rgba(240, 230, 140, 0.8)",
                            "rgba(221, 160, 221, 0.8)",
                            "rgba(144, 238, 144, 0.8)",
                            "rgba(255, 182, 193, 0.8)",
                            "rgba(175, 238, 238, 0.8)",
                        ],
                    },
                ],
            },
        });

        return () => {
            if (charInstance.current) {
                charInstance.current.destroy();
            }
        };
    }, [dataValues]);

    return (
        <div>
            <canvas ref={chartRef} style={{ width: "auto", height: "auto" }} />
        </div>
    );
}
