import { useEffect, useRef } from 'react'

function MouseTrail() {
  const canvasRef = useRef(null)
  const trail = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

 
    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    window.addEventListener('resize', handleResize)

    const handleMouseMove = (e) => {
      trail.current.push({ x: e.clientX, y: e.clientY })
      if (trail.current.length > 20) trail.current.shift()
    }
    window.addEventListener('mousemove', handleMouseMove)


    let frameId
    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      for (let i = 0; i < trail.current.length; i++) {
        const p = trail.current[i]
        ctx.beginPath()
        ctx.arc(p.x, p.y, 16 - i * 0.7, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(243,117,43,${(1 - i / trail.current.length) * 0.7})` 
        ctx.shadowColor = '#F3752B'
        ctx.shadowBlur = 8
        ctx.fill()
      }
      frameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 20,
      }}
    />
  )
}

export default MouseTrail