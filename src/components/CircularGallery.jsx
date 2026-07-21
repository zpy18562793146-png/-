import { useEffect, useRef, useState } from 'react'
import './CircularGallery.css'

export default function CircularGallery({ items = [], scrollSpeed = 1.15 }) {
  const viewportRef = useRef(null)
  const itemRefs = useRef([])
  const activeRef = useRef(0)
  const targetRef = useRef(0)
  const animationRef = useRef(0)
  const initializedRef = useRef(false)
  const [active, setActive] = useState(0)
  const [hovered, setHovered] = useState(null)

  const updateActive = () => {
    const viewport = viewportRef.current
    if (!viewport) return
    const center = viewport.scrollLeft + viewport.clientWidth / 2
    let closest = 0
    let distance = Infinity
    itemRefs.current.forEach((item, index) => { if (item) { const itemCenter = item.offsetLeft + item.offsetWidth / 2; const next = Math.abs(itemCenter - center); if (next < distance) { distance = next; closest = index } } })
    activeRef.current = closest
    setActive(closest)
  }

  const focusItem = (index) => {
    const item = itemRefs.current[index]
    const viewport = viewportRef.current
    if (!item || !viewport) return
    targetRef.current = Math.max(0, Math.min(item.offsetLeft + item.offsetWidth / 2 - viewport.clientWidth / 2, viewport.scrollWidth - viewport.clientWidth))
    activeRef.current = index
    setActive(index)
  }

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return
    let frame
    const animate = () => { const difference = targetRef.current - viewport.scrollLeft; if (Math.abs(difference) > .35) { viewport.scrollLeft += difference * .14; animationRef.current = requestAnimationFrame(animate) } else { viewport.scrollLeft = targetRef.current; updateActive(); animationRef.current = 0 } }
    const startAnimation = () => { if (!animationRef.current) animationRef.current = requestAnimationFrame(animate) }
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(updateActive) }
    const onWheel = (event) => { if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) { event.preventDefault(); const max = viewport.scrollWidth - viewport.clientWidth; targetRef.current = Math.max(0, Math.min(max, targetRef.current + event.deltaY * scrollSpeed)); startAnimation() } }
    const onKeyDown = (event) => { if (event.key === 'ArrowRight') { event.preventDefault(); focusItem(Math.min(activeRef.current + 1, items.length - 1)); startAnimation() } if (event.key === 'ArrowLeft') { event.preventDefault(); focusItem(Math.max(activeRef.current - 1, 0)); startAnimation() } }
    viewport.addEventListener('scroll', onScroll, { passive: true })
    viewport.addEventListener('wheel', onWheel, { passive: false })
    viewport.addEventListener('keydown', onKeyDown)
    const initialIndex = Math.min(2, Math.max(items.length - 1, 0))
    const initialItem = itemRefs.current[initialIndex]
    if (!initializedRef.current && initialItem) {
      const initialPosition = Math.max(0, Math.min(initialItem.offsetLeft + initialItem.offsetWidth / 2 - viewport.clientWidth / 2, viewport.scrollWidth - viewport.clientWidth))
      viewport.scrollLeft = initialPosition
      targetRef.current = initialPosition
      activeRef.current = initialIndex
      setActive(initialIndex)
      initializedRef.current = true
    } else {
      targetRef.current = viewport.scrollLeft
      requestAnimationFrame(updateActive)
    }
    return () => { cancelAnimationFrame(frame); cancelAnimationFrame(animationRef.current); viewport.removeEventListener('scroll', onScroll); viewport.removeEventListener('wheel', onWheel); viewport.removeEventListener('keydown', onKeyDown) }
  }, [items.length, scrollSpeed])

  const focusIndex = hovered ?? active
  const progress = ((active + 1) / Math.max(items.length, 1)) * 100
  return <section className="circular-gallery" aria-label="证书环形画廊"><div className="circular-gallery__hint"><span>SCROLL TO EXPLORE</span><b>{String(focusIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</b></div><div className="circular-gallery__progress" aria-label={`证书浏览进度 ${active + 1} / ${items.length}`}><span>ARCHIVE PROGRESS</span><div><i style={{ width: `${progress}%` }} /></div><b>{String(active + 1).padStart(2, '0')} — {String(items.length).padStart(2, '0')}</b></div><div className="circular-gallery__viewport" ref={viewportRef} tabIndex="0" onMouseLeave={() => setHovered(null)}>{items.map((item, index) => { const distance = Math.abs(index - focusIndex); const direction = index < focusIndex ? 'left' : 'right'; return <button type="button" ref={node => { itemRefs.current[index] = node }} key={item.image} style={{ '--card-index': index }} className={`circular-gallery__card ${index === focusIndex ? 'is-active' : ''} is-${direction}`} data-distance={Math.min(distance, 3)} onMouseEnter={() => setHovered(index)} onFocus={() => setHovered(index)} onBlur={() => setHovered(null)} onClick={() => focusItem(index)}><img src={item.image} alt={item.label} /><span>{item.label}</span></button> })}</div></section>
}
