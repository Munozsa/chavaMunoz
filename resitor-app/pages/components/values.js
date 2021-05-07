import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { Col, Container, Row } from 'reactstrap';
import { dropVals } from '../../public/dropdwonValues';
import { calculateResistance } from '../../services/apiCall';

function findBandValue(value) {
  var indxOfData = dropVals.body.find(function (item, i) {
    if (item.value === value) {
      return item.text;
    }
  });
  return indxOfData;
}
module.exports.Values = ({
  Parentcallbackfirst,
  Parentcallbackscnd,
  Parentcallbackthrd,
  Parentcallbackfrth,
  parentResult,
}) => {
  const [firstVal, setFirstVal] = useState('None');
  const [scndVal, setScndsVal] = useState('None');
  const [thirdVal, setThirdVal] = useState('None');
  const [fourthVal, setFourthVal] = useState('None');

  const handleFirstDigitChange = e => {
    setFirstVal(e.target.value);
    Parentcallbackfirst(e.target.value);
  };
  const handleSecondDigitChange = e => {
    setScndsVal(e.target.value);
    Parentcallbackscnd(e.target.value);
  };
  const handleThirdDigitChange = e => {
    setThirdVal(e.target.value);
    Parentcallbackthrd(e.target.value);
  };
  const handleFourthDigitChange = e => {
    setFourthVal(e.target.value);
    Parentcallbackfrth(e.target.value);
  };

  const calculate = async e => {
    const first = findBandValue(firstVal);
    const second = findBandValue(scndVal);
    const third = findBandValue(thirdVal);
    const fourth = findBandValue(fourthVal);
    try {
      const res = await calculateResistance(
        first.text,
        second.text,
        third.text,
        fourth.text,
      );
      if (res.status === 200) parentResult(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const resetValues = e => {
    setFirstVal('None');
    setScndsVal('None');
    setThirdVal('None');
    setFourthVal('None');
    Parentcallbackfirst('');
    Parentcallbackscnd('');
    Parentcallbackthrd('');
    Parentcallbackfrth('');
  };

  return (
    <Container>
      <Row>
        <Col style={{ padding: '15px' }} xs={6} sm={6} md={3} lg={3} xl={3}>
          <InputLabel id="label">1s Digit</InputLabel>
          <Select
            labelId="label"
            id="select"
            value={firstVal}
            onChange={handleFirstDigitChange}
          >
            {dropVals.body.map((item, index) => (
              <MenuItem key={'1st' + index.toString()} value={item.value}>
                {item.text}
              </MenuItem>
            ))}
          </Select>
        </Col>
        <Col style={{ padding: '15px' }} xs={6} sm={6} md={3} lg={3} xl={3}>
          <div>
            <InputLabel id="second-digit">2nd Digit</InputLabel>
            <Select
              labelId="label"
              id="select"
              value={scndVal}
              onChange={handleSecondDigitChange}
            >
              {dropVals.body.map((item, index) => (
                <MenuItem key={'2nd' + index.toString()} value={item.value}>
                  {item.text}
                </MenuItem>
              ))}
            </Select>
          </div>
        </Col>
        <Col style={{ padding: '15px' }} xs={6} sm={6} md={3} lg={3} xl={3}>
          <InputLabel id="third-digit">Multiplier</InputLabel>
          <Select
            labelId="label"
            id="select"
            value={thirdVal}
            onChange={handleThirdDigitChange}
          >
            {dropVals.body.map((item, index) => (
              <MenuItem key={'3rd' + index.toString()} value={item.value}>
                {item.text}
              </MenuItem>
            ))}
          </Select>
        </Col>
        <Col style={{ padding: '15px' }} xs={6} sm={6} md={3} lg={3} xl={3}>
          <InputLabel id="fourth-digit">Tolerance</InputLabel>
          <Select
            labelId="label"
            id="select"
            value={fourthVal}
            onChange={handleFourthDigitChange}
          >
            {dropVals.body.map((item, index) => (
              <MenuItem key={'4th' + index.toString()} value={item.value}>
                {item.text}
              </MenuItem>
            ))}
          </Select>
        </Col>
      </Row>
      <Row style={{ marginTop: '30px' }}>
        <Col>
          <Button variant="contained" color="primary" onClick={calculate}>
            Calcular
          </Button>
        </Col>
        <Col>
          <Button variant="contained" color="secondary" onClick={resetValues}>
            Reset
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
