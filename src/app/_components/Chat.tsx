import Image from 'next/image'
import React from 'react'

const Chat = () => {
    return (
        <section className='w-full bg-[#0062FF15] rounded-xl p-3 h-fit items-start space-y-2 text-[#1E1F24] text-sm'>
            <div className='flex items-start justify-between'>
                <div className='flex items-center gap-1'>
                    <p className='font-medium'>Vanilla AI</p>
                    <p className='text-[#8B8D98] text-xs font-medium'>Suggested</p>
                </div>
                <div className='flex items-center gap-1 cursor-pointer'>
                    <Image src={"/rotate-arrow.svg"} alt="rotate-arrow" className='object-contain' width={16} height={16} />
                    <p className='text-xs font-medium'>Regenerate</p>
                </div>
            </div>

            <p className='font-normal'>Oh no! Sad to hear that, but of course we can give a refund. Can you please provide your order number if you have one? Or email that you’ve used to make this purchase.</p>

            <button className='font-medium text-[#000107E1] underline underline-offset-[6px]'>Reply with this message</button>
        </section>
    )
}

export default Chat