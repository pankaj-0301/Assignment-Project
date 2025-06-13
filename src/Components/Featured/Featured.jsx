import { data } from "../../result.js"
import "./Featured.css"
import Chart from "../Chart/Chart"
import Bigchart from "../Bigchart"
import Piechart from "../Piechart"
import ProductTrend from "../ProductTrend/ProductTrend.js"
function Featured() {
  return (
    <div className="featured">
      
      <div className="featuredpiechart">
        <Piechart
          data={data}
          title="Top 5 Required products"
          dataKey="requirement_in_mt_"
        />
        <Piechart
          data={data}
          title="Top 5 Least Available products"
          dataKey="availability_in_mt_"
        />
      </div>

      <ProductTrend data={data} />

      <Bigchart
        data={data}
        title="Product Availability and Requirements"
        grid
      />


      {/* <div className="featuredItem">
        <div className="widgetsm">
          <Chart
            data={data}
            title="State wise product"
            grid
            parent="state"
            child="product"
            defaultValue={data[0]}
          />
        </div>

        <div className="widgetsm">
          <Chart
            data={data}
            title="Year wise product"
            grid
            parent="_year"
            child="product"
            defaultValue={data[0]}
          />
        </div>

        <div className="widgetsm">
          <Chart
            data={data}
            title="Month wise product"
            grid
            parent="month"
            child="product"
            defaultValue={data[0]}
          />
        </div>
      </div> */}
    </div>
  )
}

export default Featured
