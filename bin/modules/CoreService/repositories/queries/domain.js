'use strict';

const wrapper = require('../../../../helpers/utils/wrapper');
const model = require('./query_model');
const queries = require('./query');

class CoreService {
  async getpenjualanmanual (data) {
    let arrData = [];
    let query = `SELECT tbl3."idProduct", tbl3."name", SUM(tbl3."jmlStock") as "jmlStock" ,SUM(tbl3."jmlKonsumsi") as "jmlKonsumsi", SUM(tbl3."jmlStock" - tbl3."jmlKonsumsi") as totalstock
    FROM ( 
                    SELECT tbl1."idRetailer", tbl1."idProduct", tbl2."name", tbl1.stock  as "jmlStock", 0 as "jmlKonsumsi"
                    FROM
                            "UserStock_dev" as tbl1 
                        RIGHT JOIN
                            "Product_dev" as tbl2
                        ON
                            (tbl1."idProduct" = tbl2."idProduct")
                        WHERE
                        tbl1."stockType"='in'
                            AND tbl1."idRetailer"='${data.id}'
                        UNION ALL
                        SELECT tbl1."idRetailer", tbl1."idProduct", tbl2."name", 0  as "jmlStock", tbl1.stock as "jmlKonsumsi"
                        FROM
                            "UserStock_dev" as tbl1 
                        RIGHT JOIN
                            "Product_dev" as tbl2
                        ON
                            (tbl1."idProduct" = tbl2."idProduct")
                        WHERE
                        tbl1."stockType"='out'
                            AND tbl1."idRetailer"='${data.id}'
                            UNION ALL
                        SELECT '${data.id}' as "idRetailer", "idProduct","name", 0  as "jmlStock", 0 as "jmlKonsumsi"  FROM "Product_dev"
        
                ) tbl3
        GROUP BY tbl3."idProduct", tbl3."name" order by tbl3."name" asc`;

    let result = await queries.Query(query);

    if (result.rowCount == 0) {
      return wrapper.error(false, 'Data not found', 404);
    }
    try {
      result.rows.map(async (item) => {
        let modelDb = await model.modelPM();
        modelDb.idProduct = item.idProduct;
        modelDb.name = item.name;
        modelDb.jmlStock = item.jmlStock;
        modelDb.jmlKonsumsi = item.jmlKonsumsi;
        modelDb.totalstock = item.totalstock;

        arrData.push(modelDb);
      });
    } catch (err) {
      return wrapper.error(false, 'Data not found', 404);
    }
    return wrapper.data(arrData, 'Success Get Data', 200);
  }

  async getDataReport () {
    let arrData = [];
    let query = `SELECT "idProblem", room, problem, "problemStatus", "nameUser", date, 
    "time", class, "idUser"
    FROM public."reportProblem";`;
    let result = await queries.Query(query);
    // console.log(result);
    if (result.rowCount == 0) {
      return wrapper.error(false, 'Data not found', 404);
    }
    try {
      result.rows.map(async (item) => {
        let modelDb = await model.modelPM1();
        modelDb.idUser = item.idUser;
        modelDb.idProblem = item.idProblem;
        modelDb.nameUser = item.nameUser;
        modelDb.class = item.class;
        modelDb.room = item.room;
        modelDb.problem = item.problem;     
        modelDb.date = item.date;
        modelDb.time = item.time;
        modelDb.problemStatus = item.problemStatus;
        
        arrData.push(modelDb);
      });
    } catch (err) {
      return wrapper.error(false, 'Data not found', 404);
    }
    return wrapper.data(arrData, 'Success Get Data', 200);
  }
    async getDataReportUser (data) {
    let arrData = [];
    let query = `SELECT "idProblem", room, problem, "problemStatus", "nameUser", date, 
    "time", "idUser", class
FROM public."reportProblem" WHERE "idUser" = '${data.idUser}';`;

    let result = await queries.Query(query);
    // console.log(result);
    if (result.rowCount == 0) {
      return wrapper.error(false, 'Data not found', 404);
    }
    try {
      result.rows.map(async (item) => {
        let modelDb = await model.modelPM1();
        modelDb.idUser = item.idUser;
        modelDb.idProblem = item.idProblem;
        modelDb.nameUser = item.nameUser;
        modelDb.class = item.class;
        modelDb.room = item.room;
        modelDb.problem = item.problem;     
        modelDb.date = item.date;
        modelDb.time = item.time;
        modelDb.problemStatus = item.problemStatus;
        
        arrData.push(modelDb);
      });
    } catch (err) {
      return wrapper.error(false, 'Data not found', 404);
    }
    return wrapper.data(arrData, 'Success Get Data', 200);
  }
  async getDataReportReq () {
    let arrData = [];
    let query = `SELECT "idProblem", room, problem, "problemStatus", "nameUser", date, 
    "time", "idUser", class
FROM public."reportProblem" WHERE "problemStatus" = 'requested';`;

    let result = await queries.Query(query);
    // console.log(result);
    if (result.rowCount == 0) {
      return wrapper.error(false, 'Data not found', 404);
    }
    try {
      result.rows.map(async (item) => {
        let modelDb = await model.modelPM1();
        modelDb.idUser = item.idUser;
        modelDb.idProblem = item.idProblem;
        modelDb.nameUser = item.nameUser;
        modelDb.class = item.class;
        modelDb.room = item.room;
        modelDb.problem = item.problem;     
        modelDb.date = item.date;
        modelDb.time = item.time;
        modelDb.problemStatus = item.problemStatus;
        
        arrData.push(modelDb);
      });
    } catch (err) {
      return wrapper.error(false, 'Data not found', 404);
    }
    return wrapper.data(arrData, 'Success Get Data', 200);
  }
  async getDataLoginPassword (data) {
    let arrData = [];
    const data1 = JSON.parse(data);
    // console.log(data1);
    const username = data1.usernameUser;
    let query = `SELECT "passwordUser"
                  FROM public."user" WHERE "usernameUser" = '${username}';`;
    var qq = JSON.stringify(data);
    let result = await queries.Query(query);
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
    return wrapper.data(arrData, 'Success Get Data', 200);
  }
  async getDataReportOnGoing () {
    let arrData = [];
    let query = `SELECT "idProblem", room, problem, "problemStatus", "nameUser", date, 
    "time", "idUser", class
FROM public."reportProblem" WHERE "problemStatus" = 'onGoing';`;

    let result = await queries.Query(query);
    // console.log(result);
    if (result.rowCount == 0) {
      return wrapper.error(false, 'Data not found', 404);
    }
    try {
      result.rows.map(async (item) => {
        let modelDb = await model.modelPM1();
        modelDb.idUser = item.idUser;
        modelDb.idProblem = item.idProblem;
        modelDb.nameUser = item.nameUser;
        modelDb.class = item.class;
        modelDb.room = item.room;
        modelDb.problem = item.problem;     
        modelDb.date = item.date;
        modelDb.time = item.time;
        modelDb.problemStatus = item.problemStatus;
        
        arrData.push(modelDb);
      });
    } catch (err) {
      return wrapper.error(false, 'Data not found', 404);
    }
    return wrapper.data(arrData, 'Success Get Data', 200);
  }
  async getDataReportFinish () {
    let arrData = [];
    let query = `SELECT "idProblem", room, problem, "problemStatus", "nameUser", date, 
    "time", "idUser", class
FROM public."reportProblem" WHERE "problemStatus" = 'finish';`;

    let result = await queries.Query(query);
    // console.log(result);
    if (result.rowCount == 0) {
      return wrapper.error(false, 'Data not found', 404);
    }
    try {
      result.rows.map(async (item) => {
        let modelDb = await model.modelPM1();
        modelDb.idUser = item.idUser;
        modelDb.idProblem = item.idProblem;
        modelDb.nameUser = item.nameUser;
        modelDb.class = item.class;
        modelDb.room = item.room;
        modelDb.problem = item.problem;     
        modelDb.date = item.date;
        modelDb.time = item.time;
        modelDb.problemStatus = item.problemStatus;
        
        arrData.push(modelDb);
      });
    } catch (err) {
      return wrapper.error(false, 'Data not found', 404);
    }
    return wrapper.data(arrData, 'Success Get Data', 200);
  }
  async postDataLoginUser(data) {
    let arrData = [];
    let username= data.usernameUser;
    let password = data.passwordUser;
    let query = `SELECT "usernameUser", "passwordUser"
    FROM public."user" where "usernameUser" = '${username}' and "passwordUser" = '${password}';`;
    let result = await queries.Query(query);
    if (result.rowCount == 0) {
      return wrapper.error(false, 'ID Retailer and Pass is Wrong', 404);
    }
    else{
      "proses ambil data jika data sesuai dengan yang ada di database"
    }
      }
}
module.exports = CoreService;
