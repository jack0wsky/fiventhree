import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  height: 100px;
`
export const Table = styled.table`
  width: 100%;
  height: 100%;
`
export const TableHead = styled.thead`
  display: flex;
  justify-content: space-between;
`
export const TableBody = styled.tbody`
  display: flex;
  justify-content: space-between;
  flex-flow: column;
`
export const TableRow = styled.tr`
  display: flex;
  justify-content: space-between;

  & > td:nth-child(1) {
    width: 100px;
  }
`
export const TableValue = styled.td`
  text-align: left;
`
export const Size = styled.tr`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & > th:nth-child(1) {
    width: 100px;
    text-align: left;
  }
`
export const TableDescription = styled.td``
