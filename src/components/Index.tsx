import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';


function Index() {
    return (

        <div className="surface-0 text-center">
            <div className="mb-3 font-bold text-3xl">
                <span className="text-900">ศูนย์บริการโปรแกรม </span>
                <span className="text-blue-600">Center</span>
            </div>
            <div className="text-700 mb-6">
                <TypeAnimation
                    sequence={[
                        'ยันฮี | โรงพยาบาล',
                        1000,
                        'เพื่อสุขภาพและศัลยกรรมความงาม',
                        1000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                />
            </div>

            <div className="grid">

                <div className="col-12 md:col-4 mb-4 px-5">
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <a href="it-request">
                            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                <img src="https://t4.ftcdn.net/jpg/02/78/01/97/360_F_278019795_HhtJsgJoL9DUoVA0l2v2EGz2YgD37sbE.jpg" alt="Example Image" className="text-4xl" style={{ width: '100px', height: '100px' }} />
                            </span>
                        </a>
                    </Tilt>
                    <div className="text-900 text-xl mb-3 font-medium">IT Request</div>
                    <span className="text-700 line-height-3">สำหรับขอโปรแกรม เครื่องมือ อุปกรณ์ คอมพิวเตอร์</span>
                </div>

                <div className="col-12 md:col-4 mb-4 px-5">
                
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        
                        <a href="#">
                            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                <img src="https://img.freepik.com/free-vector/isometric-crm-illustration_52683-83950.jpg" alt="Example Image" className="text-4xl" style={{ width: '100px', height: '100px' }} />
                            </span>
                        </a>
                    </Tilt>
                    <div className="text-900 text-xl mb-3 font-medium">CRM</div>
                    <span className="text-700 line-height-3">สำหรับบันทึกข้อมูลลูกค้า เก็บสถิติ</span>
                </div>


                <div className="col-12 md:col-4 mb-4 px-5">
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <a href="#">
                            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                <img src="https://building.kku.ac.th/wp-content/uploads/2020/02/43040-Converted.png" alt="Example Image" className="text-4xl" style={{ width: '100px', height: '100px' }} />
                            </span>
                        </a>
                    </Tilt>
                    <div className="text-900 text-xl mb-3 font-medium">Repair</div>
                    <span className="text-700 line-height-3">สำหรับแจ้งซ่อมต่าง ๆ ของโรงพยาบาล</span>
                </div>

                <div className="col-12 md:col-4 mb-4 px-5">
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <a href="#">
                            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                <img src="https://media.istockphoto.com/id/1201117914/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B8%84%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B9%89%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%89%E0%B8%AD%E0%B8%99%E0%B8%A2%E0%B8%B8%E0%B8%84.jpg?s=1024x1024&w=is&k=20&c=IlYu84CvW0mstwTGYp0X8hygwcpWE3ECCt14Z2uRRHk=" alt="Example Image" className="text-4xl" style={{ width: '100px', height: '100px' }} />
                            </span>
                        </a>
                    </Tilt>
                    <div className="text-900 text-xl mb-3 font-medium">Store</div>
                    <span className="text-700 line-height-3">สำหรับจัดการคลังสินค้า สต๊อกสินค้า คลังยาเวชภัณฑ์ ในโรงพยาบาล</span>
                </div>

                <div className="col-12 md:col-4 mb-4 px-5">
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <a href="#">
                            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                <img src="https://www.searchenginejournal.com/wp-content/uploads/2021/09/16-reasons-why-social-media-is-important-to-your-company-616d3200e6dc6-sej.png" alt="Example Image" className="text-4xl" style={{ width: '100px', height: '100px' }} />
                            </span>
                        </a>
                    </Tilt>
                    <div className="text-900 text-xl mb-3 font-medium">Media</div>
                    <span className="text-700 line-height-3">สำหรับโซเชียล อัลบั้มสื่อ วิดีโอ สื่อประชาสัมพันธ์ ในโรงพยาบาล</span>
                </div>

                <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <a href="#">
                            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                <img src="https://img.freepik.com/premium-vector/services-concept-idea-customer-support-help-clients-with-problems-assistance-providing-customer-with-valuable-information-illustration_277904-4759.jpg" alt="Example Image" className="text-4xl" style={{ width: '100px', height: '100px' }} />
                            </span>
                        </a>
                    </Tilt >
                    <div className="text-900 text-xl mb-3 font-medium">Service</div>
                    <span className="text-700 line-height-3">สำหรับบริการ ของโรงพยาบาล</span>
                </div>

            </div>


        </div>
    )
}

export default Index