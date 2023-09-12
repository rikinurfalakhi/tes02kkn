import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from 'react-router-dom'

let tabs = [
    {
        id: 1,
        path: "/",
        label: "Home",
      },
      {
        id: 2,
        path: "kelas",
        label: "Kelas",
      },
      {
        id: 3,
        path: "struktur_desa",
        label: "Struktur Desa",
      },
      {
        id: 4,
        path: "faq",
        label: "FAQ",
      },
      {
        id: 5,
        path: "syaratketen",
        label: "Syarat & Ketentuan",
      },
];

function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex space-x-1 nav-link">
        <h1>logo</h1>
      {tabs.map((tab) => (
        <NavLink to={tab.path}
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "" : "hover:text-white/60"
          } relative rounded-full px-3 py-1.5 text-sm font-medium text-red outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
}
export default AnimatedTabs