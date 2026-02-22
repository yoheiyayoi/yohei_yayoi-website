import { Link } from 'next-view-transitions';
import React from 'react'
import { Button } from './ui/button';
import { ArrowLeftIcon } from 'lucide-react';

export default function LinkIcon({ href, text }: { href: string; text: string }) {
    return (
        <Link href={href as any}>
            <Button variant="ghost" className="transition text-gray-600 duration-300 hover:scale-105 hover:rotate-3">
                <ArrowLeftIcon className="size-4" />
                {text}
            </Button>
        </Link>
    )
}
