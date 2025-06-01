import { motion } from 'framer-motion';
import { useState } from 'react';
import { tabs } from '../utils/data';
import { AnimatePresence } from 'framer-motion';
import '../styles/experience.css';
export function Experience() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className='container'>
      <nav className='nav'>
        <ul className={'tabsContainer'}>
          {tabs.map((item) => (
            <motion.li
              key={item.label}
              initial={false}
              animate={{
                backgroundColor: item === selectedTab ? '#eee' : '#eee0',
              }}
              className='tab'
              onClick={() => setSelectedTab(item)}
            >
              <div className='tab-section'>{`${item.icon}  ${item.label}`}</div>
              {item === selectedTab ? (
                <motion.div
                  className='underline'
                  layoutId='underline'
                  id='underline'
                />
              ) : null}
            </motion.li>
          ))}
        </ul>
      </nav>
      <main className={'iconContainer'}>
        <AnimatePresence mode='wait'>
          <motion.div
            key={selectedTab ? selectedTab.label : 'empty'}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={icon}
          >
            {selectedTab ? (
              <div className='info'>
                <div>
                  <h3>{selectedTab.company}</h3>
                  <span>{selectedTab.period}</span>
                  <p>{selectedTab.description}</p>
                </div>
              </div>
            ) : (
              '😋'
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

const icon = {
  fontSize: '128px',
};
