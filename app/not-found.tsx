import React from 'react'

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangleIcon, CornerUpLeft } from "lucide-react"
import { Button } from '@/components/ui/button'
import { Link } from 'next-view-transitions'
import LinkIcon from '@/components/LinkIcon'

export default function NotFound() {
    return (
        <div className="container max-w-3xl mx-auto py-10">
            <LinkIcon href="/" text="กลับไปที่ home" />
            <Alert className="mt-2 w-full border-amber-200 bg-amber-50 text-amber-900">
                <AlertTriangleIcon />
                <AlertTitle className='text-xl font-semibold'>ไม่พบ | 404</AlertTitle>
                <AlertDescription className='text-lg'>
                    ขออภัย เราไม่พบหน้าที่คุณกำลังมองหา ลองตรวจสอบ URL หรือลองกลับไปที่หน้าหลัก
                </AlertDescription>
            </Alert>
        </div>
    )
}
