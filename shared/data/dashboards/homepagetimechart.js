import dynamic from "next/dynamic";
import { Component } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

 
//Stock History Statistics

export class StockHistoryData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: "Price",
                data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80]
            }, {
                name: "Stock",
                data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89]
            }],
            options: {
                chart: {
                    height: 343,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 5,
                        left: 0,
                        blur: 3,
                        color: '#000',
                        opacity: 0.1
                    },
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    position: "top",
                    horizontalAlign: "center",
                    offsetX: -15,
                    fontWeight: "bold",
                },
                stroke: {
                    curve: 'smooth',
                    width:  [3, 3],
                    dashArray: [0, 4],
                },
                grid: {
                    borderColor: '#f2f6f7',
                },
                colors: ["rgb(132, 90, 223)", "rgba(132, 90, 223, 0.3)"],
                yaxis: {
                    title: {
                        text: 'Stock/Price History',
                        style: {
                            color: '#adb5be',
                            fontSize: '14px',
                            fontFamily: 'poppins, sans-serif',
                            fontWeight: 600,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                    },
                    labels: {
                        formatter: function (y) {
                            return y.toFixed(0) + "";
                        }
                    }
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    axisBorder: {
                        show: true,
                        color: 'rgba(119, 119, 142, 0.05)',
                        offsetX: 0,
                        offsetY: 0,
                    },
                    axisTicks: {
                        show: true,
                        borderType: 'solid',
                        color: 'rgba(119, 119, 142, 0.05)',
                        offsetX: 0,
                        offsetY: 0
                    },
                    labels: {
                        rotate: -90
                    }
                }
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={343} />
            </div>

        );
    }
}
 
 

 