import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import TechBadge from "./tech-badge"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
}

export default function ProjectCard({ id, title, description, image, technologies }: ProjectCardProps) {
  return (
    <Link href={`/projets/${id}`} className="group">
      <div className="overflow-hidden rounded-lg border border-white/10 bg-black hover:border-white/30 transition-all duration-300 backdrop-blur-sm bg-white/5">
        <div className="relative h-60 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            {technologies.slice(0, 3).map((tech, index) => (
              <TechBadge key={index} name={tech} />
            ))}
            {technologies.length > 3 && <span className="text-xs text-white/70">+{technologies.length - 3}</span>}
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold">{title}</h3>
            <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <p className="mt-2 text-gray-400">{description}</p>
        </div>
      </div>
    </Link>
  )
}

