import React, { useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload, FileUploadHeaderTemplateOptions, FileUploadSelectEvent, FileUploadUploadEvent, ItemTemplateOptions, } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';
import { InputText } from "primereact/inputtext";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { FloatLabel } from 'primereact/floatlabel';
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { MenuItem } from 'primereact/menuitem';
import { BreadCrumb } from 'primereact/breadcrumb';
import NavigationMenu from './NavigationMenu';



//


// แผนกที่ร้องขอ
interface Country {
    name: string;
    code: string;
}

// หัวเรื่อง
// const [value, setValue] = useState<string[]>([]);





function FormRequest() {



    // แผนกที่ร้องขอ
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
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

    const selectedCountryTemplate = (option: Country, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option: Country) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                <div>{option.name}</div>
            </div>
        );
    };


    // วัตถุประสงค์
    // const [text, setText] = useState<string>('');
    const [value, setValue] = useState<string>('');


    // Update File
    const toast = useRef<Toast>(null);
    const [totalSize, setTotalSize] = useState(0);
    const fileUploadRef = useRef<FileUpload>(null);

    const onTemplateSelect = (e: FileUploadSelectEvent) => {
        let _totalSize = totalSize;
        let files = e.files;

        for (let i = 0; i < files.length; i++) {
            _totalSize += files[i].size || 0;
        }

        setTotalSize(_totalSize);
    };

    const onTemplateUpload = (e: FileUploadUploadEvent) => {
        let _totalSize = 0;

        e.files.forEach((file) => {
            _totalSize += file.size || 0;
        });

        setTotalSize(_totalSize);
        toast.current?.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    const onTemplateRemove = (file: File, callback: Function) => {
        setTotalSize(totalSize - file.size);
        callback();
    };

    const onTemplateClear = () => {
        setTotalSize(0);
    };

    const headerTemplate = (options: FileUploadHeaderTemplateOptions) => {
        const { className, chooseButton, uploadButton, cancelButton } = options;
        const value = (totalSize / 100000000) * 100; // 100 MB = 100,000,000 bytes
        const formattedValue = fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B';

        return (
            <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
                {chooseButton}
                {uploadButton}
                {cancelButton}
                <div className="flex align-items-center gap-3 ml-auto">
                    <span>{formattedValue} / 100 MB</span>
                    <ProgressBar value={value} showValue={false} style={{ width: '10rem', height: '12px' }}></ProgressBar>
                </div>
            </div>
        );
    };

    const itemTemplate = (inFile: object, props: ItemTemplateOptions) => {
        const file = inFile as File;
        return (
            <div className="flex align-items-center flex-wrap">
                <div className="flex align-items-center" style={{ width: '40%' }}>
            
                    <img alt={file.name} role="presentation" src={file.objectURL} width={100} />
                    <span className="flex flex-column text-left ml-3">
                        {file.name}
                        <small>{new Date().toLocaleDateString()}</small>
                    </span>
                </div>
                <Tag value={props.formatSize} severity="warning" className="px-3 py-2" />
                <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger ml-auto" onClick={() => onTemplateRemove(file, props.onRemove)} />
            </div>
        );
    };

    const emptyTemplate = () => {
        return (
            <div className="flex align-items-center flex-column">
                <i className="pi pi-image mt-3 p-5" style={{ fontSize: '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)' }}></i>
                <span style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }} className="my-5">
                    ลากและวางไฟล์ที่นี่
                </span>
            </div>
        );
    };

    const chooseOptions = { icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined' };
    const uploadOptions = { icon: 'pi pi-fw pi-cloud-upload', iconOnly: true, className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined' };
    const cancelOptions = { icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined' };

    // Date Approve
    const [date, setDate] = useState<Nullable<Date>>(null);

    // Button Save
    // const toasted = useRef<Toast>(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const confirm1 = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept,
            reject
        });
    };

    const confirm2 = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };

   
    //  Breadcrumb
    const itemsd: MenuItem[] = [{ label: 'IT-Request', url: '/it-request' }];
    const home: MenuItem = { icon: 'pi pi-home', url: '/' }


    

    return (
        <>
            <br /><br />

            <div className="flex flex-row flex-wrap">

                <h2>Form IT Request</h2>
            </div>
            
            <NavigationMenu />
          <br />
            {/* <TabMenu model={itemsmenu} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} /> */}

            <div className="flex flex-row-reverse flex-wrap">
                <div className="field grid">
                    <label htmlFor="firstname3" className="col-fixed text-sm font-bold" >Request No. IT-0001</label>

                </div>
            </div>



            {/* <div className="steps-demo">
                <Toast ref={toast_steps}></Toast>
                <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
            </div> */}


            <BreadCrumb model={itemsd} home={home} />



            <div className="layout-content">
                <div className="grid p-fluid input-demo">




                    <div className="col-12 md:col-6">
                        <div className="card">
                            <div className="grid formgrid">

                                {/* department request */}

                                <div className="col-12 mb-2 lg:col-12 lg:mb-4">
                                    <FloatLabel>
                                        <Dropdown value={selectedCountry} onChange={(e: DropdownChangeEvent) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Select Departments"
                                            filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="p-inputtext-sm" />
                                        <label htmlFor="department">เลือกแผนกผู้ร้องขอ</label>
                                    </FloatLabel>
                                </div>

                                <div className="col-12 mb-2 lg:col-12 lg:mb-4">
                                    <span className="p-float-label">
                                        <FloatLabel>
                                            <InputText id="name_request" type="text" className="p-inputtext-sm" />
                                            <label htmlFor="name_request">ชื่อผู้ร้องขอ</label>
                                        </FloatLabel>
                                    </span>
                                </div>


                                <div className="col-12 mb-2 lg:col-12 lg:mb-4">
                                    <span className="p-float-label">
                                        <FloatLabel>
                                            <InputText id="tel_request" type="text" className="p-inputtext-sm" />
                                            <label htmlFor="tel_request">เบอร์ติดต่อ</label>
                                        </FloatLabel>
                                    </span>
                                </div>

                                {/* Manager Approve */}

                                <div className="col-12 mb-2 lg:col-12 lg:mb-4">
                                    <span className="p-float-label">
                                        <FloatLabel>
                                            <InputText id="manager_name" type="text" className="p-inputtext-sm" placeholder="Manager Name" />
                                            <label htmlFor="manager_name">Manager Approve</label>
                                        </FloatLabel>
                                    </span>
                                </div>

                                <div className="col-12 mb-2 lg:col-12 lg:mb-4">
                                    <span className="p-float-label">
                                        <FloatLabel>
                                            <InputText id="manager_email" type="email" className="p-inputtext-sm" placeholder="@mail.com" />
                                            <label htmlFor="manager_email">Manager Email</label>
                                        </FloatLabel>
                                    </span>
                                </div>

                                <div className="col-12 mb-2 lg:col-12 lg:mb-4 card flex flex-wrap gap-3">
                                    <div className="flex-auto">
                                        <FloatLabel >
                                            <Dropdown inputId="status_approve" value={selectedCountry} onChange={(e: DropdownChangeEvent) => setSelectedCountry(e.value)} options={countries} optionLabel="name" className="w-full" />
                                            <label htmlFor="status_approve">Approve Status</label>
                                        </FloatLabel>
                                    </div>
                                    <div className="flex-auto">
                                        <FloatLabel>
                                            <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon />
                                            <label htmlFor="buttondisplay" >Manager Approve Date</label>
                                        </FloatLabel>
                                    </div>
                                </div>

                                {/* Director Approve */}

                                <div className="col-12 mb-2 lg:col-12 lg:mb-4">
                                    <span className="p-float-label">
                                        <FloatLabel>
                                            <InputText id="director_name" type="text" className="p-inputtext-sm" placeholder="Manager Name" />
                                            <label htmlFor="director_name">Director Approve</label>
                                        </FloatLabel>
                                    </span>
                                </div>

                                <div className="col-12 mb-2 lg:col-12 lg:mb-4">
                                    <span className="p-float-label">
                                        <FloatLabel>
                                            <InputText id="director_email" type="email" className="p-inputtext-sm" placeholder="@mail.com" />
                                            <label htmlFor="director_email">Director Email</label>
                                        </FloatLabel>
                                    </span>
                                </div>

                                <div className="col-12 mb-2 lg:col-12 lg:mb-4 card flex flex-wrap gap-3">
                                    <div className="flex-auto">
                                        <FloatLabel >
                                            <Dropdown inputId="director_approve" value={selectedCountry} onChange={(e: DropdownChangeEvent) => setSelectedCountry(e.value)} options={countries} optionLabel="name" className="w-full" />
                                            <label htmlFor="director_approve">Director Status</label>
                                        </FloatLabel>
                                    </div>
                                    <div className="flex-auto">
                                        <FloatLabel>
                                            <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon />
                                            <label htmlFor="buttondisplay" >Director Approve Date</label>
                                        </FloatLabel>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="col-12 md:col-6">
                        <div className="card">
                            <div className="grid formgrid">

                                <div className="col-12 mb-2 lg:col-12 lg:mb-4">
                                    <span className="p-float-label">
                                        <FloatLabel>
                                            <InputText id="title_request" type="text" className="p-inputtext-sm" />
                                            <label htmlFor="title_request">หัวข้อเรื่อง</label>
                                        </FloatLabel>
                                    </span>
                                </div>

                                <div className="col-12 mb-2 lg:col-12 lg:mb-4">
                                    <span className="p-float-label">
                                        <FloatLabel>
                                            <InputTextarea id="description" value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
                                            <label htmlFor="description">วัตถุประสงค์</label>
                                        </FloatLabel>
                                    </span>
                                </div>

                                <div className="col-12 mb-2 lg:col-12 lg:mb-4">
                                    <span className="p-float-label">
                                        <FloatLabel>
                                            <InputTextarea id="description" value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
                                            <label htmlFor="description">ความต้องการ</label>
                                        </FloatLabel>
                                    </span>
                                </div>

                                <div className="col-12 mb-2 lg:col-12 lg:mb-4">

                                    <Toast ref={toast}></Toast>
                                    <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
                                    <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
                                    <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

                                    <FileUpload ref={fileUploadRef} name="demo[]" url="/api/upload" multiple accept="file/*" maxFileSize={100000000} // Change to 100 MB
                                        onUpload={onTemplateUpload} onSelect={onTemplateSelect} onError={onTemplateClear} onClear={onTemplateClear}
                                        headerTemplate={headerTemplate} itemTemplate={itemTemplate} emptyTemplate={emptyTemplate}
                                        chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} />

                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

            <Toast ref={toast} />
            <ConfirmPopup />
            <div className="card flex flex-wrap gap-2 justify-content-center">
                <div >
                    <Button onClick={confirm1} icon="pi pi-save" label="บันทึก" severity="success" raised></Button>

                </div>
                <div >
                    <Button onClick={confirm2} icon="pi pi-times-circle" label="ยกเลิก" severity="danger" raised></Button>
                </div>
            </div>


            


        </>
    )
}

export default FormRequest