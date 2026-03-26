import dynamic from "next/dynamic";
import { Component } from "react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });



//SourcedataFarmers

export class SourcedataFarmers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [12000, 1340],
            options: {

                  labels: ["Enrolled","Registered"],
                chart: {
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                    type: 'donut'
                },
                dataLabels: {
                    enabled: false,
                },

                legend: {
                    show: false,
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'round',
                    colors: ["#fff"],
                    width: 0,
                    dashArray: 0,
                },
                plotOptions: {

                    pie: {
                        expandOnClick: false,
                        donut: {
                            size: '82%',
                            labels: {
                                show: false,
                                name: {
                                    show: true,
                                    fontSize: '20px',
                                    color: '#495057',
                                    offsetY: -4
                                },
                                value: {
                                    show: true,
                                    fontSize: '18px',
                                    color: undefined,
                                    offsetY: 8,
                                    formatter: function (val) {
                                        return val + "%";
                                    }
                                },

                            }
                        }
                    }
                },
                colors: ["rgb(132, 90, 223)", "rgb(35, 183, 229)" ],
            }

        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height={260} />
        );
    }
}

//SourcedataProduceId

export class SourcedataProduceID extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [55, 5,25,3],
            options: {

                  labels: ["Approved","Pending","On-Hold","Rejected"],
                chart: {
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                    type: 'donut'
                },
                dataLabels: {
                    enabled: false,
                },

                legend: {
                    show: false,
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'round',
                    colors: ["#fff"],
                    width: 0,
                    dashArray: 0,
                },
                plotOptions: {

                    pie: {
                        expandOnClick: false,
                        donut: {
                            size: '82%',
                            labels: {
                                show: false,
                                name: {
                                    show: true,
                                    fontSize: '20px',
                                    color: '#495057',
                                    offsetY: -4
                                },
                                value: {
                                    show: true,
                                    fontSize: '18px',
                                    color: undefined,
                                    offsetY: 8,
                                    formatter: function (val) {
                                        return val + "%";
                                    }
                                },

                            }
                        }
                    }
                },
                colors: ["rgb(132, 90, 223)", "rgb(35, 183, 229)" ,  "rgb(245, 184, 73)", "rgb(38, 191, 148)",]
            }

        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height={260} />
        );
    }
}

//  colors: ["rgb(132, 90, 223)", "rgb(35, 183, 229)",  "rgb(245, 184, 73)", "rgb(38, 191, 148)",],

//SourcedataFieldOfficers

export class SourcedataFieldOfficers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [10, 11],
            options: {

                labels: ["Enrolled","Registered"],
                chart: {
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                    type: 'donut'
                },
                dataLabels: {
                    enabled: false,
                },

                legend: {
                    show: false,
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'round',
                    colors: ["#fff"],
                    width: 0,
                    dashArray: 0,
                },
                plotOptions: {

                    pie: {
                        expandOnClick: false,
                        donut: {
                            size: '82%',
                            labels: {
                                show: false,
                                name: {
                                    show: true,
                                    fontSize: '20px',
                                    color: '#495057',
                                    offsetY: -4
                                },
                                value: {
                                    show: true,
                                    fontSize: '18px',
                                    color: undefined,
                                    offsetY: 8,
                                    formatter: function (val) {
                                        return val + "%";
                                    }
                                },

                            }
                        }
                    }
                },
                colors: [   "rgb(245, 184, 73)", "rgb(38, 191, 148)",],
            }

        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height={260} />
        );
    }
}



//SourcedataAcres

export class SourcedataAcres extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [12.7, 11.4, 75.9],
            options: {

                 labels: ["Organic","Residue Free","Non-Organic"],
                chart: {
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                    type: 'donut'
                },
                dataLabels: {
                    enabled: false,
                },

                legend: {
                    show: false,
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'round',
                    colors: ["#fff"],
                    width: 0,
                    dashArray: 0,
                },
                plotOptions: {

                    pie: {
                        expandOnClick: false,
                        donut: {
                            size: '82%',
                            labels: {
                                show: false,
                                name: {
                                    show: true,
                                    fontSize: '20px',
                                    color: '#495057',
                                    offsetY: -4
                                },
                                value: {
                                    show: true,
                                    fontSize: '18px',
                                    color: undefined,
                                    offsetY: 8,
                                    formatter: function (val) {
                                        return val + "%";
                                    }
                                },

                            }
                        }
                    }
                },
                colors: [ "rgb(35, 183, 229)",  "rgb(245, 184, 73)", "rgb(38, 191, 148)",],
            }

        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height={260} />
        );
    }
}
