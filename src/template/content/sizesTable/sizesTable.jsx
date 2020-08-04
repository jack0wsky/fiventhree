import React from 'react'
import {
  Wrapper,
  Table,
  Size,
  TableHead,
  TableBody,
  TableRow,
  TableValue,
  TableDescription,
} from './sizesTable.styled'

const SizesTable = () => {
  return (
    <Wrapper>
      <Table>
        <TableHead>
          <Size>
            <th>Rozmiar</th>
            <th>S</th>
            <th>M</th>
            <th>L</th>
            <th>XL</th>
          </Size>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableValue>Szerokość</TableValue>
            <TableValue>51</TableValue>
            <TableValue>53</TableValue>
            <TableValue>56</TableValue>
            <TableValue>58</TableValue>
          </TableRow>
          <TableRow>
            <TableDescription>Długość</TableDescription>
            <TableDescription>70</TableDescription>
            <TableDescription>72</TableDescription>
            <TableDescription>74</TableDescription>
            <TableDescription>76</TableDescription>
          </TableRow>
        </TableBody>
      </Table>
    </Wrapper>
  )
}

export default SizesTable
