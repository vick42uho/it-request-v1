// NavigationMenu.tsx
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { TabMenu } from 'primereact/tabmenu';

export default function NavigationMenu() {
    const location = useLocation(); // Get the current location
    const [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        // Update the active index based on the current location
        switch (location.pathname) {
            case '/it-request':
                setActiveIndex(0);
                break;
            case '/it-admin':
                setActiveIndex(1);
                break;
            case '/it-department': // Changed from '/other'
                setActiveIndex(2);
                break;
            case '/operation-result': // Changed from '/other'
                setActiveIndex(3);
                break;
            case '/uat-link': // Changed from '/other'
                setActiveIndex(4);
                break;
            case '/evaluate-link': // Changed from '/other'
                setActiveIndex(5);
                break;
            default:
                setActiveIndex(0);
        }
    }, [location.pathname]);

    const items = [
        {
            label: 'IT Request',
            icon: 'pi pi-book',
            command: () => { setActiveIndex(0); },
            template: (item) => (
                <Link to="/it-request" className={`p-menuitem-link flex align-items-center gap-2 ${activeIndex === 0 ? 'active' : ''}`}>
                    <i className="pi pi-book" style={{ fontSize: '1.2em' }} />
                    <span className="font-bold">IT Request</span>
                </Link>
            )
        },
        {
            label: 'IT Admin',
            icon: 'pi pi-user',
            command: () => { setActiveIndex(1); },
            template: (item) => (
                <Link to="/it-admin" className={`p-menuitem-link flex align-items-center gap-2 ${activeIndex === 1 ? 'active' : ''}`}>
                    <i className="pi pi-user" style={{ fontSize: '1.2em' }} />
                    <span className="font-bold">IT Admin</span>
                </Link>
            )
        },
        {
            label: 'ฝ่าย IT',
            icon: 'pi pi-users',
            command: () => { setActiveIndex(2); },
            template: (item) => (
                <Link to="/it-department" className={`p-menuitem-link flex align-items-center gap-2 ${activeIndex === 2 ? 'active' : ''}`}>
                    <i className="pi pi-users" style={{ fontSize: '1.2em' }} />
                    <span className="font-bold">ฝ่าย IT</span>
                </Link>
            )
        },
        {
            label: 'ผลการดําเนินการ',
            icon: 'pi pi-verified',
            command: () => { setActiveIndex(3); },
            template: (item) => (
                <Link to="/operation-result" className={`p-menuitem-link flex align-items-center gap-2 ${activeIndex === 3 ? 'active' : ''}`}>
                    <i className="pi pi-verified" style={{ fontSize: '1.2em' }} />
                    <span className="font-bold">ผลการดําเนินการ</span>
                </Link>
            )
        },
        {
            label: 'Link To UAT',
            icon: 'pi pi-link',
            command: () => { setActiveIndex(4); },
            template: (item) => (
                <Link to="/uat-link" className={`p-menuitem-link flex align-items-center gap-2 ${activeIndex === 4 ? 'active' : ''}`}>
                    <i className="pi pi-link" style={{ fontSize: '1.2em' }} />
                    <span className="font-bold">Link To UAT</span>
                </Link>
            )
        },
        {
            label: 'Link To Evaluate',
            icon: 'pi pi-link',
            command: () => { setActiveIndex(5); },
            template: (item) => (
                <Link to="/evaluate-link" className={`p-menuitem-link flex align-items-center gap-2 ${activeIndex === 5 ? 'active' : ''}`}>
                    <i className="pi pi-link" style={{ fontSize: '1.2em' }} />
                    <span className="font-bold">Link To Evaluate</span>
                </Link>
            )
        }
    ];

    return (
        <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
    );
}
