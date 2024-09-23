import React, { useEffect, useState } from 'react';
import { ErrorPage } from 'pages';

import 'assets/css/stylesGlobal.css';
import './assets/css/stylesJoinTheGroup.css';
interface Service {
    id: number;
    title: string;
    description: string;
    image: string;
}
interface Ministry {
    id: number;
    title: string;
    joinTheGroupTitle: string,
    firstDescriptionjoinTheGroup: string,
    secondDescriptionjoinTheGroup: string,
    joinTheGroupLink: string,
    buttonNameTargeting: string,
    services: Service[];
}
export function JoinTheGroup() {
    const [ministry, setMinistry] = useState<Ministry | null>(null);

    useEffect(() => {
        const storedMinistry = localStorage.getItem('selectedMinistry');
        if (storedMinistry) {
            setMinistry(JSON.parse(storedMinistry));
        }
    }, []);

    if (!ministry) {
        return <ErrorPage />;
    }

    return (
        <section className="lSectionJoinTheGroup" id="sectionJoinTheGroup">
            <div className="sectionJoinTheGroup">
                <div className="sectionJoinTheGroupData">
                    <div className="containerLineGlobalStyles">
                        <div className="lineWhiteGlobalStyles"></div>
                        <div className="textWhiteGlobalStyles">{ministry.title}</div>
                    </div>
                    <h2 className="globalSectionTitleTextWhite">
                        {ministry.joinTheGroupTitle}
                    </h2>
                    <p className="sectionTextWhiteJoinTheGroup mt-5"
                        dangerouslySetInnerHTML={{ __html: ministry.firstDescriptionjoinTheGroup }}>
                    </p>
                    <p className="sectionTextWhiteJoinTheGroup mt-5"
                        dangerouslySetInnerHTML={{ __html: ministry.secondDescriptionjoinTheGroup }}>
                    </p>
                    <div className='customButtonJoinTheGroup'>
                        <button
                            className='py-2 px-4 text-sm buttonPrimary'
                            onClick={() => window.open(`${ministry.joinTheGroupLink}`, '_blank')}
                        >
                            {ministry.buttonNameTargeting}
                        </button>
                    </div>
                </div>
                <div className='columJoinTheGroup'>
                    {ministry?.services?.map((services, index) => (
                        <div className='divComponentJoinTheGroup' key={index}>
                            {/* Image that appears when the screen is larger than 1350px */}
                            <div className='divImageJoinTheGroup imageShowAndHidelargerThan1350JoinTheGroup' style={{ backgroundImage: `url(${services?.image})` }} />
                            <div className='divInfoJoinTheGroup'>
                                <h3 className='titleInfoJoinTheGroup'>{services?.title}</h3>
                                {/* Image that appears when the screen is less than or equal to 1350px */}
                                <div className='divImageJoinTheGroup imageShowAndHidelessThanOrEqualTo1350JoinTheGroup' style={{ backgroundImage: `url(${services?.image})` }} />
                                <p className="textJoinTheGroup"
                                    dangerouslySetInnerHTML={{ __html: services?.description }}>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}