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
import { useState } from 'react'
import { StatusOnlineIcon } from '@heroicons/react/outline'
import { ArchiveIcon, ExclamationIcon } from '@heroicons/react/solid'
import Link from 'next/link'

export type SalesPerson = {
  name: string
  leads: number
  description: string
  variance: string
  alert: string
  status: string
  link: string
}

export const salesPeople: SalesPerson[] = [
  {
    name: 'Cabezal 1',
    leads: 45,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque!',
    variance: 'low',
    alert: 'off',
    status: 'overperforming',
    link: '/cabezal1',
  },
  {
    name: 'Cabezal 2',
    leads: 35,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque!',
    variance: 'low',
    alert: 'on',
    status: 'average',
    link: '/cabezal2',
  },
  {
    name: 'Cabezal 3',
    leads: 52,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque!',
    variance: 'medium',
    alert: 'off',
    status: 'underperforming',
    link: '/cabezal3',
  },
  {
    name: 'Cabezal 4',
    leads: 22,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque!',
    variance: 'low',
    alert: 'off',
    status: 'overperforming',
    link: '/cabezal4',
  },
  {
    name: 'Cabezal 5',
    leads: 49,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque!',
    variance: 'low',
    alert: 'off',
    status: 'overperforming',
    link: '/cabezal5',
  },
]

export default function CabezalesTable() {
  const [selectedNames, setSelectedNames] = useState<string[]>([])

  const isSalesPersonSelected = (salesPerson: SalesPerson) =>
    selectedNames.includes(salesPerson.name) || selectedNames.length === 0

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
      <Text>Lorem Ipsum</Text>
      <Title className="text-4xl font-bold mt-6"> Estado de Cabezales </Title>
      <Subtitle className="text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </Subtitle>
      <MultiSelect
        className="max-w-full sm:max-w-xs mt-5"
        onValueChange={setSelectedNames}
        placeholder="Seleccionar Cabezal..."
      >
        {salesPeople.map((item) => (
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
            {salesPeople
              .filter((item) => isSalesPersonSelected(item))
              .map((item) => (
                <TableRow key={item.name}>
                  <TableCell>
                    <Link href={item.link}> {item.name}</Link>
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
