import React from 'react';
import Card from '../Card';
import CardContent from '@material-ui/core/CardContent';

export default {
  title: 'Card-Mui/Card'
};

export const Default = () => {
  return (
    <>
      {new Array(3).fill(null).map((_, i) => (
        <Padding>
          <Card>
            <CardContent>
              This is custom Card {i + 1}
            </CardContent>
          </Card>
        </Padding>
      ))}
    </>
  )
}

export const Max_Width = () => {
  return (
    <>
    {new Array(3).fill(null).map((_, i) => (
      <Padding>
        <Card maxWidth={'150px'}>
          <CardContent>
            This is custom Card {i + 1}
          </CardContent>
        </Card>
      </Padding>
    ))}
  </>
  )
}

const Padding = ({ children }) => <div style={{ padding: 16 }}>{children}</div>
