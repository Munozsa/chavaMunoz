import axios from 'axios';
const config = require('../config/index');
module.exports.calculateResistance = async (first, second, third, fourth) => {
  const obj = {
    first: first,
    second: second,
    third: third,
    fourth: fourth,
  };
  const headers = { 'Content-Type': 'application/json; charset=utf-8' };
  return axios.post(`${config.api.url}/api/calculateResistance`, obj, headers);
};
