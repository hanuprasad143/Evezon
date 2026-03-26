
import { Customers, Deals, Dealsstatistics, Earned, Ratio, Revenue, Revenueanalytics, Sourcedata, Target } from '@/shared/data/dashboards/crmdata';
import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';
import React, { useState,Fragment } from 'react'

//E commerce Header
import { Countries, Earning, ProductsOverview, Recentorders } from '@/shared/data/dashboards/ecommercedata'

//Crypto Headers
import { CryptoBTC, CryptoETH, Cryptobitcoin, Cryptodash, Cryptodash1, Cryptoetherium, Cryptoiota, Cryptoneo, Cryptoripple, Recentactivity, Selectdata1, Selectdata2, Statistics } from '@/shared/data/dashboards/cryptodata'
const Select = dynamic(() => import("react-select"), { ssr: false });
import dynamic from 'next/dynamic';


//Job Headers
import { Candidatesdata, Recentemployers, Registersbycountry, Subscriptions, TopCompanies } from '@/shared/data/dashboards/jobsdata'





const Crm = () => {



/* Ecommerce Block 25 Products Overview Code Starts */
// for User search function
const [Data, setData] = useState(ProductsOverview);

const userdata = [];

const myfunction = (idx) => {
    let Data;
    for (Data of ProductsOverview) {
        if (Data.name[0] == " ") {
            Data.name = Data.name.trim();
        }
        if (Data.name.toLowerCase().includes(idx.toLowerCase())) {
            if (Data.name.toLowerCase().startsWith(idx.toLowerCase())) {
                userdata.push(Data);
            }
        }

    }
    setData(userdata);
};

/* Ecommerce Block 25 Products Overview Code Ends */

/* Jobs Block 50 Recent Employers Code Starts */

const [EmployerData, setEmployerData] = useState(Recentemployers);

const userdata_employee = [];

const myfunction1 = (idx) => {
    let Data;
    for (Data of Recentemployers) {
        if (Data.name[0] == " ") {
            Data.name = Data.name.trim();
        }
        if (Data.name.toLowerCase().includes(idx.toLowerCase())) {
            if (Data.name.toLowerCase().startsWith(idx.toLowerCase())) {
                userdata_employee.push(Data);
            }
        }

    }
    setEmployerData(userdata_employee);
};

/* Jobs Block 50 Recent Employers Code Ends */

  return (
    <Fragment>
      <Seo title={"Crm"} />
      <div class="font-bold text-5xl text-emerald-500">CRM Starts</div>  
      {/* Block 1 Starts */}
 
      
      <div> Block 1</div>
      
      <div className="md:flex block items-center justify-between my-[1.5rem] page-header-breadcrumb">
        <div>
          <p className="font-semibold text-[1.125rem] text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-0 ">Welcome back, Dr.Yashwanth !</p>
          <p className="font-normal text-[#8c9097] dark:text-white/50 text-[0.813rem]">CEO - Evezon India Private Limited.</p>
        </div>
        <div className="btn-list md:mt-0 mt-2">
          <button type="button"
            className="ti-btn bg-primary text-white btn-wave !font-medium !me-[0.375rem] !ms-0 !text-[0.85rem] !rounded-[0.35rem] !py-[0.51rem] !px-[0.86rem] mb-0 shadow-none">
            <i className="ri-filter-3-fill  inline-block"></i>Filters
          </button>
          <button type="button"
            className="ti-btn ti-btn-outline-secondary btn-wave !font-medium  !me-[0.375rem]  !ms-0 !text-[0.85rem] !rounded-[0.35rem] !py-[0.51rem] !px-[0.86rem] mb-0 shadow-none">
            <i className="ri-upload-cloud-line  inline-block"></i>Export
          </button>
        </div>
      </div>

  {/* Block 1 Ends */}


  {/* Block 2 Starts */}
  <div> Block 2</div>
  <div className="box crm-highlight-card">
                  <div className="box-body">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-[1.125rem] text-white mb-2">Your target is incomplete</div>
                        <span className="block text-[0.75rem] text-white"><span className="opacity-[0.7] me-1">You have
                          completed</span>
                          <span className="font-semibold text-warning">48%</span> <span className="opacity-[0.7]">of the given
                            target, you can also check your status</span>.</span>
                        <span className="block font-semibold mt-[0.125rem]"><Link className="text-white text-[0.813rem]"
                          href="#!"><u>Click
                            here</u></Link></span>
                      </div>
                      <div>
                        <div id="crm-main">
                          <Target />
                        </div>
                      </div>
                    </div>
                  </div>
    </div>


  {/* Block 2 Ends */}

    {/* Block 3 Starts */}
    <div> Block 3</div>
    <div className="box overflow-hidden">
                    <div className="box-body">
                      <div className="flex items-top justify-between">
                        <div>
                          <span
                            className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-primary">
                            <i className="ti ti-users text-[1rem] text-white"></i>
                          </span>
                        </div>
                        <div className="flex-grow ms-4">
                          <div className="flex items-center justify-between flex-wrap">
                            <div>
                              <p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0">Total Customers</p>
                              <h4 className="font-semibold  text-[1.5rem] !mb-2 ">1,02,890</h4>
                            </div>
                            <div id="crm-total-customers">
                              <Customers />
                            </div>
                          </div>
                          <div className="flex items-center justify-between !mt-1">
                            <div>
                              <Link className="text-primary text-[0.813rem]" href="#!">View All<i
                                className="ti ti-arrow-narrow-right ms-2 font-semibold inline-block"></i></Link>
                            </div>
                            <div className="text-end">
                              <p className="mb-0 text-success text-[0.813rem] font-semibold">+40%</p>
                              <p className="text-[#8c9097] dark:text-white/50 opacity-[0.7] text-[0.6875rem]">this month</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    {/* Block 3 Ends */}


{/* Block 4 Starts */}
    <div> Block 4</div>
    <div className="box overflow-hidden">
                    <div className="box-body">
                      <div className="flex items-top justify-between">
                        <div>
                          <span
                            className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-secondary">
                            <i className="ti ti-wallet text-[1rem] text-white"></i>
                          </span>
                        </div>
                        <div className="flex-grow ms-4">
                          <div className="flex items-center justify-between flex-wrap">
                            <div>
                              <p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0">Total Revenue</p>
                              <h4 className="font-semibold text-[1.5rem] !mb-2 ">$56,562</h4>
                            </div>
                            <div id="crm-total-revenue">
                              <Revenue />
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <div>
                              <Link className="text-secondary text-[0.813rem]" href="#!">View All<i
                                className="ti ti-arrow-narrow-right ms-2 font-semibold inline-block"></i></Link>
                            </div>
                            <div className="text-end">
                              <p className="mb-0 text-success text-[0.813rem] font-semibold">+25%</p>
                              <p className="text-[#8c9097] dark:text-white/50 opacity-[0.7] text-[0.6875rem]">this month</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
{/* Block 4 Ends */}


{/* Block 5 Starts */}
<div> Block 5</div>
<div className="box overflow-hidden">
                    <div className="box-body">
                      <div className="flex items-top justify-between">
                        <div>
                          <span
                            className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-success">
                            <i className="ti ti-wave-square text-[1rem] text-white"></i>
                          </span>
                        </div>
                        <div className="flex-grow ms-4">
                          <div className="flex items-center justify-between flex-wrap">
                            <div>
                              <p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0">Conversion Ratio</p>
                              <h4 className="font-semibold text-[1.5rem] !mb-2 ">12.08%</h4>
                            </div>
                            <div id="crm-conversion-ratio">
                              <Ratio />
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <div>
                              <Link className="text-success text-[0.813rem]" href="#!">View All<i
                                className="ti ti-arrow-narrow-right ms-2 font-semibold inline-block"></i></Link>
                            </div>
                            <div className="text-end">
                              <p className="mb-0 text-danger text-[0.813rem] font-semibold">-12%</p>
                              <p className="text-[#8c9097] dark:text-white/50 opacity-[0.7] text-[0.6875rem]">this month</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
{/* Block 5 Ends */}


{/* Block 6 Starts */}
<div> Block 6</div>
<div className="box overflow-hidden">
                    <div className="box-body">
                      <div className="flex items-top justify-between">
                        <div>
                          <span
                            className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-warning">
                            <i className="ti ti-briefcase text-[1rem] text-white"></i>
                          </span>
                        </div>
                        <div className="flex-grow ms-4">
                          <div className="flex items-center justify-between flex-wrap">
                            <div>
                              <p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0">Total Deals</p>
                              <h4 className="font-semibold text-[1.5rem] !mb-2 ">2,543</h4>
                            </div>
                            <div id="crm-total-deals">
                              <Deals />
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <div>
                              <Link className="text-warning text-[0.813rem]" href="#!">View All<i
                                className="ti ti-arrow-narrow-right ms-2 font-semibold inline-block"></i></Link>
                            </div>
                            <div className="text-end">
                              <p className="mb-0 text-success text-[0.813rem] font-semibold">+19%</p>
                              <p className="text-[#8c9097] dark:text-white/50  opacity-[0.7] text-[0.6875rem]">this month</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
{/* Block 6 Ends */}


{/* Block 7 Starts */}
<div> Block 7</div>
<div className="box">
                  <div className="box-header flex justify-between">
                    <div className="box-title">
                      Top Deals
                    </div>
                    <div className="hs-dropdown ti-dropdown">
                      <Link aria-label="anchor" href="#!"
                        className="flex items-center justify-center w-[1.75rem] h-[1.75rem]  !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                        aria-expanded="false">
                        <i className="fe fe-more-vertical text-[0.8rem]"></i>
                      </Link>
                      <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="#!">Week</Link></li>
                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="#!">Month</Link></li>
                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="#!">Year</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="box-body">
                    <ul className="list-none crm-top-deals mb-0">
                      <li className="mb-[0.9rem]">
                        <div className="flex items-start flex-wrap">
                          <div className="me-2">
                            <span className=" inline-flex items-center justify-center">
                              <img src="../../../assets/images/faces/10.jpg" alt=""
                                className="w-[1.75rem] h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full" />
                            </span>
                          </div>
                          <div className="flex-grow">
                            <p className="font-semibold mb-[1.4px]  text-[0.813rem]">Michael Jordan
                            </p>
                            <p className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">michael.jordan@example.com</p>
                          </div>
                          <div className="font-semibold text-[0.9375rem] ">$2,893</div>
                        </div>
                      </li>
                      <li className="mb-[0.9rem]">
                        <div className="flex items-start flex-wrap">
                          <div className="me-2">
                            <span
                              className="inline-flex items-center justify-center !w-[1.75rem] !h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full text-warning  bg-warning/10 font-semibold">
                              EK
                            </span>
                          </div>
                          <div className="flex-grow">
                            <p className="font-semibold mb-[1.4px]  text-[0.813rem]">Emigo Kiaren</p>
                            <p className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">emigo.kiaren@gmail.com</p>
                          </div>
                          <div className="font-semibold text-[0.9375rem] ">$4,289</div>
                        </div>
                      </li>
                      <li className="mb-[0.9rem]">
                        <div className="flex items-top flex-wrap">
                          <div className="me-2">
                            <span className="inline-flex items-center justify-center">
                              <img src="../../../assets/images/faces/12.jpg" alt=""
                                className="!w-[1.75rem] !h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full" />
                            </span>
                          </div>
                          <div className="flex-grow">
                            <p className="font-semibold mb-[1.4px]  text-[0.813rem]">Randy Origoan
                            </p>
                            <p className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">randy.origoan@gmail.com</p>
                          </div>
                          <div className="font-semibold text-[0.9375rem] ">$6,347</div>
                        </div>
                      </li>
                      <li className="mb-[0.9rem]">
                        <div className="flex items-top flex-wrap">
                          <div className="me-2">
                            <span
                              className="inline-flex items-center justify-center !w-[1.75rem] !h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full text-success bg-success/10 font-semibold">
                              GP
                            </span>
                          </div>
                          <div className="flex-grow">
                            <p className="font-semibold mb-[1.4px]  text-[0.813rem]">George Pieterson
                            </p>
                            <p className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">george.pieterson@gmail.com</p>
                          </div>
                          <div className="font-semibold text-[0.9375rem] ">$3,894</div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-top flex-wrap">
                          <div className="me-2">
                            <span
                              className="inline-flex items-center justify-center !w-[1.75rem] !h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full text-primary bg-primary/10 font-semibold">
                              KA
                            </span>
                          </div>
                          <div className="flex-grow">
                            <p className="font-semibold mb-[1.4px]  text-[0.813rem]">Kiara Advain</p>
                            <p className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">kiaraadvain214@gmail.com</p>
                          </div>
                          <div className="font-semibold text-[0.9375rem] ">$2,679</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

{/* Block 7 Ends */}

{/* Block 8 Starts */}
<div> Block 8</div>
<div className="box">
                  <div className="box-header justify-between">
                    <div className="box-title">Profit Earned</div>
                    <div className="hs-dropdown ti-dropdown">
                      <Link href="#!" className="px-2 font-normal text-[0.75rem] text-[#8c9097] dark:text-white/50"
                        aria-expanded="false">
                        View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                      </Link>
                      <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="#!">Today</Link></li>
                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="#!">This Week</Link></li>
                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="#!">Last Week</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="box-body !py-0 !ps-0">
                    <div id="crm-profits-earned">
                      <Earned />
                    </div>
                  </div>
                </div>
{/* Block 8 Ends */}



{/* Block 9 Starts */}
<div> Block 9</div>
<div className="box">
                    <div className="box-header !gap-0 !m-0 justify-between">
                      <div className="box-title">
                        Revenue Analytics
                      </div>
                      <div className="hs-dropdown ti-dropdown">
                        <Link href="#!" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                          aria-expanded="false">
                          View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                        </Link>
                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                          <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                            href="#!">Today</Link></li>
                          <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                            href="#!">This Week</Link></li>
                          <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                            href="#!">Last Week</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="box-body !py-5">
                      <div id="crm-revenue-analytics">
                        <Revenueanalytics />
                      </div>
                    </div>
                  </div>
{/* Block 9 Ends */}




{/* Block 10 Starts */}
<div> Block 10</div>
<div className="box custom-card">
                <div className="box-header justify-between">
                  <div className="box-title">
                    Deals Statistics
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div>
                      <input className="ti-form-control form-control-sm" type="text" placeholder="Search Here"
                        aria-label=".form-control-sm example" />
                    </div>
                    <div className="hs-dropdown ti-dropdown">
                      <Link href="#!"
                        className="ti-btn ti-btn-primary !bg-primary !text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium"
                        aria-expanded="false">
                        Sort By<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                      </Link>
                      <ul className="hs-dropdown-menu ti-dropdown-menu !-mt-2 hidden" role="menu">
                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="#!">New</Link></li>
                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="#!">Popular</Link></li>
                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="#!">Relevant</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="box-body">
                  <div className="overflow-x-auto">
                    <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
                      <thead>
                        <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                          <th scope="row" className="!ps-4 !pe-5"><input className="form-check-input" type="checkbox"
                            id="checkboxNoLabel1" value="" aria-label="..." /></th>
                          <th scope="col" className="!text-start !text-[0.85rem] min-w-[200px]">Sales Rep</th>
                          <th scope="col" className="!text-start !text-[0.85rem]">Category</th>
                          <th scope="col" className="!text-start !text-[0.85rem]">Mail</th>
                          <th scope="col" className="!text-start !text-[0.85rem]">Location</th>
                          <th scope="col" className="!text-start !text-[0.85rem]">Date</th>
                          <th scope="col" className="!text-start !text-[0.85rem]">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Dealsstatistics.map((idx) => (
                          <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light" key={Math.random()}>
                            <th scope="row" className="!ps-4 !pe-5"><input className="form-check-input" type="checkbox" defaultChecked={idx.checked === 'defaultChecked'}
                              id="" value="" aria-label="..." /></th>
                            <td>
                              <div className="flex items-center font-semibold">
                                <span className="!me-2 inline-flex justify-center items-center">
                                  <img src={idx.src} alt="img"
                                    className="w-[1.75rem] h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full" />
                                </span>{idx.name}
                              </div>
                            </td>
                            <td>{idx.role}</td>
                            <td>{idx.mail}</td>
                            <td>
                              <span
                                className={`inline-flex text-${idx.color} !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-${idx.color}/10`}>{idx.location}</span>
                            </td>
                            <td>{idx.date}</td>
                            <td>
                              <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                <Link aria-label="anchor" href="#!"
                                  className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-success/10 text-success hover:bg-success hover:text-white hover:border-success"><i
                                    className="ri-download-2-line"></i></Link>
                                <Link aria-label="anchor" href="#!"
                                  className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-primary/10 text-primary hover:bg-primary hover:text-white hover:border-primary"><i
                                    className="ri-edit-line"></i></Link>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="box-footer">
                  <div className="sm:flex items-center">
                    <div className="text-defaulttextcolor dark:text-defaulttextcolor/70">
                      Showing 5 Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
                    </div>
                    <div className="ms-auto">
                      <nav aria-label="Page navigation" className="pagination-style-4">
                        <ul className="ti-pagination mb-0">
                          <li className="page-item disabled">
                            <Link className="page-link" href="#!">
                              Prev
                            </Link>
                          </li>
                          <li className="page-item"><Link className="page-link active" href="#!">1</Link></li>
                          <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
                          <li className="page-item">
                            <Link className="page-link !text-primary" href="#!">
                              next
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
{/* Block 10 Ends */}


{/* Block 11 Starts */}
<div> Block 11</div>

<div className="box">
                <div className="box-header justify-between">
                  <div className="box-title">
                    Leads By Source
                  </div>
                  <div className="hs-dropdown ti-dropdown">
                    <Link aria-label="anchor" href="#!"
                      className="flex items-center justify-center w-[1.75rem] h-[1.75rem] ! !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                      aria-expanded="false">
                      <i className="fe fe-more-vertical text-[0.8rem]"></i>
                    </Link>
                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                      <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        href="#!">Week</Link></li>
                      <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        href="#!">Month</Link></li>
                      <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        href="#!">Year</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="box-body overflow-hidden">
                  <div className="leads-source-chart flex items-center justify-center">
                    <Sourcedata />
                    <div className="lead-source-value ">
                      <span className="block text-[0.875rem] ">Total</span>
                      <span className="block text-[1.5625rem] font-bold">4,145</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 border-t border-dashed dark:border-defaultborder/10">
                  <div className="col !p-0">
                    <div className="!ps-4 p-[0.95rem] text-center border-e border-dashed dark:border-defaultborder/10">
                      <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend mobile inline-block">Mobile
                      </span>
                      <div><span className="text-[1rem]  font-semibold">1,624</span>
                      </div>
                    </div>
                  </div>
                  <div className="col !p-0">
                    <div className="p-[0.95rem] text-center border-e border-dashed dark:border-defaultborder/10">
                      <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend desktop inline-block">Desktop
                      </span>
                      <div><span className="text-[1rem]  font-semibold">1,267</span></div>
                    </div>
                  </div>
                  <div className="col !p-0">
                    <div className="p-[0.95rem] text-center border-e border-dashed dark:border-defaultborder/10">
                      <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend laptop inline-block">Laptop
                      </span>
                      <div><span className="text-[1rem]  font-semibold">1,153</span>
                      </div>
                    </div>
                  </div>
                  <div className="col !p-0">
                    <div className="!pe-4 p-[0.95rem] text-center">
                      <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend tablet inline-block">Tablet
                      </span>
                      <div><span className="text-[1rem]  font-semibold">679</span></div>
                    </div>
                  </div>
                </div>
              </div>

{/* Block 11 Ends */}



{/* Block 12 Starts */}
<div> Block 12</div>

<div className="box">
                <div className="box-header justify-between">
                  <div className="box-title">
                    Deals Status
                  </div>
                  <div className="hs-dropdown ti-dropdown">
                    <Link href="#!" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                      aria-expanded="false">
                      View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                    </Link>
                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                      <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        href="#!">Today</Link></li>
                      <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        href="#!">This Week</Link></li>
                      <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        href="#!">Last Week</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="box-body">
                  <div className="flex items-center mb-[0.8rem]">
                    <h4 className="font-bold mb-0 text-[1.5rem] ">4,289</h4>
                    <div className="ms-2">
                      <span
                        className="py-[0.18rem] px-[0.45rem] rounded-sm text-success !font-medium !text-[0.75em] bg-success/10">1.02<i
                          className="ri-arrow-up-s-fill align-mmiddle ms-1"></i></span>
                      <span className="text-[#8c9097] dark:text-white/50 text-[0.813rem] ms-1">compared to last week</span>
                    </div>
                  </div>

                  <div className="flex w-full h-[0.3125rem] mb-6 rounded-full overflow-hidden">
                    <div className="flex flex-col justify-center rounded-s-[0.625rem] overflow-hidden bg-primary w-[21%]" aria-valuenow="21" aria-valuemin="0" aria-valuemax="100">
                    </div>
                    <div className="flex flex-col justify-center rounded-none overflow-hidden bg-info w-[26%]" aria-valuenow="26" aria-valuemin="0" aria-valuemax="100">
                    </div>
                    <div className="flex flex-col justify-center rounded-none overflow-hidden bg-warning w-[35%]" aria-orientation='' aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                    </div>
                    <div className="flex flex-col justify-center rounded-e-[0.625rem] overflow-hidden bg-success w-[18%]" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100">
                    </div>
                  </div>
                  <ul className="list-none mb-0 pt-2 crm-deals-status">
                    <li className="primary">
                      <div className="flex items-center text-[0.813rem]  justify-between">
                        <div>Successful Deals</div>
                        <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">987 deals</div>
                      </div>
                    </li>
                    <li className="info">
                      <div className="flex items-center text-[0.813rem]  justify-between">
                        <div>Pending Deals</div>
                        <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">1,073 deals</div>
                      </div>
                    </li>
                    <li className="warning">
                      <div className="flex items-center text-[0.813rem]  justify-between">
                        <div>Rejected Deals</div>
                        <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">1,674 deals</div>
                      </div>
                    </li>
                    <li className="success">
                      <div className="flex items-center text-[0.813rem]  justify-between">
                        <div>Upcoming Deals</div>
                        <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">921 deals</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

{/* Block 12 Ends */}


{/* Block 13 Starts */}
<div> Block 13</div>
<div className="box">
                <div className="box-header justify-between">
                  <div className="box-title">
                    Recent Activity
                  </div>
                  <div className="hs-dropdown ti-dropdown">
                    <Link href="#!" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                      aria-expanded="false">
                      View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                    </Link>
                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                      <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        href="#!">Today</Link></li>
                      <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        href="#!">This Week</Link></li>
                      <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        href="#!">Last Week</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="box-body">
                  <div>
                    <ul className="list-none mb-0 crm-recent-activity">
                      <li className="crm-recent-activity-content">
                        <div className="flex items-start">
                          <div className="me-4">
                            <span
                              className="w-[1.25rem] h-[1.25rem] inline-flex items-center justify-center font-medium leading-[1.25rem] text-[0.65rem] text-primary bg-primary/10 rounded-full">
                              <i className="bi bi-circle-fill text-[0.5rem]"></i>
                            </span>
                          </div>
                          <div className="crm-timeline-content text-defaultsize">
                            <span className="font-semibold rtl:ms-1">Update of calendar events
                              &amp;</span><span><Link href="#!" className="text-primary font-semibold ms-1">
                                Added new events in next week.</Link></span>
                          </div>
                          <div className="flex-grow text-end">
                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">4:45PM</span>
                          </div>
                        </div>
                      </li>
                      <li className="crm-recent-activity-content">
                        <div className="flex items-start  text-defaultsize">
                          <div className="me-4">
                            <span
                              className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-secondary bg-secondary/10 rounded-full">
                              <i className="bi bi-circle-fill text-[0.5rem]"></i>
                            </span>
                          </div>
                          <div className="crm-timeline-content">
                            <span>New theme for <span className="font-semibold">Spruko Website</span> completed</span>
                            <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">Lorem ipsum, dolor sit amet.</span>
                          </div>
                          <div className="flex-grow text-end">
                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">3 hrs</span>
                          </div>
                        </div>
                      </li>
                      <li className="crm-recent-activity-content  text-defaultsize">
                        <div className="flex items-start">
                          <div className="me-4">
                            <span
                              className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-success bg-success/10 rounded-full">
                              <i className="bi bi-circle-fill  text-[0.5rem]"></i>
                            </span>
                          </div>
                          <div className="crm-timeline-content">
                            <span>Created a <span className="text-success font-semibold">New Task</span> today <span
                              className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] text-[0.65rem] inline-flex items-center justify-center font-medium bg-purple/10 rounded-full ms-1"><i
                                className="ri-add-fill text-purple text-[0.75rem]"></i></span></span>
                          </div>
                          <div className="flex-grow text-end">
                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">22 hrs</span>
                          </div>
                        </div>
                      </li>
                      <li className="crm-recent-activity-content  text-defaultsize">
                        <div className="flex items-start">
                          <div className="me-4">
                            <span
                              className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-pink bg-pink/10 rounded-full">
                              <i className="bi bi-circle-fill text-[0.5rem]"></i>
                            </span>
                          </div>
                          <div className="crm-timeline-content">
                            <span>New member <span
                              className="py-[0.2rem] px-[0.45rem] font-semibold rounded-sm text-pink text-[0.75em] bg-pink/10">@andreas
                              gurrero</span> added today to AI Summit.</span>
                          </div>
                          <div className="flex-grow text-end">
                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">Today</span>
                          </div>
                        </div>
                      </li>
                      <li className="crm-recent-activity-content  text-defaultsize">
                        <div className="flex items-start">
                          <div className="me-4">
                            <span
                              className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-warning bg-warning/10 rounded-full">
                              <i className="bi bi-circle-fill text-[0.5rem]"></i>
                            </span>
                          </div>
                          <div className="crm-timeline-content">
                            <span>32 New people joined summit.</span>
                          </div>
                          <div className="flex-grow text-end">
                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">22 hrs</span>
                          </div>
                        </div>
                      </li>
                      <li className="crm-recent-activity-content  text-defaultsize">
                        <div className="flex items-start">
                          <div className="me-4">
                            <span
                              className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-info bg-info/10 rounded-full">
                              <i className="bi bi-circle-fill text-[0.5rem]"></i>
                            </span>
                          </div>
                          <div className="crm-timeline-content">
                            <span>Neon Tarly added <span className="text-info font-semibold">Robert Bright</span> to AI
                              summit project.</span>
                          </div>
                          <div className="flex-grow text-end">
                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">12 hrs</span>
                          </div>
                        </div>
                      </li>
                      <li className="crm-recent-activity-content  text-defaultsize">
                        <div className="flex items-start">
                          <div className="me-4">
                            <span
                              className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-[#232323] dark:text-white bg-[#232323]/10 dark:bg-white/20 rounded-full">
                              <i className="bi bi-circle-fill text-[0.5rem]"></i>
                            </span>
                          </div>
                          <div className="crm-timeline-content">
                            <span>Replied to new support request <i
                              className="ri-checkbox-circle-line text-success text-[1rem] align-middle"></i></span>
                          </div>
                          <div className="flex-grow text-end">
                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">4 hrs</span>
                          </div>
                        </div>
                      </li>
                      <li className="crm-recent-activity-content  text-defaultsize">
                        <div className="flex items-start">
                          <div className="me-4">
                            <span
                              className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-purple bg-purple/10 rounded-full">
                              <i className="bi bi-circle-fill text-[0.5rem]"></i>
                            </span>
                          </div>
                          <div className="crm-timeline-content">
                            <span>Completed documentation of <Link href="#!"
                              className="text-purple underline font-semibold">AI Summit.</Link></span>
                          </div>
                          <div className="flex-grow text-end">
                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">4 hrs</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
{/* Block 13 Ends */}
{/*CRM ends */}



<div><hr/>-------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>




{/*E commerce starts */}
{/* Block 14 Starts */}
<div> Block 14</div>
<div class="font-bold text-5xl text-emerald-500">E commerce Starts</div>
<div className="box">
                                <div className="box-body">
                                    <div className="grid grid-cols-12">
                                        <div className="xxxl:col-span-3 col-span-4 flex items-center ecommerce-icon px-0">
                                            <span className="rounded-md p-4 bg-primary/10">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-white primary" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" /><path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z" /></g></svg>
                                            </span>
                                        </div>
                                        <div className="xxxl:col-span-9 col-span-8 ps-0">
                                            <div className="mb-2">Total Sales</div>
                                            <div className="text-[#8c9097] dark:text-white/50 mb-1 text-[0.75rem]">
                                                <span className="text-defaulttextcolor font-semibold text-[1.25rem] leading-none vertical-bottom">
                                                    14,732
                                                </span>
                                            </div>
                                            <div>
                                                <span className="text-[0.75rem] mb-0">Increase by <span className="badge bg-success/10 text-success mx-1">+4.2%</span> this month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
{/* Block 14 Ends */}

{/* Block 15 Starts */}
<div> Block 15</div>
<div className="box">
                                <div className="box-body">
                                    <div className="grid grid-cols-12">
                                        <div className="xxxl:col-span-3 col-span-4 flex items-center ecommerce-icon success px-0">
                                            <span className="rounded-md p-4 bg-success/10">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-white success" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                                            </span>
                                        </div>
                                        <div className="xxxl:col-span-9 col-span-8 ps-0">
                                            <div className="mb-2">Total Visitors</div>
                                            <div className="text-[#8c9097] dark:text-white/50 mb-1 text-[0.75rem]">
                                                <span className="text-defaulttextcolor font-semibold text-[1.25rem]  leading-none vertical-bottom">
                                                    1,29,368
                                                </span>
                                            </div>
                                            <div>
                                                <span className="text-[0.75rem] mb-0">Decreased by <span className="badge bg-danger/10 text-danger mx-1">-7.6%</span> this month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
{/* Block 15 Ends */}

{/* Block 16 Starts */}
<div> Block 16</div>
<div className="box">
                                <div className="box-body">
                                    <div className="grid grid-cols-12">
                                        <div className="xxxl:col-span-3 col-span-4 flex items-center ecommerce-icon warning px-0">
                                            <span className="rounded-md p-4 bg-warning/10">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-white warning" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>
                                            </span>
                                        </div>
                                        <div className="xxxl:col-span-9 col-span-8 ps-0">
                                            <div className="mb-2">Total Orders</div>
                                            <div className="text-[#8c9097] dark:text-white/50 mb-1 text-[0.75rem]">
                                                <span className="font-semibold text-[1.25rem] leading-none vertical-bottom text-defaulttextcolor">
                                                    35,367
                                                </span>
                                            </div>
                                            <div>
                                                <span className="text-[0.75rem] mb-0">Increased by <span className="badge bg-success/10 text-success mx-1">+2.5%</span> this month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


{/* Block 16 Ends */}

{/* Block 17 Starts */}
<div> Block 17</div>
<div className="box">
                                <div className="box-body">
                                    <div className="grid grid-cols-12">
                                        <div className="xxxl:col-span-3 col-span-4 flex items-center ecommerce-icon secondary  px-0">
                                            <span className="rounded-md p-4 bg-secondary/10">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-white secondary" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0,0h24v24H0V0z" fill="none" /><g><path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" /><rect height="2" width="6" x="9" y="7" /><rect height="2" width="2" x="16" y="7" /><rect height="2" width="6" x="9" y="10" /><rect height="2" width="2" x="16" y="10" /></g></svg>
                                            </span>
                                        </div>
                                        <div className="xxxl:col-span-9 col-span-8 ps-0">
                                            <div className="mb-2">Total Expenses</div>
                                            <div className="text-[#8c9097] dark:text-white/50 mb-1 text-[0.75rem]">
                                                <span className="font-semibold text-[1.25rem] leading-none text-defaulttextcolor vertical-bottom">
                                                    $28,346.00
                                                </span>
                                            </div>
                                            <div>
                                                <span className="text-[0.75rem] mb-0">Increase by <span className="badge bg-success/10 text-success mx-1">+12.0%</span> this month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
{/* Block 17 Ends */}



{/* Block 18 Starts */}
<div> Block 18</div>
<div className="box overflow-hidden">
                                <div className="ecommerce-sale-image">
                                    <img src="../../../assets/images/ecommerce/png/35.png" className="card-img-top" alt="..." />
                                    <div className="card-img-overlay  p-6 text-white">
                                        <p className=" opacity-[0.7] text-[0.75rem]">Spruko Official.Inc</p>
                                        <p className="font-semibold mb-6 text-[1rem]">BIG SAVING DAYS</p>
                                        <p className="ecommerce-bankoffer-details mb-4">Bank Offer 10% off on Aches Bank Credit Cards, up to $10. On orders of $500 and above <Link href="#!" className="underline text-white">T&amp;C</Link></p>
                                        <p className="ecommerce-sale-days mb-0">15, Jan 2022 - 19, Jan 2022</p>
                                        <p className="ecommerce-sales-calendar text-center mb-0">
                                            <span>15</span>
                                            <span className="block text-[0.9375rem] leading-none font-semibold">Jan</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <Link href="#!" className="text-primary text-[0.9375rem] font-semibold">Biggest sale is back.</Link>
                                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore harum accusamus eum dolorum sapiente. Saepe</p>
                                    <button type="button" className="tibtn ti-btn-primary-full ti-btn-wave !py-[0.55rem] !px-[0.95rem] gap-2 rounded-[0.35rem] text-[0.85rem] font-medium !shadow-none me-2">Notify Me</button>
                                    <button type="button" className="ti-btn ti-btn-outline-primary ti-btn-wave !rounded-[0.35rem] !text-[0.85rem] !font-medium !shadow-none">Offers</button>
                                </div>
                            </div>
{/* Block 18 Ends */}

{/* Block 19 Starts */}
{/* Recentorders array has been imported from file */}
<div> Block 19</div>
<div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Recent Orders
                                    </div>
                                    <div className="hs-dropdown ti-dropdown">
                                        <Link aria-label="anchor" href="#!" className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                                            aria-expanded="false"><i className="fe fe-more-vertical text-[0.8rem]"></i>
                                        </Link>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Action</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Another action</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Something else here</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <ul className="list-none mb-0">
                                        {Recentorders.map((idx) => (
                                            <li className={idx.class} key={Math.random()}>
                                                <Link href="#!">
                                                    <div className="flex tems-center">
                                                        <div className="leading-none">
                                                            <span className="inline-flex justify-center items-center">
                                                                <img src={idx.src} alt="" className="w-[2.5rem] h-[2.5rem]leading-[2.5rem] text-[0.8rem] rounded-md" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-grow ms-2">
                                                            <p className="font-semibold mb-0">{idx.product}</p>
                                                            <p className="text-[0.75rem] !text-[#8c9097] dark:text-white/50 mb-0">{idx.text}</p>
                                                        </div>
                                                        <div>
                                                            <span className="text-success font-semibold">${idx.price}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
{/* Block 19 Ends */}

{/* Block 20 Starts */}
<div> Block 20</div>
<div className="box">
                                <div className="box-header justify-between sm:flex block">
                                    <div className="box-title">
                                        Orders
                                    </div>
                                    <div>
                                        <nav className="sm:flex block sm:mt-0 mt-2" aria-label="Tabs">
                                            <Link href="#!" className="block w-full sm:w-auto hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-4  text-[0.8rem] font-medium text-center rounded-md hover:text-primary active" id="active-item" data-hs-tab="#taskactive" aria-controls="taskactive">
                                                Active Orders
                                            </Link>
                                            <Link href="#!" className="block w-full sm:w-auto hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-4 text-[0.8rem] font-medium text-center  rounded-md hover:text-primary " id="completed-item" data-hs-tab="#completed" aria-controls="completed">
                                                Completed
                                            </Link>
                                            <Link href="#!" className="block w-full sm:w-auto hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-4 text-[0.8rem] font-medium text-center  rounded-md hover:text-primary " id="cancelled-item" data-hs-tab="#cancelled" aria-controls="cancelled">
                                                Cancelled
                                            </Link>
                                        </nav>
                                    </div>
                                </div>
                                <div className="box-body !p-0">
                                    <div className="tab-content">
                                        <div className="tab-pane show active text-[#8c9097] dark:text-white/50 !border-0 !p-0" id="taskactive"
                                            role="tabpanel">
                                            <div className="table-responsive overflow-auto">
                                                <table className="table box-table table-vcenter whitespace-nowrap mb-0 min-w-full">
                                                    <tbody className="active-tab">
                                                        <tr>
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/4.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Amanda Nanes</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 font-semibold">$229.99</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Delivery Date</span>
                                                                    <p className="mb-0">24 May 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/1.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr className="border-y border-inherit border-solid dark:border-defaultborder/10" >
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/10.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Peter Parkour</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 font-semibold">$135.29</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Delivery Date</span>
                                                                    <p className="mb-0">18 May 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/2.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr className="border-y border-inherit border-solid dark:border-defaultborder/10">
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md offline avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/12.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Jackie Chen</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 fw-semibold">$1,299.99</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="aitems-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Delivery Date</span>
                                                                    <p className="mb-0">29 May 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/3.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr className="border-y border-inherit border-solid dark:border-defaultborder/10">
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/5.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Ryan Gercia</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 fw-semibold">$249.29</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Delivery Date</span>
                                                                    <p className="mb-0">05 Jun 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/4.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md offline avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/14.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Hugh Jackma</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 font-semibold">$499.99</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Delivery Date</span>
                                                                    <p className="mb-0">15 May 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/5.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane text-[#8c9097] dark:text-white/50 !border-0 !p-0 hidden" id="completed" role="tabpanel" aria-labelledby="completed-item">
                                            <div className="table-responsive overflow-auto">
                                                <table className="table box-table table-vcenter whitespace-nowrap mb-0 min-w-full">
                                                    <tbody className="active-tab">
                                                        <tr>
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md offline avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/2.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Lisa Rebecca</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 fw-semibold">$1,199.99</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-success">Delivered On</span>
                                                                    <p className="mb-0">24 Dec 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/6.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-inherit border-solid border-s-0 border-e-0">
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md offline avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/13.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Matt Martin</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 font-semibold">$799.99</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-success">Delived On</span>
                                                                    <p className="mb-0">18 Nov 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/7.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-inherit border-solid border-s-0 border-e-0">
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/7.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Mitchell Osama</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 fw-semibold">$279.00</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-success">Delivery On</span>
                                                                    <p className="mb-0">29 Dec 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/8.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-inherit border-solid border-s-0 border-e-0">
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/12.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Cornor Mcgood</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 font-semibold">$79.99</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-success">Delivered On</span>
                                                                    <p className="mb-0">05 Dec 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/9.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/15.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Kishan Patel</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 fw-semibold">$1449.29</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-success">Delivered On</span>
                                                                    <p className="mb-0">20 Nov 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/10.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane text-[#8c9097] dark:text-white/50 !border-0 !p-0 hidden" id="cancelled" role="tabpanel" aria-labelledby="cancelled-item">
                                            <div className="table-responsive overflow-auto">
                                                <table className="table box-table table-vcenter whitespace-nowrap mb-0 min-w-full">
                                                    <tbody className="active-tab">
                                                        <tr>
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/6.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Hailey Bobber</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 fw-semibold">$199.99</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-danger">Cancelled Date</span>
                                                                    <p className="mb-0">09 Dec 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/11.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-inherit border-solid border-s-0 border-e-0">
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md offline avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/14.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Anthony Mansion</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 fw-semibold">$179.99</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-danger">Cancelled Date</span>
                                                                    <p className="mb-0">28 Dec 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/12.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-inherit border-solid border-s-0 border-e-0">
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/16.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Simon Carter</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 fw-semibold">$149.99</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-danger">Cancelled Date</span>
                                                                    <p className="mb-0">30 Dec 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/13.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-inherit border-solid border-s-0 border-e-0">
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/3.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Sofia Sekh</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 fw-semibold">$1439.99</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-danger">Cancelled Date</span>
                                                                    <p className="mb-0">03 Dec 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/14.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md offline avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/9.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Kimura Kai</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 fw-semibold">$1092.99</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-danger">Cancelled Date</span>
                                                                    <p className="mb-0">02 Dec 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/15.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
{/* Block 20 Ends */}


{/* Block 21 Starts */}
<div> Block 21</div>
<div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">Earnings</div>
                                    <div className="hs-dropdown ti-dropdown">
                                        <Link href="#!" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                                            aria-expanded="false">
                                            View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                        </Link>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">Today</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">This Week</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">Last Week</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="sm:grid sm:grid-cols-12 lg:ps-[3rem] mb-6 pb-6 sm:gap-0 gap-y-3">
                                        <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4">
                                            <div className="mb-1 earning first-half ms-4">First Half</div>
                                            <div className="mb-0">
                                                <span className="mt-1 text-[1rem] font-semibold">$51.94k</span>
                                                <span className="text-success"><i className="fa fa-caret-up mx-1"></i>
                                                    <span className="badge bg-success/10 text-success !px-1 !py-2 text-[0.625rem]">+0.9%</span></span>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4">
                                            <div className="mb-1 earning top-gross ms-4">Top Gross</div>
                                            <div className="mb-0">
                                                <span className="mt-1 text-[1rem] font-semibold">$18.32k</span>
                                                <span className="text-success"><i className="fa fa-caret-up mx-1"></i>
                                                    <span className="badge bg-success/10 text-success !px-1 !py-2 text-[0.625rem]">+0.39%</span></span>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4">
                                            <div className="mb-1 earning second-half ms-3">Second Half</div>
                                            <div className="mb-0">
                                                <span className="mt-1 text-[1rem] font-semibold">$38k</span>
                                                <span className="text-danger"><i className="fa fa-caret-up mx-1"></i>
                                                    <span className="badge bg-danger/10 text-danger !px-1 !py-2 text-[0.625rem]">-0.15%</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="earnings">
                                        <Earning />
                                    </div>
                                </div>
                            </div>
{/* Block 21 Ends */}


{/* Block 22 Starts */}
<div> Block 22</div>
<div className="box custom-card">
                                <div className="box-header">
                                    <div className="box-title">Top Selling Products</div>
                                </div>
                                <div className="box-body !p-0">
                                    <div className="table-responsive">
                                        <table className="table whitespace-nowrap min-w-full mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="text-center">S.no</th>
                                                    <th scope="col" className="text-start">Product Name</th>
                                                    <th scope="col" className="text-start">Category</th>
                                                    <th scope="col" className="text-start">Stock</th>
                                                    <th scope="col" className="text-start">Total Sales</th>
                                                </tr>
                                            </thead>
                                            <tbody className="top-selling">
                                                <tr className="border-y border-inherit border-solid dark:border-defaultborder/10 ">
                                                    <td className="text-center leading-none">
                                                        <span className="avatar avatar-md !rounded-full">
                                                            <img src="../../../assets/images/ecommerce/png/36.png" className="p-2 !rounded-full bg-light" alt="" />
                                                        </span>
                                                    </td>
                                                    <td>Ethnic School bag for children (24L)</td>
                                                    <td>Bags</td>
                                                    <td><span className="badge badge-sm bg-success/10 text-success !font-normal">In Stock</span></td>
                                                    <td>
                                                        <span className="font-semibold">5,093</span>
                                                    </td>
                                                </tr>
                                                <tr className="border-y border-inherit border-solid dark:border-defaultborder/10 ">
                                                    <td className="text-center leading-none">
                                                        <span className="avatar avatar-md !rounded-full">
                                                            <img src="../../../assets/images/ecommerce/png/38.png" className="p-2 !rounded-full bg-light" alt="" />
                                                        </span>
                                                    </td>
                                                    <td>Leather jacket for men (S,M,L,XL)</td>
                                                    <td>Clothing</td>
                                                    <td><span className="badge badge-sm bg-success/10 text-success !font-normal">In Stock</span></td>
                                                    <td>
                                                        <span className="font-semibold">6,890</span>
                                                    </td>
                                                </tr>
                                                <tr className="border-y border-inherit border-solid dark:border-defaultborder/10 ">
                                                    <td className="text-center leading-none">
                                                        <span className="avatar avatar-md !rounded-full">
                                                            <img src="../../../assets/images/ecommerce/png/39.png" className="p-2 !rounded-full bg-light" alt="" />
                                                        </span>
                                                    </td>
                                                    <td>Childrens Teddy toy of high quality</td>
                                                    <td>Toys</td>
                                                    <td><span className="badge badge-sm bg-danger/10 text-danger !font-normal">Out Of Stock</span></td>
                                                    <td>
                                                        <span className="font-semibold">5,423</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center leading-none">
                                                        <span className="avatar avatar-md !rounded-full">
                                                            <img src="../../../assets/images/ecommerce/png/40.png" className="p-2 !rounded-full bg-light" alt="" />
                                                        </span>
                                                    </td>
                                                    <td>Orange smart watch with square dial (24mm)</td>
                                                    <td>Fashion</td>
                                                    <td><span className="badge badge-sm bg-danger/10 text-danger !font-normal">Out Of Stock</span></td>
                                                    <td>
                                                        <span className="font-semibold">10,234</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
{/* Block 22 Ends */}

{/* Block 23 Starts */}
<div> Block 23</div>
<div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Top Countries By Sales
                                    </div>
                                    <div className="hs-dropdown ti-dropdown">
                                        <Link aria-label="anchor" href="#!" className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                                            aria-expanded="false"><i className="fe fe-more-vertical text-[0.8rem]"></i>
                                        </Link>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Action</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Another action</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Something else here</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="flex items-center mb-2">
                                        <h4 className="mb-0 leading-none text-[1.5rem] font-medium">38,256</h4>
                                        <span className="badge bg-primary/10 mx-1 text-primary">12.24%</span>
                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">Since last week</span>
                                    </div>
                                    <ul className="mb-0 pt-3 list-none">
                                        {Countries.map((idx) => (
                                            <li className={idx.class2} key={Math.random()}>
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center leading-none">
                                                        <span className="avatar avatar-xs me-2">
                                                            <img src={idx.src} alt="" className="rounded-full h-[1.25rem] w-[1.25rem]" />
                                                        </span>
                                                        <span className="top-country-name w-[4.5rem]">{idx.text}</span>
                                                    </div>
                                                    <div>
                                                        <i className={`ti ti-trending-up text-[1rem] text-${idx.color}`}></i>
                                                    </div>
                                                    <div className="text-[0.875rem]">{idx.price}</div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
{/* Block 23 Ends */}


{/* Block 24 Starts */}
<div> Block 24</div>
<div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Top Customers
                                    </div>
                                    <div className="hs-dropdown ti-dropdown">
                                        <Link href="#!" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                                            aria-expanded="false">
                                            View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                        </Link>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">Today</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">This Week</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">Last Week</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <ul className="list-none mb-0">
                                        <li className="mb-4">
                                            <Link href="#!">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-start justify-center">
                                                        <img src="../../../assets/images/faces/4.jpg" alt="" className="avatar avatar-md avatar-rounded !mb-0 me-2" />
                                                        <div>
                                                            <p className="mb-0 font-semibold">Emma Wilson</p>
                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">15 Purchases<i className="bi bi-patch-check-fill text-[0.875rem] text-primary ms-2"></i></p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="text-[0.875rem]">$1,835</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link href="#!">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-start justify-center">
                                                        <img src="../../../assets/images/faces/15.jpg" alt="" className="avatar avatar-md avatar-rounded !mb-0 me-2" />
                                                        <div>
                                                            <p className="mb-0 font-semibold">Robert Lewis</p>
                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">18 Purchases<i className="bi bi-patch-check-fill text-[0.875rem] text-primary ms-2"></i></p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="text-[0.875rem]">$2,415</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link href="#!">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-start justify-center">
                                                        <img src="../../../assets/images/faces/5.jpg" alt="" className="avatar avatar-md avatar-rounded !mb-0 me-2" />
                                                        <div>
                                                            <p className="mb-0 font-semibold">Angelina Hose</p>
                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">21 Purchases<i className="bi bi-patch-check-fill text-[0.875rem] text-primary ms-2"></i></p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="text-[0.875rem]">$2,341</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="mb-0">
                                            <Link href="#!">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-start justify-center">
                                                        <img src="../../../assets/images/faces/2.jpg" alt="" className="me-2 avatar avatar-md avatar-rounded !mb-0" />
                                                        <div>
                                                            <p className="mb-0 font-semibold">Samantha Sam</p>
                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">24 Purchases<i className="bi bi-patch-check-fill text-[0.875rem] text-primary ms-2"></i></p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="text-[0.875rem]">2,624</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
{/* Block 24 Ends */}

{/* Block 25 Starts */}
<div> Block 25</div>
<div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Products Overview
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2 mt-sm-0">
                                <div>
                                    <input className="ti-form-control form-control-sm" type="text" placeholder="Search Here" onChange={(ele) => { myfunction(ele.target.value); }}
                                        aria-label=".form-control-sm example" />
                                </div>
                                <div className="hs-dropdown ti-dropdown">
                                    <Link href="#!"
                                        className="ti-btn bg-primary text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium"
                                        aria-expanded="false">
                                        Sort By<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                    </Link>
                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            href="#!">New</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            href="#!">Popular</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            href="#!">Relevant</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="overflow-x-auto">
                                <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
                                    <thead>
                                        <tr className="border border-inherit border-solid  dark:border-defaultborder/10 ">
                                            <th scope="col" className="!text-start">Name</th>
                                            <th scope="col" className="!text-start">Product Id</th>
                                            <th scope="col" className="!text-start">Price</th>
                                            <th scope="col" className="!text-start">Status</th>
                                            <th scope="col" className="!text-start">Sales</th>
                                            <th scope="col" className="!text-start">Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Data.map((idx) => (
                                            <tr className="border-y border-inherit border-solid dark:border-defaultborder/10" key={Math.random()}>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="me-2 leading-none">
                                                            <span className="avatar avatar-sm">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="text-sm">{idx.name}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="font-semibold">{idx.productid}</span>
                                                </td>
                                                <td>
                                                    {idx.price}
                                                </td>
                                                <td>
                                                    <span className={`badge bg-${idx.color}/10 text-${idx.color}`}>{idx.status}</span>
                                                </td>
                                                <td>
                                                    <span className="">{idx.sales}</span>
                                                </td>
                                                <td>
                                                    <span className="">{idx.text}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="box-footer">
                            <div className="sm:flex items-center">
                                <div>
                                    Showing 5 Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="ti-pagination mb-0">
                                            <li className="page-item disabled">
                                                <Link className="page-link" href="#!">
                                                    Prev
                                                </Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link active" href="#!">1</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link !text-primary" href="#!">
                                                    next
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
{/* Block 25 Ends */}



{/*E commerce ends */}
<div><hr/>-------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>

{/*Crytpo starts */}
    
    <div class="font-bold text-5xl text-emerald-500">Crypto Starts</div>  
        {/* Block 26 Starts */}
                <div> Block 26</div>
                <div className="box">
                                <div className="box-body">
                                    <div className="flex items-center mb-5">
                                        <div className="flex items-center">
                                            <div className="me-2">
                                                <span className="avatar avatar-md avatar-rounded bg-light p-2">
                                                    <img src="../../../assets/images/crypto-currencies/regular/Bitcoin.svg"
                                                        alt="" />
                                                </span>
                                            </div>
                                            <div className="mb-0 font-semibold">
                                                Bitcoin - BTC
                                            </div>
                                        </div>
                                        <div className="ms-auto">
                                            <div id="btc-chart">
                                                <CryptoBTC />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-end">
                                        <div>
                                            <p className="mb-1">BTC / USD</p>
                                            <p className="text-[1.25rem] mb-0 font-semibold leading-none !text-primary">
                                                $35,876.29</p>
                                        </div>
                                        <div className="ms-auto text-end">
                                            <p className="mb-0">$0.04</p>
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50"><span
                                                className="text-[#8c9097] dark:text-white/50">Vol:</span>(+2.33%)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

        {/* Block 26 Ends */}   

        {/* Block 27 Starts */}
           <div> Block 27</div>
           <div className="box">
                                <div className="box-body">
                                    <div className="flex items-center mb-5">
                                        <div className="flex items-center">
                                            <div className="me-2">
                                                <span className="avatar avatar-md avatar-rounded bg-light p-2">
                                                    <img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg"
                                                        alt="" />
                                                </span>
                                            </div>
                                            <div className="mb-0 font-semibold">
                                                Etherium - ETH
                                            </div>
                                        </div>
                                        <div className="ms-auto">
                                            <div id="eth-chart">
                                                <CryptoETH />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-end">
                                        <div>
                                            <p className="mb-1">ETH / USD</p>
                                            <p className="text-[1.25rem] mb-0 font-semibold leading-none !text-primary">
                                                $31,244.12</p>
                                        </div>
                                        <div className="ms-auto text-end">
                                            <p className="mb-0">$2.57</p>
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50"><span
                                                className="text-[#8c9097] dark:text-white/50">Vol:</span>(+13.45%)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

         {/* Block 27 Ends */}   

          {/* Block 28 Starts */}
          <div> Block 28</div>

          <div className="box">
                                <div className="box-body">
                                    <div className="flex items-center mb-5">
                                        <div className="flex items-center">
                                            <div className="me-2">
                                                <span className="avatar avatar-md avatar-rounded bg-light p-2">
                                                    <img src="../../../assets/images/crypto-currencies/regular/Dash.svg"
                                                        alt="" />
                                                </span>
                                            </div>
                                            <div className="mb-0 fw-semibold">
                                                Dash - DASH
                                            </div>
                                        </div>
                                        <div className="ms-auto">
                                            <div id="dash-chart">
                                                <Cryptodash />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-end">
                                        <div>
                                            <p className="mb-1">DASH / USD</p>
                                            <p className="text-[1.25rem] mb-0 font-semibold leading-none !text-primary">
                                                $26,345.000</p>
                                        </div>
                                        <div className="ms-auto text-end">
                                            <p className="mb-0">$12.32</p>
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50"><span
                                                className="text-[#8c9097] dark:text-white/50">Vol:</span>(+112.95%)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
{/* Block 28 Ends */}   

{/* Block 29 Starts */}
   <div> Block 29</div>

   <div className="box">
                                <div className="box-header justify-between flex-wrap">
                                    <div className="box-title">
                                        Crypto Statistics
                                    </div>
                                    <div className="inline-flex rounded-md shadow-sm" role="group"
                                        aria-label="Basic example">
                                        <button type="button"
                                            className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary-full text-white">1D</button>
                                        <button type="button"
                                            className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary">1W</button>
                                        <button type="button"
                                            className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary">1M</button>
                                        <button type="button"
                                            className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary">3M</button>
                                        <button type="button"
                                            className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary">6M</button>
                                        <button type="button"
                                            className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary !rounded-s-none">1Y</button>
                                    </div>
                                </div>
                                <div className="box-body !p-0">
                                    <div className="flex flex-wrap p-4 border-b border-dashed dark:border-defaultborder/10">
                                        <div className="me-3">
                                            <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                <img src="../../../assets/images/crypto-currencies/regular/Bitcoin.svg"
                                                    alt="" />
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap sm:justify-evenly flex-grow">
                                            <div className="sm:m-0 m-2">
                                                <span>Symbol</span>
                                                <p className="font-semibold mb-0">BTC</p>
                                            </div>
                                            <div className="sm:m-0 m-2">
                                                <span>Price Benchmark</span>
                                                <p className="font-semibold mb-0">128.00%</p>
                                            </div>
                                            <div className="sm:m-0 m-2">
                                                <span>Price (USD)</span>
                                                <p className="text-success font-semibold mb-0">$4,253.49</p>
                                            </div>
                                            <div className="sm:m-0 m-2">
                                                <span>Change (24H)</span>
                                                <p className="text-danger font-semibold mb-0">-0.24%</p>
                                            </div>
                                            <div className="sm:m-0 m-2">
                                                <span>Market Cap</span>
                                                <p className="font-semibold mb-0">$179.12B</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="crypto" className="p-4">
                                        <Statistics />
                                    </div>
                                </div>
                            </div>
 {/* Block 29 Ends */}   
  

 {/* Block 30 Starts */}
 <div> Block 30</div>

 <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">Recent Transactions</div>
                                    <div className="hs-dropdown ti-dropdown">
                                        <Link aria-label="anchor" href="#!"
                                            className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                                            aria-expanded="false"><i
                                                className="fe fe-more-vertical text-[0.8rem]"></i>
                                        </Link>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">Action</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">Another action</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">Something else here</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <ul className="list-none mb-0">
                                        <li className="mb-4">
                                            <Link href="#!">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <img src="../../../assets/images/crypto-currencies/square-color/Bitcoin.svg" alt="" className="w-[1.75rem] h-[1.75rem] me-2" />
                                                        <div>
                                                            <p className="mb-0 font-semibold">Bitcoin</p>
                                                            <p className="mb-0 text-[0.6875rem] text-success font-semibold">
                                                                Sell</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 font-semibold">
                                                            +$19,123.02
                                                        </p>
                                                        <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50  text-[0.6875rem]">
                                                            BTC 0.0823.45
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link href="#!">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" className="w-[1.75rem] h-[1.75rem] me-2" />
                                                        <div>
                                                            <p className="mb-0 font-semibold">Etherium</p>
                                                            <p
                                                                className="mb-0  text-[0.6875rem] text-primary font-semibold">
                                                                Buy</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 font-semibold">
                                                            -$1,430.92
                                                        </p>
                                                        <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50  text-[0.6875rem]">
                                                            ETH 10,783.23
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link href="#!">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex tems-center">
                                                        <img src="../../../assets/images/crypto-currencies/square-color/Dash.svg" alt="" className="w-[1.75rem] h-[1.75rem] me-2" />
                                                        <div>
                                                            <p className="mb-0 font-semibold">Dash</p>
                                                            <p
                                                                className="mb-0  text-[0.6875rem] text-success font-semibold">
                                                                Sell</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 font-semibold">
                                                            +$5,236.53
                                                        </p>
                                                        <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50  text-[0.6875rem]">
                                                            DASH 12,456.98
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link href="#!">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <img src="../../../assets/images/crypto-currencies/square-color/Bytecoin.svg" alt="" className="w-[1.75rem] h-[1.75rem] me-2" />
                                                        <div>
                                                            <p className="mb-0 font-semibold">Bytecoin</p>
                                                            <p
                                                                className="mb-0  text-[0.6875rem] text-primary font-semibold">
                                                                Buy</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 font-semibold">
                                                            -$1,810.93
                                                        </p>
                                                        <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50  text-[0.6875rem]">
                                                            BYTE 8,154.00
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link href="#!">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <img src="../../../assets/images/crypto-currencies/square-color/Golem.svg" alt="" className="w-[1.75rem] h-[1.75rem] me-2" />
                                                        <div>
                                                            <p className="mb-0 font-semibold">Golem</p>
                                                            <p
                                                                className="mb-0  text-[0.6875rem] text-success font-semibold">
                                                                Sell</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 font-semibold">
                                                            +$5,046.34
                                                        </p>
                                                        <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50 text-[0.6875rem]">
                                                            GOLEM 9,384.73
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link href="#!">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <img src="../../../assets/images/crypto-currencies/square-color/Siacoin.svg" alt="" className="w-[1.75rem] h-[1.75rem] me-2" />
                                                        <div>
                                                            <p className="mb-0 font-semibold">SiaCoin</p>
                                                            <p
                                                                className="mb-0  text-[0.6875rem] text-success font-semibold">
                                                                Sell</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 font-semibold">
                                                            +$2,625.50
                                                        </p>
                                                        <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50  text-[0.6875rem]">
                                                            SIA 3,151.09
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link href="#!">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <img src="../../../assets/images/crypto-currencies/square-color/Monero.svg" alt="" className="w-[1.75rem] h-[1.75rem] me-2" />
                                                        <div>
                                                            <p className="mb-0 font-semibold">Monero</p>
                                                            <p
                                                                className="mb-0  text-[0.6875rem] text-success font-semibold">
                                                                Sell</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 font-semibold">
                                                            +$1,256.24
                                                        </p>
                                                        <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50  text-[0.6875rem]">
                                                            XMR 2,799.06
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
{/* Block 30 Ends */}   

{/* Block 31 Starts */}
   <div> Block 31</div>

   <div className="box">
                                <div className="box-header">
                                    <div>
                                        <div className="mb-1">Wallet Value<span
                                            className="text-[0.625rem] badge bg-success/10 text-success p-1 ms-2"><i
                                                className="ri-arrow-up-s-line align-middle me-1"></i>12.2%</span></div>
                                        <div className="text-[1.25rem] font-semibold">$132,12933.000</div>
                                        <small className="text-[#8c9097] dark:text-white/50 font-semibold">12 BTC</small>
                                    </div>
                                    <div className="ms-auto">
                                        <span className="avatar avatar-xxl">
                                            <img className="buy-sell-image" src="../../../assets/images/media/media-82.png" alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="box-body crypto-data">
                                    <nav className="tab-style-1 sm:flex bg-light p-[0.65rem] rounded-sm mb-4" aria-label="Tabs">
                                        <Link href="#!" className="hs-tab-active:bg-primary hs-tab-active:text-white text-defaulttextcolor py-[0.35rem] px-4 flex-grow  text-sm font-medium text-center rounded-md hover:text-primary active" id="buy-crypto" data-hs-tab="#buy-crypto2" aria-controls="buycrypto">
                                            Buy
                                        </Link>
                                        <Link href="#!" className="hs-tab-active:bg-primary hs-tab-active:text-white text-defaulttextcolor py-[0.35rem] px-4 text-sm flex-grow font-medium text-center  rounded-md hover:text-primary " id="sell-crypto" data-hs-tab="#sell-crypto2" aria-controls="sellcrypto">
                                            Sell
                                        </Link>
                                    </nav>
                                    <div className="tab-content">
                                        <div className="tab-pane !border-0 show active !p-0" id="buy-crypto2" role="tabpanel">
                                            <div className="input-group mb-4 flex !flex-nowrap">
                                                <input type="text"
                                                    className="form-control form-control-sm crypto-buy-sell-input !rounded-s-md  !border-e-0"
                                                    aria-label="crypto buy select" placeholder="Select Currency" />
                                                <Select name="colors" data-trigger id="choices-single-default" options={Selectdata1} className="!rounded-e-md"
                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata1[0]]}
                                                />
                                            </div>
                                            <div className="input-group mb-4 flex !flex-nowrap">
                                                <input type="text"
                                                    className="form-control form-control-sm crypto-buy-sell-input !rounded-s-md  !border-e-0"
                                                    aria-label="crypto buy select" placeholder="36,335.00" />
                                                <Select name="colors" data-trigger id="choices-single-default1" options={Selectdata2} className="!rounded-e-md"
                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata2[0]]}
                                                />
                                            </div>
                                            <div>
                                                <div className="text-[0.875rem] py-2"><span
                                                    className="font-semibold text-dark dark:text-defaulttextcolor/70">Price:</span><span
                                                        className="text-[#8c9097] dark:text-white/50 ms-2 text-[0.875rem] inline-block">6.003435</span><span
                                                            className="text-dark font-semibold ltr:float-right rtl:float-left dark:text-defaulttextcolor/70">BTC</span></div>
                                                <div className="text-[0.875rem] py-2"><span
                                                    className="font-semibold text-dark dark:text-defaulttextcolor/70">Amount:</span><span
                                                        className="text-[#8c9097] dark:text-white/50 ms-2 text-[0.875rem] inline-block ">2,34,4543.00</span><span
                                                            className="text-dark font-semibold ltr:float-right rtl:float-left dark:text-defaulttextcolor/70">LTC</span></div>
                                                <div className="font-semibold text-[0.875rem] py-3 dark:text-defaulttextcolor/70">Total: <span
                                                    className="text-[0.875rem] inline-block dark:text-defaulttextcolor/70">22.00 BTC</span></div>
                                                <div className="text-[0.75rem] text-success !mb-3">Additional Charges:
                                                    0.32%(0.0001231 BTC)</div>
                                                <label className="font-semibold text-[0.75rem] !mt-2 !mb-2  dark:text-defaulttextcolor/70">SELECT PAYMENT
                                                    METHOD :</label>
                                                <div className="sm:grid grid-cols-12 sm:gap-2 ">
                                                    <div className="sm:col-span-6 col-span-12 sm:me-2 mb-2 sm:mb-0">
                                                        <div className="p-2 border rounded-md dark:border-defaultborder/10">
                                                            <div className="form-check !ps-0 !mb-0 !flex items-center">
                                                                <input className="form-check-input" type="radio"
                                                                    name="flexRadioDefault" id="flexRadioDefault1" />
                                                                <label className="form-check-label text-[0.75rem]"
                                                                    htmlFor="flexRadioDefault1">
                                                                    Credit / Debit Cards
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sm:col-span-6 col-span-12">
                                                        <div className="p-2 border rounded-md dark:border-defaultborder/10">
                                                            <div className="form-check !ps-0 !mb-0 !flex items-center">
                                                                <input className="form-check-input" type="radio"
                                                                    name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                                                <label className="form-check-label text-[0.75rem]"
                                                                    htmlFor="flexRadioDefault2">
                                                                    Paypal
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid  pt-3">
                                                <button type="button"
                                                    className="ti-btn bg-primary text-white ti-btn-wave">BUY</button>
                                            </div>
                                        </div>
                                        <div className="tab-pane !border-0 !p-0 hidden" id="sell-crypto2" role="tabpanel"
                                            aria-labelledby="sell-crypto">
                                            <div className="input-group mb-4 sm:flex block flex-nowrap">
                                                <input type="text"
                                                    className="form-control form-control-sm crypto-buy-sell-input !rounded-s-md !border-e-0"
                                                    aria-label="crypto buy select" placeholder="Select Currency" />
                                                <Select name="colors" data-trigger id="choices-single-default" options={Selectdata1} className="!rounded-e-md"
                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata1[0]]}
                                                />
                                            </div>
                                            <div className="input-group mb-4 sm:flex block flex-nowrap">
                                                <input type="text"
                                                    className="form-control form-control-sm crypto-buy-sell-input !rounded-s-md !border-e-0"
                                                    aria-label="crypto buy select" placeholder="36,335.00" />
                                                <Select name="colors" data-trigger id="choices-single-default1" options={Selectdata2} className="!rounded-e-md"
                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata2[0]]}
                                                />
                                            </div>
                                            <div>
                                                <div className="text-[0.875rem] py-2"><span
                                                    className="font-semibold text-dark dark:text-defaulttextcolor/70">Price:</span><span
                                                        className="text-[#8c9097] ms-2 text-[0.875rem] dark:text-defaulttextcolor/70">6.003435</span><span
                                                            className="text-dark font-semibold ltr:float-right rtl:float-left dark:text-defaulttextcolor/70">BTC</span></div>
                                                <div className="text-[0.875rem] py-2"><span
                                                    className="font-semibold text-dark dark:text-defaulttextcolor/70">Amount:</span><span
                                                        className="text-[#8c9097] ms-2 text-[0.875rem] dark:text-defaulttextcolor/70">2,34,4543.00</span><span
                                                            className="text-dark font-semibold ltr:float-right rtl:float-left dark:text-defaulttextcolor/70">LTC</span></div>
                                                <div className="font-semibold text-[0.875rem] py-3">Total: <span
                                                    className="text-[0.875rem]">22.00 BTC</span></div>
                                                <div className="text-[0.75rem] text-success !mb-3">Additional Charges:
                                                    0.32%(0.0001231 BTC)</div>
                                                <label className="font-semibold text-[0.75rem] mt-2 mb-2 dark:text-defaulttextcolor/70">SELECT PAYMENT
                                                    METHOD :</label>
                                                <div className="sm:grid grid-cols-12 sm:gap-2 ">
                                                    <div className="sm:col-span-6 col-span-12 sm:me-2 mb-2 sm:mb-0">
                                                        <div className="p-2 border rounded-md dark:border-defaultborder/10">
                                                            <div className="form-check !ps-0 !mb-0 !flex items-center">
                                                                <input className="form-check-input" type="radio"
                                                                    name="flexRadioDefault" id="flexRadioDefault11"
                                                                    defaultChecked />
                                                                <label className="form-check-label text-[0.75rem]"
                                                                    htmlFor="flexRadioDefault11">
                                                                    Credit / Debit Cards
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sm:col-span-6 col-span-12">
                                                        <div className="p-2 border rounded-md dark:border-defaultborder/10">
                                                            <div className="form-check !ps-0 !mb-0 !flex items-center">
                                                                <input className="form-check-input" type="radio"
                                                                    name="flexRadioDefault" id="flexRadioDefault12" />
                                                                <label className="form-check-label text-[0.75rem]"
                                                                    htmlFor="flexRadioDefault12">
                                                                    Paypal
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid  pt-3">
                                                <button type="button"
                                                    className="ti-btn bg-danger text-white ti-btn-wave">SELL</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
 {/* Block 31 Ends */}   

  {/* Block 32 Starts */}
  <div> Block 32</div>
  <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Recent Activity
                                </div>
                                <div className="hs-dropdown ti-dropdown">
                                    <Link aria-label="anchor" href="#!"
                                        className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium" aria-expanded="false"><i
                                            className="fe fe-more-vertical text-[0.8rem]"></i>
                                    </Link>
                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            href="#!">Action</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            href="#!">Another action</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            href="#!">Something else here</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="box-body  !p-0">
                                <div className="table-responsive">
                                    <table className="table box-table min-w-full table-vcenter whitespace-nowrap mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="text-center">Date</th>
                                                <th scope="col" className="text-start">Currency</th>
                                                <th scope="col" className="text-start">From / To</th>
                                                <th scope="col" className="text-start">Time &amp; Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="active-tab">
                                            {Recentactivity.map((idx) => (
                                                <tr className="border-t border-inherit border-solid  dark:border-defaultborder/10" key={Math.random()}>
                                                    <td>
                                                        <div className="text-center">
                                                            <p className="text-[#8c9097] dark:text-white/50 mb-0 font-semibold">{idx.month}</p>
                                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">{idx.day}</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex items-center">
                                                            <img src={idx.src1} alt="" className="leading-none avatar avatar-md avatar-rounded me-2 p-2 bg-light !my-auto" />
                                                            <div className="items-center">
                                                                <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Currency</span>
                                                                <p className="mb-0">{idx.text1} - <span
                                                                    className="text-[#8c9097] dark:text-white/50"> {idx.text2}</span></p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="items-center text-center">
                                                            <div className="flex items-center font-semibold">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <img src={idx.src2} alt="" />
                                                                </span>
                                                                <span className="ms-2">{idx.name}</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="items-center">
                                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-1">{idx.status}</span>
                                                            <p className="mb-0">{idx.time} -
                                                                <span
                                                                    className={`text-[0.6875rem] text-${idx.color} font-semibold`}> {idx.class}</span>
                                                            </p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

{/* Block 32 Ends */}   

{/* Block 33 Starts */}
<div> Block 33</div>
<div className="box">
                        <div className="box-header md:justify-between flex-wrap">
                            <div className="box-title">
                                Bitcoin Price Statistics
                            </div>
                            <div className="">
                                <button type="button"
                                    className="ti-btn ti-btn-success-full ti-btn-wave !py-1 !px-2 !text-[0.75rem]  me-2 !mb-0">Buy
                                    Now</button>
                                <div className="hs-dropdown ti-dropdown">
                                    <Link aria-label="anchor" href="#!"
                                        className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium" aria-expanded="false"><i
                                            className="fe fe-more-vertical text-[0.8rem]"></i>
                                    </Link>
                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            href="#!">Action</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            href="#!">Another action</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            href="#!">Something else here</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <ul className="border-0">
                                <li className="py-[0.8rem] px-[1.25rem] border-b dark:border-defaultborder/10">
                                    <Link href="#!" className=" flex-column items-start">
                                        <div className="flex w-full justify-between items-center">
                                            <p className="tx-14 mb-0 font-normal text-dark">Bitcoin value in USD</p>
                                            <p className="text-dark mb-0 font-normal tx-15">
                                                <span className="numberfont">$29,472.60</span>
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li className="py-[0.8rem] px-[1.25rem] border-b dark:border-defaultborder/10">
                                    <Link href="#!" className=" flex-column items-start">
                                        <div className="flex w-full justify-between items-center">
                                            <p className="tx-14 mb-0 font-normal text-dark">Price Change <span
                                                className="badge bg-primary/10 ms-3 text-primary">Increased</span>
                                            </p>
                                            <p className="text-success mb-0 font-normal tx-13">
                                                <span className="numberfont">+280.30(0.96%)</span> <i
                                                    className="fa fa-arrow-up"></i> today
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li className="py-[0.8rem] px-[1.25rem] border-b dark:border-defaultborder/10">
                                    <Link href="#!" className="flex-column items-start">
                                        <div className="flex w-full justify-between items-center">
                                            <p className="tx-14 mb-0 font-normal text-dark">Trade Value</p>
                                            <p className="text-dark mb-0 tx-15">
                                                <span className="numberfont">$245,36,465.652</span>
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li className="py-[0.8rem] px-[1.25rem] border-b dark:border-defaultborder/10">
                                    <Link href="#!" className=" flex-column items-start">
                                        <div className="flex w-full justify-between items-center">
                                            <p className="tx-14 mb-0 font-normal text-dark">Market Rank<span
                                                className="badge bg-secondary/10 ms-3 text-secondary">3 Years</span>
                                            </p>
                                            <p className="text-dark mb-0 tx-15">
                                                <span className="numberfont">#1</span>
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li className="py-[0.8rem] px-[1.25rem] border-b dark:border-defaultborder/10">
                                    <Link href="#!" className=" flex-column items-start">
                                        <div className="flex w-full justify-between items-center">
                                            <p className="tx-14 mb-0 font-normal text-dark">This Week High</p>
                                            <p className="text-success mb-0 tx-15">
                                                <span className="numberfont">$68,990.90</span>
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li className="py-[0.8rem] px-[1.25rem] border-b dark:border-defaultborder/10">
                                    <Link href="#!" className=" flex-column items-start">
                                        <div className="flex w-full justify-between items-center">
                                            <p className="tx-14 mb-0 font-normal text-dark">This Week Low</p>
                                            <p className="text-danger mb-0 tx-15">
                                                <span className="numberfont">$28,825.76</span>
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li className="py-[0.8rem] px-[1.25rem] border-b dark:border-defaultborder/10">
                                    <Link href="#!" className=" flex-column items-start">
                                        <div className="flex w-full justify-between items-center">
                                            <p className="tx-14 mb-0 font-normal text-dark">Market Dominance</p>
                                            <p className="text-dark mb-0 tx-15">
                                                <span className="numberfont">70%</span>
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li className="py-[0.8rem] px-[1.25rem]">
                                    <Link href="#!" className=" flex-column items-start border-0">
                                        <div className="flex w-full justify-between items-center">
                                            <p className="tx-14 mb-0 font-normal text-dark">Alltime High</p>
                                            <p className="text-info mb-0 tx-15">
                                                <span className="numberfont">$68,990.90</span>
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

{/* Block 33 Ends */}   

{/* Block 34 Starts */}
<div> Block 34</div>

<div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Top Traders
                            </div>
                            <div className="hs-dropdown ti-dropdown">
                                <Link href="#!" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                                    aria-expanded="false">
                                    View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                </Link>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Today</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">This Week</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Last Week</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="box-body">
                            <ul className="list-none my-1">
                                <li className="mb-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="me-2 leading-none">
                                                <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                    <img src="../../../assets/images/faces/11.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="mb-0 font-semibold">Json Taylor</p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">Bought 0.008213
                                                    Bitcoin using ****9808</p>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <p className="mb-0 font-semibold text-success">
                                                0.09251821409 <span className="text-default">- BTC</span>
                                            </p>
                                            <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50 text-[0.6875rem]">
                                                $1,203.92
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="me-2 leading-none">
                                                <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                    <img src="../../../assets/images/faces/4.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="mb-0 font-semibold">Alicia Smith</p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">Sold - 0.7902400
                                                    Litecoin</p>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <p className="mb-0 font-semibold text-success">
                                                0.2362333001 <span className="text-default">- LTC</span>
                                            </p>
                                            <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50 text-[0.6875rem]">
                                                $19,092.56
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="me-2 leading-none">
                                                <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                    <img src="../../../assets/images/faces/15.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="mb-0 font-semibold">Branco Eliga</p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">Bought +12.9092 Euro
                                                    coin</p>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <p className="mb-0 font-semibold text-success">
                                                0.009823487 <span className="text-default">- EUROC</span>
                                            </p>
                                            <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50 text-[0.6875rem]">
                                                $8,977.46
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="me-2 leading-none">
                                                <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                    <img src="../../../assets/images/faces/12.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="mb-0 font-semibold">Alec Carey</p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">Bought 32.09472944
                                                    Dash using wallet</p>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <p className="mb-0 font-semibold text-success">
                                                8.88234590 <span className="text-default">- DASH</span>
                                            </p>
                                            <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50 text-[0.6875rem]">
                                                $9,772.46
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="me-2 leading-none">
                                                <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                    <img src="../../../assets/images/faces/5.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="mb-0 font-semibold">Sia Linda</p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">Sent 0.00662 Bitcoin
                                                    to Ravos Chan</p>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <p className="mb-0 font-semibold text-success">
                                                58.6225600 <span className="text-default">- BTC</span>
                                            </p>
                                            <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50 text-[0.6875rem]">
                                                $9,772.46
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-0">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="me-2 leading-none">
                                                <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                    <img src="../../../assets/images/faces/10.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="mb-0 font-semibold">Ryan Ranolds</p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">Bought 2.098123
                                                    Etherium</p>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <p className="mb-0 font-semibold text-success">
                                                190.0092773 <span className="text-default">- ETH</span>
                                            </p>
                                            <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50 text-[0.6875rem]">
                                                $18,283982.00
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
{/* Block 34 Ends */}   

 {/* Block 35 Starts */}
 <div> Block 35</div>

 <div className="box">
                            <div className="box-header justify-between flex-wrap">
                                <div className="box-title mb-2 sm:mb-0">
                                    Crypto currencies Market Value
                                </div>
                                <div className="inline-flex rounded-md shadow-sm" role="group" aria-label="Basic example">
                                    <button type="button"
                                        className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary-full text-white">1D</button>
                                    <button type="button"
                                        className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary">1W</button>
                                    <button type="button"
                                        className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary">1M</button>
                                    <button type="button"
                                        className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary">3M</button>
                                    <button type="button"
                                        className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary">6M</button>
                                    <button type="button"
                                        className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary !rounded-s-none">1Y</button>
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="table-responsive">
                                    <table className="table table-hover whitespace-nowrap min-w-full table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="text-start">S.No</th>
                                                <th scope="col" className="text-start">Name</th>
                                                <th scope="col" className="text-start">Symbol</th>
                                                <th scope="col" className="text-start">Price</th>
                                                <th scope="col" className="text-start">Market Cap</th>
                                                <th scope="col" className="text-start">Price Graph</th>
                                                <th scope="col" className="text-start">Volume</th>
                                                <th scope="col" className="text-start">Price Change</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light">
                                                <td>1</td>
                                                <td>Bitcoin</td>
                                                <td>
                                                    <div className="leading-none flex items-center">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/regular/Bitcoin.svg"
                                                                alt="" />
                                                        </span> - BTC
                                                    </div>
                                                </td>
                                                <td>
                                                    $16,839.10
                                                </td>
                                                <td>
                                                    324.01B
                                                </td>
                                                <td>
                                                    <div id="bitcoin-price-graph">
                                                        <Cryptobitcoin />
                                                    </div>
                                                </td>
                                                <td>
                                                    14,674,311,168
                                                </td>
                                                <td>
                                                    <span className="text-success">0.30% <i
                                                        className="ti ti-arrow-big-up-lines ms-1"></i></span>
                                                </td>
                                            </tr>
                                            <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light">
                                                <td>2</td>
                                                <td>Etherium</td>
                                                <td>
                                                    <div className="leading-none flex items-center">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg"
                                                                alt="" />
                                                        </span> - ETH
                                                    </div>
                                                </td>
                                                <td>
                                                    1,217.96
                                                </td>
                                                <td>
                                                    $149,316,232,699
                                                </td>
                                                <td>
                                                    <div id="etherium-price-graph">
                                                        <Cryptoetherium />
                                                    </div>
                                                </td>
                                                <td>
                                                    $4,758,554,801
                                                </td>
                                                <td>
                                                    <span className="text-success">0.30% <i
                                                        className="ti ti-arrow-big-up-lines ms-1"></i></span>
                                                </td>
                                            </tr>
                                            <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light">
                                                <td>3</td>
                                                <td>Dash</td>
                                                <td>
                                                    <div className="leading-none flex items-center">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/regular/Dash.svg"
                                                                alt="" />
                                                        </span> - DASH
                                                    </div>
                                                </td>
                                                <td>
                                                    $43.49
                                                </td>
                                                <td>
                                                    $480,799,847
                                                </td>
                                                <td>
                                                    <div id="dash-price-graph">
                                                        <Cryptodash1 />
                                                    </div>
                                                </td>
                                                <td>
                                                    $52,626,563
                                                </td>
                                                <td>
                                                    <span className="text-success">0.45% <i
                                                        className="ti ti-arrow-big-up-lines ms-1"></i></span>
                                                </td>
                                            </tr>
                                            <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light">
                                                <td>4</td>
                                                <td>Ripple</td>
                                                <td>
                                                    <div className="leading-none flex items-center">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/regular/Ripple.svg"
                                                                alt="" />
                                                        </span> - XRP
                                                    </div>
                                                </td>
                                                <td>
                                                    $0.3531
                                                </td>
                                                <td>
                                                    $17,791,969,465
                                                </td>
                                                <td>
                                                    <div id="ripple-price-graph">
                                                        <Cryptoripple />
                                                    </div>
                                                </td>
                                                <td>
                                                    $511,598,941
                                                </td>
                                                <td>
                                                    <span className="text-success">0.97% <i
                                                        className="ti ti-arrow-big-up-lines ms-1"></i></span>
                                                </td>
                                            </tr>
                                            <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light">
                                                <td>5</td>
                                                <td>Iota</td>
                                                <td>
                                                    <div className="leading-none flex items-center">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/regular/IOTA.svg"
                                                                alt="" />
                                                        </span> - IOTA
                                                    </div>
                                                </td>
                                                <td>
                                                    $0.169741
                                                </td>
                                                <td>
                                                    $471,800,600
                                                </td>
                                                <td>
                                                    <div id="iota-price-graph">
                                                        <Cryptoiota />
                                                    </div>
                                                </td>
                                                <td>
                                                    $5,524,385
                                                </td>
                                                <td>
                                                    <span className="text-success">0.93% <i
                                                        className="ti ti-arrow-big-up-lines ms-1"></i></span>
                                                </td>
                                            </tr>
                                            <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light">
                                                <td>6</td>
                                                <td>Neo</td>
                                                <td>
                                                    <div className="leading-none flex items-center">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/regular/Neo.svg"
                                                                alt="" />
                                                        </span> - NEO
                                                    </div>
                                                </td>
                                                <td>
                                                    $6.43
                                                </td>
                                                <td>
                                                    $453,601,667
                                                </td>
                                                <td>
                                                    <div id="neo-price-graph">
                                                        <Cryptoneo />
                                                    </div>
                                                </td>
                                                <td>
                                                    $12,904,320
                                                </td>
                                                <td>
                                                    <span className="text-danger">0.49% <i
                                                        className="ti ti-arrow-big-down-lines ms-1"></i></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="sm:flex items-center">
                                    <div className="dark:text-defaulttextcolor/70">
                                        Showing 6 Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
                                    </div>
                                    <div className="ms-auto">
                                        <nav aria-label="Page navigation" className="pagination-style-4">
                                            <ul className="ti-pagination mb-0">
                                                <li className="page-item disabled">
                                                    <Link className="page-link" href="#!">
                                                        Prev
                                                    </Link>
                                                </li>
                                                <li className="page-item"><Link className="page-link active" href="#!">1</Link></li>
                                                <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
                                                <li className="page-item">
                                                    <Link className="page-link !text-primary" href="#!">
                                                        next
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
{/* Block 35 Ends */}   




{/*Crytpo ends */}


<div><hr/>-------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
      
      
    {/*Jobs starts */}
    
<div class="font-bold text-5xl text-emerald-500">Jobs Starts</div>  
{/* Block 37 Starts */}
<div> Block 37</div>

<div className="box">
                                <div className="box-body !pb-[0.9rem]">
                                    <div className="flex items-start">
                                        <div className="me-4 gap-0">
                                            <span className="avatar avatar-md p-2 bg-primary">
                                                <svg className="svg-white" xmlns="http://www.w3.org/2000/svg"
                                                    height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                                    <path
                                                        d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex mb-1 items-start justify-between">
                                                <h5 className="font-semibold mb-0 leading-none text-[1.25rem]">256</h5>
                                                <div className="text-danger font-semibold"><i
                                                    className="ri-arrow-down-s-fill me-1 align-middle"></i>-1.05%</div>
                                            </div>
                                            <p className="mb-0 text-[0.625rem] opacity-[0.7] text-[#8c9097] dark:text-white/50 font-semibold">TOTAL EMPLOYERS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
{/* Block 37 Ends */}   


{/* Block 38 Starts */}
<div> Block 38</div>

<div className="box">
                                <div className="box-body !pb-[0.9rem]">
                                    <div className="flex items-start">
                                        <div className="me-4">
                                            <span className="avatar avatar-md p-2 bg-secondary">
                                                <svg className="svg-white" xmlns="http://www.w3.org/2000/svg"
                                                    enableBackground="new 0 0 24 24" height="24px"
                                                    viewBox="0 0 24 24" width="24px" fill="#000000">
                                                    <rect fill="none" height="24" width="24" />
                                                    <g>
                                                        <path
                                                            d="M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14 c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2 c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14 c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M16.24,13.65c-1.17-0.52-2.61-0.9-4.24-0.9 c-1.63,0-3.07,0.39-4.24,0.9C6.68,14.13,6,15.21,6,16.39V18h12v-1.61C18,15.21,17.32,14.13,16.24,13.65z M8.07,16 c0.09-0.23,0.13-0.39,0.91-0.69c0.97-0.38,1.99-0.56,3.02-0.56s2.05,0.18,3.02,0.56c0.77,0.3,0.81,0.46,0.91,0.69H8.07z M12,8 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,8,12,8 M12,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3 C15,7.34,13.66,6,12,6L12,6z" />
                                                    </g>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex mb-1 items-start justify-between">
                                                <h5 className="font-semibold mb-0 leading-none text-[1.25rem]">4,026</h5>
                                                <div className="text-success font-semibold"><i
                                                    className="ri-arrow-up-s-fill me-1 align-middle"></i>+0.40%</div>
                                            </div>
                                            <p className="mb-0 text-[0.625rem] opacity-[0.7] text-[#8c9097] dark:text-white/50  font-semibold">TOTAL CANDIDATES</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
{/* Block 38 Ends */}   


{/* Block 39 Starts */}
<div> Block 39</div>

<div className="box">
                                <div className="box-body !pb-[0.9rem]">
                                    <div className="flex items-start">
                                        <div className="me-3">
                                            <span className="avatar avatar-md p-2 bg-warning">
                                                <svg className="svg-white" xmlns="http://www.w3.org/2000/svg"
                                                    height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                                    <path
                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-.61.08-1.21.21-1.78L8.99 15v1c0 1.1.9 2 2 2v1.93C7.06 19.43 4 16.07 4 12zm13.89 5.4c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.4z" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex mb-1 items-start justify-between">
                                                <h5 className="font-semibold mb-0 leading-none text-[1.25rem]">48</h5>
                                                <div className="text-success font-semibold"><i
                                                    className="ri-arrow-up-s-fill me-1 align-middle"></i>+0.82%</div>
                                            </div>
                                            <p className="mb-0 text-[0.625rem] opacity-[0.7] text-[#8c9097] dark:text-white/50 font-semibold">TOTAL LOCATIONS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
{/* Block 39 Ends */}   


{/* Block 40 Starts */}
<div> Block 40</div>

<div className="box">
                                <div className="box-body !pb-[0.9rem]">
                                    <div className="flex items-start">
                                        <div className="me-3">
                                            <span className="avatar avatar-md p-2 bg-success">
                                                <svg className="svg-white" xmlns="http://www.w3.org/2000/svg"
                                                    enableBackground="new 0 0 24 24" height="24px"
                                                    viewBox="0 0 24 24" width="24px" fill="#000000">
                                                    <g>
                                                        <rect fill="none" height="24" width="24" />
                                                    </g>
                                                    <g>
                                                        <g>
                                                            <path
                                                                d="M9,14c1.65,0,3-1.35,3-3s-1.35-3-3-3s-3,1.35-3,3S7.35,14,9,14z M9,10c0.54,0,1,0.46,1,1s-0.46,1-1,1s-1-0.46-1-1 S8.46,10,9,10z" />
                                                            <path
                                                                d="M22,3H2C0.9,3,0,3.9,0,5v14c0,1.1,0.9,2,2,2h20c1.1,0,1.99-0.9,1.99-2L24,5C24,3.9,23.1,3,22,3z M4.54,19 c1.1-1.22,2.69-2,4.46-2s3.36,0.78,4.46,2H4.54z M22,19h-6.08c-1.38-2.39-3.96-4-6.92-4s-5.54,1.61-6.92,4H2V5h20V19z" />
                                                            <polygon
                                                                points="15.78,11.15 17.25,10.3 17.25,12 18.75,12 18.75,10.3 20.22,11.15 20.97,9.85 19.5,9 20.97,8.15 20.22,6.85 18.75,7.7 18.75,6 17.25,6 17.25,7.7 15.78,6.85 15.03,8.15 16.5,9 15.03,9.85" />
                                                        </g>
                                                    </g>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex mb-1 items-start justify-between">
                                                <h5 className="font-semibold mb-0 leading-none text-[1.25rem]">1,116</h5>
                                                <div className="text-success font-semibold"><i
                                                    className="ri-arrow-up-s-fill me-1 align-middle"></i>+0.21%</div>
                                            </div>
                                            <p className="mb-0 text-[0.625rem] opacity-[0.7] text-[#8c9097] dark:text-white/50 font-semibold">TOTAL RECRUITERS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
{/* Block 40 Ends */}   


{/* Block 41 Starts */}
<div> Block 41</div>

<div className="box">
                                <div className="box-body !pb-[0.9rem]">
                                    <div className="flex items-start">
                                        <div className="me-3">
                                            <span className="avatar avatar-md p-2 bg-pink">
                                                <svg className="svg-white" xmlns="http://www.w3.org/2000/svg"
                                                    height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                                    <path
                                                        d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex mb-1 items-start justify-between">
                                                <h5 className="font-semibold mb-0 leading-none text-[1.25rem]">1,468</h5>
                                                <div className="text-danger font-semibold"><i
                                                    className="ri-arrow-down-s-fill me-1 align-middle"></i>-0.153%</div>
                                            </div>
                                            <p className="mb-0 text-[0.625rem] opacity-[0.7] text-[#8c9097] dark:text-white/50 font-semibold">TOTAL SUBSCRIPTIONS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
{/* Block 41 Ends */}   


{/* Block 42 Starts */}
<div> Block 42</div>
<div className="box">
                                <div className="box-body !pb-[0.9rem]">
                                    <div className="flex items-start">
                                        <div className="me-3">
                                            <span className="avatar avatar-md p-2 bg-pink">
                                                <svg className="svg-white" xmlns="http://www.w3.org/2000/svg"
                                                    enableBackground="new 0 0 24 24" height="24px"
                                                    viewBox="0 0 24 24" width="24px" fill="#000000">
                                                    <g>
                                                        <rect fill="none" height="24" width="24" />
                                                        <g>
                                                            <path
                                                                d="M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3L19,3z" />
                                                        </g>
                                                        <path
                                                            d="M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z" />
                                                    </g>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex mb-1 items-start justify-between">
                                                <h5 className="font-semibold mb-0 leading-none text-[1.25rem]">34%</h5>
                                                <div className="text-success font-semibold"><i
                                                    className="ri-arrow-up-s-fill me-1 align-middle"></i>+0.165%</div>
                                            </div>
                                            <p className="mb-0  text-[0.625rem] opacity-[0.7] text-[#8c9097] dark:text-white/50 font-semibold">RESSUME UPLOAD RATIO</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

{/* Block 42 Ends */}   


{/* Block 43 Starts */}
<div> Block 43</div>
<div className="box overflow-hidden">
                                <div className="box-header justify-between">
                                    <div className="box-title">Subscriptions Overview</div>
                                    <div className="hs-dropdown ti-dropdown">
                                        <Link href="#!" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                                            aria-expanded="false">
                                            View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                        </Link>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">Today</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">This Week</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">Last Week</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box-body !p-0">
                                    <div className="grid grid-cols-12 border-bottom border-block-end-dashed">
                                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-12">
                                            <div className="p-3 sm:border-e !border-0 sm:text-start text-center">
                                                <p className="text-[1.25rem] font-semibold mb-0">1,117</p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50">Total Subscriptions</p>
                                            </div>
                                        </div>
                                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-12">
                                            <div className="p-3 sm:border-e !border-0 sm:text-start text-center">
                                                <p className="text-[1.25rem] font-semibold mb-0"><span className="basic-subscription">742</span></p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50">Basic Subscriptions</p>
                                            </div>
                                        </div>
                                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-12">
                                            <div className="p-3 sm:text-start !border-0 text-center">
                                                <p className="text-[1.25rem] font-semibold mb-0"><span className="pro-subscription">259</span></p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50">Pro Subscriptions</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="subscriptionOverview" className="px-3 sm:mt-0 mt-3">
                                        <Subscriptions />
                                    </div>
                                </div>
                            </div>

{/* Block 43 Ends */}   


{/* Block 44 Starts */}
<div> Block 44</div>

<div className="box overflow-hidden">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Recent Jobs
                                    </div>
                                    <div className="hs-dropdown ti-dropdown">
                                        <Link href="#!" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                                            aria-expanded="false">
                                            View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                        </Link>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">Today</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">This Week</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">Last Week</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box-body !p-0 ">
                                    <ul className="list-group list-group-flush max-h-[22.5rem] overflow-auto" id="recent-jobs">
                                        <li className="list-group-item !border-t-0 !border-s-0 !border-e-0">
                                            <Link href="#!">
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="!text-primary inline-flex items-center justify-center avatar avatar-md avatar-rounded bg-primary/10">
                                                            AC
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <p className="mb-0 font-semibold">Ui Developer</p>
                                                        <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">Achies - 12 hrs ago</p>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 text-[0.75rem]">Full Time</p>
                                                        <span className="badge bg-success/10 !text-success">Fresher</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-group-item !border-x-0">
                                            <Link href="#!">
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="!text-secondary inline-flex items-center justify-center avatar  avatar-md avatar-rounded bg-secondary/10">
                                                            SI
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <p className="mb-0 font-semibold">AWS Engineer</p>
                                                        <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">Siachles - 2 hrs ago</p>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 text-[0.75rem]">Part Time</p>
                                                        <span className="badge bg-info/10 text-info">+1 yrs - Experience</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-group-item !border-x-0">
                                            <Link href="#!">
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="!text-white inline-flex items-center justify-center avatar avatar-md avatar-rounded bg-success">
                                                            LS
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <p className="mb-0 font-semibold">React Developer</p>
                                                        <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">LifeSpace - 6 hrs ago</p>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 text-[0.75rem] text-primary font-semibold">Freelancer</p>
                                                        <span className="badge bg-success/10 text-success">Fresher</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-group-item !border-x-0">
                                            <Link href="#!">
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="!text-warning inline-flex items-center justify-center avatar avatar-md avatar-rounded bg-warning/10">
                                                            MS
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <p className="mb-0 font-semibold">Angular Developer</p>
                                                        <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">MegaSoft - 14 hrs ago</p>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 text-[0.75rem]">Full Time</p>
                                                        <span className="badge bg-info/10 text-info">+2 yrs - Experience</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-group-item !border-x-0">
                                            <Link href="#!">
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="!text-danger inline-flex items-center justify-center avatar avatar-md avatar-rounded bg-danger/10">
                                                            J
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <p className="mb-0 font-semibold">UI Tester</p>
                                                        <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">Joggle - 2 days ago</p>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 text-[0.75rem]">Full Time</p>
                                                        <span className="badge bg-info/10 text-info">+3 yrs - Experience</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-group-item !border-s-0 !border-e-0 !border-b-0">
                                            <Link href="#!">
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="inline-flex items-center justify-center !text-info avatar avatar-md avatar-rounded bg-info/10">
                                                            NL
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <p className="mb-0 font-semibold">Php - Laravel Develope</p>
                                                        <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">Nirlog - 2 days ago</p>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 text-[0.75rem]">Part Time Time</p>
                                                        <span className="badge bg-success/10 text-success">Fresher</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
{/* Block 44 Ends */}   


{/* Block 45 Starts */}
<div> Block 45</div>
<div className="box overflow-hidden">
                                <div className="box-header justify-between">
                                    <div className="box-title">Candidates</div>
                                    <div className="hs-dropdown ti-dropdown">
                                        <Link href="#!" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                                            aria-expanded="false">
                                            View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                        </Link>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">Today</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">This Week</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">Last Week</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box-body !p-0">
                                    <div id="candidates-chart" className="p-3">
                                        <Candidatesdata />
                                    </div>
                                    <div className="grid grid-cols-2 border-t border-dashed dark:border-defaultborder/10">
                                        <div className="col">
                                            <div className="!p-4 border-e border-dashed dark:border-defaultborder/10">
                                                <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem] text-center mb-1">Male Candidates
                                                </div>
                                                <div className="flex justify-center items-center"> <span
                                                    className="me-3 text-[1.625rem] font-semibold">1,234</span> <span
                                                        className="text-success font-semibold"><i
                                                            className="ri-arrow-up-s-fill align-middle me-1"></i>0.23%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="!p-4">
                                                <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem] text-center mb-1">Female Candidates
                                                </div>
                                                <div className="flex justify-center items-center"> <span
                                                    className="me-3 text-[1.625rem] font-semibold">1,754</span> <span
                                                        className="text-danger font-semibold"><i
                                                            className="ri-arrow-down-s-fill align-middle me-1"></i>0.11%</span> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

{/* Block 45 Ends */}   


{/* Block 46 Starts */}
<div> Block 46</div>
<div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Recent Recruiter Registrations
                                    </div>
                                    <div className="hs-dropdown ti-dropdown">
                                        <Link href="#!" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                                            aria-expanded="false">
                                            View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                        </Link>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">Today</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">This Week</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">Last Week</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box-body !p-0 recruiter">
                                    <div className="sm:grid xxxl:grid-cols-3 xxl:grid-cols-2 md:grid-cols-3 ">
                                        <div className="col">
                                            <div className="p-4 md:border-e border-inline-e-dashed dark:border-white/10">
                                                <div className="flex items-start !mb-6">
                                                    <div className="me-2 leading-none">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../../assets/images/faces/4.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <div className="recent-recruiter">
                                                            <Link href="#!" className="font-semibold mb-0 text-truncate">Hr@Spruko</Link>
                                                            <p className="mb-0 text-[0.75rem] text-[#8c9097] dark:text-white/50 text-truncate">hr.spruko@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button aria-label="button" type="button" className="rtl:rotate-180 ti-btn ti-btn-sm ti-btn-light ti-btn-wave">
                                                            <i className="ri-arrow-right-s-line"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="flex items-start justify-between mb-2">
                                                    <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                                                        Vacancies
                                                    </div>
                                                    <div className="font-semibold">
                                                        07
                                                    </div>
                                                </div>
                                                <div className="flex items-start justify-between mb-0">
                                                    <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                                                        Position
                                                    </div>
                                                    <div>
                                                        <span className="badge text-info bg-info/10">Aws Engineer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="p-4 md:border-e border-inline-e-dashed dark:border-white/10">
                                                <div className="flex items-start !mb-6">
                                                    <div className="me-2 leading-none">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../../assets/images/faces/21.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <div className="recent-recruiter">
                                                            <Link href="#!" className="font-semibold mb-0 text-truncate">Hr@Nicero</Link>
                                                            <p className="mb-0 text-[0.75rem] text-[#8c9097] dark:text-white/50 text-truncate">nicero.help@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button type="button" aria-label="button" className="rtl:rotate-180 ti-btn ti-btn-sm ti-btn-light ti-btn-wave">
                                                            <i className="ri-arrow-right-s-line"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="flex items-start justify-between mb-2">
                                                    <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                                                        Vacancies
                                                    </div>
                                                    <div className="font-semibold">
                                                        16
                                                    </div>
                                                </div>
                                                <div className="flex items-start justify-between mb-0">
                                                    <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                                                        Position
                                                    </div>
                                                    <div>
                                                        <span className="badge bg-warning/10 text-warning">React Developer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="p-4">
                                                <div className="flex items-start !mb-6">
                                                    <div className="me-2 leading-none">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../../assets/images/faces/15.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <div className="recent-recruiter">
                                                            <Link href="#!" className="font-semibold mb-0 text-truncate">JosephSmith</Link>
                                                            <p className="mb-0 text-[0.75rem] text-[#8c9097] dark:text-white/50 text-truncate">josephsmith@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button type="button" aria-label="button" className="rtl:rotate-180 ti-btn ti-btn-sm ti-btn-light ti-btn-wave">
                                                            <i className="ri-arrow-right-s-line"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="flex items-start justify-between mb-2">
                                                    <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                                                        Vacancies
                                                    </div>
                                                    <div className="font-semibold">
                                                        32
                                                    </div>
                                                </div>
                                                <div className="flex items-start justify-between mb-0">
                                                    <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                                                        Position
                                                    </div>
                                                    <div>
                                                        <span className="badge bg-primary/10 text-primary">UI Developer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

{/* Block 46 Ends */}   


{/* Block 47 Starts */}
<div> Block 47</div>

<div className="box overflow-hidden">
                        <div className="box-header">
                            <div className="box-title">
                                Registers By Country
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <div className="table-responsive">
                                <table className="table whitespace-nowrap min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="text-start min-w-[130px]">Country</th>
                                            <th scope="col" className="text-start">Date</th>
                                            <th scope="col" className="text-start">Total Registers</th>
                                            <th scope="col" className="text-start">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Registersbycountry.map((idx) => (
                                            <tr className="border border-defaultborder dark:border-defaultborder/10 !border-x-0" key={Math.random()}>
                                                <th scope="row">
                                                    <div className="flex items-center">
                                                        <img src={idx.src} alt="" className="w-[1.25rem] h-[1.25rem] rounded-full me-2 leading-none" />
                                                        <div>
                                                            <span className="font-semibold">
                                                                {idx.city}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>{idx.date}</td>
                                                <td>{idx.total}</td>
                                                <td>
                                                    <button type="button" className=" ti-btn-success  !px-2 !py-1 rounded-sm ti-btn-wave ti-btn-sm">View</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
{/* Block 47 Ends */}   


{/* Block 48 Starts */}
<div> Block 48</div>

<div className="box overflow-hidden">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Top Companies
                            </div>
                            <div className="hs-dropdown ti-dropdown">
                                <Link href="#!" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                                    aria-expanded="false">
                                    View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                </Link>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Today</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">This Week</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Last Week</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <div className="table-responsive">
                                <table className="table table-hover whitespace-nowrap min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="text-start">Name</th>
                                            <th scope="col" className="text-start">Subscription</th>
                                            <th scope="col" className="text-start">Total Employees</th>
                                            <th scope="col" className="text-start">Recruiter Since</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {TopCompanies.map((idx) => (
                                            <tr className="border hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10 border-defaultborder !border-x-0" key={Math.random()}>
                                                <th scope="col">
                                                    <div className="flex items-center">
                                                        <img src={idx.src} alt="" className="avatar avatar-md p-1 bg-light avatar-rounded me-2 !mb-0" />
                                                        <div>
                                                            <p className="font-semibold mb-0">{idx.text1}</p>
                                                            <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">Remote/Onsite</p>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>
                                                    <span className={` badge text-${idx.color} bg-${idx.color}/10`}>{idx.text2}</span>
                                                </td>
                                                <td>{idx.total}</td>
                                                <td>{idx.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
{/* Block 48 Ends */}   


{/* Block 49 Starts */}
<div> Block 49</div>

<div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Acquisitions
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="progress progress-lg mb-6 flex w-full">
                                <div className="flex flex-col justify-center text-center text-[8px] text-white overflow-hidden rounded-s-sm bg-primary w-[52%]" aria-valuenow="52" aria-valuemin="0" aria-valuemax="100">52%</div>
                                <div className="flex flex-col justify-center text-center text-[8px] text-white overflow-hidden rounded-none bg-secondary w-[12%]" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100">12%</div>
                                <div className="flex flex-col justify-center text-center text-[8px] text-white overflow-hidden rounded-none bg-success w-[16%]" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100">16%</div>
                                <div className="flex flex-col justify-center text-center text-[8px] text-white overflow-hidden rounded-none bg-warning w-[12%]" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100">12%</div>
                                <div className="flex flex-col justify-center text-center text-[8px] text-white overflow-hidden rounded-e-sm bg-danger w-[8%]" aria-valuenow="8" aria-valuemin="0" aria-valuemax="100">8%</div>
                            </div>
                            <ul className="list-group">
                                <li className="list-group-item !py-3">
                                    Total Applications
                                    <span className="badge ltr:float-right rtl:float-left bg-primary/10 text-primary">1,982</span>
                                </li>
                                <li className="list-group-item !py-3">
                                    Recruited
                                    <span className="badge ltr:float-right rtl:float-left bg-secondary/10 text-secondary">214</span>
                                </li>
                                <li className="list-group-item !py-3">
                                    Short Listed
                                    <span className="badge ltr:float-right rtl:float-left bg-success/10 text-success">262</span>
                                </li>
                                <li className="list-group-item !py-3">
                                    Rejected
                                    <span className="badge ltr:float-right rtl:float-left bg-warning/10 text-warning">395</span>
                                </li>
                                <li className="list-group-item !py-3 flex-grow">
                                    Blocked
                                    <span className="badge ltr:float-right rtl:float-left bg-danger/10 text-danger m-auto">79</span>
                                </li>
                            </ul>
                        </div>
                    </div>
{/* Block 49 Ends */}   


{/* Block 50 Starts */}
<div> Block 50</div>

<div className="box box-card">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Recent Employers
                            </div>
                            <div className="sm:flex">
                                <div className="me-3 mb-2 sm:mb-0">
                                    <input className="ti-form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" onChange={(ele) => { myfunction1(ele.target.value); }} />
                                </div>
                                <div className="hs-dropdown ti-dropdown">
                                    <Link href="#!"
                                        className="ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium  !hover:text-white"
                                        aria-expanded="false">
                                        Sort By<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                    </Link>
                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            href="#!">New</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            href="#!">Popular</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            href="#!">Relevant</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="table-responsive">
                                <table className="table whitespace-nowrap table-hover border table-bordered min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="row" className="ps-6"><input className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." /></th>
                                            <th scope="col" className="text-start">Employer</th>
                                            <th scope="col" className="text-start">Category</th>
                                            <th scope="col" className="text-start">Role</th>
                                            <th scope="col" className="text-start">Mail</th>
                                            <th scope="col" className="text-start">Location</th>
                                            <th scope="col" className="text-start">Date</th>
                                            <th scope="col" className="text-start">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {EmployerData.map((idx) => (
                                            <tr className="border hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10 border-defaultborder !border-x-0" key={Math.random()}>
                                                <th scope="row" className="ps-6"><input className="form-check-input" type="checkbox" id="checkboxNoLabel12" defaultChecked={idx.checked === 'defaultChecked'} value="" aria-label="..." /></th>
                                                <td>
                                                    <div className="flex items-center font-semibold">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src={idx.src} alt="img" />
                                                        </span>{idx.name}
                                                    </div>
                                                </td>
                                                <td>{idx.place}</td>
                                                <td><span className={`badge bg-${idx.color}/10 text-${idx.color}`}>{idx.role}</span></td>
                                                <td>{idx.mail}</td>
                                                <td>
                                                    <div className="inline-flex items-center">
                                                        <i className="ri-map-pin-fill text-[#8c9097] dark:text-white/50 text-[0.625rem]"></i>
                                                        <span className="ms-1">{idx.location}</span>
                                                    </div>
                                                </td>
                                                <td>{idx.date}</td>
                                                <td>
                                                    <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                        <Link aria-label="anchor" href="#!"
                                                            className="ti-btn ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-success/10 text-success hover:bg-success hover:text-white hover:border-success"><i
                                                                className="ri-download-2-line"></i></Link>
                                                        <Link aria-label="anchor" href="#!"
                                                            className="ti-btn ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-primary/10 text-primary hover:bg-primary hover:text-white hover:border-primary"><i
                                                                className="ri-edit-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="box-footer">
                            <div className="sm:flex items-center">
                                <div className="dark:text-defaulttextcolor/70">
                                    Showing 5 Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="ti-pagination mb-0">
                                            <li className="page-item disabled">
                                                <Link className="page-link" href="#!">
                                                    Prev
                                                </Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link active" href="#!">1</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link !text-primary" href="#!">
                                                    next
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
{/* Block 50 Ends */}  


{/*Jobs ends */}


<div><hr/>-------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
  
      
      
      
      
      
      
      
      
      
      <div className="grid grid-cols-12 gap-x-6">
         {/* 9 Collumsn Grid Starts   */}
        <div className="xxl:col-span-9 xl:col-span-12  col-span-12">
          <div className="grid grid-cols-12 gap-x-6">

            <div className="xxl:col-span-4 xl:col-span-4  col-span-12">


              <div className="xxl:col-span-12 xl:col-span-12 col-span-12 hidden">
                <div className="box crm-highlight-card">
                  <div className="box-body">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-[1.125rem] text-white mb-2">Your target is incomplete</div>
                        <span className="block text-[0.75rem] text-white"><span className="opacity-[0.7] me-1">You have
                          completed</span>
                          <span className="font-semibold text-warning">48%</span> <span className="opacity-[0.7]">of the given
                            target, you can also check your status</span>.</span>
                        <span className="block font-semibold mt-[0.125rem]"><Link className="text-white text-[0.813rem]"
                          href="#!"><u>Click
                            here</u></Link></span>
                      </div>
                      <div>
                        <div id="crm-main">
                          <Target />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>




              <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
                <div className="box">
                  <div className="box-header flex justify-between">
                    <div className="box-title">
                      Top Deals
                    </div>
                    <div className="hs-dropdown ti-dropdown">
                      <Link aria-label="anchor" href="#!"
                        className="flex items-center justify-center w-[1.75rem] h-[1.75rem]  !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                        aria-expanded="false">
                        <i className="fe fe-more-vertical text-[0.8rem]"></i>
                      </Link>
                      <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="#!">Week</Link></li>
                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="#!">Month</Link></li>
                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="#!">Year</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="box-body">
                    <ul className="list-none crm-top-deals mb-0">
                      <li className="mb-[0.9rem]">
                        <div className="flex items-start flex-wrap">
                          <div className="me-2">
                            <span className=" inline-flex items-center justify-center">
                              <img src="../../../assets/images/faces/10.jpg" alt=""
                                className="w-[1.75rem] h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full" />
                            </span>
                          </div>
                          <div className="flex-grow">
                            <p className="font-semibold mb-[1.4px]  text-[0.813rem]">Michael Jordan
                            </p>
                            <p className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">michael.jordan@example.com</p>
                          </div>
                          <div className="font-semibold text-[0.9375rem] ">$2,893</div>
                        </div>
                      </li>
                      <li className="mb-[0.9rem]">
                        <div className="flex items-start flex-wrap">
                          <div className="me-2">
                            <span
                              className="inline-flex items-center justify-center !w-[1.75rem] !h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full text-warning  bg-warning/10 font-semibold">
                              EK
                            </span>
                          </div>
                          <div className="flex-grow">
                            <p className="font-semibold mb-[1.4px]  text-[0.813rem]">Emigo Kiaren</p>
                            <p className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">emigo.kiaren@gmail.com</p>
                          </div>
                          <div className="font-semibold text-[0.9375rem] ">$4,289</div>
                        </div>
                      </li>
                      <li className="mb-[0.9rem]">
                        <div className="flex items-top flex-wrap">
                          <div className="me-2">
                            <span className="inline-flex items-center justify-center">
                              <img src="../../../assets/images/faces/12.jpg" alt=""
                                className="!w-[1.75rem] !h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full" />
                            </span>
                          </div>
                          <div className="flex-grow">
                            <p className="font-semibold mb-[1.4px]  text-[0.813rem]">Randy Origoan
                            </p>
                            <p className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">randy.origoan@gmail.com</p>
                          </div>
                          <div className="font-semibold text-[0.9375rem] ">$6,347</div>
                        </div>
                      </li>
                      <li className="mb-[0.9rem]">
                        <div className="flex items-top flex-wrap">
                          <div className="me-2">
                            <span
                              className="inline-flex items-center justify-center !w-[1.75rem] !h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full text-success bg-success/10 font-semibold">
                              GP
                            </span>
                          </div>
                          <div className="flex-grow">
                            <p className="font-semibold mb-[1.4px]  text-[0.813rem]">George Pieterson
                            </p>
                            <p className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">george.pieterson@gmail.com</p>
                          </div>
                          <div className="font-semibold text-[0.9375rem] ">$3,894</div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-top flex-wrap">
                          <div className="me-2">
                            <span
                              className="inline-flex items-center justify-center !w-[1.75rem] !h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full text-primary bg-primary/10 font-semibold">
                              KA
                            </span>
                          </div>
                          <div className="flex-grow">
                            <p className="font-semibold mb-[1.4px]  text-[0.813rem]">Kiara Advain</p>
                            <p className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">kiaraadvain214@gmail.com</p>
                          </div>
                          <div className="font-semibold text-[0.9375rem] ">$2,679</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
                <div className="box">
                  <div className="box-header justify-between">
                    <div className="box-title">Profit Earned</div>
                    <div className="hs-dropdown ti-dropdown">
                      <Link href="#!" className="px-2 font-normal text-[0.75rem] text-[#8c9097] dark:text-white/50"
                        aria-expanded="false">
                        View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                      </Link>
                      <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="#!">Today</Link></li>
                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="#!">This Week</Link></li>
                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="#!">Last Week</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="box-body !py-0 !ps-0">
                    <div id="crm-profits-earned">
                      <Earned />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xxl:col-span-8  xl:col-span-8  col-span-12">
              <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                  <div className="box overflow-hidden">
                    <div className="box-body">
                      <div className="flex items-top justify-between">
                        <div>
                          <span
                            className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-primary">
                            <i className="ti ti-users text-[1rem] text-white"></i>
                          </span>
                        </div>
                        <div className="flex-grow ms-4">
                          <div className="flex items-center justify-between flex-wrap">
                            <div>
                              <p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0">Total Customers</p>
                              <h4 className="font-semibold  text-[1.5rem] !mb-2 ">1,02,890</h4>
                            </div>
                            <div id="crm-total-customers">
                              <Customers />
                            </div>
                          </div>
                          <div className="flex items-center justify-between !mt-1">
                            <div>
                              <Link className="text-primary text-[0.813rem]" href="#!">View All<i
                                className="ti ti-arrow-narrow-right ms-2 font-semibold inline-block"></i></Link>
                            </div>
                            <div className="text-end">
                              <p className="mb-0 text-success text-[0.813rem] font-semibold">+40%</p>
                              <p className="text-[#8c9097] dark:text-white/50 opacity-[0.7] text-[0.6875rem]">this month</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                  <div className="box overflow-hidden">
                    <div className="box-body">
                      <div className="flex items-top justify-between">
                        <div>
                          <span
                            className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-secondary">
                            <i className="ti ti-wallet text-[1rem] text-white"></i>
                          </span>
                        </div>
                        <div className="flex-grow ms-4">
                          <div className="flex items-center justify-between flex-wrap">
                            <div>
                              <p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0">Total Revenue</p>
                              <h4 className="font-semibold text-[1.5rem] !mb-2 ">$56,562</h4>
                            </div>
                            <div id="crm-total-revenue">
                              <Revenue />
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <div>
                              <Link className="text-secondary text-[0.813rem]" href="#!">View All<i
                                className="ti ti-arrow-narrow-right ms-2 font-semibold inline-block"></i></Link>
                            </div>
                            <div className="text-end">
                              <p className="mb-0 text-success text-[0.813rem] font-semibold">+25%</p>
                              <p className="text-[#8c9097] dark:text-white/50 opacity-[0.7] text-[0.6875rem]">this month</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                  <div className="box overflow-hidden">
                    <div className="box-body">
                      <div className="flex items-top justify-between">
                        <div>
                          <span
                            className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-success">
                            <i className="ti ti-wave-square text-[1rem] text-white"></i>
                          </span>
                        </div>
                        <div className="flex-grow ms-4">
                          <div className="flex items-center justify-between flex-wrap">
                            <div>
                              <p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0">Conversion Ratio</p>
                              <h4 className="font-semibold text-[1.5rem] !mb-2 ">12.08%</h4>
                            </div>
                            <div id="crm-conversion-ratio">
                              <Ratio />
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <div>
                              <Link className="text-success text-[0.813rem]" href="#!">View All<i
                                className="ti ti-arrow-narrow-right ms-2 font-semibold inline-block"></i></Link>
                            </div>
                            <div className="text-end">
                              <p className="mb-0 text-danger text-[0.813rem] font-semibold">-12%</p>
                              <p className="text-[#8c9097] dark:text-white/50 opacity-[0.7] text-[0.6875rem]">this month</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                  <div className="box overflow-hidden">
                    <div className="box-body">
                      <div className="flex items-top justify-between">
                        <div>
                          <span
                            className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-warning">
                            <i className="ti ti-briefcase text-[1rem] text-white"></i>
                          </span>
                        </div>
                        <div className="flex-grow ms-4">
                          <div className="flex items-center justify-between flex-wrap">
                            <div>
                              <p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0">Total Deals</p>
                              <h4 className="font-semibold text-[1.5rem] !mb-2 ">2,543</h4>
                            </div>
                            <div id="crm-total-deals">
                              <Deals />
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <div>
                              <Link className="text-warning text-[0.813rem]" href="#!">View All<i
                                className="ti ti-arrow-narrow-right ms-2 font-semibold inline-block"></i></Link>
                            </div>
                            <div className="text-end">
                              <p className="mb-0 text-success text-[0.813rem] font-semibold">+19%</p>
                              <p className="text-[#8c9097] dark:text-white/50  opacity-[0.7] text-[0.6875rem]">this month</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
                  <div className="box">
                    <div className="box-header !gap-0 !m-0 justify-between">
                      <div className="box-title">
                        Revenue Analytics
                      </div>
                      <div className="hs-dropdown ti-dropdown">
                        <Link href="#!" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                          aria-expanded="false">
                          View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                        </Link>
                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                          <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                            href="#!">Today</Link></li>
                          <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                            href="#!">This Week</Link></li>
                          <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                            href="#!">Last Week</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="box-body !py-5">
                      <div id="crm-revenue-analytics">
                        <Revenueanalytics />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
              <div className="box custom-card">
                <div className="box-header justify-between">
                  <div className="box-title">
                    Deals Statistics
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div>
                      <input className="ti-form-control form-control-sm" type="text" placeholder="Search Here"
                        aria-label=".form-control-sm example" />
                    </div>
                    <div className="hs-dropdown ti-dropdown">
                      <Link href="#!"
                        className="ti-btn ti-btn-primary !bg-primary !text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium"
                        aria-expanded="false">
                        Sort By<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                      </Link>
                      <ul className="hs-dropdown-menu ti-dropdown-menu !-mt-2 hidden" role="menu">
                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="#!">New</Link></li>
                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="#!">Popular</Link></li>
                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="#!">Relevant</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="box-body">
                  <div className="overflow-x-auto">
                    <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
                      <thead>
                        <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                          <th scope="row" className="!ps-4 !pe-5"><input className="form-check-input" type="checkbox"
                            id="checkboxNoLabel1" value="" aria-label="..." /></th>
                          <th scope="col" className="!text-start !text-[0.85rem] min-w-[200px]">Sales Rep</th>
                          <th scope="col" className="!text-start !text-[0.85rem]">Category</th>
                          <th scope="col" className="!text-start !text-[0.85rem]">Mail</th>
                          <th scope="col" className="!text-start !text-[0.85rem]">Location</th>
                          <th scope="col" className="!text-start !text-[0.85rem]">Date</th>
                          <th scope="col" className="!text-start !text-[0.85rem]">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Dealsstatistics.map((idx) => (
                          <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light" key={Math.random()}>
                            <th scope="row" className="!ps-4 !pe-5"><input className="form-check-input" type="checkbox" defaultChecked={idx.checked === 'defaultChecked'}
                              id="" value="" aria-label="..." /></th>
                            <td>
                              <div className="flex items-center font-semibold">
                                <span className="!me-2 inline-flex justify-center items-center">
                                  <img src={idx.src} alt="img"
                                    className="w-[1.75rem] h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full" />
                                </span>{idx.name}
                              </div>
                            </td>
                            <td>{idx.role}</td>
                            <td>{idx.mail}</td>
                            <td>
                              <span
                                className={`inline-flex text-${idx.color} !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-${idx.color}/10`}>{idx.location}</span>
                            </td>
                            <td>{idx.date}</td>
                            <td>
                              <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                <Link aria-label="anchor" href="#!"
                                  className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-success/10 text-success hover:bg-success hover:text-white hover:border-success"><i
                                    className="ri-download-2-line"></i></Link>
                                <Link aria-label="anchor" href="#!"
                                  className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-primary/10 text-primary hover:bg-primary hover:text-white hover:border-primary"><i
                                    className="ri-edit-line"></i></Link>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="box-footer">
                  <div className="sm:flex items-center">
                    <div className="text-defaulttextcolor dark:text-defaulttextcolor/70">
                      Showing 5 Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
                    </div>
                    <div className="ms-auto">
                      <nav aria-label="Page navigation" className="pagination-style-4">
                        <ul className="ti-pagination mb-0">
                          <li className="page-item disabled">
                            <Link className="page-link" href="#!">
                              Prev
                            </Link>
                          </li>
                          <li className="page-item"><Link className="page-link active" href="#!">1</Link></li>
                          <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
                          <li className="page-item">
                            <Link className="page-link !text-primary" href="#!">
                              next
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 9 Collumsn Grid   Ends */}

        {/* 3 Collumsn Grid Starts   */}
        <div className="xxl:col-span-3 xl:col-span-12 col-span-12">
          <div className="grid grid-cols-12 gap-x-6">
            <div className="xxl:col-span-12 xl:col-span-12  col-span-12">
              <div className="box">
                <div className="box-header justify-between">
                  <div className="box-title">
                    Leads By Source
                  </div>
                  <div className="hs-dropdown ti-dropdown">
                    <Link aria-label="anchor" href="#!"
                      className="flex items-center justify-center w-[1.75rem] h-[1.75rem] ! !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                      aria-expanded="false">
                      <i className="fe fe-more-vertical text-[0.8rem]"></i>
                    </Link>
                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                      <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        href="#!">Week</Link></li>
                      <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        href="#!">Month</Link></li>
                      <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        href="#!">Year</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="box-body overflow-hidden">
                  <div className="leads-source-chart flex items-center justify-center">
                    <Sourcedata />
                    <div className="lead-source-value ">
                      <span className="block text-[0.875rem] ">Total</span>
                      <span className="block text-[1.5625rem] font-bold">4,145</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 border-t border-dashed dark:border-defaultborder/10">
                  <div className="col !p-0">
                    <div className="!ps-4 p-[0.95rem] text-center border-e border-dashed dark:border-defaultborder/10">
                      <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend mobile inline-block">Mobile
                      </span>
                      <div><span className="text-[1rem]  font-semibold">1,624</span>
                      </div>
                    </div>
                  </div>
                  <div className="col !p-0">
                    <div className="p-[0.95rem] text-center border-e border-dashed dark:border-defaultborder/10">
                      <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend desktop inline-block">Desktop
                      </span>
                      <div><span className="text-[1rem]  font-semibold">1,267</span></div>
                    </div>
                  </div>
                  <div className="col !p-0">
                    <div className="p-[0.95rem] text-center border-e border-dashed dark:border-defaultborder/10">
                      <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend laptop inline-block">Laptop
                      </span>
                      <div><span className="text-[1rem]  font-semibold">1,153</span>
                      </div>
                    </div>
                  </div>
                  <div className="col !p-0">
                    <div className="!pe-4 p-[0.95rem] text-center">
                      <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend tablet inline-block">Tablet
                      </span>
                      <div><span className="text-[1rem]  font-semibold">679</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xxl:col-span-12 xl:col-span-6  col-span-12">
              <div className="box">
                <div className="box-header justify-between">
                  <div className="box-title">
                    Deals Status
                  </div>
                  <div className="hs-dropdown ti-dropdown">
                    <Link href="#!" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                      aria-expanded="false">
                      View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                    </Link>
                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                      <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        href="#!">Today</Link></li>
                      <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        href="#!">This Week</Link></li>
                      <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        href="#!">Last Week</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="box-body">
                  <div className="flex items-center mb-[0.8rem]">
                    <h4 className="font-bold mb-0 text-[1.5rem] ">4,289</h4>
                    <div className="ms-2">
                      <span
                        className="py-[0.18rem] px-[0.45rem] rounded-sm text-success !font-medium !text-[0.75em] bg-success/10">1.02<i
                          className="ri-arrow-up-s-fill align-mmiddle ms-1"></i></span>
                      <span className="text-[#8c9097] dark:text-white/50 text-[0.813rem] ms-1">compared to last week</span>
                    </div>
                  </div>

                  <div className="flex w-full h-[0.3125rem] mb-6 rounded-full overflow-hidden">
                    <div className="flex flex-col justify-center rounded-s-[0.625rem] overflow-hidden bg-primary w-[21%]" aria-valuenow="21" aria-valuemin="0" aria-valuemax="100">
                    </div>
                    <div className="flex flex-col justify-center rounded-none overflow-hidden bg-info w-[26%]" aria-valuenow="26" aria-valuemin="0" aria-valuemax="100">
                    </div>
                    <div className="flex flex-col justify-center rounded-none overflow-hidden bg-warning w-[35%]" aria-orientation='' aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                    </div>
                    <div className="flex flex-col justify-center rounded-e-[0.625rem] overflow-hidden bg-success w-[18%]" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100">
                    </div>
                  </div>
                  <ul className="list-none mb-0 pt-2 crm-deals-status">
                    <li className="primary">
                      <div className="flex items-center text-[0.813rem]  justify-between">
                        <div>Successful Deals</div>
                        <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">987 deals</div>
                      </div>
                    </li>
                    <li className="info">
                      <div className="flex items-center text-[0.813rem]  justify-between">
                        <div>Pending Deals</div>
                        <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">1,073 deals</div>
                      </div>
                    </li>
                    <li className="warning">
                      <div className="flex items-center text-[0.813rem]  justify-between">
                        <div>Rejected Deals</div>
                        <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">1,674 deals</div>
                      </div>
                    </li>
                    <li className="success">
                      <div className="flex items-center text-[0.813rem]  justify-between">
                        <div>Upcoming Deals</div>
                        <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">921 deals</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="xxl:col-span-12 xl:col-span-6  col-span-12">
              <div className="box">
                <div className="box-header justify-between">
                  <div className="box-title">
                    Recent Activity
                  </div>
                  <div className="hs-dropdown ti-dropdown">
                    <Link href="#!" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                      aria-expanded="false">
                      View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                    </Link>
                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                      <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        href="#!">Today</Link></li>
                      <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        href="#!">This Week</Link></li>
                      <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                        href="#!">Last Week</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="box-body">
                  <div>
                    <ul className="list-none mb-0 crm-recent-activity">
                      <li className="crm-recent-activity-content">
                        <div className="flex items-start">
                          <div className="me-4">
                            <span
                              className="w-[1.25rem] h-[1.25rem] inline-flex items-center justify-center font-medium leading-[1.25rem] text-[0.65rem] text-primary bg-primary/10 rounded-full">
                              <i className="bi bi-circle-fill text-[0.5rem]"></i>
                            </span>
                          </div>
                          <div className="crm-timeline-content text-defaultsize">
                            <span className="font-semibold rtl:ms-1">Update of calendar events
                              &amp;</span><span><Link href="#!" className="text-primary font-semibold ms-1">
                                Added new events in next week.</Link></span>
                          </div>
                          <div className="flex-grow text-end">
                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">4:45PM</span>
                          </div>
                        </div>
                      </li>
                      <li className="crm-recent-activity-content">
                        <div className="flex items-start  text-defaultsize">
                          <div className="me-4">
                            <span
                              className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-secondary bg-secondary/10 rounded-full">
                              <i className="bi bi-circle-fill text-[0.5rem]"></i>
                            </span>
                          </div>
                          <div className="crm-timeline-content">
                            <span>New theme for <span className="font-semibold">Spruko Website</span> completed</span>
                            <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">Lorem ipsum, dolor sit amet.</span>
                          </div>
                          <div className="flex-grow text-end">
                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">3 hrs</span>
                          </div>
                        </div>
                      </li>
                      <li className="crm-recent-activity-content  text-defaultsize">
                        <div className="flex items-start">
                          <div className="me-4">
                            <span
                              className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-success bg-success/10 rounded-full">
                              <i className="bi bi-circle-fill  text-[0.5rem]"></i>
                            </span>
                          </div>
                          <div className="crm-timeline-content">
                            <span>Created a <span className="text-success font-semibold">New Task</span> today <span
                              className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] text-[0.65rem] inline-flex items-center justify-center font-medium bg-purple/10 rounded-full ms-1"><i
                                className="ri-add-fill text-purple text-[0.75rem]"></i></span></span>
                          </div>
                          <div className="flex-grow text-end">
                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">22 hrs</span>
                          </div>
                        </div>
                      </li>
                      <li className="crm-recent-activity-content  text-defaultsize">
                        <div className="flex items-start">
                          <div className="me-4">
                            <span
                              className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-pink bg-pink/10 rounded-full">
                              <i className="bi bi-circle-fill text-[0.5rem]"></i>
                            </span>
                          </div>
                          <div className="crm-timeline-content">
                            <span>New member <span
                              className="py-[0.2rem] px-[0.45rem] font-semibold rounded-sm text-pink text-[0.75em] bg-pink/10">@andreas
                              gurrero</span> added today to AI Summit.</span>
                          </div>
                          <div className="flex-grow text-end">
                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">Today</span>
                          </div>
                        </div>
                      </li>
                      <li className="crm-recent-activity-content  text-defaultsize">
                        <div className="flex items-start">
                          <div className="me-4">
                            <span
                              className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-warning bg-warning/10 rounded-full">
                              <i className="bi bi-circle-fill text-[0.5rem]"></i>
                            </span>
                          </div>
                          <div className="crm-timeline-content">
                            <span>32 New people joined summit.</span>
                          </div>
                          <div className="flex-grow text-end">
                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">22 hrs</span>
                          </div>
                        </div>
                      </li>
                      <li className="crm-recent-activity-content  text-defaultsize">
                        <div className="flex items-start">
                          <div className="me-4">
                            <span
                              className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-info bg-info/10 rounded-full">
                              <i className="bi bi-circle-fill text-[0.5rem]"></i>
                            </span>
                          </div>
                          <div className="crm-timeline-content">
                            <span>Neon Tarly added <span className="text-info font-semibold">Robert Bright</span> to AI
                              summit project.</span>
                          </div>
                          <div className="flex-grow text-end">
                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">12 hrs</span>
                          </div>
                        </div>
                      </li>
                      <li className="crm-recent-activity-content  text-defaultsize">
                        <div className="flex items-start">
                          <div className="me-4">
                            <span
                              className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-[#232323] dark:text-white bg-[#232323]/10 dark:bg-white/20 rounded-full">
                              <i className="bi bi-circle-fill text-[0.5rem]"></i>
                            </span>
                          </div>
                          <div className="crm-timeline-content">
                            <span>Replied to new support request <i
                              className="ri-checkbox-circle-line text-success text-[1rem] align-middle"></i></span>
                          </div>
                          <div className="flex-grow text-end">
                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">4 hrs</span>
                          </div>
                        </div>
                      </li>
                      <li className="crm-recent-activity-content  text-defaultsize">
                        <div className="flex items-start">
                          <div className="me-4">
                            <span
                              className="w-[1.25rem] h-[1.25rem] leading-[1.25rem] inline-flex items-center justify-center font-medium text-[0.65rem] text-purple bg-purple/10 rounded-full">
                              <i className="bi bi-circle-fill text-[0.5rem]"></i>
                            </span>
                          </div>
                          <div className="crm-timeline-content">
                            <span>Completed documentation of <Link href="#!"
                              className="text-purple underline font-semibold">AI Summit.</Link></span>
                          </div>
                          <div className="flex-grow text-end">
                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">4 hrs</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 3 Collumsn Grid   Ends */}
      
      </div>
    </Fragment>
  )
}

Crm.layout = "Contentlayout";
export default Crm;