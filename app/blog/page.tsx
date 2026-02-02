import { Book, InfoIcon } from 'lucide-react'
import React from 'react'

import {
    Alert,
    AlertAction,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

export default function page() {
    return (
        <div className="container max-w-3xl mx-auto py-10">
            <div className="mb-5">
                <h1 className="font-bold text-xl md:text-2xl mb-3 flex items-center gap-2">
                    <Book className="w-7 h-7 text-blue-500" />
                    Blogs
                </h1>

                <p className="text-md text-zinc-500">
                    พื้นที่เล่าเรื่องราว ความคิด และบันทึกการเดินทาง หรือการระบาย หรืออะไรอีกดี ไม่รู้
                </p>
            </div>

            <div>
                <Alert>
                    <InfoIcon />
                    <AlertTitle className="font-semibold">ไม่มี Blog อะไรในขณะนี้</AlertTitle>
                </Alert>
            </div>
        </div>
    )
}
