import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { initialTabs as tabs } from "./MockOverviewAndImpactTabsHowYouCanContribute";
import "./assets/css/stylesOverviewAndImpactTabsHowYouCanContribute.css";

export default function OverviewAndImpactTabsHowYouCanContribute() {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <div className="windowOverviewAndImpactTabsHowYouCanContributeTabs">
            <nav className="navOverviewAndImpactTabsHowYouCanContributeTabs">
                <ul className="ulOverviewAndImpactTabsHowYouCanContributeTabs">
                    {tabs.map((item) => (
                        <li
                            key={item.description}
                            className={item === selectedTab ? "liStylesOverviewAndImpactTabsHowYouCanContributeTabs liSelectedwindowOverviewAndImpactTabsHowYouCanContributeTabs" : "liStylesOverviewAndImpactTabsHowYouCanContributeTabs"}
                            onClick={() => setSelectedTab(item)}
                        >
                            {`${item.icon} ${item.label}`}
                            {item === selectedTab ? (
                                <motion.div className="underlineOverviewAndImpactTabsHowYouCanContributeTabs" layoutId="underlineOverviewAndImpactTabsHowYouCanContributeTabs" />
                            ) : null}
                        </li>
                    ))}
                </ul>
            </nav>
            <main className="mainOverviewAndImpactTabsHowYouCanContributeTabs">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTab ? selectedTab.label : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {selectedTab ? <p className="textOverviewAndImpactTabsHowYouCanContributeTabs "
                            dangerouslySetInnerHTML={{ __html: selectedTab.description }}>
                        </p> : "😋"}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
}
