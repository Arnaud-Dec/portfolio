import Image from "next/image"
import { fixAssetPath } from "@/lib/fixAssetPath"

export default function ProfileImage() {
  return (
    <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-8">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-white/5 animate-pulse"></div>
      <Image
        src={fixAssetPath("/assets/perso/pp.jpg?height=224&width=224")}
        alt="Arnaud Decourt"
        width={224}
        height={224}
        className="rounded-full border-2 border-white/10 object-cover"
      />
      <div className="absolute -inset-1 rounded-full border border-white/20 animate-pulse"></div>
    </div>
  )
}
