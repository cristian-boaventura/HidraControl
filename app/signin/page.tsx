'use client'

import { Switch, Card, Text } from '@tremor/react'
import { useState } from 'react'

export default function Signin() {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false)

  const handleSwitchChange = (value: boolean) => {
    setIsSwitchOn(value)
  }

  return (
    <main className="h-screen flex align-middle">
      <Card className="w-fit m-auto align-middle">
        <label htmlFor="switch">Iniciar Sesión</label>
        <Switch
          id="switch"
          checked={isSwitchOn}
          onChange={handleSwitchChange}
          error={isSwitchOn}
          errorMessage="Error"
        />
      </Card>
    </main>
  )
}
