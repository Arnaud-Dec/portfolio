"use client"

import { useEffect, useRef, useState } from "react"

interface Point {
  x: number
  y: number
  vx: number
  vy: number
  connections: number[]
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const pointsRef = useRef<Point[]>([])
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initPoints()
    }

    // Initialize points
    const initPoints = () => {
      const points: Point[] = []
      const numPoints = Math.floor((canvas.width * canvas.height) / 25000) // Adjust density

      for (let i = 0; i < numPoints; i++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          connections: [],
        })
      }

      pointsRef.current = points
    }

    // Update point positions
    const updatePoints = () => {
      const points = pointsRef.current

      points.forEach((point) => {
        // Update position
        point.x += point.vx
        point.y += point.vy

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1

        // Mouse interaction
        const dx = mousePos.x - point.x
        const dy = mousePos.y - point.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 100) {
          point.x += (dx / dist) * 2
          point.y += (dy / dist) * 2
        }
      })
    }

    // Draw everything
    const draw = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const points = pointsRef.current

      // Draw connections
      ctx.beginPath()
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"

      points.forEach((point, i) => {
        points.forEach((otherPoint, j) => {
          if (i === j) return

          const dx = point.x - otherPoint.x
          const dy = point.y - otherPoint.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 150) {
            // Connection distance threshold
            ctx.moveTo(point.x, point.y)
            ctx.lineTo(otherPoint.x, otherPoint.y)
          }
        })
      })

      ctx.stroke()

      // Draw points
      points.forEach((point) => {
        ctx.beginPath()
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw mouse connections
      points.forEach((point) => {
        const dx = mousePos.x - point.x
        const dy = mousePos.y - point.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 150) {
          ctx.beginPath()
          ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 150})`
          ctx.moveTo(point.x, point.y)
          ctx.lineTo(mousePos.x, mousePos.y)
          ctx.stroke()
        }
      })
    }

    // Animation loop
    const animate = () => {
      updatePoints()
      draw()
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Event listeners
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    const handleResize = () => {
      setCanvasDimensions()
    }

    // Initialize
    setCanvasDimensions()
    canvas.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)
    animate()

    // Cleanup
    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [mousePos])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

