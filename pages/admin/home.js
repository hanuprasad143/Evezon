import {
  Customers,
  Deals,
  Dealsstatistics,
  Earned,
  Ratio,
  Revenue,
  Revenueanalytics,
  Sourcedata,
  Target,
} from "@/shared/data/dashboards/crmdata";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";

import {
  SourcedataFarmers,
  SourcedataAcres,
  SourcedataFieldOfficers,
} from "@/shared/data/dashboards/homepagepiechart";

import {
  Bouncerate,
  Clicks,
  Countries,
  Impressions,
  Sessionbydevice,
  Sessionduration,
  Totalusers,
  Visitorsbychannel,
} from "@/shared/data/dashboards/analyticsdata";
import { StandingForecastingProduce,SalesProduce } from "@/shared/data/dashboards/homepagebarpluslinechart";
import { StockHistoryData } from "@/shared/data/dashboards/homepagetimechart";

const Crm = () => {
  return (
    <Fragment>
      <Seo title={"Admin Home"} />

      {/* Block 1 Starts */}

      <div className="md:flex block items-center justify-between my-[1.5rem] page-header-breadcrumb">
        <div>
          <p className="font-semibold text-[1.125rem] text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-0 ">
            Welcome back, Dr.Yashwanth !
          </p>
          <p className="font-normal text-[#8c9097] dark:text-white/50 text-[0.813rem]">
            CEO - Evezon India Private Limited.
          </p>
        </div>
        <div className="btn-list md:mt-0 mt-2">
          <button
            type="button"
            className="ti-btn bg-primary text-white btn-wave !font-medium !me-[0.375rem] !ms-0 !text-[0.85rem] !rounded-[0.35rem] !py-[0.51rem] !px-[0.86rem] mb-0 shadow-none"
          >
            <i className="ri-filter-3-fill  inline-block"></i>Filters
          </button>
          <button
            type="button"
            className="ti-btn ti-btn-outline-secondary btn-wave !font-medium  !me-[0.375rem]  !ms-0 !text-[0.85rem] !rounded-[0.35rem] !py-[0.51rem] !px-[0.86rem] mb-0 shadow-none"
          >
            <i className="ri-upload-cloud-line  inline-block"></i>Export
          </button>
        </div>
      </div>

      {/* Block 1 Ends */}

      {/* BLock 2 starts */}

      <div className="grid grid-cols-12 gap-x-6">
        <div className="md:col-span-6 col-span-12">
          <div className="box overflow-hidden">
            <div className="box-header justify-between">
              <div className="box-title">Total Stock Available</div>
              <div className="hs-dropdown ti-dropdown">
                <Link
                  href="#!"
                  className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                  aria-expanded="false"
                >
                  All Pack Houses
                  <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                </Link>
                <ul
                  className="hs-dropdown-menu ti-dropdown-menu hidden"
                  role="menu"
                >
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Pack House 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Pack House 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Pack House 3
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="box-body">
              <div className="flex items-top justify-between">
                <div>
                  <span className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-primary">
                    <i className="ti ti-users text-[1rem] text-white"></i>
                  </span>
                </div>
                <div className="flex-grow ms-4">
                  <div className="flex items-center justify-between flex-wrap">
                    <div>
                      <p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0"></p>
                      <h4 className="font-semibold  text-[1.5rem] !mb-2 ">
                        4,42,000{" "}
                        <span className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0">
                          Tons
                        </span>
                      </h4>
                    </div>
                    <div id="crm-total-customers">
                      <Customers />
                    </div>
                  </div>
                  <div className="flex items-center justify-between !mt-1">
                    <div>
                      <Link className="text-primary text-[0.813rem]" href="#!">
                        View All
                        <i className="ti ti-arrow-narrow-right ms-2 font-semibold inline-block"></i>
                      </Link>
                    </div>
                    <div className="text-end">
                      <p className="mb-0 text-success text-[0.813rem] font-semibold">
                        +40%
                      </p>
                      <p className="text-[#8c9097] dark:text-white/50 opacity-[0.7] text-[0.6875rem]">
                        this month
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 col-span-12">
          <div className="box overflow-hidden">
            <div className="box-header justify-between">
              <div className="box-title">Total Revenue</div>
              <div className="hs-dropdown ti-dropdown">
                <Link
                  href="#!"
                  className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                  aria-expanded="false"
                >
                  All Pack Houses
                  <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                </Link>
                <ul
                  className="hs-dropdown-menu ti-dropdown-menu hidden"
                  role="menu"
                >
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Pack House 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Pack House 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Pack House 3
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="box-body">
              <div className="flex items-top justify-between">
                <div>
                  <span className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-secondary">
                    <i className="ti ti-wallet text-[1rem] text-white"></i>
                  </span>
                </div>
                <div className="flex-grow ms-4">
                  <div className="flex items-center justify-between flex-wrap">
                    <div>
                      <p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0"></p>
                      <h4 className="font-semibold text-[1.5rem] !mb-2 ">
                        Rs.25,83,75,687
                      </h4>
                    </div>
                    <div id="crm-total-revenue">
                      <Revenue />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <div>
                      <Link
                        className="text-secondary text-[0.813rem]"
                        href="#!"
                      >
                        View All
                        <i className="ti ti-arrow-narrow-right ms-2 font-semibold inline-block"></i>
                      </Link>
                    </div>
                    <div className="text-end">
                      <p className="mb-0 text-success text-[0.813rem] font-semibold">
                        +25%
                      </p>
                      <p className="text-[#8c9097] dark:text-white/50 opacity-[0.7] text-[0.6875rem]">
                        this month
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 col-span-12">
          <div className="box overflow-hidden">
            <div className="box-header justify-between">
              <div className="box-title">Farmers Enrolled</div>
              <div className="hs-dropdown ti-dropdown">
                <Link
                  href="#!"
                  className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                  aria-expanded="false"
                >
                  All Pack Houses
                  <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                </Link>
                <ul
                  className="hs-dropdown-menu ti-dropdown-menu hidden"
                  role="menu"
                >
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Pack House 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Pack House 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Pack House 3
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="box-body">
              <div className="flex items-top justify-between">
                <div>
                  <span className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-success">
                    <i className="ti ti-wave-square text-[1rem] text-white"></i>
                  </span>
                </div>
                <div className="flex-grow ms-4">
                  <div className="flex items-center justify-between flex-wrap">
                    <div>
                      <p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0">
                        {" "}
                      </p>
                      <h4 className="font-semibold text-[1.5rem] !mb-2 ">
                        12,000
                      </h4>
                    </div>
                    <div id="crm-conversion-ratio">
                      <Ratio />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <div>
                      <Link className="text-success text-[0.813rem]" href="#!">
                        View All
                        <i className="ti ti-arrow-narrow-right ms-2 font-semibold inline-block"></i>
                      </Link>
                    </div>
                    <div className="text-end">
                      <p className="mb-0 text-danger text-[0.813rem] font-semibold">
                        -12%
                      </p>
                      <p className="text-[#8c9097] dark:text-white/50 opacity-[0.7] text-[0.6875rem]">
                        this month
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 col-span-12">
          <div className="box overflow-hidden">
            <div className="box-header justify-between">
              <div className="box-title">Clients Enrolled</div>
              <div className="hs-dropdown ti-dropdown">
                <Link
                  href="#!"
                  className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                  aria-expanded="false"
                >
                  All Pack Houses
                  <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                </Link>
                <ul
                  className="hs-dropdown-menu ti-dropdown-menu hidden"
                  role="menu"
                >
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Pack House 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Pack House 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Pack House 3
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="box-body">
              <div className="flex items-top justify-between">
                <div>
                  <span className="!text-[0.8rem]  !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !rounded-full inline-flex items-center justify-center bg-warning">
                    <i className="ti ti-briefcase text-[1rem] text-white"></i>
                  </span>
                </div>
                <div className="flex-grow ms-4">
                  <div className="flex items-center justify-between flex-wrap">
                    <div>
                      <p className="text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-0">
                        {" "}
                      </p>
                      <h4 className="font-semibold text-[1.5rem] !mb-2 ">
                        23
                      </h4>
                    </div>
                    <div id="crm-total-deals">
                      <Deals />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <div>
                      <Link className="text-warning text-[0.813rem]" href="#!">
                        View All
                        <i className="ti ti-arrow-narrow-right ms-2 font-semibold inline-block"></i>
                      </Link>
                    </div>
                    <div className="text-end">
                      <p className="mb-0 text-success text-[0.813rem] font-semibold">
                        +19%
                      </p>
                      <p className="text-[#8c9097] dark:text-white/50  opacity-[0.7] text-[0.6875rem]">
                        this month
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Block 2 ends */}

      {/* Block 3 starts */}

      <div className="grid grid-cols-12 gap-x-6">
        <div className="md:col-span-4 col-span-12">
          <div className="box">
            <div className="box-header justify-between">
              <div className="box-title">Farmers</div>
              <div className="hs-dropdown ti-dropdown">
                <Link
                  href="#!"
                  className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                  aria-expanded="false"
                >
                  All Pack Houses
                  <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                </Link>
                <ul
                  className="hs-dropdown-menu ti-dropdown-menu hidden"
                  role="menu"
                >
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Pack House 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Pack House 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Pack House 3
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="hs-dropdown ti-dropdown">
                <Link
                  aria-label="anchor"
                  href="#!"
                  className="flex items-center justify-center w-[1.75rem] h-[1.75rem] ! !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                  aria-expanded="false"
                >
                  <i className="fe fe-more-vertical text-[0.8rem]"></i>
                </Link>
                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Week
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Month
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Year
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="box-body overflow-hidden">
              <div className="leads-source-chart flex items-center justify-center">
                <SourcedataFarmers />
                <div className="lead-source-value ">
                  <span className="block text-[0.875rem] ">Total</span>
                  <span className="block text-[1.5625rem] font-bold">13,340</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 border-t border-dashed dark:border-defaultborder/10">
              <div className="col !p-0">
                <div className="!ps-4 p-[0.95rem] text-center border-e border-dashed dark:border-defaultborder/10">
                  <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend mobile inline-block">
                    Enrolled
                  </span>
                  <div>
                    <span className="text-[1rem]  font-semibold">12,000</span>
                  </div>
                </div>
              </div>

              <div className="col !p-0">
                <div className="p-[0.95rem] text-center border-e border-dashed dark:border-defaultborder/10">
                  <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend desktop inline-block">
                    Registered
                  </span>
                  <div>
                    <span className="text-[1rem]  font-semibold">1,340</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 col-span-12">
          <div className="box">
            <div className="box-header justify-between">
              <div className="box-title">Field Officers</div>
              <div className="hs-dropdown ti-dropdown">
                <Link
                  href="#!"
                  className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                  aria-expanded="false"
                >
                  All Pack Houses
                  <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                </Link>
                <ul
                  className="hs-dropdown-menu ti-dropdown-menu hidden"
                  role="menu"
                >
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Pack House 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Pack House 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Pack House 3
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="hs-dropdown ti-dropdown">
                <Link
                  aria-label="anchor"
                  href="#!"
                  className="flex items-center justify-center w-[1.75rem] h-[1.75rem] ! !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                  aria-expanded="false"
                >
                  <i className="fe fe-more-vertical text-[0.8rem]"></i>
                </Link>
                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Week
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Month
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Year
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="box-body overflow-hidden">
              <div className="leads-source-chart flex items-center justify-center">
                <SourcedataFieldOfficers />
                <div className="lead-source-value ">
                  <span className="block text-[0.875rem] ">Total</span>
                  <span className="block text-[1.5625rem] font-bold">21</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 border-t border-dashed dark:border-defaultborder/10">
              <div className="col !p-0">
                <div className="p-[0.95rem] text-center border-e border-dashed dark:border-defaultborder/10">
                  <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend laptop inline-block">
                    Enrolled
                  </span>
                  <div>
                    <span className="text-[1rem]  font-semibold">10</span>
                  </div>
                </div>
              </div>
              <div className="col !p-0">
                <div className="!pe-4 p-[0.95rem] text-center">
                  <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend tablet inline-block">
                    Registered
                  </span>
                  <div>
                    <span className="text-[1rem]  font-semibold">11</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 col-span-12">
          <div className="box">
            <div className="box-header justify-between">
              <div className="box-title">Acres</div>
              <div className="hs-dropdown ti-dropdown">
                <Link
                  href="#!"
                  className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                  aria-expanded="false"
                >
                  All Pack Houses
                  <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                </Link>
                <ul
                  className="hs-dropdown-menu ti-dropdown-menu hidden"
                  role="menu"
                >
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Pack House 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Pack House 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Pack House 3
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="hs-dropdown ti-dropdown">
                <Link
                  aria-label="anchor"
                  href="#!"
                  className="flex items-center justify-center w-[1.75rem] h-[1.75rem] ! !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                  aria-expanded="false"
                >
                  <i className="fe fe-more-vertical text-[0.8rem]"></i>
                </Link>
                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Week
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Month
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                      href="#!"
                    >
                      Year
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="box-body overflow-hidden">
              <div className="leads-source-chart flex items-center justify-center">
                <SourcedataAcres />
                <div className="lead-source-value ">
                  <span className="block text-[0.875rem] ">Total</span>
                  <span className="block text-[1.5625rem] font-bold">75,000</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 border-t border-dashed dark:border-defaultborder/10">
              <div className="col !p-0">
                <div className="p-[0.95rem] text-center border-e border-dashed dark:border-defaultborder/10">
                  <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend desktop inline-block">
                    Organic
                  </span>
                  <div>
                    <span className="text-[1rem]  font-semibold">9,525</span>
                  </div>
                </div>
              </div>

              <div className="col !p-0">
                <div className="p-[0.95rem] text-center border-e border-dashed dark:border-defaultborder/10">
                  <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend laptop inline-block">
                    Residue Free
                  </span>
                  <div>
                    <span className="text-[1rem]  font-semibold">8,550</span>
                  </div>
                </div>
              </div>

              <div className="col !p-0">
                <div className="!pe-4 p-[0.95rem] text-center">
                  <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend tablet inline-block">
                    Non-Organic
                  </span>
                  <div>
                    <span className="text-[1rem]  font-semibold">56,925</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Block 3 ends */}

      {/* Block 4 starts*/}

      <div className="box">
        <div className="box-header justify-between">
          <div className="box-title">Standing vs Forecasting Produce</div>
          <div className="hs-dropdown ti-dropdown">
            <Link
              href="#!"
              className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
              aria-expanded="false"
            >
              All Pack Houses
              <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
            </Link>
            <ul
              className="hs-dropdown-menu ti-dropdown-menu hidden"
              role="menu"
            >
              <li>
                <Link
                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                  href="#!"
                >
                  Pack House 1
                </Link>
              </li>
              <li>
                <Link
                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                  href="#!"
                >
                  Pack House 2
                </Link>
              </li>
              <li>
                <Link
                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                  href="#!"
                >
                  Pack House 3
                </Link>
              </li>
            </ul>
          </div>

          <div className="hs-dropdown ti-dropdown">
            <Link
              href="#!"
              className="px-2 font-normal text-[0.75rem] text-[#8c9097] dark:text-white/50"
              aria-expanded="false"
            >
              View All
              <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
            </Link>
            <ul
              className="hs-dropdown-menu ti-dropdown-menu hidden"
              role="menu"
            >
              <li>
                <Link
                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                  href="#!"
                >
                  Today
                </Link>
              </li>
              <li>
                <Link
                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                  href="#!"
                >
                  This Week
                </Link>
              </li>
              <li>
                <Link
                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                  href="#!"
                >
                  Last Week
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="box-body">
          <div id="country-sessions">
            <StandingForecastingProduce />
          </div>
        </div>
      </div>

      {/* Block 4 ends */}

      {/* Block 5 starts */}

      <div className="box">
        <div className="box-header justify-between flex-wrap">
          <div className="box-title">Stock History</div>

          <div className="hs-dropdown ti-dropdown">
            <Link
              href="#!"
              className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
              aria-expanded="false"
            >
              All Pack Houses
              <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
            </Link>
            <ul
              className="hs-dropdown-menu ti-dropdown-menu hidden"
              role="menu"
            >
              <li>
                <Link
                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                  href="#!"
                >
                  Pack House 1
                </Link>
              </li>
              <li>
                <Link
                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                  href="#!"
                >
                  Pack House 2
                </Link>
              </li>
              <li>
                <Link
                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                  href="#!"
                >
                  Pack House 3
                </Link>
              </li>
            </ul>
          </div>

          <div className="hs-dropdown ti-dropdown">
            <Link
              href="#!"
              className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
              aria-expanded="false"
            >
              All Pack Houses
              <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
            </Link>
            <ul
              className="hs-dropdown-menu ti-dropdown-menu hidden"
              role="menu"
            >
              <li>
                <Link
                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                  href="#!"
                >
                  Pack House 1
                </Link>
              </li>
              <li>
                <Link
                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                  href="#!"
                >
                  Pack House 2
                </Link>
              </li>
              <li>
                <Link
                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                  href="#!"
                >
                  Pack House 3
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="inline-flex rounded-md shadow-sm"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary "
            >
              1D
            </button>
            <button
              type="button"
              className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary"
            >
              1W
            </button>
            <button
              type="button"
              className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary"
            >
              1M
            </button>
            <button
              type="button"
              className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary"
            >
              3M
            </button>
            <button
              type="button"
              className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary"
            >
              6M
            </button>
            <button
              type="button"
              className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary-full !rounded-s-none !text-white"
            >
              1Y
            </button>
          </div>
        </div>
        <div className="box-body !p-0">
          <div id="nft-statistics" className="p-3">
            <StockHistoryData />
          </div>
        </div>
      </div>
      {/* Block 5 ends */}


        <div className="box">
        <div className="box-header justify-between">
          <div className="box-title">Sales</div>
          {/* <div className="hs-dropdown ti-dropdown">
            <Link
              href="#!"
              className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
              aria-expanded="false"
            >
              All Pack Houses
              <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
            </Link>
            <ul
              className="hs-dropdown-menu ti-dropdown-menu hidden"
              role="menu"
            >
              <li>
                <Link
                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                  href="#!"
                >
                  Pack House 1
                </Link>
              </li>
              <li>
                <Link
                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                  href="#!"
                >
                  Pack House 2
                </Link>
              </li>
              <li>
                <Link
                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                  href="#!"
                >
                  Pack House 3
                </Link>
              </li>
            </ul>
          </div> */}
{/* 
          <div className="hs-dropdown ti-dropdown">
            <Link
              href="#!"
              className="px-2 font-normal text-[0.75rem] text-[#8c9097] dark:text-white/50"
              aria-expanded="false"
            >
              View All
              <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
            </Link>
            <ul
              className="hs-dropdown-menu ti-dropdown-menu hidden"
              role="menu"
            >
              <li>
                <Link
                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                  href="#!"
                >
                  Today
                </Link>
              </li>
              <li>
                <Link
                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                  href="#!"
                >
                  This Week
                </Link>
              </li>
              <li>
                <Link
                  className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                  href="#!"
                >
                  Last Week
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="box-body">
          <div id="country-sessions">
            <SalesProduce />
          </div>
        </div>
      </div>

      {/* End----------------------------------Cut here---------------------------------*/}
    </Fragment>
  );
};

Crm.layout = "Contentlayout";
export default Crm;
