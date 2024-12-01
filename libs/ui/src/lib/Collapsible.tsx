'use client'

import { useState } from 'react'
import { Button } from './Button'

interface CollapsibleProps {
  title: string
  children: React.ReactNode
}

export function Collapsible({ title, children }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border rounded-md mb-4">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full justify-between"
      >
        {title}
        {isOpen ? <span className="h-4 w-4">&#94;</span> : <span className="h-4 w-4">&#9660;</span>}
      </Button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  )
}

