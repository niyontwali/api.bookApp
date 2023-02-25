const serverError = (res, errorMsg) => {
  res.status(500).json({
    message: errorMsg
  });
};

export default serverError;