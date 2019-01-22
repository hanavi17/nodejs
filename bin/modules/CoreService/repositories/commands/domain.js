'use strict';

const wrapper = require('../../../../helpers/utils/wrapper');
const model = require('./command_model');
const command = require('./command');
let dataReg = '((19|20)\\d\\d)-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])';

class CoreService {
  async postDataReport(data) {
    let arrData = [];
    var currentdate = new Date();
    var datetime = currentdate.getDate() +"-"+ currentdate.getMonth()+1 +"-"+ currentdate.getFullYear();
    var getminute = currentdate.getHours() +":"+ currentdate.getMinutes();
    // console.log(datetime)
    let query = `INSERT INTO public."reportProblem"(
                "idUser", "nameUser",class, room, problem, date, "time", "problemStatus") 
                VALUES ('${data.idUser}','${data.nameUser}','${data.class}','${data.room}', '${data.problem}', '${datetime}','${getminute}', 'requested');`;
    var qq = JSON.stringify(data);
    let result = await command.Query(query);
    if (result.rowCount == 0) {
      return wrapper.error(false, 'Data not posted', 404);
    }
    return wrapper.data('', 'postDataReport posted', 200);
  }
  async postDataLoginUser(data) {
    let arrData = [];
    let username= data.usernameUser;
    let password = data.passwordUser;
    let query = `SELECT "usernameUser", "passwordUser"
    FROM public."user" where "usernameUser" = '${username}' and "passwordUser" = '${password}';`;
    let result = await command.Query(query);
    if (result.rowCount == 0) {
      return wrapper.error(false, 'ID Retailer and Pass is Wrong', 404);
    }
      return wrapper.data('', 'auth sukses', 200);
      }

      async postDataLoginAdmin(data) {
        let arrData = [];
        let username= data.usernameAdmin;
        let password = data.passwordAdmin;
        let query = `SELECT "usernameAdmin", "passwordAdmin"
        FROM public."admin" where "usernameUser" = '${username}' and "passwordUser" = '${password}';`;
        let result = await command.Query(query);
        if (result.rowCount == 0) {
          return wrapper.error(false, 'ID Retailer and Pass is Wrong', 404);
        }
          return wrapper.data('', 'auth sukses', 200);
          }

  async updateDataReportOnGoing(data) {
    let arrData = [];

    let query = `UPDATE public."reportProblem" SET
    "problemStatus"='onGoing'
    WHERE "idProblem" ='${data.idProblem}'`;
    let result = await command.Query(query);
    if (result.rowCount == 0) {
      return wrapper.error(false, 'Data not found', 404);
    }
    return wrapper.data('', 'Data has been Updated', 200);
  }
  async updateDataReportFinish(data) {
    let arrData = [];
    var currentdate = new Date();
    var datetime = currentdate.getDate() +"-"+ currentdate.getMonth()+1 +"-"+ currentdate.getFullYear();
    var getminute = currentdate.getHours() +":"+ currentdate.getMinutes();
    let query = `UPDATE public."reportProblem" SET
    "problemStatus"='finish', date = '${datetime}', "time" = '${getminute}'
    WHERE "idProblem" ='${data.idProblem}'`;
    let result = await command.Query(query);
    if (result.rowCount == 0) {
      return wrapper.error(false, 'Data not found', 404);
    }
    return wrapper.data('', 'Data has been Updated', 200);
  }
  async delReport(data) {
    let arrData = [];
    
    let query = `DELETE FROM public."reportProblem"
    WHERE "idProblem" ='${data.idProblem}'`;
    let result = await command.Query(query);
    if (result.rowCount == 0) {
      return wrapper.error(false, 'Data not found', 404);
    }
    return wrapper.data('', 'Data has been Deleted', 200);
  }
  async getDataLoginPassword1(data) {
    let arrData = [];
    
    let query = `SELECT "passwordUser"
    FROM public."user" WHERE "usernameUser" = 'yusufwibigtg';`
    var qq = JSON.stringify(data);
    let result = await command.Query(query);
    if (result.rowCount == 0) {
      return wrapper.error(false, 'Data not found', 404);
    }
    try {
      result.rows.map(async (item) => {
        let modelDb = await model.modelPM2();
        modelDb.usernameUser = item.usernameUser;
        modelDb.passwordUser = item.passwordUser;
        arrData.push(modelDb);
      });
    } catch (err) {
      return wrapper.error(false, 'Data not found', 404);
    }
    return wrapper.data('', 'Data has been Updated', 200);
  }
}

module.exports = CoreService;
