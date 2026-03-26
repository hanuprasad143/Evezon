
import { Customers, Deals, Dealsstatistics, Earned, Ratio, Revenue, Revenueanalytics, Sourcedata, Target } from '@/shared/data/dashboards/crmdata';
import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';
import React, { useState,Fragment } from 'react'
import DatePicker from "react-datepicker";
const Select = dynamic(() => import("react-select"), {ssr : false});
import dynamic from 'next/dynamic';

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




  return (
    <Fragment>
      <Seo title={"Admin MD Produce"} />



      <div className="flex justify-center mt-10">
              
                    <div className="box custom-box border-t-[0.188rem] border-solid !border-t-primary !rounded-none">
                        <div className="box-body">
                            <div className="text-center">
                                <span className="avatar avatar-md bg-primary shadow-sm !rounded-full mb-2">
                                    <i className="ri-briefcase-2-line text-[1rem]"></i>
                                </span>
                                <p className="text-[.875rem] font-semibold mb-2">Total Cold Storage Employees</p>
                                <div className="flex items-center justify-center flex-wrap">
                                    <h5 className="mb-0 font-semibold">5</h5>
                                 <span className="badge bg-success/10 text-success rounded-full ms-1">+25.8%</span>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
     

{/* final cde starts */}

<div className="box">
<div className="box-header justify-between">
<div className="box-title">
Cold Storage Employees list
</div>
<div className="flex">
<button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem]" data-hs-overlay="#packhousemanager">
<i className="ri-add-line font-semibold align-middle"></i> Create Cold Storage Employee
</button>
<div id="packhousemanager" className="hs-overlay hidden ti-modal">
<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
<div className="ti-modal-content">
<div className="ti-modal-header">
<h6 className="modal-title" id="staticBackdropLabel2">Cold Storage Employee Details
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
<label htmlFor="task-name" className="form-label">Employee Id</label>
<input type="text" className="form-control" id="task-name" placeholder="Enter Employee Id" />
</div>


<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">First name</label>
<input type="text" className="form-control" id="task-name" placeholder="Enter First name" />
</div>


<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Last name</label>
<input type="text" className="form-control" id="task-name" placeholder="Enter Last name" />
</div>



<div className="xl:col-span-6 col-span-12">

<label htmlFor="task-name" className="form-label">Select Gender </label>
<Select classNamePrefix='Select2' className="ti-form-select rounded-sm !p-0" multi options={genderOptions} />

</div>





<div className="xl:col-span-6 col-span-12">
<label className="form-label">Select Date of birth</label>
<div className="form-group">
<div className="input-group !flex-nowrap">
<div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
<DatePicker
selected={dateofbirth}
onChange={handledateofbirthChange}

dateFormat="yy/MM/dd"
placeholderText='Choose Date'

/>
</div>
</div>
</div>


<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Mobile</label>
<input type="text" className="form-control" id="task-name" placeholder="Enter Mobile" />
</div>


<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Email</label>
<input type="text" className="form-control" id="task-name" placeholder="Enter Email" />
</div>





<div className="xl:col-span-6 col-span-12 product-documents-container">
<p className="font-semibold mb-2 text-[0.875rem]">Upload Profile Photo :</p>
<FilePond className="basic-filepond" accepted-file-types={["application/pdf", "image/png", "image/jpeg", "image/gif"]}
server="/api" allowReorder={true} files={uploadprofilephoto} onupdatefiles={setUploadprofilephoto} allowMultiple={false} allowImagePreview={true} maxFiles={10} name="filepond"
labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>' />
</div>



<div className="xl:col-span-6 col-span-12">

<label htmlFor="task-name" className="form-label">Select Identity proof </label>
<Select classNamePrefix='Select2' className="ti-form-select rounded-sm !p-0" multi options={identityproofOptions} />

</div>


<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Proof no.</label>
<input type="text" className="form-control" id="task-name" placeholder="Enter Proof no." />
</div>





<div className="xl:col-span-6 col-span-12 product-documents-container">
<p className="font-semibold mb-2 text-[0.875rem]">Upload ID Proof :</p>
<FilePond className="basic-filepond" accepted-file-types={["application/pdf", "image/png", "image/jpeg", "image/gif"]}
server="/api" allowReorder={true} files={uploadidproof} onupdatefiles={setUploadidproof} allowMultiple={false} allowImagePreview={true} maxFiles={10} name="filepond"
labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>' />
</div>



<div className="xl:col-span-6 col-span-12">

<label htmlFor="task-name" className="form-label">Select State </label>
<Select classNamePrefix='Select2' className="ti-form-select rounded-sm !p-0" multi options={stateOptions} />

</div>



<div className="xl:col-span-6 col-span-12">

<label htmlFor="task-name" className="form-label">Select District </label>
<Select classNamePrefix='Select2' className="ti-form-select rounded-sm !p-0" multi options={districtOptions} />

</div>


<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Pincode</label>
<input type="text" className="form-control" id="task-name" placeholder="Enter Pincode" />
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
<th scope="col" className="text-start">Employee Id</th>
<th scope="col" className="text-start">First name</th>
<th scope="col" className="text-start">Last name</th>
<th scope="col" className="text-start">Gender</th>
<th scope="col" className="text-start">Date of birth</th>
<th scope="col" className="text-start">Mobile</th>
<th scope="col" className="text-start">Email</th>
<th scope="col" className="text-start">Profile photo</th>
<th scope="col" className="text-start">View</th>
<th scope="col" className="text-start">Action</th>
</tr>
</thead>
<tbody>
<tr className="border border-defaultborder task-list">

<td>
<span className="font-semibold">1</span>
</td>
<td>
<span className="font-semibold">EVCSL0001</span>
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
<span className="font-semibold">20-09-1987</span>
</td>
<td>
<span className="font-semibold">9874512053</span>
</td>
<td>
<span className="font-semibold">rajualla@evezon.in</span>
</td>
<td>
<span className="avatar avatar-sm avatar-rounded">
<img src="../../../assets/images/phmanager/1.jpeg" alt="img" />
</span>
</td>
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
<button type="button" className="hs-tooltip-toggle ti-btn ti-btn-primary ti-btn-sm"  data-hs-overlay="#edit_packhousemanager">
<i className="ri-edit-line"></i>
<span
className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
role="tooltip">
Edit
</span>
</button>
</div>
<div className="hs-tooltip ti-main-tooltip">
<button type="button" className="hs-tooltip-toggle ti-btn ti-btn-danger ms-1 ti-btn-sm task-delete-btn" data-hs-overlay="#delete_packhousemanager">
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
<span className="font-semibold">EVCSL0002</span>
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
<span className="font-semibold">14-12-1990</span>
</td>
<td>
<span className="font-semibold">7894536520</span>
</td>
<td>
<span className="font-semibold">bhaskarborra@evezon.in</span>
</td>
<td>
<span className="avatar avatar-sm avatar-rounded">
<img src="../../../assets/images/phmanager/2.jpeg" alt="img" />
</span>
</td>
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
<button type="button" className="hs-tooltip-toggle ti-btn ti-btn-primary ti-btn-sm"  data-hs-overlay="#edit_packhousemanager">
<i className="ri-edit-line"></i>
<span
className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
role="tooltip">
Edit
</span>
</button>
</div>
<div className="hs-tooltip ti-main-tooltip">
<button type="button" className="hs-tooltip-toggle ti-btn ti-btn-danger ms-1 ti-btn-sm task-delete-btn" data-hs-overlay="#delete_packhousemanager">
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
<span className="font-semibold">EVCSL0003</span>
</td>
<td>
<span className="font-semibold">Praveen Kumar</span>
</td>
<td>
<span className="font-semibold">Rapeti</span>
</td>
<td>
<span className="font-semibold">Male</span>
</td>
<td>
<span className="font-semibold">26-05-1993</span>
</td>
<td>
<span className="font-semibold">7841256985</span>
</td>
<td>
<span className="font-semibold">praveenk@evezon.in</span>
</td>
<td>
<span className="avatar avatar-sm avatar-rounded">
<img src="../../../assets/images/phmanager/3.jpeg" alt="img" />
</span>
</td>
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
<button type="button" className="hs-tooltip-toggle ti-btn ti-btn-primary ti-btn-sm"  data-hs-overlay="#edit_packhousemanager">
<i className="ri-edit-line"></i>
<span
className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
role="tooltip">
Edit
</span>
</button>
</div>
<div className="hs-tooltip ti-main-tooltip">
<button type="button" className="hs-tooltip-toggle ti-btn ti-btn-danger ms-1 ti-btn-sm task-delete-btn" data-hs-overlay="#delete_packhousemanager">
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
<span className="font-semibold">EVCSL0004</span>
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
<span className="font-semibold">02-06-1997</span>
</td>
<td>
<span className="font-semibold">8944578542</span>
</td>
<td>
<span className="font-semibold">roy@evezon.in</span>
</td>
<td>
<span className="avatar avatar-sm avatar-rounded">
<img src="../../../assets/images/produce/phmanager/4.jpeg" alt="img" />
</span>
</td>
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
<button type="button" className="hs-tooltip-toggle ti-btn ti-btn-primary ti-btn-sm"  data-hs-overlay="#edit_packhousemanager">
<i className="ri-edit-line"></i>
<span
className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
role="tooltip">
Edit
</span>
</button>
</div>
<div className="hs-tooltip ti-main-tooltip">
<button type="button" className="hs-tooltip-toggle ti-btn ti-btn-danger ms-1 ti-btn-sm task-delete-btn" data-hs-overlay="#delete_packhousemanager">
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
<span className="font-semibold">EVCSL0005</span>
</td>
<td>
<span className="font-semibold">Santosh Kumar</span>
</td>
<td>
<span className="font-semibold">Gurram</span>
</td>
<td>
<span className="font-semibold">Male</span>
</td>
<td>
<span className="font-semibold">06-10-2000</span>
</td>
<td>
<span className="font-semibold">9845762541</span>
</td>
<td>
<span className="font-semibold">santosh@evezon.in</span>
</td>
<td>
<span className="avatar avatar-sm avatar-rounded">
<img src="../../../assets/phmanager/5.jpeg" alt="img" />
</span>
</td>
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
<button type="button" className="hs-tooltip-toggle ti-btn ti-btn-primary ti-btn-sm"  data-hs-overlay="#edit_packhousemanager">
<i className="ri-edit-line"></i>
<span
className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
role="tooltip">
Edit
</span>
</button>
</div>
<div className="hs-tooltip ti-main-tooltip">
<button type="button" className="hs-tooltip-toggle ti-btn ti-btn-danger ms-1 ti-btn-sm task-delete-btn" data-hs-overlay="#delete_packhousemanager">
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

<div className="flex">

<div id="view_packhousemanager" className="hs-overlay hidden ti-modal">
<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
<div className="ti-modal-content">
<div className="ti-modal-header">
<h6 className="modal-title" id="staticBackdropLabel2">View Cold Storage Employee Details
</h6>
<button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#view_packhousemanager">
<span className="sr-only">Close</span>
<svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
</svg>
</button>
</div>
<div className="ti-modal-body">
<div className="grid grid-cols-12 gap-2">

<div className="xl:col-span-6 col-span-12">
<label htmlFor="task-name" className="form-label">Employee Id</label>
<input type="text" className="form-control" id="task-name" value="Employee Id" />
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
<h6 className="modal-title" id="staticBackdropLabel2">Edit Cold Storage Employee Details
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
<label htmlFor="task-name" className="form-label">Employee Id</label>
<input type="text" className="form-control" id="task-name" value="Employee Id" />
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