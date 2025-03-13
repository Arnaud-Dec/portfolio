import Image from "next/image"

export default function ProfileImage() {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-white/5 animate-pulse"></div>
      <Image
        src="/placeholder.svg?height=160&width=160"
        alt="Arnaud Decourt"
        width={160}
        height={160}
        className="rounded-full border-2 border-white/10 object-cover"
      />
      <div className="absolute -inset-1 rounded-full border border-white/20 animate-pulse"></div>
    </div>
  )
}

