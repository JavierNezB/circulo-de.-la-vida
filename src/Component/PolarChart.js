import React, { useEffect, useRef, useState } from "react";
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
                            "rgb(255, 223, 186)",
                            "rgb(255, 192, 203)",
                            "rgb(173, 216, 230)",
                            "rgb(240, 230, 140)",
                            "rgb(221, 160, 221)",
                            "rgb(144, 238, 144)",
                            "rgb(255, 182, 193)",
                            "rgb(175, 238, 238)",
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
