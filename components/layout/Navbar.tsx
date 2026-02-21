"use client"

import { cn } from '@/lib/utils'
import { Link } from 'next-view-transitions'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import { Menu, X } from 'lucide-react'

const Links = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '/work' },
    { name: 'Blog', href: '/blog' },
]

export default function Navbar() {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOpen(false)
    }, [pathname])

    return (
        <header className="sticky top-0 left-0 z-50 bg-white/50 backdrop-blur-md border-b border-gray-200 w-full">
            <div className="p-4">
                <div className="flex items-center justify-between max-w-4xl mx-auto">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 order-first" onClick={() => setOpen(false)}>
                        <img src="/yooo_.png" className="max-h-8" alt="yooo_ Logo" />
                    </Link>

                    {/* Mobile toggle */}
                    <Button
                        type="button"
                        className="sm:hidden bg-transparent text-black"
                        size="icon"
                        aria-label="Toggle navigation"
                        aria-expanded={open}
                        aria-controls="mobile-nav"
                        onClick={() => setOpen((v) => !v)}
                    >
                        {/* simple icon swap */}
                        <Menu className={cn('h-5 w-5', open ? 'hidden' : 'block')} />
                        <X className={cn('h-5 w-5', open ? 'block' : 'hidden')} />
                    </Button>

                    {/* Desktop nav */}
                    <div className="hidden sm:flex items-center">
                        {Links.map((link) => {
                            const isActive =
                                link.href === '/'
                                    ? pathname === '/'
                                    : pathname === link.href || pathname.startsWith(`${link.href}/`)

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        'mx-2 font-medium transition hover:text-gray-900',
                                        isActive ? 'text-gray-900 underline underline-offset-3' : 'text-gray-500'
                                    )}
                                >
                                    {link.name}
                                </Link>
                            )
                        })}
                    </div>
                </div>

                {/* Mobile menu (slide-down) */}
                <div
                    className={cn(
                        'sm:hidden max-w-4xl mx-auto overflow-hidden transition-[max-height,opacity] duration-200',
                        open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    )}
                >
                    <nav
                        id="mobile-nav"
                        className="mt-3 rounded-lg border border-gray-200/70 bg-white/40 backdrop-blur-sm"
                    >
                        <div className="flex flex-col p-2">
                            {Links.map((link) => {
                                const isActive =
                                    link.href === '/'
                                        ? pathname === '/'
                                        : pathname === link.href || pathname.startsWith(`${link.href}/`)

                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                            'px-3 py-2 rounded-md font-medium transition hover:bg-white/50 hover:text-gray-900',
                                            isActive ? 'text-gray-900 bg-white/50' : 'text-gray-600'
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
