import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { initialTabs as tabs } from "./MockOverviewAndImpactTabs";
import "./assets/css/stylesOverviewAndImpactTabs.css";

export default function OverviewAndImpactTabs() {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <div className="windowOverviewAndImpactTabs">
            <nav className="navOverviewAndImpactTabs">
                <ul className="ulOverviewAndImpactTabs">
                    {tabs.map((item) => (
                        <li
                            key={item.label}
                            className={item === selectedTab ? "liStylesOverviewAndImpactTabs liSelectedwindowOverviewAndImpactTabs" : "liStylesOverviewAndImpactTabs"}
                            onClick={() => setSelectedTab(item)}
                        >
                            {`${item.icon} ${item.label}`}
                            {item === selectedTab ? (
                                <motion.div className="underlineOverviewAndImpactTabs" layoutId="underlineOverviewAndImpactTabs" />
                            ) : null}
                        </li>
                    ))}
                </ul>
            </nav>
            <main className="mainOverviewAndImpactTabs">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTab ? selectedTab.label : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {selectedTab ? <p className="textOverviewAndImpactTabs "
                            dangerouslySetInnerHTML={{ __html: selectedTab.description }}>
                        </p> : "😋"}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
}
