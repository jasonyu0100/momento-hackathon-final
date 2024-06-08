import React, { useState } from 'react'
import { SessionCapture } from './session/capture/main'
import { Session } from './session/main'
import { Home } from './home/main'
import { Capture } from './capture/main'

function Popup() {
    const [view, setView] = useState('session')
    const [sessionId, setSessionId] = useState('')
    const [captureId, setCaptureId] = useState('')
    const [sessions, setSessions] = useState([
        {
            name: 'My Session',
            captures: [
                {
                    url: 'https://images.unsplash.com/photo-1716660565802-52f1a05c4f79?q=80&w=3600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    origin: 'https://www.uniqlo.com',
                    annotation: 'This is an image'
                },
                {
                    url: 'https://plus.unsplash.com/premium_photo-1672947568059-23e2f914eb6b?q=80&w=3790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    origin: 'https://www.uniqlo.com',
                    annotation: 'This is an image'
                },
                {
                    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    origin: 'https://www.uniqlo.com',
                    annotation: 'This is an image'
                },
                {
                    url: 'https://images.unsplash.com/photo-1717457779705-f6bb71b1c7fd?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    origin: 'https://www.uniqlo.com',
                    annotation: 'This is an image'
                },
                {
                    url: 'https://images.unsplash.com/photo-1717684566059-4d16b456c72a?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    origin: 'https://www.uniqlo.com',
                    annotation: 'This is an image'
                }
            ]
        },
        {
            name: 'Session 2',
            captures: [
                'https://via.placeholder.com/150',
                'https://via.placeholder.com/150',
                'https://via.placeholder.com/150'
            ]
        }
    ])
    const [session, setSession] = useState(sessions[0])

    return (
        <div className="h-full inline-flex flex-col p-[1rem] border shadow w-[23rem] aspect-[12/16] flex-shrink-0 bg-slate-950 border-slate-950">
            <div className="flex flex-row">
                <div className="flex flex-row items-center space-x-[1rem]">
                    <p
                        className="font-bold text-sm text-slate-500 cursor-pointer"
                        onClick={() => setView('home')}
                    >
                        Home
                    </p>
                    {(view =='session' || view == 'capture') && (
                        <>
                            <p className="font-bold text-sm text-slate-500">/</p>
                            <p
                                className="font-bold text-sm text-slate-500 cursor-pointer"
                                onClick={() => setView('session')}
                            >
                                Session
                            </p>
                        </>
                    )}
                    {view === 'capture' && (
                        <>
                            <p className="font-bold text-sm text-slate-500">/</p>
                            <p
                                className="font-bold text-sm text-slate-500 cursor-pointer"
                                onClick={() => setView('capture')}
                            >
                                Capture
                            </p>
                        </>
                    )}
                </div>
            </div>
            <div className="w-full h-[1px] bg-slate-500 bg-opacity-30 my-[1rem]"></div>
            {view === 'home' && (
                <div className="flex flex-row flex-wrap w-[21rem]">
                    <Home onClick={() => setView("session")} />
                </div>
            )}
            {view === 'session' && (
                <div className="flex flex-row flex-wrap w-[21rem]">
                    <Session session={session} onClick={() => setView("capture")}/ >
                </div>
            )}
            {view === 'capture' && (
                <div className="flex flex-row flex-wrap w-[21rem]">
                    <Capture />
                </div>
            )}
        </div>
    )
}

export default Popup
