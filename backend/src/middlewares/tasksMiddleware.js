const validateBody = (request, response, next) => {
  const { body } = request;

  if (body.title === undefined) {
    return response
      .status(400)
      .json({ message: "The field 'title' is required" });
  }

  if (body.title === "") {
    return response.status(400).json({ message: "title cannot be null" });
  }

  next();
};

const validateStatus = (request, response, next) => {
  const { body } = request;

  if (body.status === undefined) {
    return response
      .status(400)
      .json({ message: "The field 'status' is required" });
  }

  if (body.status === "") {
    return response.status(400).json({ message: "status cannot be null" });
  }

  next();
};

module.exports = {
  validateBody,
  validateStatus,
};
