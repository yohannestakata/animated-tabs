import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";

const tabs = [
  { id: 0, title: "Tomato", emoji: "🍅" },
  { id: 1, title: "Potato", emoji: "🥔" },
  { id: 2, title: "Cheese", emoji: "🧀" },
];

function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <MotionConfig
      transition={{ duration: 0.1, type: "tween", ease: "easeOut" }}
    >
      <div className="flex justify-center pt-16">
        <div className="w-sm overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900">
          {/* tabs */}
          <div className="flex">
            {tabs.map((tab, index) => (
              <ul className="flex-1">
                <li
                  key={tab.title}
                  className={`${index === tabs.length - 1 ? "" : "border-r border-zinc-700"} border-b border-zinc-700`}
                >
                  <motion.button
                    animate={{
                      opacity: tab.id === activeTab ? 1 : 0.6,
                      backgroundColor:
                        tab.id === activeTab ? "#27272a" : "#18181b",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex w-full cursor-pointer items-center justify-center gap-2 p-3"
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span className="font-semibold">{tab.emoji}</span>
                    <span className="font-semibold">{tab.title}</span>
                  </motion.button>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="underline"
                      className="rounded-full border border-red-700"
                    />
                  )}
                </li>
              </ul>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex justify-center text-9xl"
            >
              <div className="p-6">{tabs[activeTab].emoji}</div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </MotionConfig>
  );
}

export default App;
