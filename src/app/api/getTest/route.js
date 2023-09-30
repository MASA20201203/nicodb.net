import { NextResponse } from "next/server";
// import mysql from "mysql";
import mysql from "mysql2/promise";

// export default (req, res) => {
export async function GET() {
  console.log("--- connection ---");
  // console.log(offset);

  const connection = await mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "test_user",
    password: "test",
    database: "nicodb_db",
  });

  console.log("--- connect ---");
  connection.connect();

  const sql = "SELECT * from test_table";
  const result = await connection.query(sql);
  // const [rows, fields] = await connection.query(sql);
  // for (const val of rows) {
  //   console.log(val.user_id, val.user_name);
  // }
  connection.end();

  console.log("--- result ---");
  console.log(result);
  // console.log("--- result json ---");
  // console.log(JSON.stringify(result));
  console.log("--- return ---");
  return NextResponse.json(result);

  // connection.query("SELECT * FROM test_table;", (error, results, fields) => {
  //   console.log("--- query ---");
  //   if (error) throw error;
  //   console.log(results);
  //   res.status(200).json(results);
  // });

  // connection.end();
}
