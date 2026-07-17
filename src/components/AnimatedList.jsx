import { useRef, useState, useCallback } from 'react'
import { motion, useInView } from 'motion/react'
import './AnimatedList.css'

function AnimatedItem({ item, index, onSelect, selectedIndex, renderItem }) {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.35, once: true })
  return <motion.div ref={ref} className={`animated-list__item ${selectedIndex === index ? 'is-selected' : ''}`} initial={{ y: 28, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : { y: 28, opacity: 0 }} transition={{ duration: .48, delay: index * .06, ease: [0.2, 0.65, 0.2, 1] }} onMouseEnter={() => onSelect(index)} onFocus={() => onSelect(index)}>{renderItem(item, index, selectedIndex === index)}</motion.div>
}

export default function AnimatedList({ items, renderItem, className = '', initialSelectedIndex = -1 }) {
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex)
  const onSelect = useCallback((index) => setSelectedIndex(index), [])
  return <div className={`animated-list ${className}`}>{items.map((item, index) => <AnimatedItem key={item.number ?? index} item={item} index={index} selectedIndex={selectedIndex} onSelect={onSelect} renderItem={renderItem} />)}</div>
}
