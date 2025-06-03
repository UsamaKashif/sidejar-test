import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface FooterIconProps {
    src: string
    alt: string
    width?: number
    height?: number
    className?: string
}

const FooterIcon = ({
    src,
    alt,
    width = 16,
    height = 16,
    className
}: FooterIconProps) => {
    return (
        <div className={twMerge("w-[32px] h-[32px] flex items-center justify-center rounded-[6px] cursor-pointer", className)}>
            <Image src={src} alt={alt} width={width} height={height} />
        </div>
    )
}

export default FooterIcon