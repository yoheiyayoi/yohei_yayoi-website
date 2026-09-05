import React from 'react'
import { type Metadata } from "next/types";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangleIcon, CornerUpLeft } from "lucide-react"
import { Button } from '@/components/ui/button'
import { Link } from 'next-view-transitions'
import LinkIcon from '@/components/LinkIcon'

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Roblox",
        description: "yooo_'s (yohei_yayoi) portfolio website",
    };
}

export default function page() {
    return (
        <div className="container max-w-3xl mx-auto py-10">
            <Alert className="mt-2 w-full border-amber-200 bg-amber-50 text-amber-900">
                <AlertTriangleIcon />
                <AlertTitle className='text-xl font-semibold'>Coming soon</AlertTitle>
                <AlertDescription className='text-lg'>
                    ยังไม่เสร็จ
                </AlertDescription>
            </Alert>
        </div>
    )
}
