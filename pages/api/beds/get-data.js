const cheerio = require("cheerio");
const request = require("request");

export default async (req, response) => {
  if (req.method === "GET") {
    await request(
      "https://www.covidbedmbmc.in/HospitalInfo/show",
      (err, res, html) => {
        if (!err && res.statusCode === 200) {
          let data = [];
          const $ = cheerio.load(html);

          $(".text-center h4").each((i, e) => {
            const hospitalName = $(e).text();
            let contactNumber = $(e).next().text().slice(-10);

            //   console.log(hospitalName);
            //   console.log(contactNumber);
            data[i] = {
              hospitalName,
              contactNumber,
            };
          });

          let arr = [];
          $(".card-body div strong").each((i, e) => {
            const ans = $(e).text();
            arr.push(ans);
          });

          for (let z = 0; z < arr.length; z += 5) {
            data[z / 5]["capacity"] = parseInt(arr[z]);
            data[z / 5]["occupied"] = parseInt(arr[z + 1]);
            data[z / 5]["vacant"] = parseInt(arr[z + 2]);
          }
          return response.status(200).json({
            source: "https://www.covidbedmbmc.in/HospitalInfo/show",
            data,
          });
        }
      }
    );
  }
};
