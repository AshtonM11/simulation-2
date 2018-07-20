module.exports = {
  get: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_property()
      .then(house => res.status(200).send(house))
      .catch(err => {
        res.status(500).send({ errorMessage: "Server Error" });
        console.log(err);
      });
  },

  post: (req, res) => {
    const dbInstance = req.app.get("db");
    const {
      name,
      address,
      city,
      state,
      zipcode,
      img,
      mortgage,
      rent
    } = req.body;

    dbInstance
      .post_property([
        name,
        address,
        city,
        state,
        Number(zipcode),
        img,
        mortgage,
        rent
      ])
      .then(() => res.sendStatus(200, "Property Added"))
      .catch(err => {
        res.status(500).send({ errorMessage: "Server Error" });
        console.log(err);
      });
  }
};
