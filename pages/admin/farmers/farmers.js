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
import React, { useState, Fragment } from "react";
import DatePicker from "react-datepicker";
const Select = dynamic(() => import("react-select"), { ssr: false });
import dynamic from "next/dynamic";
import { SourcedataFarmers } from "@/shared/data/dashboards/homepagepiechart";
import farmersData from "../../../shared/data/farmers_final";

//image upload
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

const Produce = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const handleDateChange = (date) => {
    // Ensure date is defined before setting it
    if (date) {
      setStartDate(date);
    }
  };
  const data = farmersData; // assign properly

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleView = (item) => {
    console.log(item);
  };
  const [selected1, setSelected1] = useState([]);
  const Selectdata = [
    { value: "Angelina May", label: "Angelina May" },
    { value: "Kiara advain", label: "Kiara advain" },
    { value: "Hercules Jhon", label: "Hercules Jhon" },
    { value: "Mayor Kim", label: "Mayor Kim" },
  ];

  const Option1 = [
    { value: "New", label: "New" },
    { value: "Completed", label: "Completed" },
    { value: "Inprogress", label: "Inprogress" },
    { value: "Pending", label: "Pending" },
  ];

  const Option2 = [
    { value: "High", label: "High" },
    { value: "Low", label: "Low" },
    { value: "Medium", label: "Medium" },
  ];

  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others" },
  ];
  const genderSelectOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others" },
  ];

  const [dateofbirth, setDateofbirth] = useState(new Date());
  const handledateofbirthChange = (date) => {
    // Ensure date is defined before setting it
    if (date) {
      setDateofbirth(date);
    }
  };

  const [uploadprofilephoto, setUploadprofilephoto] = useState([]);

  const identityproofOptions = [
    { value: "Aadhar card", label: "Aadhar card" },
    { value: "Pan card", label: "Pan card" },
    { value: "Voter id", label: "Voter id" },
    { value: "Driving licence", label: "Driving licence" },
    { value: "Passport", label: "Passport" },
  ];

  const [uploadidproof, setUploadidproof] = useState([]);

  const stateOptions = [
    { value: "Andhra pradesh", label: "Andhra pradesh" },
    { value: "Telangana", label: "Telangana" },
    { value: "Karnataka", label: "Karnataka" },
  ];
  const districtOptions = [
    { value: "Chittoor", label: "Chittoor" },
    { value: "Anantapur", label: "Anantapur" },
    { value: "Visakhapatnam", label: "Visakhapatnam" },
    { value: "Kurnool", label: "Kurnool" },
  ];

  //image upload
  const [files, setFiles] = useState([]);

  return (
    <Fragment>
      <Seo title={"Admin All Farmers Details"} />

      {/*  <div>Praise be to GOD ! Hallelujah !</div>*/}

      {/* <div className="flex justify-center mt-10">
        <div className="box">
          <div className="box-header justify-between">
            <div className="box-title">Farmers</div>
            <div className="hs-dropdown ti-dropdown">
              <Link
                href="#!"
                className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                aria-expanded="false"
              >
                Select District
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
                    Chittoor
                  </Link>
                </li>
                <li>
                  <Link
                    className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                    href="#!"
                  >
                    Anantapur
                  </Link>
                </li>
                <li>
                  <Link
                    className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                    href="#!"
                  >
                    Visakhapatnam
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
                <span className="block text-[1.5625rem] font-bold">198</span>
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
                  <span className="text-[1rem]  font-semibold">70</span>
                </div>
              </div>
            </div>

            <div className="col !p-0">
              <div className="p-[0.95rem] text-center border-e border-dashed dark:border-defaultborder/10">
                <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend desktop inline-block">
                  Registered
                </span>
                <div>
                  <span className="text-[1rem]  font-semibold">128</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* tab code starts */}
      <div className="grid grid-cols-12 gap-x-6 mt-10">
        <div className="xxl:col-span-12 xl:col-span-12 md:col-span-12 col-span-12">
          <div className="box">
            <div className="box-header sm:flex block">
              <div className="box-title">Farmers </div>
              <div className="tab-menu-heading border-0 p-0 ms-auto sm:mt-0 mt-2">
                <div className="tabs-menu-task me-3">
                  {/* <nav className="" aria-label="Tabs">
                    <Link
                      href="#!"
                      className="hs-tab-active:bg-secondary/10 hs-tab-active:text-secondary cursor-pointer text-defaulttextcolor px-2 py-2 flex-grow  text-[0.75rem] font-medium text-center rounded-md hover:text-secondary active"
                      id="active-item"
                      data-hs-tab="#Active"
                      aria-controls="Active"
                    >
                      Approval Requests
                    </Link>
                    <Link
                      href="#!"
                      className="hs-tab-active:bg-secondary/10 hs-tab-active:text-secondary cursor-pointer text-defaulttextcolor px-2 py-2 text-[0.75rem] flex-grow font-medium text-center  rounded-md hover:text-secondary "
                      id="Complete-item"
                      data-hs-tab="#Complete"
                      aria-controls="Complete"
                    >
                      Farmers List
                    </Link>
                  </nav> */}
                </div>
              </div>
            </div>
            <div className="box-body !p-0">
              <div className="tab-content !p-0">
                <div
                  className="tab-pane show active !p-0 !border-0"
                  id="Active"
                  aria-labelledby="active-item"
                  role="tabpanel"
                >
                  <div className="table-responsive">
                    <table className="table whitespace-nowrap table-hover min-w-full">
                      <thead>
                        <tr>
                          <th scope="col" className="text-start">
                            S.No.
                          </th>
                          <th scope="col" className="text-start">
                            Village Name
                          </th>
                          <th scope="col" className="text-start">
                            Farmer Name
                          </th>
                          <th scope="col" className="text-start">
                            Father's/Husband's Name
                          </th>
                          <th scope="col" className="text-start">
                            Old Survey No. / Sub-Division
                          </th>
                          <th scope="col" className="text-start">
                            LPExtent (Acres- Cents)
                          </th>
                          <th scope="col" className="text-start">
                            Mobile Number
                          </th>
                          {/* <th scope="col" className="text-start">
                            Status
                          </th>
                          <th scope="col" className="text-start">
                            View
                          </th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {currentData.map((item, index) => (
                          <tr
                            key={index}
                            className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10"
                          >
                            <td>{item.serial_number}.</td>
                            <td>{item.village}</td>
                            <td className="text-[#8c9097] dark:text-white/50">
                              {item.farmer_name || "-"}
                            </td>
                            <td className="text-[#8c9097] dark:text-white/50">
                              {item.father_name}
                            </td>
                            <td className="text-[#8c9097] dark:text-white/50">
                              {item.survey_number}
                            </td>
                            <td className="text-[#8c9097] dark:text-white/50">
                              {item.extent}
                            </td>
                            <td className="text-[#8c9097] dark:text-white/50">
                              {item.mobile}
                            </td>
                            {/* <td>
                              <span className="badge bg-primary text-white">
                                Enrolled
                              </span>
                            </td>
                            <td>
                              <button onClick={() => handleView(item)}>
                                View
                              </button>
                            </td> */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div
                  className="tab-pane !p-0 hidden !border-0"
                  id="Complete"
                  aria-labelledby="complete-item"
                  role="tabpanel"
                >
                  <div className="box">
                    <div className="box-header justify-between">
                      <div className="box-title">Farmers list</div>
                      <div className="flex">
                        <button
                          type="button"
                          className="hs-dropdown-toggle ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem]"
                          data-hs-overlay="#packhousemanager"
                        >
                          <i className="ri-add-line font-semibold align-middle"></i>{" "}
                          New Farmer
                        </button>
                        <div
                          id="packhousemanager"
                          className="hs-overlay hidden ti-modal"
                        >
                          <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
                            <div className="ti-modal-content">
                              <div className="ti-modal-header">
                                <h6
                                  className="modal-title"
                                  id="staticBackdropLabel2"
                                >
                                  Farmer Details
                                </h6>
                                <button
                                  type="button"
                                  className="hs-dropdown-toggle ti-modal-close-btn"
                                  data-hs-overlay="#packhousemanager"
                                >
                                  <span className="sr-only">Close</span>
                                  <svg
                                    className="w-3.5 h-3.5"
                                    width="8"
                                    height="8"
                                    viewBox="0 0 8 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </button>
                              </div>

                              <div className="ti-modal-body">
                                <div className="grid grid-cols-12 gap-2">
                                  <div className="xl:col-span-6 col-span-12">
                                    <label
                                      htmlFor="task-name"
                                      className="form-label"
                                    >
                                      First name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="task-name"
                                      placeholder="Enter First name"
                                    />
                                  </div>

                                  <div className="xl:col-span-6 col-span-12">
                                    <label
                                      htmlFor="task-name"
                                      className="form-label"
                                    >
                                      Last name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="task-name"
                                      placeholder="Enter Last name"
                                    />
                                  </div>

                                  <div className="xl:col-span-6 col-span-12">
                                    <label
                                      htmlFor="task-name"
                                      className="form-label"
                                    >
                                      Select Gender{" "}
                                    </label>
                                    <Select
                                      classNamePrefix="Select2"
                                      className="ti-form-select rounded-sm !p-0"
                                      multi
                                      options={genderOptions}
                                    />
                                  </div>

                                  <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">
                                      Select Date of birth
                                    </label>
                                    <div className="form-group">
                                      <div className="input-group !flex-nowrap">
                                        <div className="input-group-text text-muted">
                                          {" "}
                                          <i className="ri-calendar-line"></i>{" "}
                                        </div>
                                        <DatePicker
                                          selected={dateofbirth}
                                          onChange={handledateofbirthChange}
                                          dateFormat="yy/MM/dd"
                                          placeholderText="Choose Date"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="xl:col-span-6 col-span-12">
                                    <label
                                      htmlFor="task-name"
                                      className="form-label"
                                    >
                                      Mobile
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="task-name"
                                      placeholder="Enter Mobile"
                                    />
                                  </div>

                                  <div className="xl:col-span-6 col-span-12">
                                    <label
                                      htmlFor="task-name"
                                      className="form-label"
                                    >
                                      Email
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="task-name"
                                      placeholder="Enter Email"
                                    />
                                  </div>
                                  <div className="xl:col-span-6 col-span-12">
                                    <label
                                      htmlFor="task-name"
                                      className="form-label"
                                    >
                                      Bank Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="task-name"
                                      placeholder="Enter Bank Name"
                                    />
                                  </div>
                                  <div className="xl:col-span-6 col-span-12">
                                    <label
                                      htmlFor="task-name"
                                      className="form-label"
                                    >
                                      Bank Account No.
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="task-name"
                                      placeholder="Enter Bank Account No."
                                    />
                                  </div>
                                  <div className="xl:col-span-6 col-span-12">
                                    <label
                                      htmlFor="task-name"
                                      className="form-label"
                                    >
                                      IFSC Code
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="task-name"
                                      placeholder="Enter IFSC Code"
                                    />
                                  </div>

                                  <div className="xl:col-span-6 col-span-12">
                                    <label
                                      htmlFor="task-name"
                                      className="form-label"
                                    >
                                      Select Identity proof{" "}
                                    </label>
                                    <Select
                                      classNamePrefix="Select2"
                                      className="ti-form-select rounded-sm !p-0"
                                      multi
                                      options={identityproofOptions}
                                    />
                                  </div>

                                  <div className="xl:col-span-6 col-span-12">
                                    <label
                                      htmlFor="task-name"
                                      className="form-label"
                                    >
                                      Proof no.
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="task-name"
                                      placeholder="Enter Proof no."
                                    />
                                  </div>

                                  <div className="xl:col-span-6 col-span-12 product-documents-container">
                                    <p className="font-semibold mb-2 text-[0.875rem]">
                                      Upload ID Proof :
                                    </p>
                                    <FilePond
                                      className="basic-filepond"
                                      accepted-file-types={[
                                        "application/pdf",
                                        "image/png",
                                        "image/jpeg",
                                        "image/gif",
                                      ]}
                                      server="/api"
                                      allowReorder={true}
                                      files={uploadidproof}
                                      onupdatefiles={setUploadidproof}
                                      allowMultiple={false}
                                      allowImagePreview={true}
                                      maxFiles={10}
                                      name="filepond"
                                      labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
                                    />
                                  </div>
                                  <div className="xl:col-span-6 col-span-12 product-documents-container">
                                    <p className="font-semibold mb-2 text-[0.875rem]">
                                      Upload Profile Photo :
                                    </p>
                                    <FilePond
                                      className="basic-filepond"
                                      accepted-file-types={[
                                        "application/pdf",
                                        "image/png",
                                        "image/jpeg",
                                        "image/gif",
                                      ]}
                                      server="/api"
                                      allowReorder={true}
                                      files={uploadprofilephoto}
                                      onupdatefiles={setUploadprofilephoto}
                                      allowMultiple={false}
                                      allowImagePreview={true}
                                      maxFiles={10}
                                      name="filepond"
                                      labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
                                    />
                                  </div>

                                  <div className="xl:col-span-6 col-span-12">
                                    <label
                                      htmlFor="task-name"
                                      className="form-label"
                                    >
                                      Select State{" "}
                                    </label>
                                    <Select
                                      classNamePrefix="Select2"
                                      className="ti-form-select rounded-sm !p-0"
                                      multi
                                      options={stateOptions}
                                    />
                                  </div>

                                  <div className="xl:col-span-6 col-span-12">
                                    <label
                                      htmlFor="task-name"
                                      className="form-label"
                                    >
                                      Select District{" "}
                                    </label>
                                    <Select
                                      classNamePrefix="Select2"
                                      className="ti-form-select rounded-sm !p-0"
                                      multi
                                      options={districtOptions}
                                    />
                                  </div>

                                  <div className="xl:col-span-6 col-span-12">
                                    <label
                                      htmlFor="task-name"
                                      className="form-label"
                                    >
                                      Pincode
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="task-name"
                                      placeholder="Enter Pincode"
                                    />
                                  </div>

                                  {/* <hr /> */}

                                  <div className="xl:col-span-6 col-span-12">
                                    <label
                                      htmlFor="task-name"
                                      className="form-label"
                                    >
                                      Farm Address
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="task-name"
                                      placeholder="Enter Address"
                                    />
                                  </div>

                                  <div className="xl:col-span-6 col-span-12">
                                    <label
                                      htmlFor="task-name"
                                      className="form-label"
                                    >
                                      GPS Latitude
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="task-name"
                                      placeholder="Enter Latitude"
                                    />
                                  </div>

                                  <div className="xl:col-span-6 col-span-12">
                                    <label
                                      htmlFor="task-name"
                                      className="form-label"
                                    >
                                      GPS Longitude
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="task-name"
                                      placeholder="Enter Longitude"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="ti-modal-footer">
                                <button
                                  type="button"
                                  className="hs-dropdown-toggle ti-btn ti-btn-light"
                                  data-hs-overlay="#packhousemanager"
                                >
                                  Cancel
                                </button>
                                <Link
                                  className="ti-btn ti-btn-primary-full"
                                  href="#!"
                                >
                                  Submit
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="hs-dropdown ti-dropdown ms-2">
                          <button
                            type="button"
                            aria-label="button"
                            className="ti-btn ti-btn-secondary ti-btn-sm"
                            aria-expanded="false"
                          >
                            <i className="ti ti-dots-vertical"></i>
                          </button>
                          <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                            {/*   <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">New Tasks</Link></li>
<li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Pending Tasks</Link></li>
<li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Completed Tasks</Link></li>
<li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Inprogress Tasks</Link></li>
*/}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="box-body">
                      <div className="table-responsive">
                        <table className="table whitespace-nowrap table-bordered min-w-full">
                          <thead>
                            <tr>
                              <th scope="col" className="text-start">
                                S.No.
                              </th>
                              <th scope="col" className="text-start">
                                Farmer ID
                              </th>
                              <th scope="col" className="text-start">
                                First name
                              </th>
                              <th scope="col" className="text-start">
                                Last name
                              </th>
                              <th scope="col" className="text-start">
                                Gender
                              </th>
                              <th scope="col" className="text-start">
                                Date of birth
                              </th>
                              <th scope="col" className="text-start">
                                Mobile
                              </th>
                              <th scope="col" className="text-start">
                                Email
                              </th>
                              <th scope="col" className="text-start">
                                Status
                              </th>
                              <th scope="col" className="text-start">
                                Profile Photo
                              </th>
                              <th scope="col" className="text-start">
                                View
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border border-defaultborder task-list">
                              <td>
                                <span className="font-semibold">1</span>
                              </td>
                              <td>
                                <span className="font-semibold">
                                  FAINAPCH1016
                                </span>
                              </td>
                              <td>
                                <span className="font-semibold">Raju</span>
                              </td>
                              <td>
                                <span className="font-semibold">Alla</span>
                              </td>
                              <td>
                                <span className="font-semibold">Male</span>
                              </td>
                              <td>
                                <span className="font-semibold">
                                  20-09-1987
                                </span>
                              </td>
                              <td>
                                <span className="font-semibold">
                                  9874512053
                                </span>
                              </td>
                              <td>
                                <span className="font-semibold">
                                  rajualla@evezon.in
                                </span>
                              </td>
                              <td>
                                <span className="badge bg-success text-white">
                                  Approved
                                </span>
                              </td>

                              <td>
                                <span className="avatar avatar-sm avatar-rounded">
                                  <img
                                    src="../../../assets/images/phmanager/1.jpeg"
                                    alt="img"
                                  />
                                </span>
                              </td>
                              <td>
                                <div className="hs-tooltip ti-main-tooltip">
                                  <button
                                    type="button"
                                    className="hs-tooltip-toggle ti-btn ti-btn-secondary ti-btn-sm"
                                    data-hs-overlay="#view_packhousemanager"
                                  >
                                    <i className="ri-eye-fill"></i>
                                    <span
                                      className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                      role="tooltip"
                                    >
                                      View
                                    </span>
                                  </button>
                                </div>
                              </td>
                            </tr>

                            <tr className="border border-defaultborder task-list">
                              <td>
                                <span className="font-semibold">2</span>
                              </td>
                              <td>
                                <span className="font-semibold">
                                  FAINAPCH1017
                                </span>
                              </td>
                              <td>
                                <span className="font-semibold">Bhaskar</span>
                              </td>
                              <td>
                                <span className="font-semibold">Borra</span>
                              </td>
                              <td>
                                <span className="font-semibold">Male</span>
                              </td>
                              <td>
                                <span className="font-semibold">
                                  14-12-1990
                                </span>
                              </td>
                              <td>
                                <span className="font-semibold">
                                  7894536520
                                </span>
                              </td>
                              <td>
                                <span className="font-semibold">
                                  bhaskarborra@evezon.in
                                </span>
                              </td>
                              <td>
                                <span className="badge bg-success text-white">
                                  Approved
                                </span>
                              </td>
                              <td>
                                <span className="avatar avatar-sm avatar-rounded">
                                  <img
                                    src="../../../assets/images/phmanager/2.jpeg"
                                    alt="img"
                                  />
                                </span>
                              </td>
                              <td>
                                <div className="hs-tooltip ti-main-tooltip">
                                  <button
                                    type="button"
                                    className="hs-tooltip-toggle ti-btn ti-btn-secondary ti-btn-sm"
                                    data-hs-overlay="#view_packhousemanager"
                                  >
                                    <i className="ri-eye-fill"></i>
                                    <span
                                      className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                      role="tooltip"
                                    >
                                      View
                                    </span>
                                  </button>
                                </div>
                              </td>
                            </tr>

                            <tr className="border border-defaultborder task-list">
                              <td>
                                <span className="font-semibold">3</span>
                              </td>
                              <td>
                                <span className="font-semibold">
                                  FAINAPCH1023
                                </span>
                              </td>
                              <td>
                                <span className="font-semibold">
                                  Praveen Kumar
                                </span>
                              </td>
                              <td>
                                <span className="font-semibold">Rapeti</span>
                              </td>
                              <td>
                                <span className="font-semibold">Male</span>
                              </td>
                              <td>
                                <span className="font-semibold">
                                  26-05-1993
                                </span>
                              </td>
                              <td>
                                <span className="font-semibold">
                                  7841256985
                                </span>
                              </td>
                              <td>
                                <span className="font-semibold">
                                  praveenk@evezon.in
                                </span>
                              </td>
                              <td>
                                <span className="badge bg-primary text-white">
                                  Enrolled
                                </span>
                              </td>
                              <td>
                                <span className="avatar avatar-sm avatar-rounded">
                                  <img
                                    src="../../../assets/images/phmanager/3.jpeg"
                                    alt="img"
                                  />
                                </span>
                              </td>
                              <td>
                                <div className="hs-tooltip ti-main-tooltip">
                                  <button
                                    type="button"
                                    className="hs-tooltip-toggle ti-btn ti-btn-secondary ti-btn-sm"
                                    data-hs-overlay="#view_packhousemanager"
                                  >
                                    <i className="ri-eye-fill"></i>
                                    <span
                                      className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                      role="tooltip"
                                    >
                                      View
                                    </span>
                                  </button>
                                </div>
                              </td>
                            </tr>

                            <tr className="border border-defaultborder task-list">
                              <td>
                                <span className="font-semibold">4</span>
                              </td>
                              <td>
                                <span className="font-semibold">
                                  FAINAPCH1034
                                </span>
                              </td>
                              <td>
                                <span className="font-semibold">Roy</span>
                              </td>
                              <td>
                                <span className="font-semibold">Pyla</span>
                              </td>
                              <td>
                                <span className="font-semibold">Male</span>
                              </td>
                              <td>
                                <span className="font-semibold">
                                  02-06-1997
                                </span>
                              </td>
                              <td>
                                <span className="font-semibold">
                                  8944578542
                                </span>
                              </td>
                              <td>
                                <span className="font-semibold">
                                  roy@evezon.in
                                </span>
                              </td>
                              <td>
                                <span className="badge bg-secondary text-white">
                                  On-Hold
                                </span>
                              </td>
                              <td>
                                <span className="avatar avatar-sm avatar-rounded">
                                  <img
                                    src="../../../assets/images/produce/phmanager/4.jpeg"
                                    alt="img"
                                  />
                                </span>
                              </td>
                              <td>
                                <div className="hs-tooltip ti-main-tooltip">
                                  <button
                                    type="button"
                                    className="hs-tooltip-toggle ti-btn ti-btn-secondary ti-btn-sm"
                                    data-hs-overlay="#view_packhousemanager"
                                  >
                                    <i className="ri-eye-fill"></i>
                                    <span
                                      className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                      role="tooltip"
                                    >
                                      View
                                    </span>
                                  </button>
                                </div>
                              </td>
                            </tr>

                            <tr className="border border-defaultborder task-list">
                              <td>
                                <span className="font-semibold">5</span>
                              </td>
                              <td>
                                <span className="font-semibold">
                                  FAINAPCH1010
                                </span>
                              </td>
                              <td>
                                <span className="font-semibold">
                                  Santosh Kumar
                                </span>
                              </td>
                              <td>
                                <span className="font-semibold">Gurram</span>
                              </td>
                              <td>
                                <span className="font-semibold">Male</span>
                              </td>
                              <td>
                                <span className="font-semibold">
                                  06-10-2000
                                </span>
                              </td>
                              <td>
                                <span className="font-semibold">
                                  9845762541
                                </span>
                              </td>
                              <td>
                                <span className="font-semibold">
                                  santosh@evezon.in
                                </span>
                              </td>
                              <td>
                                <span className="badge bg-success text-white">
                                  Approved
                                </span>
                              </td>
                              <td>
                                <span className="avatar avatar-sm avatar-rounded">
                                  <img
                                    src="../../../assets/phmanager/5.jpeg"
                                    alt="img"
                                  />
                                </span>
                              </td>
                              <td>
                                <div className="hs-tooltip ti-main-tooltip">
                                  <button
                                    type="button"
                                    className="hs-tooltip-toggle ti-btn ti-btn-secondary ti-btn-sm"
                                    data-hs-overlay="#view_packhousemanager"
                                  >
                                    <i className="ri-eye-fill"></i>
                                    <span
                                      className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                      role="tooltip"
                                    >
                                      View
                                    </span>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-footer">
              <div className="sm:flex items-center">
                {/* Showing entries */}
                <div className="dark:text-defaulttextcolor/70">
                  Showing {indexOfFirstRow + 1} to{" "}
                  {Math.min(indexOfLastRow, data.length)} of {data.length}{" "}
                  Entries
                  <i className="bi bi-arrow-right ms-2 font-semibold"></i>
                </div>

                {/* Pagination */}
                <div className="ms-auto">
                  <nav className="pagination-style-4">
                    <ul className="ti-pagination mb-0">
                      {/* Prev */}
                      <li
                        className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                      >
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          Prev
                        </button>
                      </li>

                      {/* Page 1 */}
                      <li
                        className={`page-item ${currentPage === 1 ? "active" : ""}`}
                      >
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(1)}
                        >
                          1
                        </button>
                      </li>

                      {/* Page 2 (only if exists) */}
                      {totalPages >= 2 && (
                        <li
                          className={`page-item ${currentPage === 2 ? "active" : ""}`}
                        >
                          <button
                            className="page-link"
                            onClick={() => setCurrentPage(2)}
                          >
                            2
                          </button>
                        </li>
                      )}

                      {/* Next */}
                      <li
                        className={`page-item ${
                          currentPage === totalPages ? "disabled" : ""
                        }`}
                      >
                        <button
                          className="page-link !text-primary"
                          onClick={() => setCurrentPage(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        >
                          Next
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* tab code ends*/}

      {/* final cde starts */}

      {/* final code ends*/}
    </Fragment>
  );
};

Produce.layout = "Contentlayout";
export default Produce;
