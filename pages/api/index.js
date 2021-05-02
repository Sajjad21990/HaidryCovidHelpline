export default (req, res) => {
  res.status(200).json({
    name: "Haidery Covid Helpline API",
    source: "https://www.covidbedmbmc.in/HospitalInfo/show",
  });
};
