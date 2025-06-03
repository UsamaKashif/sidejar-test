import React from 'react'
import FooterIcon from './FooterIcon'
import Image from 'next/image'


const footer_icons = [
    "/note.svg",
    "/sparkle.svg",
    "/paperclip.svg",
    "/emoji-smile.svg",
    "at-handle.svg",
    "/slash.svg"
]

const ChatBox = () => {
    return (
        <section className='w-full bg-white rounded-xl shadow-fancy-2 pb-[6px] overflow-hidden'>
            <textarea className='w-full text-[#000107E1] font-normal text-[14px] pt-3 px-3 h-[44px] outline-none resize-none' placeholder='Type your message here...'></textarea>
            <div className='flex items-center justify-between px-[6px]'>
                <div className='flex items-center gap-3'>
                    <span className='flex items-center gap-[6px]'>
                        {footer_icons.map((icon, index) => (
                            <FooterIcon key={index} src={icon} alt={icon} />
                        ))}
                    </span>
                    <span className='h-[20px] w-[1px] bg-[#000B3618]'></span>
                    <span className='flex items-center gap-1 cursor-pointer'>
                        <Image src="/sparkle-2.svg" alt="sparkle" width={16} height={16} />
                        <p className='text-[#000107E1] font-medium text-xs'>Quick reply with AI</p>
                    </span>
                </div>

                <FooterIcon src="/paperplane.svg" className='bg-[#00104010]' alt="send" width={18} height={18} />
            </div>
        </section>
    )
}

export default ChatBox