'use strict';

const wrapper = require('../../../helpers/utils/wrapper');
const queryHandler = require('../repositories/queries/query_handler');
const CommandHandler = require('../repositories/commands/command_handler');

const postDataReport = async (req, res, next) => {
  const postData = async () => {
    let data = [];
    data.idUser = req.body.idUser;
    data.nameUser = req.body.nameUser;
    data.class = req.body.class;
    data.room = req.body.room;
    data.problem = req.body.problem;
    data.date = req.body.date;
    data.time = req.body.time;
    data.problemStatus = req.body.problemStatus;
    return CommandHandler.postDataReport(data);
  };
  const sendResponse = async (result) => {
    if (result.err !== false) {
      wrapper.response(res, 'success', result);
    } else {
      wrapper.response(res, 'error', result);
    }
  };
  sendResponse(await postData());
};
const postDataLoginUser = async (req, res, next) => {
  const postData = async () => {
    let data = [];
    data.usernameUser = req.body.usernameUser;
    data.passwordUser = req.body.passwordUser;
    return CommandHandler.postDataLoginUser(data);
  };
  const sendResponse = async (result) => {
    if (result.err != false) {
      wrapper.response(res, 'success', result);
    } else {
      wrapper.response(res, 'error', result);
    }
  };
  sendResponse(await postData());
};
const postDataLoginAdmin = async (req, res, next) => {
  const postData = async () => {
    let data = [];
    data.usernameAdmin = req.body.usernameAdmin;
    data.passwordAdmin = req.body.passwordAdmin;
    return CommandHandler.postDataLoginAdmin(data);
  };
  const sendResponse = async (result) => {
    if (result.err != false) {
      wrapper.response(res, 'success', result);
    } else {
      wrapper.response(res, 'error', result);
    }
  };
  sendResponse(await postData());
};
const getpenjualanmanual = async (req, res, next) => {
  const getData = async () => {
    return queryHandler.getpenjualanmanual(req.params);
  };
  const sendResponse = async (result) => {
    if (result.err != false) {
      wrapper.response(res, 'success', result);
    } else {
      wrapper.response(res, 'error', result);
    }
  };
  sendResponse(await getData());
};

const getDataReport = async (req, res, next) => {
  const getData = async () => {
    return queryHandler.getDataReport();
  };
  const sendResponse = async (result) => {
    if (result.err != false) {
      wrapper.response(res, 'success', result);
    } else {
      wrapper.response(res, 'error', result);
    }
  };
  sendResponse(await getData());
};
const getDataReportUser = async (req, res, next) => {
  const getData = async () => {
    return queryHandler.getDataReportUser(req.params);
  };
  const sendResponse = async (result) => {
    if (result.err != false) {
      wrapper.response(res, 'success', result);
    } else {
      wrapper.response(res, 'error', result);
    }
  };
  sendResponse(await getData());
};
const getDataReportReq = async (req, res, next) => {
  const getData = async () => {
    return queryHandler.getDataReportReq();
  };
  const sendResponse = async (result) => {
    if (result.err != false) {
      wrapper.response(res, 'success', result);
    } else {
      wrapper.response(res, 'error', result);
    }
  };
  sendResponse(await getData());
};
const getDataLoginPassword = async (req, res, next) => {
  const postData = async () => {
    let data = [];
    // data.usernameUser = req.body.usernameUser;
    return queryHandler.getDataLoginPassword(req.body);
  };
  const sendResponse = async (result) => {
    if (result.err != false) {
      wrapper.response(res, 'success', result);
    } else {
      wrapper.response(res, 'error', result);
    }
  };
  sendResponse(await postData());
};
const getDataReportOnGoing = async (req, res, next) => {
  const getData = async () => {
    return queryHandler.getDataReportOnGoing();
  };
  const sendResponse = async (result) => {
    if (result.err != false) {
      wrapper.response(res, 'success', result);
    } else {
      wrapper.response(res, 'error', result);
    }
  };
  sendResponse(await getData());
};
const getDataReportFinish = async (req, res, next) => {
  const getData = async () => {
    return queryHandler.getDataReportFinish();
  };
  const sendResponse = async (result) => {
    if (result.err != false) {
      wrapper.response(res, 'success', result);
    } else {
      wrapper.response(res, 'error', result);
    }
  };
  sendResponse(await getData());
};

const updateDataReportOnGoing = async (req, res, next) => {
  const postData = async () => {
    let data = [];
    data.idProblem = req.body.idProblem;
    data.room = req.body.room;
    data.problem = req.body.problem;
    data.date = req.body.date;
    data.problemStatus = req.body.problemStatus;
    return CommandHandler.updateDataReportOnGoing(req.params);
  };
  const sendResponse = async (result) => {
    if (result.err !== false) {
      wrapper.response(res, 'success', result);
    } else {
      wrapper.response(res, 'error', result);
    }
  };
  sendResponse(await postData());
};
const updateDataReportFinish = async (req, res, next) => {
  const postData = async () => {
    let data = [];
    data.idProblem = req.body.idProblem;
    data.room = req.body.room;
    data.problem = req.body.problem;
    data.date = req.body.date;
   
    data.problemStatus = req.body.problemStatus;
    return CommandHandler.updateDataReportFinish(req.params);
  };
  const sendResponse = async (result) => {
    if (result.err !== false) {
      wrapper.response(res, 'success', result);
    } else {
      wrapper.response(res, 'error', result);
    }
  };
  sendResponse(await postData());
};

const delReport = async (req, res, next) => {
  const postData = async () => {
    return CommandHandler.delReport(req.params);
  };
  const sendResponse = async (result) => {
    if (result.err !== false) {
      wrapper.response(res, 'success', result);
    } else {
      wrapper.response(res, 'error', result);
    }
  };
  sendResponse(await postData());
};
const getDataLoginPassword1 = async (req, res, next) => {
  const postData = async () => {
    let data = [];
    data.passwordUser = req.body.passwordUser;
    data.usernameUser = req.body.usernameUser;
    return CommandHandler.getDataLoginPassword1(data);
  };
  const sendResponse = async (result) => {
    if (result.err !== false) {
      wrapper.response(res, 'success', result);
    } else {
      wrapper.response(res, 'error', result);
    }
  };
  sendResponse(await postData());
};

module.exports = {
  postDataReport,
  getpenjualanmanual,
  getDataReport,
  getDataReportReq,
  getDataReportOnGoing,
  getDataReportFinish,
  updateDataReportOnGoing,
  updateDataReportFinish,
  getDataReportUser,
  postDataLoginUser,
  postDataLoginAdmin,
  getDataLoginPassword,
  getDataLoginPassword1,
  delReport
};
