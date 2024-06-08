import React from "react";

export function HomeSession({ session, onClick} : { session: any, onClick: () => void}) {
    return (
        <div className="w-[7rem] aspect-square border-black border-[1px] relative cursor-pointer" onClick={onClick}>
            <img src={session.url} alt="img" className="object-cover w-full h-full" />
            <div className="w-full h-full bg-black bg-opacity-30 absolute top-[0px] flex items-center justify-center" >
                <p className="text-white font-bold">{session.name}</p>
            </div>
        </div>
    )
}
