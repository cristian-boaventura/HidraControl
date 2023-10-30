'use client'

import { Switch, Card, Text } from '@tremor/react'

export default function Signin() {
  return (
    <main className="h-screen flex align-middle">
      <Card className="w-fit m-auto align-middle">
        <Text>Iniciar Sesión</Text>
        <Switch />
      </Card>
    </main>
  )
}
