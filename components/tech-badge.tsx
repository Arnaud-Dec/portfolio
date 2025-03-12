interface TechBadgeProps {
    name: string
  }
  
  export default function TechBadge({ name }: TechBadgeProps) {
    return (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20">
        {name}
      </span>
    )
  }
  
  