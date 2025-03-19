import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  ChartOptions,
  ChartData,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { Bar } from "react-chartjs-2";
import { viagens, folgasFerias } from "./dadosTeste";
import { FormGroup, FormControlLabel, Checkbox, Box } from "@mui/material";

// Registrar os componentes do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const Timeline = () => {
  const [filtros, setFiltros] = useState({
    viagens: true,
    folgas: true,
  });

  const motoristas = [
    ...new Set([
      ...viagens.map((v) => v.motorista),
      ...folgasFerias.map((f) => f.motorista),
    ]),
  ];

  // Processar os dados para exibição correta no gráfico
  const processarDados = (): ChartData<
    "bar",
    { x: string; y: number; duration: number }[],
    string
  > => {
    const datasets = [];

    if (filtros.viagens) {
      datasets.push({
        label: "Viagens",
        data: motoristas.flatMap((motorista, index) => {
          return viagens
            .filter((v) => v.motorista === motorista)
            .map((v) => ({
              x: v.dataInicio.split("T")[0],
              y: index,
              duration:
                (new Date(v.dataFim).getTime() -
                  new Date(v.dataInicio).getTime()) /
                (1000 * 60 * 60 * 24),
            }));
        }),
        backgroundColor: "rgba(54, 162, 235, 0.8)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      });
    }

    if (filtros.folgas) {
      datasets.push({
        label: "Folgas",
        data: motoristas.flatMap((motorista, index) => {
          return folgasFerias
            .filter((f) => f.motorista === motorista)
            .map((f) => ({
              x: f.dataInicio.split("T")[0],
              y: index,
              duration:
                (new Date(f.dataFim).getTime() -
                  new Date(f.dataInicio).getTime()) /
                (1000 * 60 * 60 * 24),
            }));
        }),
        backgroundColor: "rgba(75, 192, 192, 0.8)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      });
    }

    return { datasets };
  };

  const data = processarDados();

  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: "y" as const,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Timeline de Motoristas - Setembro 2024",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const data = context.raw as { x: string; duration: number };
            return `Início: ${data.x}, Duração: ${data.duration.toFixed(1)} dias`;
          },
        },
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
          tooltipFormat: "yyyy-MM-dd",
        },
        title: {
          display: true,
          text: "Dias do mês",
        },
      },
      y: {
        type: "category",
        labels: motoristas,
      },
    },
  };

  const handleFiltroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiltros({
      ...filtros,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div style={{ width: "100%", padding: "20px" }}>
      <Box sx={{ mb: 2 }}>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={filtros.viagens}
                onChange={handleFiltroChange}
                name="viagens"
              />
            }
            label="Viagens"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filtros.folgas}
                onChange={handleFiltroChange}
                name="folgas"
              />
            }
            label="Folgas"
          />
        </FormGroup>
      </Box>
      <div style={{ height: "600px" }}>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default Timeline;
