import React, { useState } from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import { RadioButton, RadioButtonChangeEvent } from "primereact/radiobutton";
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import NavigationMenu from './NavigationMenu';

interface Country {
  name: string;
  code: string;
}

const FormITAdmin = () => {
  // Breadcrumb
  const breadcrumbItems = [{ label: 'IT-Request', url: '/it-request' }, { label: 'Form IT Admin', url: '/it-admin' }];
  const homeItem = { icon: 'pi pi-home', url: '/' };

  // Radio Button
  const [selectedOption, setSelectedOption] = useState<string>('');

  // Multi Select
  const [selectedDepartments, setSelectedDepartments] = useState<Country[] | null>(null);
  const countries: Country[] = [
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
  ];

  const countryTemplate = (option: Country) => {
    return (
      <div className="flex align-items-center">
        <img alt={option.name} src={`https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png`} className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
        <div>{option.name}</div>
      </div>
    );
  };

  const panelFooterTemplate = () => {
    const length = selectedDepartments ? selectedDepartments.length : 0;

    return (
      <div className="py-2 px-3">
        <b>{length}</b> item{length > 1 ? 's' : ''} selected.
      </div>
    );
  };

  // Checkbox State
  const [additionalRequests, setAdditionalRequests] = useState<string[]>([]);

  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
    let updatedRequests = [...additionalRequests];
    if (e.checked) {
      updatedRequests.push(e.value);
    } else {
      updatedRequests = updatedRequests.filter(request => request !== e.value);
    }
    setAdditionalRequests(updatedRequests);
  };

  return (
    <>
    <br /><br />
      <div className="flex flex-row flex-wrap">
        <h2>Form IT Admin</h2>
      </div>
      <NavigationMenu />
      <BreadCrumb model={breadcrumbItems} home={homeItem} />
      
      <div className="layout-content">
        <div className="grid p-fluid">
          
          <div className="col-12 md:col-6">
            <div className="card">
              <h5>เลือกประเภทของงาน</h5>
              <div className="formgroup-inline">
                <div className="field-radiobutton">
                  <RadioButton inputId="newDevelopment" name="taskType" value="1" onChange={(e: RadioButtonChangeEvent) => setSelectedOption(e.value)} checked={selectedOption === '1'} />
                  <label htmlFor="newDevelopment" className="ml-2">พัฒนาโปรแกรมขึ้นใหม่</label>
                </div>
                <div className="field-radiobutton">
                  <RadioButton inputId="continuousDevelopment" name="taskType" value="2" onChange={(e: RadioButtonChangeEvent) => setSelectedOption(e.value)} checked={selectedOption === '2'} />
                  <label htmlFor="continuousDevelopment" className="ml-2">พัฒนาโปรแกรมต่อเนื่อง</label>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 md:col-6">
            <div className="card">
              <h5>เลือกความต้องการเพิ่มเติม</h5>
              <div className="formgroup-inline">
                <div className="field-checkbox">
                  <Checkbox inputId="re_edit" value="re_edit" onChange={handleCheckboxChange} checked={additionalRequests.includes('re_edit')} />
                  <label htmlFor="re_edit" className="ml-2">แก้ไข/เพิ่มเติม Report</label>
                </div>
                <div className="field-checkbox">
                  <Checkbox inputId="re_email" value="re_email" onChange={handleCheckboxChange} checked={additionalRequests.includes('re_email')} />
                  <label htmlFor="re_email" className="ml-2">ขอใช้ Email</label>
                </div>
                <div className="field-checkbox">
                  <Checkbox inputId="re_em" value="re_em" onChange={handleCheckboxChange} checked={additionalRequests.includes('re_em')} />
                  <label htmlFor="re_em" className="ml-2">การขอใช้อุปกรณ์</label>
                </div>
                <div className="field-checkbox">
                  <Checkbox inputId="re_open" value="re_open" onChange={handleCheckboxChange} checked={additionalRequests.includes('re_open')} />
                  <label htmlFor="re_open" className="ml-2">ขอเปิดสิทธิ์</label>
                </div>
                <div className="field-checkbox">
                  <Checkbox inputId="re_social" value="re_social" onChange={handleCheckboxChange} checked={additionalRequests.includes('re_social')} />
                  <label htmlFor="re_social" className="ml-2">ขอใช้ Social Media</label>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 md:col-6">
            <div className="card">
              <h5>Assign IT Department</h5>
              <MultiSelect value={selectedDepartments} options={countries} onChange={(e: MultiSelectChangeEvent) => setSelectedDepartments(e.value)} optionLabel="name"
                placeholder="Assign IT Department" itemTemplate={countryTemplate} panelFooterTemplate={panelFooterTemplate} className="w-full" display="chip" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default FormITAdmin;
