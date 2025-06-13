import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { useState } from "react"
import "./ProductTrend.css"

function getTrendData(data, product) {
  const yearMap = {}

  for (let row of data) {
    if (row.product !== product) continue
    const year = row._year
    const availability = parseFloat(row.availability_in_mt_) || 0
    const requirement = parseFloat(row.requirement_in_mt_) || 0

    if (!yearMap[year]) {
      yearMap[year] = {
        _year: year,
        Availability: 0,
        Requirement: 0,
      }
    }
    yearMap[year].Availability += availability
    yearMap[year].Requirement += requirement
  }

  return Object.values(yearMap).sort((a, b) => a._year.localeCompare(b._year))
}

function ProductTrend({ data }) {
  const [selectedProduct, setSelectedProduct] = useState("UREA")
  const products = [...new Set(data.map((d) => d.product))]

  const chartData = getTrendData(data, selectedProduct)

 return (
  <div className="productTrend">
    <div className="productTrendBox">
      <h3 className="chartTitle">Year-wise Availability vs Requirement</h3>

      <div className="chartSelect">
        <h5>Select Fertilizer Product:</h5>
        <select
          onChange={(e) => setSelectedProduct(e.target.value)}
          value={selectedProduct}
        >
          {products.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={chartData}
          barCategoryGap={500}
          barGap={5}
          margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="_year" />
          <YAxis domain={[0, 'auto']} tickCount={10} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Availability" fill="#82ca9d" barSize={60} />
          <Bar dataKey="Requirement" fill="#8884d8" barSize={60} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>


  )
}

export default ProductTrend
