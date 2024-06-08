import React from "react";

export function Capture() {
    return (
        <div>
            <div className="w-[21rem] aspect-square border-black border-[1px] relative cursor-pointer border-white border-opacity-30">
                <img
                    src={
                        'https://images.unsplash.com/photo-1717684566059-4d16b456c72a?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }
                    alt="img"
                    className="object-cover w-full h-full"
                />
                <div className="w-full h-full bg-black bg-opacity-30 absolute top-[0px] flex items-center justify-center">
                    <p className="text-white font-bold text-3xl">Yosemite</p>
                </div>
            </div>
                    <p className="text-white mt-[1rem] p-[1rem] text-md">"A picturesque landscape with infinite possibilites"</p>
        </div>
    )
}
