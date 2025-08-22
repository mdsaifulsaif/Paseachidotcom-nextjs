// import dbconnection from "../../lib/mongodb";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const db = await dbconnection("products");
//     const result = await db.insertOne(body);
//     return new Response(JSON.stringify({ success: true, result }), {
//       status: 201,
//     });
//   } catch (err) {
//     return new Response(
//       JSON.stringify({ success: false, error: err.message }),
//       {
//         status: 500,
//       }
//     );
//   }
// }

import dbconnection from "../../lib/mongodb";

export async function POST(req) {
  try {
    // request body parse করো
    const body = await req.json();

    // DB connect
    const db = await dbconnection();
    const collection = db.collection("products");

    // ডাটা insert
    const result = await collection.insertOne(body);

    return new Response(JSON.stringify({ success: true, data: result }), {
      status: 201,
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
}
