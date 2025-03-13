"use client"

import { useEffect, useRef } from "react"

export default function BackgroundShapes() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create shapes
    const shapes: Shape[] = []
    const shapeCount = 15

    for (let i = 0; i < shapeCount; i++) {
      shapes.push(new Shape(canvas))
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw shapes
      shapes.forEach((shape) => {
        shape.update()
        shape.draw(ctx)
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-20" />
}

class Shape {
  x: number
  y: number
  size: number
  type: "circle" | "square" | "triangle"
  speed: number
  direction: number
  opacity: number
  canvas: HTMLCanvasElement

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 100 + 50
    this.type = ["circle", "square", "triangle"][Math.floor(Math.random() * 3)] as "circle" | "square" | "triangle"
    this.speed = Math.random() * 0.5 + 0.1
    this.direction = Math.random() * Math.PI * 2
    this.opacity = Math.random() * 0.5 + 0.1
  }

  update() {
    // Move in the current direction
    this.x += Math.cos(this.direction) * this.speed
    this.y += Math.sin(this.direction) * this.speed

    // Bounce off edges
    if (this.x < 0 || this.x > this.canvas.width) {
      this.direction = Math.PI - this.direction
    }
    if (this.y < 0 || this.y > this.canvas.height) {
      this.direction = -this.direction
    }

    // Slowly change direction
    this.direction += (Math.random() - 0.5) * 0.02
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.globalAlpha = this.opacity
    ctx.strokeStyle = "white"
    ctx.lineWidth = 1

    switch (this.type) {
      case "circle":
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2)
        ctx.stroke()
        break
      case "square":
        ctx.beginPath()
        ctx.strokeRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size)
        break
      case "triangle":
        const height = (this.size * Math.sqrt(3)) / 2
        ctx.beginPath()
        ctx.moveTo(this.x, this.y - this.size / 2)
        ctx.lineTo(this.x + this.size / 2, this.y + height / 2)
        ctx.lineTo(this.x - this.size / 2, this.y + height / 2)
        ctx.closePath()
        ctx.stroke()
        break
    }

    ctx.restore()
  }
}

