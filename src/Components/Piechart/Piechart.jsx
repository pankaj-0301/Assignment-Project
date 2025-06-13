// import { PieChart, Pie, Cell, Tooltip } from "recharts"
// import "./Piechart.css"
// import { getPieData } from "../../utils.js"

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF0000"]

// const RADIAN = Math.PI / 180
// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
//   index,
// }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5
//   const x = cx + radius * Math.cos(-midAngle * RADIAN)
//   const y = cy + radius * Math.sin(-midAngle * RADIAN)

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor={x > cx ? "start" : "end"}
//       dominantBaseline="central"
//     >
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   )
// }

// function Piechart({ data, title, dataKey }) {
//   let chartData = getPieData(data, dataKey)
//   let LeastchartData = getPieData(data, dataKey, { sort: "asc", limit: 5 });

//   return (
//     <div className="piechart">
//       <h3 className="piechartTitle">{title}</h3>
//       <PieChart width={500} height={500} aspect={2 / 1}>
//         <Pie
//           data={chartData}
//           cx={250}
//           cy={220}
//           labelLine={false}
//           label={renderCustomizedLabel}
//           outerRadius={170}
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//         <Tooltip />
//       </PieChart>
//     </div>
//   )
// }

// export default Piechart


import { PieChart, Pie, Cell, Tooltip } from "recharts"
import "./Piechart.css"
import { getPieData } from "../../utils.js"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF0000"]

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

function Piechart({ data, title, dataKey }) {
  // Automatically switch to least 5 if "Available" is in the title
  const isLeast = title.toLowerCase().includes("available");
  const chartData = isLeast
    ? getPieData(data, dataKey, { sort: "asc", limit: 5 })
    : getPieData(data, dataKey);

  return (
    <div className="piechart">
      <h3 className="piechartTitle">{title}</h3>
      <PieChart width={500} height={500} aspect={2 / 1}>
        <Pie
          data={chartData}
          cx={250}
          cy={220}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={170}
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  )
}

export default Piechart
