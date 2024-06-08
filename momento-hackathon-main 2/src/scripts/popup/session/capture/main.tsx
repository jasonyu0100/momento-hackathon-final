import React from "react";

export function SessionCapture({ capture, onClick} : { capture: any, onClick: () => void}) {
    return (
        <div className="bg-black w-[7rem] aspect-square border-black border-[1px] cursor-pointer" onClick={onClick}>
            <img src={capture.url} alt="img" className="object-cover w-full h-full" />
        </div>
    )
}
