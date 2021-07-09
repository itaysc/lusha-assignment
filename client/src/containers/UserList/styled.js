import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr) 2fr 2fr;
  grid-template-rows: ${p=>`repeat(${p.rowsCount}, 40px)`};
  row-gap: 30px;
  width: 80%;
  max-height: 400px;
  overflow-y: scroll;
  border: 1px solid #99ccff;
  margin: 30px auto;
`;

const Cell = styled.div`
  grid-row: ${p=>`${p.index} / ${p.index+1}`};
  font-size: 1.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled(Cell)`
  grid-row: 1 / 2;
  font-size: 2rem;
  font-weight: bold;
  border-bottom: 1px solid #99ccff;
  position: sticky;
  z-index: 100;
  background-color: #99ccff;
  color: #ffffff;
  width: 100%;
  height: 60px;
  top: 0;
  text-align: center;
`;

export const HeaderFirstName = styled(Header)`
  grid-column: 1 / 2;
`;
export const HeaderLastName = styled(Header)`
  grid-column: 2 / 3;
`;
export const HeaderEmail = styled(Header)`
  grid-column: 3 / 4;
`;
export const HeaderDescription = styled(Header)`
  grid-column: 4 / 6;
`;
export const HeaderPassword = styled(Header)`
  grid-column: 6 / 7;
`;


export const CellFirstName =styled(Cell)`
  grid-column: 1 / 2;
`;

export const CellLastName =styled(Cell)`
  grid-column: 2 / 3;
`;

export const CellEmail =styled(Cell)`
  grid-column: 3 / 4;
`;

export const CellDescription =styled(Cell)`
  grid-column: 4 / 6;
`;

export const CellPassword =styled(Cell)`
  grid-column: 6 / 7;
`;
