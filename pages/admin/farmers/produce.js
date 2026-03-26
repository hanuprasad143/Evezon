 
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


const farmeridSelectOptions = [
  { value: "FAINAPCH0538", label: "FAINAPCH0538" },
  { value: "FAINAPCH0650", label: "FAINAPCH0650" },
  { value: "FAINAPCH0710", label: "FAINAPCH0710" } 
];

const produceSelectOptions = [
  { value: "Tomato", label: "Tomato" },
  { value: "Banana", label: "Banana" },
  { value: "Brinjal", label: "Brinjal" } 
];

const varietySelectOptions = [
  { value: "Tomato Hybrid", label: "Tomato Hybrid" },
  { value: "Tomato Local", label: "Tomato Local" },

];


const fieldofficerSelectOptions = [
  { value: "Pushpa Raj", label: "Pushpa Raj" },
  { value: "Charan Kumar", label: "Charan Kumar" },
  { value: "Ramesh", label: "Ramesh" },

];


const [plantingDate, setPlantingDate] = useState(new Date());
const handleplantingdateChange = (date) => {
  // Ensure date is defined before setting it
  if (date) {
      setPlantingDate(date);
  }
};

const [harvestDate, setHarvestDate] = useState(new Date());
const handleharvestingdateChange = (date) => {
  // Ensure date is defined before setting it
  if (date) {
      setHarvestDate(date);
  }
};



  return (
    <Fragment>
      <Seo title={"Admin Enroll Farmer"} />


     {/*  <div>Praise be to GOD ! Hallelujah !</div>*/}

      <div className="flex justify-center mt-10">
              
      <div className="box">
                <div className="box-header justify-between">
                  <div className="box-title">
                    Produce Record
                  </div>
                  <div className="hs-dropdown ti-dropdown">
                      <Link href="#!" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                        aria-expanded="false">
                          Select District<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                      </Link>
                      <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="#!">Chittoor</Link></li>
                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="#!">Anantapur</Link></li>
                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                          href="#!">Visakhapatnam</Link></li>
                      </ul>
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
                    <SourcedataProduceID />
                    <div className="lead-source-value ">
                      <span className="block text-[0.875rem] ">Total</span>
                      <span className="block text-[1.5625rem] font-bold">88</span>
                    </div>
                  </div>
                </div>


                <div className="grid grid-cols-4 border-t border-dashed dark:border-defaultborder/10">
                  
              
                  
                  <div className="col !p-0">
                    <div className="!ps-4 p-[0.95rem] text-center border-e border-dashed dark:border-defaultborder/10">
                      <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend mobile inline-block">Approved
                      </span>
                      <div><span className="text-[1rem]  font-semibold">55</span>
                      </div>
                    </div>
                  </div>
               
                  <div className="col !p-0">
                    <div className="p-[0.95rem] text-center border-e border-dashed dark:border-defaultborder/10">
                      <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend desktop inline-block">Pending
                      </span>
                      <div><span className="text-[1rem]  font-semibold">5</span></div>
                    </div>
                  </div>

                  <div className="col !p-0">
                    <div className="p-[0.95rem] text-center border-e border-dashed dark:border-defaultborder/10">
                      <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend laptop inline-block">On-Hold
                      </span>
                      <div><span className="text-[1rem]  font-semibold">25</span>
                      </div>
                    </div>
                  </div>
               
                  <div className="col !p-0">
                    <div className="!pe-4 p-[0.95rem] text-center">
                      <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 crm-lead-legend tablet inline-block">Rejected
                      </span>
                      <div><span className="text-[1rem]  font-semibold">3</span></div>
                    </div>
                  </div>

                </div>
              </div>

              </div>
              


{/* tab code starts */}
<div className="grid grid-cols-12 gap-x-6">
<div className="xxl:col-span-12 xl:col-span-12 md:col-span-12 col-span-12">
    <div className="box">
        <div className="box-header sm:flex block">
            <div className="box-title">Produce</div>
            <div className="tab-menu-heading border-0 p-0 ms-auto sm:mt-0 mt-2">
                <div className="tabs-menu-task me-3">
                    <nav className="" aria-label="Tabs">
                        <Link href="#!" className="hs-tab-active:bg-secondary/10 hs-tab-active:text-secondary cursor-pointer text-defaulttextcolor px-2 py-2 flex-grow  text-[0.75rem] font-medium text-center rounded-md hover:text-secondary active" id="active-item" data-hs-tab="#Active" aria-controls="Active">
                            Approval Requests
                        </Link>
                        <Link href="#!" className="hs-tab-active:bg-secondary/10 hs-tab-active:text-secondary cursor-pointer text-defaulttextcolor px-2 py-2 text-[0.75rem] flex-grow font-medium text-center  rounded-md hover:text-secondary " id="Complete-item" data-hs-tab="#Complete" aria-controls="Complete">
                            Produce List
                        </Link>
                    </nav>
                </div>
            </div>
         
        </div>
        <div className="box-body !p-0">
            <div className="tab-content !p-0">

                
               <div className="tab-pane show active !p-0 !border-0" id="Active" aria-labelledby="active-item" role="tabpanel">
            <div className="table-responsive">
                <table className="table whitespace-nowrap table-hover min-w-full">
        <thead>	
            <tr>
            <th scope="col" className="text-start">S.No.</th>
            <th scope="col" className="text-start">Farmer ID</th>
                <th scope="col" className="text-start">Farmer Name</th>
                <th scope="col" className="text-start">Produce</th>
                <th scope="col" className="text-start">Variety</th>
                <th scope="col" className="text-start">Quantity</th>
                <th scope="col" className="text-start">Planting Date</th>
                <th scope="col" className="text-start">Harvesting Date</th>
                <th scope="col" className="text-start">Location</th>
                <th scope="col" className="text-start">Field Officer Name</th>
                <th scope="col" className="text-start">Status</th>
                <th scope="col" className="text-start">View</th>
                
            </tr>
        </thead>
        <tbody>
            <tr className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10">
                <td>1.</td>
                <td>FAINAPCH1016</td>
                <td className="text-[#8c9097] dark:text-white/50">M.Dileep Kumar</td>
                <td className="text-[#8c9097] dark:text-white/50">Tomato</td>
                <td className="text-[#8c9097] dark:text-white/50">Tomato Hybrid</td>
                <td className="text-[#8c9097] dark:text-white/50">1000 Kg</td>
                <td className="text-[#8c9097] dark:text-white/50">19-03-2024</td>
                <td className="text-[#8c9097] dark:text-white/50">19-09-2024</td>
                <td className="text-[#8c9097] dark:text-white/50">Chittoor</td>
                <td className="text-[#8c9097] dark:text-white/50">M.Arun Kumar</td>
                <td><span className="badge bg-primary text-white">On-Hold</span></td>
                <td>
<div className="hs-tooltip ti-main-tooltip">
<button type="button" className="hs-tooltip-toggle ti-btn ti-btn-secondary ti-btn-sm" data-hs-overlay="#view_packhousemanager">
<i className="ri-eye-fill"></i>
<span
className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
role="tooltip">
View
</span>
</button>
</div>


</td>







            </tr>


            <tr className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10">
                <td>2.</td>
                <td>FAINAPCH1017</td>
                <td className="text-[#8c9097] dark:text-white/50">N.Raj Kumar</td>
                <td className="text-[#8c9097] dark:text-white/50">Tomato</td>
                <td className="text-[#8c9097] dark:text-white/50">Tomato Hybrid</td>
                <td className="text-[#8c9097] dark:text-white/50">1500 Kg</td>
                <td className="text-[#8c9097] dark:text-white/50">15-03-2024</td>
                <td className="text-[#8c9097] dark:text-white/50">15-09-2024</td>
                <td className="text-[#8c9097] dark:text-white/50">Chittoor</td>
                <td className="text-[#8c9097] dark:text-white/50">M.Arun Kumar</td>
                <td><span className="badge bg-primary text-white">On-Hold</span></td>
                <td>
<div className="hs-tooltip ti-main-tooltip">
<button type="button" className="hs-tooltip-toggle ti-btn ti-btn-secondary ti-btn-sm" data-hs-overlay="#view_packhousemanager">
<i className="ri-eye-fill"></i>
<span
className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
role="tooltip">
View
</span>
</button>
</div>


</td>






            </tr>
            <tr className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10">
                <td>3.</td>
                <td>FAINAPCH1018</td>
                <td className="text-[#8c9097] dark:text-white/50">K.Rajesh</td>
                <td className="text-[#8c9097] dark:text-white/50">Tomato</td>
                <td className="text-[#8c9097] dark:text-white/50">Tomato Local</td>
                <td className="text-[#8c9097] dark:text-white/50">3000 Kg</td>
                <td className="text-[#8c9097] dark:text-white/50">09-02-2024</td>
                <td className="text-[#8c9097] dark:text-white/50">09-09-2024</td>
                <td className="text-[#8c9097] dark:text-white/50">Visakhapatnam</td>
                <td className="text-[#8c9097] dark:text-white/50">M.Benny Paul</td>
                <td><span className="badge bg-primary text-white">On-Hold</span></td>
                <td>
<div className="hs-tooltip ti-main-tooltip">
<button type="button" className="hs-tooltip-toggle ti-btn ti-btn-secondary ti-btn-sm" data-hs-overlay="#view_packhousemanager">
<i className="ri-eye-fill"></i>
<span
className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
role="tooltip">
View
</span>
</button>
</div>


</td>






            </tr>   



            <tr className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10">
                <td>4.</td>
                <td>FAINAPCH1019</td>
                <td className="text-[#8c9097] dark:text-white/50">P.Charan Kumar</td>
                <td className="text-[#8c9097] dark:text-white/50">Tomato</td>
                <td className="text-[#8c9097] dark:text-white/50">Tomato Hybrid</td>
                <td className="text-[#8c9097] dark:text-white/50">1000 Kg</td>
                <td className="text-[#8c9097] dark:text-white/50">13-03-2024</td>
                <td className="text-[#8c9097] dark:text-white/50">13-09-2024</td>
                <td className="text-[#8c9097] dark:text-white/50">Kurnool</td>
                <td className="text-[#8c9097] dark:text-white/50">M.Pushpa Raj</td>
                <td><span className="badge bg-primary text-white">On-Hold</span></td>
                <td>
<div className="hs-tooltip ti-main-tooltip">
<button type="button" className="hs-tooltip-toggle ti-btn ti-btn-secondary ti-btn-sm" data-hs-overlay="#view_packhousemanager">
<i className="ri-eye-fill"></i>
<span
className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
role="tooltip">
View
</span>
</button>
</div>


</td>







            </tr>





            <tr className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10">
                <td>5.</td>
                <td>FAINAPCH1020</td>
                <td className="text-[#8c9097] dark:text-white/50">M.Vijay Babu</td>
                <td className="text-[#8c9097] dark:text-white/50">Tomato</td>
                <td className="text-[#8c9097] dark:text-white/50">Tomato Local</td>
                <td className="text-[#8c9097] dark:text-white/50">5000 Kg</td>
                <td className="text-[#8c9097] dark:text-white/50">19-03-2024</td>
                <td className="text-[#8c9097] dark:text-white/50">19-10-2024</td>
                <td className="text-[#8c9097] dark:text-white/50">Kurnool</td>
                <td className="text-[#8c9097] dark:text-white/50">M.Pushpa Raj</td>
                <td><span className="badge bg-primary text-white">On-Hold</span></td>
                <td>
<div className="hs-tooltip ti-main-tooltip">
<button type="button" className="hs-tooltip-toggle ti-btn ti-btn-secondary ti-btn-sm" data-hs-overlay="#view_packhousemanager">
<i className="ri-eye-fill"></i>
<span
className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
role="tooltip">
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

                <div className="tab-pane !p-0 hidden !border-0" id="Complete" aria-labelledby="complete-item" role="tabpanel">
                    

                    <div className="box">
<div className="box-header justify-between">
<div className="box-title">
Produce list
</div>
<div className="flex">
<button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem]" data-hs-overlay="#packhousemanager">
<i className="ri-add-line font-semibold align-middle"></i> New Produce
</button>
<div id="packhousemanager" className="hs-overlay hidden ti-modal">
<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
<div className="ti-modal-content">
<div className="ti-modal-header">
      <h6 className="modal-title" id="staticBackdropLabel2">Produce Details
      </h6>
      <button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#packhousemanager">
      <span className="sr-only">Close</span>
      <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
      </svg>
      </button>
</div>


<div className="ti-modal-body">
      <div className="grid grid-cols-12 gap-2">

      


      <div className="xl:col-span-6 col-span-12">

<label htmlFor="task-name" className="form-label">Select Farmer ID</label>
<Select classNamePrefix='Select2' className="ti-form-select rounded-sm !p-0" multi options={farmeridSelectOptions} />

</div>


<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Farmer name</label>
<input type="text" className="form-control" id="task-name" placeholder="Enter Farmer name" />
</div>



<div className="xl:col-span-6 col-span-12">

<label htmlFor="task-name" className="form-label">Select Produce</label>
<Select classNamePrefix='Select2' className="ti-form-select rounded-sm !p-0" multi options={produceSelectOptions} />

</div>


<div className="xl:col-span-6 col-span-12">

<label htmlFor="task-name" className="form-label">Select Variety</label>
<Select classNamePrefix='Select2' className="ti-form-select rounded-sm !p-0" multi options={varietySelectOptions} />

</div>

<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Quantity</label>
<input type="text" className="form-control" id="task-name" placeholder="Enter Quantity in KG" />
</div>





<div className="xl:col-span-6 col-span-12">
<label className="form-label">Select Planting Date</label>
<div className="form-group">
<div className="input-group !flex-nowrap">
<div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
<DatePicker
selected={plantingDate}
onChange={handleplantingdateChange}

dateFormat="yy/MM/dd"
placeholderText='Choose Date'

/>
</div>
</div>
</div>





<div className="xl:col-span-6 col-span-12">
<label className="form-label">Select Harvesting Date</label>
<div className="form-group">
<div className="input-group !flex-nowrap">
<div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
<DatePicker
selected={harvestDate}
onChange={handleharvestingdateChange}

dateFormat="yy/MM/dd"
placeholderText='Choose Date'

/>
</div>
</div>
</div>


<div className="xl:col-span-6 col-span-12">

<label htmlFor="task-name" className="form-label">Select Field Officer</label>
<Select classNamePrefix='Select2' className="ti-form-select rounded-sm !p-0" multi options={fieldofficerSelectOptions} />

</div>






 





 




      </div>
</div>



<div className="ti-modal-footer">
<button type="button" className="hs-dropdown-toggle ti-btn ti-btn-light" data-hs-overlay="#packhousemanager">
Cancel
</button>
<Link className="ti-btn ti-btn-primary-full" href="#!">
Submit
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
</div>
<div className="box-body">
<div className="table-responsive">
<table className="table whitespace-nowrap table-bordered min-w-full">
<thead>
<tr>

<th scope="col" className="text-start">S.No.</th>
<th scope="col" className="text-start">Produce ID</th>
<th scope="col" className="text-start">Farmer ID</th>
<th scope="col" className="text-start">Farmer name</th>
<th scope="col" className="text-start">Produce</th>
<th scope="col" className="text-start">Variety</th>
<th scope="col" className="text-start">Quantity</th>
<th scope="col" className="text-start">Planting Date</th>
<th scope="col" className="text-start">Harvesting Date</th>
<th scope="col" className="text-start">District</th>
<th scope="col" className="text-start">Field Officer</th>
<th scope="col" className="text-start">Status</th>
<th scope="col" className="text-start">View</th>
<th scope="col" className="text-start">Track</th>
 
</tr>
</thead>

<tbody>
<tr className="border border-defaultborder task-list">

<td>
<span className="font-semibold">1</span>
</td>
<td>
<span className="font-semibold">PRFAINAPCH0001</span>
</td>
<td>
<span className="font-semibold">FAINAPCH1016</span>
</td>
<td>
<span className="font-semibold">Raju Alla</span>
</td>
<td>
<span className="font-semibold">Tomato</span>
</td>
<td>
<span className="font-semibold">Tomato Hybrid</span>
</td>
<td>
<span className="font-semibold">1000 kg</span>
</td>
<td>
<span className="font-semibold">20-03-2024</span>
</td>
<td>
<span className="font-semibold">20-08-2024</span>
</td>
<td>
<span className="font-semibold">Chittoor</span>
</td>
<td>
<span className="font-semibold">M.Pushpa Raj</span>
</td>
<td><span className="badge bg-success text-white">Approved</span></td>
         

<td>
<div className="hs-tooltip ti-main-tooltip">
<button type="button" className="hs-tooltip-toggle ti-btn ti-btn-secondary ti-btn-sm" data-hs-overlay="#view_packhousemanager">
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
<button type="button" className="hs-tooltip-toggle ti-btn ti-btn-secondary ti-btn-sm" data-hs-overlay="#view_trackingmodal">
<i className="ri-navigation-fill"></i>
<span
className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
role="tooltip">
Track
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
<span className="font-semibold">PRFAINAPCH0002</span>
</td>
<td>
<span className="font-semibold">FAINAPCH1016</span>
</td>
<td>
<span className="font-semibold">Raju Alla</span>
</td>
<td>
<span className="font-semibold">Tomato</span>
</td>
<td>
<span className="font-semibold">Tomato Local</span>
</td>
<td>
<span className="font-semibold">2000 kg</span>
</td>
<td>
<span className="font-semibold">24-03-2024</span>
</td>
<td>
<span className="font-semibold">24-08-2024</span>
</td>
<td>
<span className="font-semibold">Chittoor</span>
</td>
<td>
<span className="font-semibold">M.Pushpa Raj</span>
</td>
<td><span className="badge bg-success text-white">Approved</span></td>

<td>
<div className="hs-tooltip ti-main-tooltip">
<button type="button" className="hs-tooltip-toggle ti-btn ti-btn-secondary ti-btn-sm" data-hs-overlay="#view_packhousemanager">
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
<button type="button" className="hs-tooltip-toggle ti-btn ti-btn-secondary ti-btn-sm" data-hs-overlay="#view_trackingmodal">
<i className="ri-navigation-fill"></i>
<span
className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
role="tooltip">
Track
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
<span className="font-semibold">PRFAINAPCH0003</span>
</td>
<td>
<span className="font-semibold">FAINAPCH1017</span>
</td>
<td>
<span className="font-semibold">Abhinav Nunna</span>
</td>
<td>
<span className="font-semibold">Tomato</span>
</td>
<td>
<span className="font-semibold">Tomato Hybrid</span>
</td>
<td>
<span className="font-semibold">1700 kg</span>
</td>
<td>
<span className="font-semibold">28-03-2024</span>
</td>
<td>
<span className="font-semibold">28-09-2024</span>
</td>
<td>
<span className="font-semibold">Kurnool</span>
</td>
<td>
<span className="font-semibold">P.Charan Kumar</span>
</td>
<td><span className="badge bg-primary text-white">Pending</span></td>

<td>
<div className="hs-tooltip ti-main-tooltip">
<button type="button" className="hs-tooltip-toggle ti-btn ti-btn-secondary ti-btn-sm" data-hs-overlay="#view_packhousemanager">
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
<button type="button" className="hs-tooltip-toggle ti-btn ti-btn-secondary ti-btn-sm" data-hs-overlay="#view_trackingmodal">
<i className="ri-navigation-fill"></i>
<span
className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
role="tooltip">
Track
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
<span className="font-semibold">PRFAINAPCH0004</span>
</td>
<td>
<span className="font-semibold">FAINAPCH1019</span>
</td>
<td>
<span className="font-semibold">Naresh Kumar</span>
</td>
<td>
<span className="font-semibold">Tomato</span>
</td>
<td>
<span className="font-semibold">Tomato Local</span>
</td>
<td>
<span className="font-semibold">5000 kg</span>
</td>
<td>
<span className="font-semibold">12-02-2024</span>
</td>
<td>
<span className="font-semibold">12-09-2024</span>
</td>
<td>
<span className="font-semibold">Visakhapatnam</span>
</td>
<td>
<span className="font-semibold">M.Raju</span>
</td>
<td><span className="badge bg-secondary text-white">On-Hold</span></td>

<td>
<div className="hs-tooltip ti-main-tooltip">
<button type="button" className="hs-tooltip-toggle ti-btn ti-btn-secondary ti-btn-sm" data-hs-overlay="#view_packhousemanager">
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
<button type="button" className="hs-tooltip-toggle ti-btn ti-btn-secondary ti-btn-sm" data-hs-overlay="#view_trackingmodal">
<i className="ri-navigation-fill"></i>
<span
className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
role="tooltip">
Track
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
<span className="font-semibold">PRFAINAPCH0005</span>
</td>
<td>
<span className="font-semibold">FAINAPCH1020</span>
</td>
<td>
<span className="font-semibold">Guna Shekar</span>
</td>
<td>
<span className="font-semibold">Tomato</span>
</td>
<td>
<span className="font-semibold">Tomato Local</span>
</td>
<td>
<span className="font-semibold">10000 kg</span>
</td>
<td>
<span className="font-semibold">20-03-2024</span>
</td>
<td>
<span className="font-semibold">20-08-2024</span>
</td>
<td>
<span className="font-semibold">Chittoor</span>
</td>
<td>
<span className="font-semibold">M.Pushpa Raj</span>
</td>
<td><span className="badge bg-success text-white">Approved</span></td>
 
<td>
<div className="hs-tooltip ti-main-tooltip">
<button type="button" className="hs-tooltip-toggle ti-btn ti-btn-secondary ti-btn-sm" data-hs-overlay="#view_packhousemanager">
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
<button type="button" className="hs-tooltip-toggle ti-btn ti-btn-secondary ti-btn-sm" data-hs-overlay="#view_trackingmodal">
<i className="ri-navigation-fill"></i>
<span
className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
role="tooltip">
Track
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
</div>
 
</div>

{/* tab code ends*/}

{/* final cde starts */}


<div className="flex">

<div id="view_packhousemanager" className="hs-overlay hidden ti-modal">
<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
<div className="ti-modal-content">
<div className="ti-modal-header">
<h6 className="modal-title" id="staticBackdropLabel2">View Produce Details
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
  Produce Details
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
                        <label htmlFor="task-name" className="form-label">Produce</label>
                        <input type="text" className="form-control" id="task-name" value="Tomato"/>
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Variety</label>
                        <input type="text" className="form-control" id="task-name" value="Tomato Hybrid" />
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Quantity</label>
                        <input type="text" className="form-control" id="task-name" value="1000kg" />
                        </div>
                        {/* 
                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Date of birth</label>
                        <input type="text" className="form-control" id="task-name" value="Date of birth" />
                        </div>
                        */}
                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Planting Date</label>
                        <input type="date" className="form-control" id="task-name" value="2024-03-19" />
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                        <label htmlFor="task-name" className="form-label">Harvesting Date</label>
                        <input type="date" className="form-control" id="task-name" value="2024-06-19" />
                        </div>

                         







  </div>


</div>




</div>




              
<div className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-farmerdetails">
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-accordion-collapse-farmerdetails" type="button">
                  Farmer Details
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


                  <div className="grid grid-cols-12 gap-2">
                                        
                                        <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="task-name" className="form-label">First name</label>
                                        <input type="text" className="form-control" id="task-name" value="J.Bhaskar"/>
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="task-name" className="form-label">Last name</label>
                                        <input type="text" className="form-control" id="task-name" value="Rao" />
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="task-name" className="form-label">Gender</label>
                                        <input type="text" className="form-control" id="task-name" value="Male" />
                                        </div>
                                        {/* 
                                        <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="task-name" className="form-label">Date of birth</label>
                                        <input type="text" className="form-control" id="task-name" value="Date of birth" />
                                        </div>
                                        */}
                                        <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="task-name" className="form-label">Mobile</label>
                                        <input type="text" className="form-control" id="task-name" value="987451645" />
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="task-name" className="form-label">Email</label>
                                        <input type="text" className="form-control" id="task-name" value="bhaskarj@gmail.com" />
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="task-name" className="form-label">Farmer's Photo</label>
                                        <img src="../../../assets/images/phmanager/3.jpeg" alt="img" />
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="task-name" className="form-label">Identity proof</label>
                                        <input type="text" className="form-control" id="task-name" value="Aadhar Card" />
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="task-name" className="form-label">Proof no.</label>
                                        <input type="text" className="form-control" id="task-name" value="655841250123" />
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="task-name" className="form-label">ID Proof Photo</label>
                                        <img src="../../../assets/images/idproofs/phmanager/1.jpeg" alt="img" />
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="task-name" className="form-label">State</label>
                                        <input type="text" className="form-control" id="task-name" value="Andhra Pradesh" />
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="task-name" className="form-label">District</label>
                                        <input type="text" className="form-control" id="task-name" value="Chittoor" />
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="task-name" className="form-label">Pincode</label>
                                        <input type="text" className="form-control" id="task-name" value="530002" />
                                        </div>


                                       



                  </div>


                </div>




              </div>



              <div className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-farmdetails">
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-accordion-collapse-farmdetails" type="button">
                  Farm Details
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
                <div className="grid grid-cols-12 gap-2">
 
                                    <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="task-name" className="form-label">GPS Latitude</label>
                                    <input type="text" className="form-control" id="task-name" value="16.235649"/>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="task-name" className="form-label">GPS Longitude</label>
                                    <input type="text" className="form-control" id="task-name" value="72.365466"/>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="task-name" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="task-name" value="No.9-11, Kothuru Village,Diguvamasapalle Post" />
                                    </div>
                                    
                                    <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="task-name" className="form-label">District</label>
                                    <input type="text" className="form-control" id="task-name" value="Chittoor" />
                                    </div>


                                    <div className="xl:col-span-6 col-span-12 ">
                                    <label htmlFor="task-name" className="form-label">State</label>
                                    <input type="text" className="form-control" id="task-name" value="Andhra Pradesh" />
                                    </div>

                                    
                                    <div className="col-span-12 mt-65 ">
                                   
                                      <div className="box overflow-hidden">
                                      <label htmlFor="task-name" className="form-label">Map</label>
                                              <div className="box-body mt-15">
                                              <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d485.48876149417976!2d79.08962724137515!3d13.230958689861383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bad5fab4d636043%3A0x26765ca9b76e90b8!2s63JQ%2B9X3%2C%20Santhapet%2C%20Chittoor%2C%20Andhra%20Pradesh%20517004!3m2!1d13.2308775!2d79.0899245!5e0!3m2!1sen!2sin!4v1711349027964!5m2!1sen!2sin" width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                              </div>
                                      </div>
                                     

                                      </div> 







                  </div>
                </div>
              </div>




              <div className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-2">
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-accordion-collapse-2" type="button">
                  Field Officer Details
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
                <div id="hs-accordion-collapse-2"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-accordion-heading-2">
                <div className="grid grid-cols-12 gap-2">
 
                                    <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="task-name" className="form-label">Field Officer ID</label>
                                    <input type="text" className="form-control" id="task-name" value="EVF00001"/>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="task-name" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="task-name" value="M.Dileep"/>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="task-name" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="task-name" value="Kumar" />
                                    </div>
                                    
                                    <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="task-name" className="form-label">Enrolled Date</label>
                                    <input type="text" className="form-control" id="task-name" value="19-03-2024" />
                                    </div>


                                    <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="task-name" className="form-label">Enrolled Time</label>
                                    <input type="text" className="form-control" id="task-name" value="10:30 AM" />
                                    </div>

                                    
                                    <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="task-name" className="form-label">Mobile</label>
                                    <input type="text" className="form-control" id="task-name" value="987451645" />
                                    </div> 







                  </div>
                </div>
              </div>




              <div className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-3">
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-accordion-collapse-3" type="button">
                  Status
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
                <div id="hs-accordion-collapse-3"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-accordion-heading-3">
                   <ul className="ti-list-group list-none">
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-1" type="radio" value=""
                                    name="list-radio" defaultChecked />
                                On-Hold
                            </li>
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-1" type="radio" value=""
                                    name="list-radio"   />
                               Pending
                            </li>
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-1" type="radio" value=""
                                    name="list-radio"   />
                              Approve
                            </li>
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-1" type="radio" value=""
                                    name="list-radio"   />
                              Reject
                            </li>
                            
                            <div className="flex justify-center">
                       
                                    <input type="submit" className="ti-btn ti-btn-primary-full"   id="task-name" value="Submit" />
                                    </div> 
                            
                        </ul>
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

<div id="view_trackingmodal" className="hs-overlay hidden ti-modal">
<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
<div className="ti-modal-content">
<div className="ti-modal-header">
<h6 className="modal-title" id="staticBackdropLabel2">Track Produce  
</h6>
<button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#view_trackingmodal">
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
  Planting 
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
 
 <div className="container">
        <ul className="timeline list-none text-[0.813rem] text-defaulttextcolor">
            <li>
                <div className="timeline-time text-end">
                    <span className="date">20-01-2024</span>
                    <span className="time inline-block">02:31 PM</span>
                </div>
                <div className="timeline-icon">
                    <Link aria-label="anchor" href="#!"></Link>
                </div>
                <div className="timeline-body">
                    <div className="flex items-start timeline-main-content flex-wrap mt-0">
                        <div className="avatar avatar-md online me-3 avatar-rounded md:mt-0 mt-6">
                            <img alt="avatar" src="../../../assets/images/faces/4.jpg" />
                        </div>
                        <div className="flex-grow">
                            <div className="flex items-center">
                                <div className="sm:mt-0 mt-2">
                                    <p className="mb-0 text-[.875rem] font-semibold">J.Durga Prasad</p>
                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Sampling Planted. 10 % Progress Completed</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div className="timeline-time text-end">
                    <span className="date">22-01-2024</span>
                    <span className="time inline-block">10:31 AM</span>
                </div>
                <div className="timeline-icon">
                    <Link aria-label="anchor" href="#!"></Link>
                </div>
                <div className="timeline-body">
                    <div className="flex items-start timeline-main-content flex-wrap mt-0">
                        <div className="avatar avatar-md online me-3 avatar-rounded md:mt-0 mt-6">
                            <img alt="avatar" src="../../../assets/images/faces/4.jpg" />
                        </div>
                        <div className="flex-grow">
                            <div className="flex items-center">
                                <div className="sm:mt-0 mt-2">
                                    <p className="mb-0 text-[.875rem] font-semibold">J.Durga Prasad</p>
                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Watering Started. 20 % Progress Completed</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div className="timeline-time text-end">
                    <span className="date">25-01-2024</span>
                    <span className="time inline-block">11:45 AM</span>
                </div>
                <div className="timeline-icon">
                    <Link aria-label="anchor" href="#!"></Link>
                </div>
                <div className="timeline-body">
                    <div className="flex items-start timeline-main-content flex-wrap mt-0">
                        <div className="avatar avatar-md online me-3 avatar-rounded md:mt-0 mt-6">
                            <img alt="avatar" src="../../../assets/images/faces/4.jpg" />
                        </div>
                        <div className="flex-grow">
                            <div className="flex items-center">
                                <div className="sm:mt-0 mt-2">
                                    <p className="mb-0 text-[.875rem] font-semibold">Benny</p>
                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Quality Test Performed .30 % Progress Till Date.</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        
        </ul>

</div>



</div>




</div>




              
<div className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-farmerdetails">
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-accordion-collapse-farmerdetails" type="button">
                  Harvesting
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


                
<div className="container">
        <ul className="timeline list-none text-[0.813rem] text-defaulttextcolor">
            <li>
                <div className="timeline-time text-end">
                    <span className="date">20-01-2024</span>
                    <span className="time inline-block">02:31 PM</span>
                </div>
                <div className="timeline-icon">
                    <Link aria-label="anchor" href="#!"></Link>
                </div>
                <div className="timeline-body">
                    <div className="flex items-start timeline-main-content flex-wrap mt-0">
                        <div className="avatar avatar-md online me-3 avatar-rounded md:mt-0 mt-6">
                            <img alt="avatar" src="../../../assets/images/faces/4.jpg" />
                        </div>
                        <div className="flex-grow">
                            <div className="flex items-center">
                                <div className="sm:mt-0 mt-2">
                                    <p className="mb-0 text-[.875rem] font-semibold">J.Durga Prasad</p>
                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Sampling Planted. 10 % Progress Completed</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div className="timeline-time text-end">
                    <span className="date">22-01-2024</span>
                    <span className="time inline-block">10:31 AM</span>
                </div>
                <div className="timeline-icon">
                    <Link aria-label="anchor" href="#!"></Link>
                </div>
                <div className="timeline-body">
                    <div className="flex items-start timeline-main-content flex-wrap mt-0">
                        <div className="avatar avatar-md online me-3 avatar-rounded md:mt-0 mt-6">
                            <img alt="avatar" src="../../../assets/images/faces/4.jpg" />
                        </div>
                        <div className="flex-grow">
                            <div className="flex items-center">
                                <div className="sm:mt-0 mt-2">
                                    <p className="mb-0 text-[.875rem] font-semibold">J.Durga Prasad</p>
                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Watering Started. 20 % Progress Completed</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div className="timeline-time text-end">
                    <span className="date">25-01-2024</span>
                    <span className="time inline-block">11:45 AM</span>
                </div>
                <div className="timeline-icon">
                    <Link aria-label="anchor" href="#!"></Link>
                </div>
                <div className="timeline-body">
                    <div className="flex items-start timeline-main-content flex-wrap mt-0">
                        <div className="avatar avatar-md online me-3 avatar-rounded md:mt-0 mt-6">
                            <img alt="avatar" src="../../../assets/images/faces/4.jpg" />
                        </div>
                        <div className="flex-grow">
                            <div className="flex items-center">
                                <div className="sm:mt-0 mt-2">
                                    <p className="mb-0 text-[.875rem] font-semibold">Benny</p>
                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Quality Test Performed .30 % Progress Till Date.</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        
        </ul>

</div>

                </div>




              </div>



              <div className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-farmdetails">
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-accordion-collapse-farmdetails" type="button">
                  Pack House
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
             <div className="container">
        <ul className="timeline list-none text-[0.813rem] text-defaulttextcolor">
            <li>
                <div className="timeline-time text-end">
                    <span className="date">20-01-2024</span>
                    <span className="time inline-block">02:31 PM</span>
                </div>
                <div className="timeline-icon">
                    <Link aria-label="anchor" href="#!"></Link>
                </div>
                <div className="timeline-body">
                    <div className="flex items-start timeline-main-content flex-wrap mt-0">
                        <div className="avatar avatar-md online me-3 avatar-rounded md:mt-0 mt-6">
                            <img alt="avatar" src="../../../assets/images/faces/4.jpg" />
                        </div>
                        <div className="flex-grow">
                            <div className="flex items-center">
                                <div className="sm:mt-0 mt-2">
                                    <p className="mb-0 text-[.875rem] font-semibold">J.Durga Prasad</p>
                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Sampling Planted. 10 % Progress Completed</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div className="timeline-time text-end">
                    <span className="date">22-01-2024</span>
                    <span className="time inline-block">10:31 AM</span>
                </div>
                <div className="timeline-icon">
                    <Link aria-label="anchor" href="#!"></Link>
                </div>
                <div className="timeline-body">
                    <div className="flex items-start timeline-main-content flex-wrap mt-0">
                        <div className="avatar avatar-md online me-3 avatar-rounded md:mt-0 mt-6">
                            <img alt="avatar" src="../../../assets/images/faces/4.jpg" />
                        </div>
                        <div className="flex-grow">
                            <div className="flex items-center">
                                <div className="sm:mt-0 mt-2">
                                    <p className="mb-0 text-[.875rem] font-semibold">J.Durga Prasad</p>
                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Watering Started. 20 % Progress Completed</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div className="timeline-time text-end">
                    <span className="date">25-01-2024</span>
                    <span className="time inline-block">11:45 AM</span>
                </div>
                <div className="timeline-icon">
                    <Link aria-label="anchor" href="#!"></Link>
                </div>
                <div className="timeline-body">
                    <div className="flex items-start timeline-main-content flex-wrap mt-0">
                        <div className="avatar avatar-md online me-3 avatar-rounded md:mt-0 mt-6">
                            <img alt="avatar" src="../../../assets/images/faces/4.jpg" />
                        </div>
                        <div className="flex-grow">
                            <div className="flex items-center">
                                <div className="sm:mt-0 mt-2">
                                    <p className="mb-0 text-[.875rem] font-semibold">Benny</p>
                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Quality Test Performed .30 % Progress Till Date.</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        
        </ul>

</div>


                </div>
              </div>




            




          
            </div>






















</div>
<div className="ti-modal-footer">
<button type="button" className="hs-dropdown-toggle ti-btn ti-btn-light" data-hs-overlay="#view_trackingmodal">
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

{/* final code ends*/}

    </Fragment>
  )
}

Produce.layout = "Contentlayout";
export default Produce;