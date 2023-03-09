import "./styles.css";
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
      ],
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
      activities: [
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
          date: "2023-01-10",
          hours: "7.5",
        },
      ],
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

const workPackageData = project.workPackages.reduce<{
  data: any[];
  researchers: string[];
}>(
  (acc, workPackage) => {
    const dataObject: any = {};
    let hours = 0;
    workPackage.activities.forEach((activity) => {
      if (!dataObject[activity.researcher.name])
        dataObject[activity.researcher.name] = +activity.hours;
      else
        dataObject[activity.researcher.name] =
          dataObject[activity.researcher.name] + +activity.hours;
      if (
        !acc.researchers.some(
          (researcher) => researcher === activity.researcher.name
        )
      )
        acc.researchers.push(activity.researcher.name);
      hours = hours + +activity.hours;
    });
    dataObject.description = `${
      workPackage.description ?? workPackage.id
    } - ${hours}h`;
    acc.data.push(dataObject);
    return acc;
  },
  { data: [], researchers: [] }
);
console.log(workPackageData);

const colors = [
  "#FF671F",
  "#981D97",
  "#A4343A",
  "#41B6E6",
  "#00AF66",
  "#003DA5",
  "#28724F",
  "#FFA300",
  "#EF3340",
  "#D0006F",
];

export default function App() {
  return (
    <BarChart
      width={1000}
      height={600}
      data={workPackageData.data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid />
      <XAxis dataKey="description" />
      <YAxis />
      <Tooltip />
      <Legend />(
      {workPackageData.researchers.map((researcher, index) => (
        <Bar
          key={researcher}
          dataKey={researcher}
          stackId="a"
          fill={colors[index]}
        />
      ))}
    </BarChart>
  );
}
