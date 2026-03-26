 
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

import { FinancialChartOverview  } from '@/shared/data/dashboards/salesdata'
  


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



  return (
    <Fragment>
      <Seo title={"Admin Enroll Farmer"} />


     {/*  <div>Praise be to GOD ! Hallelujah !</div>*/}
     <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Financials Overview
                            </div>
                            <div className="hs-dropdown ti-dropdown">
                      <Link href="#!" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                        aria-expanded="false">
                          All Pack Houses<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                      </Link>
                      <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="#!">Pack House 1</Link></li>
                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="#!">Pack House 2</Link></li>
                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="#!">Pack House 3</Link></li>
                      </ul>
                    </div>
                            <div className="hs-dropdown ti-dropdown">
                                <Link aria-label="anchor" href="#!"
                                    className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !!text-defaulttextcolortextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                                    aria-expanded="false"><i
                                        className="fe fe-more-vertical text-[0.8rem]"></i>
                                </Link>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Last Week</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Last Month</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Last Financial Year</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="box-body">
                            <div id="salesOverview">
                                <FinancialChartOverview />
                            </div>
                        </div>
                    </div>

    </Fragment>
  )
}

Produce.layout = "Contentlayout";
export default Produce;