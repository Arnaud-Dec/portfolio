// app/projets/[id]/page.tsx

import { projects } from "../../data/projects"
import ProjectContent from "./ProjectContent"

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id) || projects[0]

  return <ProjectContent project={project} />
}
