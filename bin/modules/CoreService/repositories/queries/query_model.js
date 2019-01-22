'use strict';

const modelPM = () => {
  const model = {
    idProduct: '',
    name: '',
    jmlStock: '',
    jmlKonsumsi: '',
    totalstock: ''
  };
  return model;
};

const modelPM1 = () => {
  const model = {
    idProblem: '',
    idUser: '',
    nameUser: '',
    class: '',
    room: '',
    problem: '',
    date: '',
    time: '',
    problemStatus: ''
  };
  return model;
};
const modelPM2 = () => {
  const model = {
  passwordUser : '',
  usernameUser : ''
  };
  return model;
};

module.exports = {
  modelPM,
  modelPM1,
  modelPM2
};
