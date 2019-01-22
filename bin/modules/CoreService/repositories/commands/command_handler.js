'use strict';

const CoreService = require('./domain');

const postDataReport = async (data) => {
  const postData = async () => {
    const dataPenjualan = new CoreService();
    const result = await dataPenjualan.postDataReport(data);
    return result;
  };
  const response = await postData();
  return response;
};

const postDataLoginUser = async (data) => {
  const postData = async () => {
    const dataPenjualan = new CoreService();
    const result = await dataPenjualan.postDataLoginUser(data);
    return result;
  };
  const response = await postData();
  return response;
};
const postDataLoginAdmin = async (data) => {
  const postData = async () => {
    const dataPenjualan = new CoreService();
    const result = await dataPenjualan.postDataLoginAdmin(data);
    return result;
  };
  const response = await postData();
  return response;
};
const updateDataReportOnGoing = async (data) => {
  const postData = async () => {
    const dataPenjualan = new CoreService();
    const result = await dataPenjualan.updateDataReportOnGoing(data);
    return result;
  };
  const response = await postData();
  return response;
};

const updateDataReportFinish = async (data) => {
  const postData = async () => {
    const dataPenjualan = new CoreService();
    const result = await dataPenjualan.updateDataReportFinish(data);
    return result;
  };
  const response = await postData();
  return response;
};
const delReport = async (data) => {
  const postData = async () => {
    const dataPenjualan = new CoreService();
    const result = await dataPenjualan.delReport(data);
    return result;
  };
  const response = await postData();
  return response;
};
const getDataLoginPassword1 = async (data) => {
  const postData = async () => {
    const dataPenjualan = new CoreService();
    const result = await dataPenjualan.getDataLoginPassword1(data);
    return result;
  };
  const response = await postData();
  return response;
};
module.exports = {
  postDataReport: postDataReport,
  updateDataReportOnGoing: updateDataReportOnGoing,
  updateDataReportFinish: updateDataReportFinish,
  postDataLoginUser : postDataLoginUser,
  postDataLoginAdmin : postDataLoginAdmin,
  getDataLoginPassword1 : getDataLoginPassword1,
  delReport : delReport
};
