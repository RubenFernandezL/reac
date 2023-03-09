import "./styles.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const project = {
  id: "2021-1-IT01-KA220-VET-000032964",
  acronym: "VELA",
  name: "VELA",
  startDate: "2022-01-01",
  endDate: null,
  researchers: [],
  workPackages: [
    {
      id: "PR1",
      description: "PR1",
      startDate: "1899-11-30",
      endDate: "1899-11-30",
      plannings: [],
      activities: [],
    },
    {
      id: "PR2",
      description: "PR2",
      startDate: "1899-11-30",
      endDate: "1899-11-30",
      plannings: [],
      activities: [
        {
          researcher: {
            id: "ines.lopezb",
            name: "Inés Lopez Baldominos",
            email: "ines.lopezb@edu.uah.es",
            isActive: true,
            applicationRole: "ROLE_USER",
            contracts: [],
          },
          date: "2023-01-09",
          hours: "7.5",
        },
        {
          researcher: {
            id: "manuel.buenaga",
            name: "Manuel de Buenaga Rodríguez",
            email: "manuel.buenaga@uah.es",
            isActive: true,
            applicationRole: "ROLE_USER",
            contracts: [],
          },
          date: "2023-01-09",
          hours: "7.5",
        },
        {
          researcher: {
            id: "vera.pospelova",
            name: "Vera Pospelova",
            email: "vera.pospelova@uah.es",
            isActive: true,
            applicationRole: "ROLE_USER",
            contracts: [],
          },
          date: "2023-01-09",
          hours: "7.5",
        },
        {
          researcher: {
            id: "vera.pospelova",
            name: "Vera Pospelova",
            email: "vera.pospelova@uah.es",
            isActive: true,
            applicationRole: "ROLE_USER",
            contracts: [],
          },
          date: "2023-01-10",
          hours: "7.5",
        },
      ],
    },
    {
      id: "PR3",
      description: "PR3",
      startDate: "1899-11-30",
      endDate: "1899-11-30",
      plannings: [],
      activities: [],
    },
    {
      id: "PR4",
      description: "PR4",
      startDate: "1899-11-30",
      endDate: "1899-11-30",
      plannings: [],
      activities: [],
    },
  ],
};

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function App() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" stackId="a" fill="#8884d8" />
      <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
      <Bar dataKey="uv" stackId="a" fill="#ffc658" />
    </BarChart>
  );
}
