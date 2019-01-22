'use strict';

const CoreService = require('./domain');

const getpenjualanmanual = async (data) => {
  const getData = async () => {
    const dataRetailer = new CoreService();
    const result = await dataRetailer.getpenjualanmanual(data);
    return result;
  };
  const response = await getData();
  return response;
};

const getDataReport = async () => {
  const getData = async () => {
    const dataRetailer = new CoreService();
    const result = await dataRetailer.getDataReport();
    return result;
  };
  const response = await getData();
  return response;
};
const getDataReportUser = async (data) => {
  const getData = async () => {
    const dataRetailer = new CoreService();
    const result = await dataRetailer.getDataReportUser(data);
    return result;
  };
  const response = await getData();
  return response;
};
const getDataReportReq = async () => {
  const getData = async () => {
    const dataRetailer = new CoreService();
    const result = await dataRetailer.getDataReportReq();
    return result;
  };
  const response = await getData();
  return response;
};
const getDataLoginPassword = async (data) => {
  const getData = async () => {
    const dataRetailer = new CoreService();
    const result = await dataRetailer.getDataLoginPassword(data);
    return result;
  };
  const response = await getData();
  return response;
};
const getDataReportOnGoing = async () => {
  const getData = async () => {
    const dataRetailer = new CoreService();
    const result = await dataRetailer.getDataReportOnGoing();
    return result;
  };
  const response = await getData();
  return response;
};
const getDataReportFinish = async () => {
  const getData = async () => {
    const dataRetailer = new CoreService();
    const result = await dataRetailer.getDataReportFinish();
    return result;
  };
  const response = await getData();
  return response;
};
const postDataLoginUser = async (data) => {
  const getData = async () => {
    const dataRetailer = new CoreService();
    const result = await dataRetailer.postDataLoginUser(data);
    return result;
  };
  const response = await getData();
  return response;
};

module.exports = {
  getpenjualanmanual,
  getDataReport,
  getDataReportFinish,
  getDataReportUser,
  getDataReportOnGoing,
  getDataReportReq,
  postDataLoginUser,
  getDataLoginPassword
};
