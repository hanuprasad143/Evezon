 
import { Customers, Deals, Dealsstatistics, Earned, Ratio, Revenue, Revenueanalytics, Sourcedata, Target } from '@/shared/data/dashboards/crmdata';
import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';
import React, { useState,Fragment } from 'react'
import DatePicker from "react-datepicker";
const Select = dynamic(() => import("react-select"), {ssr : false});
import dynamic from 'next/dynamic';
import {  SourcedataProduceID } from '@/shared/data/dashboards/homepagepiechart';

//image upload
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);


  


const Produce = () => {

  const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    const [selected1, setSelected1] = useState([]);
    const Selectdata = [
      { value: 'Angelina May', label: 'Angelina May' },
      { value: 'Kiara advain', label: 'Kiara advain' },
      { value: 'Hercules Jhon', label: 'Hercules Jhon' },
      { value: 'Mayor Kim', label: 'Mayor Kim' },
  ];

    const Option1 = [
      { value: 'New', label: 'New' },
      { value: 'Completed', label: 'Completed' },
      { value: 'Inprogress', label: 'Inprogress' },
      { value: 'Pending', label: 'Pending' }
  ];

  const Option2 = [
    { value: 'High', label: 'High' },
    { value: 'Low', label: 'Low' },
    { value: 'Medium', label: 'Medium' },
];

const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others" },
    ];
      const genderSelectOptions = [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "Others", label: "Others" } 
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


 
  const paymentModeSelectOptions = [
  { value: "Cash", label: "Cash" },
  { value: "UPI", label: "UPI" },
  { value: "Debit Card", label: "Debit Card" } ,
  { value: "Credit Card", label: "Credit Card" } ,
];

const [dateofBirth, setDateofBirth] = useState(new Date());
 



const SelectState = [
    { value: "Andhra Pradesh", label: "Andhra Pradesh" },
    { value: "Telangana", label: "Telangana" },
    { value: "Delhi", label: "Delhi" } 
  ];


  const SelectProduce = [
    { value: "Tomato", label: "Tomato" },
    { value: "Potato", label: "Potato" },
    { value: "Onion", label: "Onion" } 
  ];



  const SelectVariety = [
    { value: "Tomato Hybrid", label: "Tomato Hybrid" },
    { value: "Tomato Local", label: "Tomato Local" },
  ];



  const SelectGrade = [
    { value: "Premium", label: "Premium" },
    { value: "Excellent", label: "Excellent" },
    { value: "Good", label: "Good" },
    { value: "Regular", label: "Regular" } 
  ];












  return (
    <Fragment>
      <Seo title={"Admin Enroll Farmer"} />


     {/*  <div>Praise be to GOD ! Hallelujah !</div>*/}

     {/* <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-body">
                            <div className="grid grid-cols-12">
                                <div className="col-span-6 pe-0">
                                    <p className="mb-2">
                                        <span className="text-[1rem]">GRN Statistics</span>
                                    </p>
                                    <p className="mb-2 text-[0.75rem]">
                                        <span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">153</span>
                                        <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">THIS MONTH</span>
                                    </p>
                                    <Link href="/admin/farmers/financialchart" className="text-[0.75rem] mb-0 text-primary">Show full stats<i className="ti ti-chevron-right ms-1"></i></Link>
                                </div>
                                <div className="col-span-6">
                                    <p className="badge bg-success/10 !text-success ltr:float-right rtl:float-left inline-flex"><i className="ti ti-caret-up me-1"></i>42%</p>
                                    <p className="main-card-icon mb-0"><svg className="svg-primary" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" opacity=".3" /><path d="M0,0h24v24H0V0z" fill="none" /><g><path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" /><rect height="2" width="6" x="9" y="7" /><rect height="2" width="2" x="16" y="7" /><rect height="2" width="6" x="9" y="10" /><rect height="2" width="2" x="16" y="10" /></g></svg></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-body">
                            <div className="grid grid-cols-12">
                                <div className="col-span-6 pe-0">
                                    <p className="mb-2">
                                        <span className="text-[1rem]">Pending Payment</span>
                                    </p>
                                    <p className="mb-2 text-[0.75rem]">
                                        <span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">Rs.4,32,474</span>
                                        <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">THIS MONTH</span>
                                    </p>
                                    <Link href="/admin/farmers/financialchart" className="text-[0.75rem] mb-0 !text-primary">Show full stats<i className="ti ti-chevron-right ms-1"></i></Link>
                                </div>
                                <div className="col-span-6">
                                    <p className="badge bg-danger/10 !text-danger ltr:float-right rtl:float-left inline-flex"><i className="ti ti-caret-down me-1"></i>12%</p>
                                    <p className="main-card-icon mb-0">
                                        <svg className="svg-primary" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><path d="M12,6c-3.87,0-7,3.13-7,7s3.13,7,7,7s7-3.13,7-7S15.87,6,12,6z M13,14h-2V8h2V14z" opacity=".3" /><rect height="2" width="6" x="9" y="1" /><path d="M19.03,7.39l1.42-1.42c-0.43-0.51-0.9-0.99-1.41-1.41l-1.42,1.42C16.07,4.74,14.12,4,12,4c-4.97,0-9,4.03-9,9 c0,4.97,4.02,9,9,9s9-4.03,9-9C21,10.88,20.26,8.93,19.03,7.39z M12,20c-3.87,0-7-3.13-7-7s3.13-7,7-7s7,3.13,7,7S15.87,20,12,20z" /><rect height="6" width="2" x="11" y="8" /></g></g></svg>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-body">
                            <div className="grid grid-cols-12">
                                <div className="col-span-6 pe-0">
                                    <p className="mb-2">
                                        <span className="text-[1rem]">Partial Payments Made</span>
                                    </p>
                                    <p className="mb-2 text-[0.75rem]">
                                        <span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">Rs.2,70,146</span>
                                        <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">THIS MONTH</span>
                                    </p>
                                    <Link href="/admin/farmers/financialchart"  className="text-[0.75rem] mb-0 text-primary">Show full stats<i className="ti ti-chevron-right ms-1"></i></Link>
                                </div>
                                <div className="col-span-6">
                                    <p className="badge bg-success/10 !text-success ltr:float-right rtl:float-left inline-flex"><i className="ti ti-caret-up me-1"></i>27%</p>
                                    <p className="main-card-icon mb-0">
                                        <svg className="svg-primary" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M13 4H6v16h12V9h-5V4zm3 14H8v-2h8v2zm0-6v2H8v-2h8z" opacity=".3" /><path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" /></svg>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6  col-span-12">
                    <div className="box">
                        <div className="box-body">
                            <div className="grid grid-cols-12">
                                <div className="col-span-6 pe-0">
                                    <p className="mb-2">
                                        <span className="text-[1rem]">Completed Payments</span>
                                    </p>
                                    <p className="mb-2 text-[0.75rem]">
                                        <span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">Rs.5,63,000</span>
                                        <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">THIS MONTH</span>
                                    </p>
                                    <Link href="/admin/farmers/financialchart" className="text-[0.75rem] mb-0 text-primary">Show full stats<i className="ti ti-chevron-right ms-1"></i></Link>
                                </div>
                                <div className="col-span-6">
                                    <p className="badge bg-success/10 !text-success ltr:float-right rtl:float-left inline-flex"><i className="ti ti-caret-up me-1"></i>32.5%</p>
                                    <p className="main-card-icon mb-0">
                                        <svg className="svg-primary" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z" opacity=".3" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" /></svg>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

{/* tab code starts */}
<div className="grid grid-cols-12 gap-x-6 mt-3">
<div className="xxl:col-span-12 xl:col-span-12 md:col-span-12 col-span-12">
    <div className="box">
     
        

    <div className="box">
    <div className="box-header justify-between">
    <div className="box-title">
    Dispatch
    </div>
    <div className="flex">
        
    {/* <button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem]" data-hs-overlay="#add_dispatch">
    <i className="ri-add-line font-semibold align-middle"></i>New Dispatch
    </button>
     */}
    <div className="hs-dropdown ti-dropdown ms-2">
    <button type="button" aria-label="button" className="ti-btn ti-btn-secondary ti-btn-sm" aria-expanded="false">
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
                   
                    <th scope="col" className="text-start">S.No</th>
                    <th scope="col" className="text-start">Delivery</th>
                    <th scope="col" className="text-start">Sales Order ID</th>
                    <th scope="col" className="text-start">Produce</th>
                    <th scope="col" className="text-start">Variety</th>
                    <th scope="col" className="text-start">Qty</th>
                    <th scope="col" className="text-start">Order Date</th>
                    <th scope="col" className="text-start">Loading Date</th>
                    <th scope="col" className="text-start">Vehicle Plate#</th>
                    <th scope="col" className="text-start">Vehicle Model</th>
                    <th scope="col" className="text-start">View </th>
                    <th scope="col" className="text-start">Action</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr className="border border-defaultborder task-list">
                   
                    <td>
                        <span className="font-semibold">1</span>
                    </td>
                    <td>
                        <span className="font-semibold">DEL-2024325-04</span>
                    </td>
                    <td>
                        <span className="font-semibold">2024-EIPL-EAS-00111</span>
                    </td>
                    
                     <td>
                        <span className="font-semibold">Carrot</span>
                    </td>
                    <td>
                        <span className="font-semibold">Carrot</span>
                    </td>
                    <td>
                        <span className="font-semibold">8,400 </span>
                    </td>
                    <td>
                        <span className="font-semibold">Mar 25, 2024</span>
                    </td>
                    <td>
                        <span className="font-semibold">Mar 25, 2024</span>
                    </td>
                    <td>
                        <span className="font-semibold">KA02AB8505 </span>
                    </td>
                    <td>
                        <span className="font-semibold">EICHER PRO</span>
                    </td>
                                    
                   <td>
                        <div className="hs-tooltip ti-main-tooltip">
                        <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-secondary ti-btn-sm" data-hs-overlay="#view_dispatch">
                        <i className="ri-eye-fill"></i>
                        <span
                        className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                        role="tooltip">
                        View
                        </span>
                        </button>
                        </div>
            
            
                    </td>
                     <td>
                        <div className="hs-tooltip ti-main-tooltip">
                            <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-primary ti-btn-sm" data-hs-overlay="#edit_dispatch" >
                                <i className="ri-edit-line"></i>
                                <span
                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                    role="tooltip">
                                    Edit
                                </span>
                            </button>
                        </div>
                        <div className="hs-tooltip ti-main-tooltip">
                            <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-danger ms-1 ti-btn-sm task-delete-btn" data-hs-overlay="#delete_dispatch">
                                <i className="ri-delete-bin-5-line"></i>
                                <span
                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                    role="tooltip">
                                    Delete
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
                        <span className="font-semibold">DEL-2024325-03</span>
                    </td>
                    <td>
                        <span className="font-semibold">2024-EIPL-EAS-00110</span>
                    </td>
                    
                     <td>
                        <span className="font-semibold">Beans French</span>
                    </td>
                    <td>
                        <span className="font-semibold">Beans</span>
                    </td>
                    <td>
                        <span className="font-semibold">9,970   </span>
                    </td>
                    <td>
                       <span className="font-semibold">Mar 25, 2024</span>
                    </td>
                    <td>
                       <span className="font-semibold">Mar 25, 2024</span>
                    </td>
    
                    <td>
                        <span className="font-semibold">AP03TE1339</span>
                    </td> 
                    <td>
                        
                        <span className="font-semibold">EICHER</span>
                    </td>                        
                     <td>
                        <div className="hs-tooltip ti-main-tooltip">
                        <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-secondary ti-btn-sm" data-hs-overlay="#view_dispatch">
                        <i className="ri-eye-fill"></i>
                        <span
                        className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                        role="tooltip">
                        View
                        </span>
                        </button>
                        </div>
            
            
                    </td>
        
                     <td>
                        <div className="hs-tooltip ti-main-tooltip">
                            <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-primary ti-btn-sm" data-hs-overlay="#edit_dispatch">
                                <i className="ri-edit-line"></i>
                                <span
                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                    role="tooltip">
                                    Edit
                                </span>
                            </button>
                        </div>
                        <div className="hs-tooltip ti-main-tooltip">
                            <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-danger ms-1 ti-btn-sm task-delete-btn" data-hs-overlay="#delete_dispatch">
                                <i className="ri-delete-bin-5-line"></i>
                                <span
                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                    role="tooltip">
                                    Delete
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
                        <span className="font-semibold">DEL-2024325-03</span>
                    </td>
                    <td>
                        <span className="font-semibold">2024-EIPL-EAS-00110</span>
                    </td>
                    
                     <td>
                        <span className="font-semibold">Tomato</span>
                    </td>
                    <td>
                        <span className="font-semibold">Tomato Local</span>
                    </td>
                    <td>
                        <span className="font-semibold">10,000</span>
                    </td>
                    <td>
                       <span className="font-semibold">Mar 25, 2024</span>
                    </td>
                    <td>
                       <span className="font-semibold">Mar 25, 2024</span>
                    </td>
    
                    <td>
                        <span className="font-semibold">AP03TE1339</span>
                    </td> 
                    <td>
                        
                        <span className="font-semibold">EICHER</span>
                    </td>                       
                     <td>
                        <div className="hs-tooltip ti-main-tooltip">
                        <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-secondary ti-btn-sm" data-hs-overlay="#view_dispatch">
                        <i className="ri-eye-fill"></i>
                        <span
                        className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                        role="tooltip">
                        View
                        </span>
                        </button>
                        </div>
            
            
                    </td>
        
                     <td>
                        <div className="hs-tooltip ti-main-tooltip">
                            <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-primary ti-btn-sm" data-hs-overlay="#edit_dispatch">
                                <i className="ri-edit-line"></i>
                                <span
                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                    role="tooltip">
                                    Edit
                                </span>
                            </button>
                        </div>
                        <div className="hs-tooltip ti-main-tooltip">
                            <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-danger ms-1 ti-btn-sm task-delete-btn" data-hs-overlay="#delete_dispatch">
                                <i className="ri-delete-bin-5-line"></i>
                                <span
                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                    role="tooltip">
                                    Delete
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
                        <span className="font-semibold">DEL-2024325-03</span>
                    </td>
                    <td>
                        <span className="font-semibold">2024-EIPL-EAS-00110</span>
                    </td>
                    
                     <td>
                        <span className="font-semibold">Cabbage</span>
                    </td>
                    <td>
                        <span className="font-semibold">Cabbage</span>
                    </td>
                    <td>
                        <span className="font-semibold">20,280 </span>
                    </td>
                    <td>
                       <span className="font-semibold">Mar 25, 2024</span>
                    </td>
                    <td>
                       <span className="font-semibold">Mar 25, 2024</span>
                    </td>
    
                    <td>
                        <span className="font-semibold">AP03TE1339</span>
                    </td> 
                    <td>
                        
                        <span className="font-semibold">EICHER</span>
                    </td>                        
                     <td>
                        <div className="hs-tooltip ti-main-tooltip">
                        <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-secondary ti-btn-sm" data-hs-overlay="#view_dispatch">
                        <i className="ri-eye-fill"></i>
                        <span
                        className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                        role="tooltip">
                        View
                        </span>
                        </button>
                        </div>
            
            
                    </td>
        
                     <td>
                        <div className="hs-tooltip ti-main-tooltip">
                            <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-primary ti-btn-sm" data-hs-overlay="#edit_dispatch">
                                <i className="ri-edit-line"></i>
                                <span
                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                    role="tooltip">
                                    Edit
                                </span>
                            </button>
                        </div>
                        <div className="hs-tooltip ti-main-tooltip">
                            <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-danger ms-1 ti-btn-sm task-delete-btn" data-hs-overlay="#delete_dispatch">
                                <i className="ri-delete-bin-5-line"></i>
                                <span
                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                    role="tooltip">
                                    Delete
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
                        <span className="font-semibold">DEL-2024325-03</span>
                    </td>
                    <td>
                        <span className="font-semibold">2024-EIPL-EAS-00110</span>
                    </td>
                    
                     <td>
                        <span className="font-semibold">Pomegranate</span>
                    </td>
                    <td>
                        <span className="font-semibold">Pomegranate</span>
                    </td>
                    <td>
                        <span className="font-semibold">4,980 </span>
                    </td>
                    <td>
                       <span className="font-semibold">Mar 25, 2024</span>
                    </td>
                    <td>
                       <span className="font-semibold">Mar 25, 2024</span>
                    </td>
    
                    <td>
                        <span className="font-semibold">AP03TE1339</span>
                    </td> 
                    <td>
                        
                        <span className="font-semibold">EICHER</span>
                    </td>                       
                     <td>
                        <div className="hs-tooltip ti-main-tooltip">
                        <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-secondary ti-btn-sm" data-hs-overlay="#view_dispatch">
                        <i className="ri-eye-fill"></i>
                        <span
                        className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                        role="tooltip">
                        View
                        </span>
                        </button>
                        </div>
            
            
                    </td>
        
                     <td>
                        <div className="hs-tooltip ti-main-tooltip">
                            <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-primary ti-btn-sm" data-hs-overlay="#edit_dispatch">
                                <i className="ri-edit-line"></i>
                                <span
                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                    role="tooltip">
                                    Edit
                                </span>
                            </button>
                        </div>
                        <div className="hs-tooltip ti-main-tooltip">
                            <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-danger ms-1 ti-btn-sm task-delete-btn" data-hs-overlay="#delete_dispatch">
                                <i className="ri-delete-bin-5-line"></i>
                                <span
                                    className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                    role="tooltip">
                                    Delete
                                </span>
                            </button>
                        </div>
                    </td>
                </tr>
            
            </tbody>
            </table>            
            
           
    </div>
    </div>
    <div className="box-footer">
    <nav aria-label="Page navigation">
    <ul className="ti-pagination justify-end mb-0">
    <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]" href="#!">Prev</Link></li>
    <li className="page-item"><Link className="page-link active px-3 py-[0.375rem]" href="#!">1</Link></li>
    <li className="page-item"><Link className="page-link  px-3 py-[0.375rem]" href="#!">2</Link></li>
    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">3</Link></li>
    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">Next</Link></li>
    </ul>
    </nav>
    </div>
    
    </div>

    </div>
</div>
 
</div>

{/* tab code ends*/}

{/* final cde starts */}


<div className="flex">

<div id="view_packhousemanager" className="hs-overlay hidden ti-modal">
<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
<div className="ti-modal-content">
<div className="ti-modal-header">
<h6 className="modal-title" id="staticBackdropLabel2">View GRN Details
</h6>
<button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#view_packhousemanager">
<span className="sr-only">Close</span>
<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
</svg>
</button>
</div>
<div className="ti-modal-body">
<div className="hs-accordion-group">



<div className="hs-accordion active overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-0">
                
                
<button
  className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
  aria-controls="hs-accordion-collapse-producedetails" type="button">
  GRN Details
  <svg
    className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
  <svg
    className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
</button>



<div id="hs-accordion-collapse-producedetails"
  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
  aria-labelledby="hs-accordion-heading-0">
 
  <div className="grid grid-cols-12 gap-2">
                        
                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">GRN ID</label>
                        <input type="text" className="form-control" id="task-name" value="GRN24010001"/>
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Farmer ID</label>
                        <input type="text" className="form-control" id="task-name" value="BUINAP00013" />
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Farmer Name</label>
                        <input type="text" className="form-control" id="task-name" value="Raju Alla" />
                        </div>

                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Produce ID</label>
                        <input type="text" className="form-control" id="task-name" value="PRBUINA00086" />
                        </div>


                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Produce</label>
                        <input type="text" className="form-control" id="task-name" value="Tomato" />
                        </div>

                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Variety</label>
                        <input type="text" className="form-control" id="task-name" value="Tomato Hybrid" />
                        </div>

                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Quantity</label>
                        <input type="text" className="form-control" id="task-name" value="1000 kg" />
                        </div>


                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Total Amount Payable</label>
                        <input type="text" className="form-control" id="task-name" value="Rs.20,000" />
                        </div>


                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Amount Paid</label>
                        <input type="text" className="form-control" id="task-name" value="Rs.0" />
                        </div>


                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Balance Amount</label>
                        <input type="text" className="form-control" id="task-name" value="Rs.20,000" />
                        </div>




                        {/* 
                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Date of birth</label>
                        <input type="text" className="form-control" id="task-name" value="Date of birth" />
                        </div>
                        */}
                        
                         







  </div>


</div>




</div>




              
<div className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-farmerdetails">
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-accordion-collapse-farmerdetails" type="button">
                  Grade Details
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <div id="hs-accordion-collapse-farmerdetails"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-accordion-heading-farmerdetails">


                            
            <div className="box-body">
            <div className="table-responsive">
            <table className="table whitespace-nowrap table-bordered min-w-full">
            <thead>
            <tr>

            <th scope="col" className="text-start">S.No.</th>
            <th scope="col" className="text-start">Grade</th>
            <th scope="col" className="text-start">Quantity</th>
            <th scope="col" className="text-start">Price</th> 

            </tr>
            </thead>
            <tbody>
            <tr className="border border-defaultborder task-list">

            <td>
            <span className="font-semibold">1</span>
            </td>
            <td>
            <span className="font-semibold">Premium</span>
            </td>
            <td>
            <span className="font-semibold">3200</span>
            </td>
            <td>
            <span className="font-semibold">32</span>
            </td>
            
            </tr>


          <tr className="border border-defaultborder task-list">

            <td>
            <span className="font-semibold">2</span>
            </td>
            <td>
            <span className="font-semibold">Excellent</span>
            </td>
            <td>
            <span className="font-semibold">3000</span>
            </td>
            <td>
            <span className="font-semibold">19</span>
            </td>
            
            </tr>

 
 
 
           
 









            </tbody>
            </table>
            </div>
            </div>


                </div>




              </div>



              <div className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-farmdetails">
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-accordion-collapse-farmdetails" type="button">
                  Payment Details
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <div id="hs-accordion-collapse-farmdetails"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-accordion-heading-farmdetails">
                                
            <div className="box-body">
            <div className="table-responsive">
            <table className="table whitespace-nowrap table-bordered min-w-full">
            <thead>
            <tr>

            <th scope="col" className="text-start">S.No.</th>
            <th scope="col" className="text-start">Payment Date</th>
            <th scope="col" className="text-start">Payment Time</th>
            <th scope="col" className="text-start">Amount Paid</th>
            <th scope="col" className="text-start">Payment Mode</th> 
            <th scope="col" className="text-start">Transaction Ref</th> 
            <th scope="col" className="text-start">Comments</th> 
            <th scope="col" className="text-start">Action</th> 


            </tr>
            </thead>
            <tbody>
            <tr className="border border-defaultborder task-list">

            <td>
            <span className="font-semibold">1</span>
            </td>
            <td>
            <span className="font-semibold">Jan 09, 2024</span>
            </td>
            <td>
            <span className="font-semibold">11:30 AM</span>
            </td>
            <td>
            <span className="font-semibold">Rs.20,300</span>
            </td>
            <td>
            <span className="font-semibold">Cash</span>
            </td>
            <td>
            <span className="font-semibold">--------</span>
            </td>
            <td>
            <span className="font-semibold">Nil</span>
            </td>
            <td>
            <span className="font-semibold">Nil</span>
            </td>
            
            </tr>

            <tr className="border border-defaultborder task-list">

<td>
<span className="font-semibold">2</span>
</td>
<td>
<span className="font-semibold">Feb 09, 2024</span>
</td>
<td>
<span className="font-semibold">10:45 AM</span>
</td>
<td>
<span className="font-semibold">Rs.40,000</span>
</td>
<td>
<span className="font-semibold">UPI</span>
</td>
<td>
<span className="font-semibold">TRA56884469D790PTY</span>
</td>
<td>
<span className="font-semibold">Phone Pe Payment</span>
</td>
<td>
<span className="font-semibold">Nil</span>
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
<div className="ti-modal-footer">
<button type="button" className="hs-dropdown-toggle ti-btn ti-btn-light" data-hs-overlay="#view_packhousemanager">
Cancel
</button>

</div>
</div>
</div>
</div>
<div className="hs-dropdown ti-dropdown ms-2">
<button type="button" aria-label="button" className="ti-btn ti-btn-secondary ti-btn-sm" aria-expanded="false">
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
<div className="flex">

<div id="edit_packhousemanager" className="hs-overlay hidden ti-modal">
<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
<div className="ti-modal-content">
<div className="ti-modal-header">
<h6 className="modal-title" id="staticBackdropLabel2">Edit Pack House Manager Details
</h6>
<button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#edit_packhousemanager">
<span className="sr-only">Close</span>
<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
</svg>
</button>
</div>
<div className="ti-modal-body">
<div className="grid grid-cols-12 gap-2">

<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Manager id</label>
<input type="text" className="form-control" id="task-name" value="Manager id" />
</div>
<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">First name</label>
<input type="text" className="form-control" id="task-name" value="First name" />
</div>
<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Last name</label>
<input type="text" className="form-control" id="task-name" value="Last name" />
</div>
<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Gender</label>
<input type="text" className="form-control" id="task-name" value="Gender" />
</div>
<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Date of birth</label>
<input type="text" className="form-control" id="task-name" value="Date of birth" />
</div>
<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Mobile</label>
<input type="text" className="form-control" id="task-name" value="Mobile" />
</div>
<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Email</label>
<input type="text" className="form-control" id="task-name" value="Email" />
</div>
<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Upload profile photo</label>
<img src="../../../assets/images/phmanager/1.jpeg" alt="img" />
</div>
<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Identity proof</label>
<input type="text" className="form-control" id="task-name" value="Identity proof" />
</div>
<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Proof no.</label>
<input type="text" className="form-control" id="task-name" value="Proof no." />
</div>
<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Upload id proof</label>
<img src="../../../assets/images/idproofs/phmanager/1.jpeg" alt="img" />
</div>
<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">State</label>
<input type="text" className="form-control" id="task-name" value="State" />
</div>
<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">District</label>
<input type="text" className="form-control" id="task-name" value="District" />
</div>
<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Pincode</label>
<input type="text" className="form-control" id="task-name" value="Pincode" />
</div>






</div>
</div>
<div className="ti-modal-footer">
<button type="button" className="hs-dropdown-toggle ti-btn ti-btn-light" data-hs-overlay="#edit_packhousemanager">
Cancel
</button>
<Link className="ti-btn ti-btn-primary-full" href="#!">
Update
</Link>
</div>
</div>
</div>
</div>
<div className="hs-dropdown ti-dropdown ms-2">
<button type="button" aria-label="button" className="ti-btn ti-btn-secondary ti-btn-sm" aria-expanded="false">
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



<div className="flex">

<div id="make_paymentmodal" className="hs-overlay hidden ti-modal">
<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
<div className="ti-modal-content">
<div className="ti-modal-header">
<h6 className="modal-title" id="staticBackdropLabel2">Make GRN Payment
</h6>
<button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#make_paymentmodal">
<span className="sr-only">Close</span>
<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
</svg>
</button>
</div>
<div className="ti-modal-body">
<div className="hs-accordion-group">



<div className="hs-accordion active overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-0">
                
                
<button
  className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
  aria-controls="hs-accordion-collapse-producedetails" type="button">
  GRN Details
  <svg
    className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
  <svg
    className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
</button>



<div id="hs-accordion-collapse-producedetails"
  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
  aria-labelledby="hs-accordion-heading-0">
 
  <div className="grid grid-cols-12 gap-2">
                        
                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">GRN ID</label>
                        <input type="text" className="form-control" id="task-name" value="GRN24010001"/>
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Farmer ID</label>
                        <input type="text" className="form-control" id="task-name" value="BUINAP00013" />
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Farmer Name</label>
                        <input type="text" className="form-control" id="task-name" value="Raju Alla" />
                        </div>

                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Produce ID</label>
                        <input type="text" className="form-control" id="task-name" value="PRBUINA00086" />
                        </div>


                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Produce</label>
                        <input type="text" className="form-control" id="task-name" value="Tomato" />
                        </div>

                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Variety</label>
                        <input type="text" className="form-control" id="task-name" value="Tomato Hybrid" />
                        </div>

                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Quantity</label>
                        <input type="text" className="form-control" id="task-name" value="1000 kg" />
                        </div>


                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Total Amount Payable</label>
                        <input type="text" className="form-control" id="task-name" value="Rs.20,000" />
                        </div>


                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Amount Paid</label>
                        <input type="text" className="form-control" id="task-name" value="Rs.0" />
                        </div>


                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Balance Amount</label>
                        <input type="text" className="form-control" id="task-name" value="Rs.20,000" />
                        </div>




                        {/* 
                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Date of birth</label>
                        <input type="text" className="form-control" id="task-name" value="Date of birth" />
                        </div>
                        */}
                        
                         







  </div>


</div>




</div>




              
<div className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-farmerdetails">
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-accordion-collapse-farmerdetails" type="button">
                  Grade Details
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <div id="hs-accordion-collapse-farmerdetails"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-accordion-heading-farmerdetails">


                            
            <div className="box-body">
            <div className="table-responsive">
            <table className="table whitespace-nowrap table-bordered min-w-full">
            <thead>
            <tr>

            <th scope="col" className="text-start">S.No.</th>
            <th scope="col" className="text-start">Grade</th>
            <th scope="col" className="text-start">Quantity</th>
            <th scope="col" className="text-start">Price</th> 

            </tr>
            </thead>
            <tbody>
            <tr className="border border-defaultborder task-list">

            <td>
            <span className="font-semibold">1</span>
            </td>
            <td>
            <span className="font-semibold">Premium</span>
            </td>
            <td>
            <span className="font-semibold">3200</span>
            </td>
            <td>
            <span className="font-semibold">32</span>
            </td>
            
            </tr>


          <tr className="border border-defaultborder task-list">

            <td>
            <span className="font-semibold">2</span>
            </td>
            <td>
            <span className="font-semibold">Excellent</span>
            </td>
            <td>
            <span className="font-semibold">3000</span>
            </td>
            <td>
            <span className="font-semibold">19</span>
            </td>
            
            </tr>

 
 
 
           
 









            </tbody>
            </table>
            </div>
            </div>


                </div>




              </div>



              <div className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-farmdetails">
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-accordion-collapse-farmdetails" type="button">
                  Payment Details
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <div id="hs-accordion-collapse-farmdetails"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-accordion-heading-farmdetails">
                                
            <div className="box-body">
            <div className="table-responsive">
            <table className="table whitespace-nowrap table-bordered min-w-full">
            <thead>
            <tr>

            <th scope="col" className="text-start">S.No.</th>
            <th scope="col" className="text-start">Payment Date</th>
            <th scope="col" className="text-start">Payment Time</th>
            <th scope="col" className="text-start">Amount Paid</th>
            <th scope="col" className="text-start">Payment Mode</th> 
            <th scope="col" className="text-start">Transaction Ref</th> 
            <th scope="col" className="text-start">Comments</th> 
            <th scope="col" className="text-start">Action</th> 


            </tr>
            </thead>
            <tbody>
            <tr className="border border-defaultborder task-list">

            <td>
            <span className="font-semibold">1</span>
            </td>
            <td>
            <span className="font-semibold">Jan 09, 2024</span>
            </td>
            <td>
            <span className="font-semibold">11:30 AM</span>
            </td>
            <td>
            <span className="font-semibold">Rs.20,300</span>
            </td>
            <td>
            <span className="font-semibold">Cash</span>
            </td>
            <td>
            <span className="font-semibold">--------</span>
            </td>
            <td>
            <span className="font-semibold">Nil</span>
            </td>
            <td>
            <span className="font-semibold">Nil</span>
            </td>
            
            </tr>

            <tr className="border border-defaultborder task-list">

<td>
<span className="font-semibold">2</span>
</td>
<td>
<span className="font-semibold">Feb 09, 2024</span>
</td>
<td>
<span className="font-semibold">10:45 AM</span>
</td>
<td>
<span className="font-semibold">Rs.40,000</span>
</td>
<td>
<span className="font-semibold">UPI</span>
</td>
<td>
<span className="font-semibold">TRA56884469D790PTY</span>
</td>
<td>
<span className="font-semibold">Phone Pe Payment</span>
</td>
<td>
<span className="font-semibold">Nil</span>
</td>

</tr>



        
 
 
           
 









            </tbody>
            </table>
            </div>
            </div>



                </div>
              </div>


              <div className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-makepaymentdetails">
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-accordion-collapse-makepaymentdetails" type="button">
                  Make Payment
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <div id="hs-accordion-collapse-farmdetails"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-accordion-heading-makepaymentdetails">
                                
           

                                <div className="grid grid-cols-12 gap-2">

                                <div className="xl:col-span-6 col-span-12">
                                                                                                   
                                                                                                   <label htmlFor="task-name" className="form-label">Select Mode of Payment </label>
                                                                                                    <Select classNamePrefix='Select2' className="ti-form-select rounded-sm !p-0" multi options={paymentModeSelectOptions} />
                                                                                                                                            
                                                                                                 </div>
                        
                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Payment Amount </label>
                        <input type="text" className="form-control" id="task-name" placeholder="Enter Payment Amount"/>
                        </div>

                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Enter Transaction ID</label>
                        <input type="text" className="form-control" id="task-name" placeholder="Enter Transaction ID" />
                        </div>

                        
                                                                

                        </div>
                        <div className="flex justify-center">
                       
                                    <input type="submit" className="ti-btn ti-btn-primary-full"   id="task-name" value="Submit" />
                        </div> 

                </div>
              </div>






            </div>






















</div>
<div className="ti-modal-footer">
<button type="button" className="hs-dropdown-toggle ti-btn ti-btn-light" data-hs-overlay="#make_paymentmodal">
Cancel
</button>

</div>
</div>
</div>
</div>
<div className="hs-dropdown ti-dropdown ms-2">
<button type="button" aria-label="button" className="ti-btn ti-btn-secondary ti-btn-sm" aria-expanded="false">
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


{/* final code ends*/}



{/* add code starts */ }
<div id="add_pricing" className="hs-overlay hidden ti-modal">
<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
<div className="ti-modal-content">
<div className="ti-modal-header">
<h6 className="modal-title" id="staticBackdropLabel2">Price List Details
</h6>
<button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#add_pricing ">
<span className="sr-only">Close</span>
<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
</svg>
</button>
</div>
<div className="ti-modal-body">
<div className="grid grid-cols-12 gap-2">

<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Price List Id</label>
<input type="text" className="form-control" id="task-name" placeholder="Enter Price List Id" />
</div>


<div className="xl:col-span-6 col-span-12">
                                                                                                   
<label htmlFor="task-name" className="form-label">Select State</label>
<Select classNamePrefix='Select2' className="ti-form-select rounded-sm !p-0" multi options={SelectState} />
                                            
</div>


<div className="xl:col-span-6 col-span-12">
                                                                                                   
<label htmlFor="task-name" className="form-label">Select Produce</label>
<Select classNamePrefix='Select2' className="ti-form-select rounded-sm !p-0" multi options={SelectProduce} />
                                            
</div>





<div className="xl:col-span-6 col-span-12">
                                                                                                   
<label htmlFor="task-name" className="form-label">Select Variety</label>
<Select classNamePrefix='Select2' className="ti-form-select rounded-sm !p-0" multi options={SelectVariety} />
                                            
</div>




<div className="xl:col-span-6 col-span-12">
                                                                                                   
<label htmlFor="task-name" className="form-label">Select Grade</label>
<Select classNamePrefix='Select2' className="ti-form-select rounded-sm !p-0" multi options={SelectGrade} />
                                            
</div>


<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Price Per Unit</label>
<input type="text" className="form-control" id="task-name" placeholder="Enter Price Unit " />
</div>




<div className="xl:col-span-6 col-span-12">
<label className="form-label">Date Of Birth</label>
<div className="form-group">
    <div className="input-group !flex-nowrap">
        <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
        <DatePicker
    selected={dateofBirth}
    onChange={handleDateChange}
    dateFormat="yy/MM/dd"
    placeholderText='Choose date'
    showTimeInput
   />
    </div>
</div>
</div>



</div>
</div>
<div className="ti-modal-footer">
<button type="button" className="hs-dropdown-toggle ti-btn ti-btn-light" data-hs-overlay="#add_pricing ">
Cancel
</button>
<Link className="ti-btn ti-btn-primary-full" href="#!">
Submit
</Link>
</div>
</div>
</div>
</div>
{/* add code ends */ }






{/* view and edit code starts */}
 




<div className="flex">

<div id="view_pricing" className="hs-overlay hidden ti-modal">
<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
<div className="ti-modal-content">
<div className="ti-modal-header">
<h6 className="modal-title" id="staticBackdropLabel2">View Price List
</h6>
<button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#view_pricing">
<span className="sr-only">Close</span>
<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
</svg>
</button>
</div>
<div className="ti-modal-body">
<div className="grid grid-cols-12 gap-2">

<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">S.NO</label>
<input type="text" className="form-control" id="task-name" value="S.NO" />
</div>
<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">State</label>
<input type="text" className="form-control" id="task-name" value="State" />
</div>
<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Produce</label>
<input type="text" className="form-control" id="task-name" value="Produce" />
</div>
<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Variety</label>
<input type="text" className="form-control" id="task-name" value="Variety" />
</div>
<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Grade</label>
<input type="text" className="form-control" id="task-name" value="Grade" />
</div>
<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Price Per Unit</label>
<input type="text" className="form-control" id="task-name" value="Price Per Unit" />
</div>
<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Date</label>
<input type="text" className="form-control" id="task-name" value="26/03/2024" />
</div>





<div className="xl:col-span-6 col-span-12">
                                                        <label className="form-label"></label>
                                                        <div className="form-group">
                                                            <div className="input-group !flex-nowrap">
                                                                <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                                                <DatePicker
                                                            selected={startDate}
                                                            onChange={handleDateChange}
                                                           
                                                            dateFormat="yy/MM/dd"
                                                            placeholderText='Choose date'
                                                           
                                                        />
                                                            </div>
                                                        </div>
                                                    </div>







</div>
</div>
<div className="ti-modal-footer">
<button type="button" className="hs-dropdown-toggle ti-btn ti-btn-light" data-hs-overlay="#view_pricing">
Cancel
</button>

</div>
</div>
</div>
</div>
<div className="hs-dropdown ti-dropdown ms-2">
<button type="button" aria-label="button" className="ti-btn ti-btn-secondary ti-btn-sm" aria-expanded="false">
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

 



 

<div className="flex">

<div id="edit_pricing" className="hs-overlay hidden ti-modal">
<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
<div className="ti-modal-content">
<div className="ti-modal-header">
<h6 className="modal-title" id="staticBackdropLabel2">Edit  Price List
</h6>
<button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#edit_pricing">
<span className="sr-only">Close</span>
<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
</svg>
</button>
</div>
<div className="ti-modal-body">
<div className="grid grid-cols-12 gap-2">

<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">S.No</label>
<input type="text" className="form-control" id="task-name" value="S.No" />
</div>
<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">State</label>
<input type="text" className="form-control" id="task-name" value="State" />
</div>
<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Produce</label>
<input type="text" className="form-control" id="task-name" value="Produce" />
</div>
<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Variety</label>
<input type="text" className="form-control" id="task-name" value="Variety" />
</div>
<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Grade</label>
<input type="text" className="form-control" id="task-name" value="Grade" />
</div>
<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Price List</label>
<input type="text" className="form-control" id="task-name" value="Price List" />
</div>



                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label className="form-label">Date </label>
                                                        <div className="form-group">
                                                            <div className="input-group !flex-nowrap">
                                                                <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                                                <DatePicker
                                                            selected={startDate}
                                                            onChange={handleDateChange}
                                                            value="26/03/2024"
                                                            dateFormat="yy/MM/dd"
                                                            placeholderText='Choose date'
                                                           
                                                        />
                                                            </div>
                                                        </div>
                                                    </div>








</div>
</div>
<div className="ti-modal-footer">
<button type="button" className="hs-dropdown-toggle ti-btn ti-btn-light" data-hs-overlay="#edit_pricing">
Cancel
</button>
<Link className="ti-btn ti-btn-primary-full" href="#!">
Update
</Link>
</div>
</div>
</div>
</div>
<div className="hs-dropdown ti-dropdown ms-2">
<button type="button" aria-label="button" className="ti-btn ti-btn-secondary ti-btn-sm" aria-expanded="false">
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



 

{/* view and edit code ends */}

    </Fragment>
  )
}

Produce.layout = "Contentlayout";
export default Produce;