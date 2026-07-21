import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './BounceCards.css'

export default function BounceCards({ images = [], labels = [], className = '', animationDelay = .15, animationStagger = .08, enableHover = true }) {
  const containerRef = useRef(null)
  const transforms = images.map((_, i) => { const center = (images.length - 1) / 2; const distance = i - center; return `rotate(${distance * 4.2}deg) translate(${distance * 66}px, ${Math.abs(distance) * 6}px)` })
  useEffect(() => {
    const ctx = gsap.context(() => { gsap.fromTo('.bounce-card', { scale: .3, opacity: 0, y: 35 }, { scale: 1, opacity: 1, y: 0, stagger: animationStagger, delay: animationDelay, ease: 'elastic.out(1, .62)', duration: .85 }) }, containerRef)
    return () => ctx.revert()
  }, [animationDelay, animationStagger])
  const reset = () => { const q = gsap.utils.selector(containerRef); images.forEach((_, i) => gsap.to(q(`.bounce-card-${i}`), { transform: transforms[i] ?? 'none', duration: .45, ease: 'back.out(1.18)', overwrite: 'auto' })) }
  const move = (index) => { if (!enableHover) return; const q = gsap.utils.selector(containerRef); images.forEach((_, i) => { const offset = i < index ? -38 : i > index ? 38 : 0; const transform = i === index ? 'rotate(0deg) translate(0, -16px) scale(1.035)' : `${transforms[i] ?? 'none'} translate(${offset}px, 0)`; gsap.to(q(`.bounce-card-${i}`), { transform, duration: .38, ease: 'back.out(1.12)', overwrite: 'auto' }) }) }
  return <div className={`bounce-cards ${className}`} ref={containerRef} onMouseLeave={reset}>{images.map((src, i) => <button type="button" className={`bounce-card bounce-card-${i}`} style={{ transform: transforms[i] }} onMouseEnter={() => move(i)} key={src} aria-label={`查看证书 ${labels[i] ?? i + 1}`}><img src={src} alt="" /><span>{labels[i] ?? String(i + 1).padStart(2, '0')}</span></button>)}</div>
}
