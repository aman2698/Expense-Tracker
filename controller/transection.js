const transection = require("../model/transection");

exports.getTransection = async (req, res, next) => {
  try {
    const Transection = await transection.find();

    return res.status(200).json({
      success: true,
      count: Transection.length,
      data: Transection
    });
  } catch (error) {
    return res.send(500).json({
      success: false,
      error: "server Error"
    });
  }
};

exports.addTransection = async (req, res, next) => {
  try {
    const { title, note, amount, date } = req.body;

    const Transection = await transection.create(req.body);
    return res.status(201).json({
      success: true,
      data: Transection
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "server Error"
      });
    }
  }
};

exports.deleteTransection = async (req, res, next) => {
  try {
    const Transection = await transection.findById(req.params.id);

    if (!Transection) {
      return res.status(404).json({
        success: false,
        error: "no transection found"
      });
    }
    await Transection.remove();

    return res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "server Error"
    });
  }
};
