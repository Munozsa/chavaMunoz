import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Values } from './values';

function Resistor() {
  const [first, setCallFirst] = useState('');
  const [scnd, setCallScnd] = useState('');
  const [thrd, setCallThrd] = useState('');
  const [frth, setCallForth] = useState('');
  const [result, setResult] = useState('');

  const callFirst = e => {
    setCallFirst(e);
  };
  const callScnd = e => {
    setCallScnd(e);
  };
  const callThrd = e => {
    setCallThrd(e);
  };
  const callForth = e => {
    setCallForth(e);
  };

  const printResult = e => {
    setResult(e);
  };
  return (
    <Container>
      <Row style={{ marginBottom: '50px', paddingLeft: '20px' }}>
        <Col lg={12}>
          <TextField
            disabled
            id="outlined-disabled"
            label={result}
            defaultValue={result}
            variant="outlined"
          />
        </Col>
      </Row>
      <Row>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
          <rect x={0} y={26} rx={5} width={300} height={7} fill="#d1d1d1" />
          <rect x={50} y={0} rx={15} width={200} height={57} fill="#FDF7EB" />
          <rect key={1} x={70} width={7} height={57} fill={first} />
          <rect key={2} x={100} width={7} height={57} fill={scnd} />
          <rect key={3} x={130} width={7} height={57} fill={thrd} />
          <rect key={4} x={160} width={7} height={57} fill={frth} />
        </svg>
      </Row>
      <Row>
        <Values
          Parentcallbackfirst={callFirst}
          Parentcallbackscnd={callScnd}
          Parentcallbackthrd={callThrd}
          Parentcallbackfrth={callForth}
          parentResult={printResult}
        />
      </Row>
    </Container>
  );
}
export default Resistor;
