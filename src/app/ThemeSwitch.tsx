'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) {
      return
    }

    const root = document.documentElement
    root.classList.toggle("dark", resolvedTheme === "dark")
    root.classList.toggle("light", resolvedTheme !== "dark")
  }, [mounted, resolvedTheme])

  if (!mounted) return (
    <Image
      src='data:image/svg+xml;base64,data:image/svg+xml;base64,PHN2ZyBzdHlsZT0iZmlsbDpub25lOyIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIHN0cm9rZT0iIzAwMCIgZD0iTTEyIDR2MiIvPjxwYXRoIHN0cm9rZT0iIzAwMCIgZD0iTTEyIDE4djIiLz48cGF0aCBzdHJva2U9IiMwMDAiIGQ9Ik0zLjUgMy41TDQuOSA1Ii8+PHBhdGggc3Ryb2tlPSIjMDAwIiBkPSJNMTkuMSAxOS4xTDIwLjUgMjAuNSIvPjxwYXRoIHN0cm9rZT0iIzAwMCIgZD0iTTIgMTJINCIvPjxwYXRo+PHBhdGggc3Ryb2tlPSIjMDAwIiBkPSJNMTkuMSAxOS4xTDIwLjUgMjAuNSIvPjxwYXRoIHN0cm9rZT0iIzAwMCIgZD0iTTIgMTJINCIvPjxwYXRoIHN0cm9rZT0iIzAwMCIgZD0iTTE4IDIySDEyIi8+PHBhdGggc3Ryb2tlPSIjMDAwIiBkPSJNNSA0LjkgMy41IDMuNSIvPjxwYXRoIHN0cm9rZT0iIzAwMCIgZD0iTTE5LjEgNC45IDIwLjUgMy41Ii8+PHBhdGggc3Ryb2tlPSIjMDAwIiBkPSJNMiAxMmgydiIvPjxwYXRoIHN0cm9rZT0iIzAwMCIgZD0iTTE4IDEyaDJ2MiIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjQiIHN0cm9rZT0iIzAwMCIvPjwvc3ZnPg=='
      width={36}
      height={36}
      sizes="36x36"
      alt="Loading Light/Dark Toggle"
      priority={false}
      title="Loading dark/light toggle"

    />
  )

  if (resolvedTheme === "dark") {
    return <FiSun onClick={() => setTheme("light")} className="h-6 w-6 cursor-pointer" />
  }

  if (resolvedTheme === "light") {
    return <FiMoon onClick={() => setTheme("dark")} className="h-6 w-6 cursor-pointer" />
  }

  return null;
}
