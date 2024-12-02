'use client'

import { Button } from './Button'

interface CollapsibleProps {
  title: string
  children: React.ReactNode
  isOpen: boolean
  onToggle: (isOpen: boolean) => void 
}

export function Collapsible({ title, children, isOpen, onToggle }: CollapsibleProps) {
  const handleToggle = () => {
    onToggle(!isOpen)
  }
  
  return (
    <div className="border rounded-md mb-4">
      <Button onClick={handleToggle} className="w-full justify-between">
        {title}
        {isOpen ? (
          <span className="h-4 w-4">▲</span>
        ) : (
          <span className="h-4 w-4">&#9660;</span>
        )}
      </Button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  )
}
