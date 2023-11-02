'use client'

import {
  Flex,
  Icon,
  MultiSelect,
  MultiSelectItem,
  Subtitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
  Card,
  Text,
  Badge,
  Legend,
} from '@tremor/react'
import { useEffect, useState } from 'react'
import { StatusOnlineIcon } from '@heroicons/react/outline'
import { ArchiveIcon, ExclamationIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'
import { supabaseClient } from '@/lib/db'
import AdminTables from './AdminTables'

export type Cabezal = {
  name: string
  leads: number
  description: string
  variance: string
  alert: string
  status: string
  link: string
  user_id: string
}

export default function AdminPage() {
  const { getToken } = useAuth()
  const [usersList, setUsersList] = useState<object[]>([])
  const [cabezales, setCabezales] = useState<Cabezal[]>([])

  useEffect(() => {
    async function getUsersAndCabezales() {
      const supabaseAccessToken = (await getToken({
        template: 'supabase',
      })) as string
      const supabase = await supabaseClient(supabaseAccessToken)
      const usersData = await supabase.from('users').select()
      if (usersData.data) {
        setUsersList(usersData.data)
      }
      const cabezalesData = await supabase.from('cabezales').select()
      if (cabezalesData.data) {
        setCabezales(cabezalesData.data)
      }
    }
    getUsersAndCabezales()
  }, [getToken])

  return (
    <>
      <Title>Admin Dashboard</Title>

      {usersList.map((user: any) => (
        <AdminTables
          key={user.user_id}
          user={user}
          cabezales={cabezales.filter((c) => c.user_id === user.user_id)}
        />
      ))}
    </>
  )
}
