'use client'

import {
  ArchiveIcon,
  StatusOnlineIcon,
  ExclamationIcon,
} from '@heroicons/react/outline'
import {
  MultiSelect,
  MultiSelectItem,
  Card,
  Title,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Subtitle,
  Badge,
  Flex,
  Icon,
  Legend,
} from '@tremor/react'
import Link from 'next/link'
import { useState } from 'react'
import { Cabezal } from './AdminPage'

export default function AdminTables({
  cabezales,
  user,
}: {
  cabezales: Cabezal[]
  user: any
}) {
  const [selectedNames, setSelectedNames] = useState<string[]>([])

  const isCabezalSelected = (cabezal: Cabezal) =>
    selectedNames.includes(cabezal.name) || selectedNames.length === 0

  const selectVariance = (variance: string) => {
    if (variance === 'low') {
      return (
        <Badge icon={ArchiveIcon} color="gray">
          {variance}
        </Badge>
      )
    } else if (variance === 'medium') {
      return <Badge icon={StatusOnlineIcon}>{variance}</Badge>
    }
  }

  const selectAlert = (alert: string) =>
    alert === 'on' ? (
      <Flex justifyContent="start">
        <Icon className="pl-0 " icon={ExclamationIcon} color="amber" />
        {alert}
      </Flex>
    ) : (
      alert
    )

  const selectStatus = (status: string) => (
    <Legend
      categories={[`${status}`]}
      colors={[
        `${
          status === 'overperforming'
            ? 'emerald'
            : status === 'average'
            ? 'yellow'
            : 'red'
        }`,
      ]}
    />
  )

  return (
    <>
      <Title className="text-4xl font-bold mt-6">
        Cliente: {user.username}
      </Title>
      <Subtitle className="text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </Subtitle>
      <MultiSelect
        className="max-w-full sm:max-w-xs mt-5"
        onValueChange={setSelectedNames}
        placeholder="Seleccionar Cabezal..."
      >
        {cabezales.map((item) => (
          <MultiSelectItem key={item.name} value={item.name}>
            {item.name}
          </MultiSelectItem>
        ))}
      </MultiSelect>
      <Card className="mt-5">
        <Title className="text-lg font-medium">Lorem Ipsum</Title>
        <Table className="mt-3">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Cabezal</TableHeaderCell>
              <TableHeaderCell className="">Leads</TableHeaderCell>
              <TableHeaderCell className="">Description</TableHeaderCell>
              <TableHeaderCell className="">Variance</TableHeaderCell>
              <TableHeaderCell className="">Alert</TableHeaderCell>
              <TableHeaderCell className="">Status</TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {cabezales
              .filter((item) => isCabezalSelected(item))
              .map((item) => (
                <TableRow key={item.name}>
                  <TableCell>
                    <Link href={`/dashboard${item.link}`}> {item.name}</Link>
                  </TableCell>
                  <TableCell className="">
                    <Subtitle>{item.leads}</Subtitle>
                  </TableCell>
                  <TableCell className="">{item.description}</TableCell>
                  <TableCell className="">
                    {selectVariance(item.variance)}
                  </TableCell>
                  <TableCell className="">{selectAlert(item.alert)}</TableCell>
                  <TableCell className="">
                    {selectStatus(item.status)}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Card>
    </>
  )
}
