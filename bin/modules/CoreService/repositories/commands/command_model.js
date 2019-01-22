'use strict';

const modelPenjualan = () => {
  const model = {
    idProduct: '',
    value: '',
    name: '',
    stock: ''
  };
  return model;
};
const modelPM2 = () => {
  const model = {
    passwordUser : ''
  };
  return model;
};

module.exports = {
  modelPenjualan: modelPenjualan,
  modelPM2 : modelPM2
};
