"use client";

import Image from "next/image";

export default function SealWalker() {
    return (
        <div className="relative mt-5 h-12 w-full max-w-sm overflow-hidden">
            <div className="absolute bottom-0 animate-seal-walk">
                <Image
                    src="/seal.png"
                    alt="A tiny seal walking around"
                    width={48}
                    height={48}
                    className="size-12 object-contain"
                />
            </div>
        </div>
    );
}
