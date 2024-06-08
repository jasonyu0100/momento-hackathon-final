import React, { useState } from 'react'
import { HomeSession } from './capture/main'

export function Home({ onClick }: { onClick: () => void }) {
    const [sessions, setSessions] = useState([
        {
            name: 'Shopping',
            url: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Coding',
            url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Travel',
            url: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Inspiration',
            url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ])
    return (
        <div>
            <p className="text-slate-300 text-md font-bold">Sessions - 5/9</p>
            <br></br>
            <div className="flex flex-row flex-wrap">
                {sessions.map((session, index) => (
                    <HomeSession key={index} session={session} onClick={onClick} />
                ))}
                <div className="w-[7rem] aspect-square border-black border-[1px] relative cursor-pointer items-center justify-center flex">
                    <div className="w-[3rem] h-[3rem] bg-slate-700 rounded-full text-white flex items-center justify-center">
                        <p className="text-slate-300 font-bold mb-[3px]">+</p>
                    </div>
                </div>
            </div>
            <p className="text-slate-500 font-bold text-sm mt-[7rem] animate-pulse">Upgrade to Pro</p>
        </div>
    )
}
