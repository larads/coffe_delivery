import Image from 'next/image'

interface CardProps {
  image: string
}

export function Card({ image }: CardProps) {
  return (
    <div className="bg-base-card relative rounded-tr-lg rounded-bl-4xl px-6 pb-5 min-w-[256px] min-h-[310px]">
      <Image
        src={image}
        alt=""
        width={120}
        height={120}
        quality={100}
        className="absolute top-0 -translate-y-1/4 translate-x-1/2 left-0"
      />
    </div>
  )
}
