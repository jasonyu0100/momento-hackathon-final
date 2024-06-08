import React from 'react'
import { SessionCapture } from './capture/main'

export function Session({ session, onClick }: { session: any; onClick: () => void }) {
    return (
        <div className="flex flex-col space-y-[2rem]">
            <div className="flex flex-row space-x-[1rem] items-center">
                <img
                    className="w-[6rem] h-[6rem] m-[0.5rem] aspect-square rounded-full border-white border-[1px] animate-spin"
                    src="https://images.unsplash.com/photo-1696549999348-71ec08f04cc1?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ></img>
                <div className="flex flex-col h-full p-[1rem] space-y-[0.5rem]">
                    <p className="font-bold text-slate-300">{session.name}</p>
                    <p className=" text-white text-xs text-slate-500">
                        An assortment of images. It includes an eagle, a man walking up stairs and
                        some beautiful landscapes.
                    </p>
                </div>
            </div>
            <div className="flex flex-row flex-wrap">
                {session.captures.map((capture, index) => (
                    <SessionCapture key={index} capture={capture} onClick={onClick} />
                ))}
                <div className="w-[7rem] aspect-square border-black border-[1px] relative cursor-pointer items-center justify-center flex">
                    <div className="w-[3rem] h-[3rem] bg-slate-700 rounded-full text-white flex items-center justify-center">
                        <p className="text-slate-300 font-bold mb-[3px]">+</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-slate-500 bg-opacity-30 my-[1rem]"></div>
            <div className="flex flex-col space-y-[0.5rem]">
                <p className="font-bold text-white text-xs text-slate-500">Links</p>
                <ol className="text-slate-500 text-sm">
                    <li>www.uniqlo.com</li>
                    <li>www.vogue.com</li>
                    <li>www.theiconic.com</li>
                </ol>
            </div>
        </div>
    )
}
