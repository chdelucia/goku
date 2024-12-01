'use client'

import { useAppStore } from '../store/store';
import { Button } from '@goku/ui';

interface SaveChangesButtonProps {
  data: any[]
  filename: string
}

export function SaveChangesButton({ data, filename }: SaveChangesButtonProps) {
  const hasChanges = useAppStore((state) => state.hasChanges)
  const setHasChanges = useAppStore((state) => state.setHasChanges)

  const handleSaveChanges = () => {
    const jsonString = `const ${filename} = ${JSON.stringify(data, null, 2)}

export default ${filename};
`
    const blob = new Blob([jsonString], { type: 'application/javascript' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${filename}.js`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setHasChanges(false)
  }

  if (!hasChanges) return null

  return (
    <Button onClick={handleSaveChanges} className="ml-4">
      Guardar cambios
    </Button>
  )
}

