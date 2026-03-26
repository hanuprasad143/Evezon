import dynamic from "next/dynamic";
import { Component } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

 

//Top Standing Produce vs Forecasting Produce

export class StandingForecastingProduce extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: 'Standing',
                    data: [24, 23, 20, 25, 27, 26, 24, 23, 23, 25, 23, 23],
                    type: 'line',
                },
                {
                    name: 'Forecasting',
                    data: [20, 23, 26, 22, 20, 26, 28, 26, 22, 27, 25, 26],
                    type: 'bar',
                },
            ],
            options: {
                chart: {
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                    height: 308,
                    zoom: {
                        enabled: false
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                grid: {
                    borderColor: '#f1f1f1',
                    strokeDashArray: 3
                },
                legend: {
                    show: true,
                    position: 'top',
                },
                plotOptions: {
                    bar: {
                        borderRadius: 5,
                        columnWidth: "40%",
                        dataLabels: {
                            position: 'top', // top, center, bottom
                        },
                    }
                },
                colors: ["rgb(132, 90, 223)", "#ededed"],
                stroke: {
                    curve: ['smooth', 'stepline'],
                    width: [2, 0],
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    axisBorder: {
                        color: '#e9e9e9',
                    },
                }
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={308} />
            </div>

        );
    }
}
 



// export class SalesProduce extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       series: [
//         {
//           name: 'Sales',
//           type: 'line',
//           data: [
//             28682651, // Jan
//             39367907, // Feb
//             0,     // Mar (no data)
//             24129682, // Apr
//             25133658, // May
//             20071099, // Jun
//             20518970, // Jul
//             19231215, // Aug
//             19801420, // Sep
//             20523838, // Oct
//             17869977, // Nov
//             23045270  // Dec
//           ],
//         },
//         {
//           name: 'Forecast',
//           type: 'bar',
//           data: [
//             26000000, // Jan
//             30000000, // Feb
//             28000000, // Mar
//             25000000, // Apr
//             24000000, // May
//             23000000, // Jun
//             22000000, // Jul
//             21000000, // Aug
//             22000000, // Sep
//             23000000, // Oct
//             20000000, // Nov
//             24000000  // Dec
//           ],
//         },
//       ],

//       options: {
//         chart: {
//           events: {
//             mounted: (chart) => {
//               chart.windowResizeHandler();
//             },
//           },
//           height: 308,
//           zoom: {
//             enabled: false,
//           },
//         },

//         dataLabels: {
//           enabled: false,
//         },

//         grid: {
//           borderColor: '#f1f1f1',
//           strokeDashArray: 3,
//         },

//         legend: {
//           show: true,
//           position: 'top',
//         },

//         plotOptions: {
//           bar: {
//             borderRadius: 5,
//             columnWidth: "40%",
//           },
//         },

//         colors: ["rgb(132, 90, 223)", "#d3d3d3"],

//         stroke: {
//           curve: ['smooth', 'straight'],
//           width: [3, 0],
//         },

//         xaxis: {
//           categories: [
//             'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//             'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
//           ],
//           axisBorder: {
//             color: '#e9e9e9',
//           },
//         },

//         yaxis: {
//           labels: {
//             formatter: function (val) {
//               return "₹" + (val / 1000000).toFixed(1) + "M"; // in millions
//             },
//           },
//         },

//         tooltip: {
//           y: {
//             formatter: function (val) {
//               return "₹" + val.toLocaleString();
//             },
//           },
//         },
//       },
//     };
//   }

//   render() {
//     return (
//       <div>
//         <ReactApexChart
//           options={this.state.options}
//           series={this.state.series}
//           type="line"
//           height={308}
//         />
//       </div>
//     );
//   }
// }


// export class SalesProduce extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       series: [
//         {
//           name: 'Sales',
//           type: 'line',
//           data: [
//             24129682, // Apr
//             25133658, // May
//             20071099, // Jun
//             20518970, // Jul
//             19231215, // Aug
//             19801420, // Sep
//             20523838, // Oct
//             17869977, // Nov
//             23045270, // Dec
//             28682651, // Jan (next year)
//             39367907, // Feb
//             0          // Mar
//           ],
//         },
//       ],

//       options: {
//         chart: {
//           events: {
//             mounted: (chart) => {
//               chart.windowResizeHandler();
//             },
//           },
//           height: 308,
//           zoom: {
//             enabled: false,
//           },
//         },

//         dataLabels: {
//           enabled: false,
//         },

//         grid: {
//           borderColor: '#f1f1f1',
//           strokeDashArray: 3,
//         },

//         legend: {
//           show: true,
//           position: 'top',
//         },

//         colors: ["rgb(132, 90, 223)"],

//         stroke: {
//           curve: 'smooth',
//           width: 3,
//         },

//         xaxis: {
//           categories: [
//             'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
//             'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'
//           ],
//           axisBorder: {
//             color: '#e9e9e9',
//           },
//         },

//         yaxis: {
//           labels: {
//             formatter: function (val) {
//               return "₹" + (val / 1000000).toFixed(1) + "M";
//             },
//           },
//         },

//         tooltip: {
//           y: {
//             formatter: function (val) {
//               return "₹" + val.toLocaleString();
//             },
//           },
//         },
//       },
//     };
//   }

//   render() {
//     return (
//       <div>
//         <ReactApexChart
//           options={this.state.options}
//           series={this.state.series}
//           type="line"
//           height={308}
//         />
//       </div>
//     );
//   }
// }



export class SalesProduce extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Sales",
          type: "line",
          data: [
            24129682, // Apr
            25133658, // May
            20071099, // Jun
            20518970, // Jul
            19231215, // Aug
            19801420, // Sep
            20523838, // Oct
            17869977, // Nov
            23045270, // Dec
            28682651, // Jan
            39367907, // Feb
            34045793          // Mar
          ],
        },
      ],

      options: {
        chart: {
          height: 308,
          zoom: {
            enabled: false,
          },
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            },
          },
        },

        dataLabels: {
          enabled: true,
          formatter: function (val) {
            if (val === 0) return ""; // hide 0 value
            return "₹" + (val / 1000000).toFixed(1) + "M";
          },
          offsetY: -10,
          style: {
            fontSize: "12px",
            colors: ["#333"],
          },
        },

        grid: {
          borderColor: "#f1f1f1",
          strokeDashArray: 3,
        },

        legend: {
          show: true,
          position: "top",
        },

        colors: ["rgb(132, 90, 223)"],

        stroke: {
          curve: "smooth",
          width: 3,
        },

        markers: {
          size: 5, // makes points visible
        },

        xaxis: {
          categories: [
            "Apr", "May", "Jun", "Jul", "Aug", "Sep",
            "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"
          ],
          axisBorder: {
            color: "#e9e9e9",
          },
        },

        yaxis: {
          labels: {
            formatter: function (val) {
              return "₹" + (val / 1000000).toFixed(1) + "M";
            },
          },
        },

        tooltip: {
          y: {
            formatter: function (val) {
              return "₹" + val.toLocaleString();
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={308}
        />
      </div>
    );
  }
}

export default SalesProduce;