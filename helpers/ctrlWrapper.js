const ctrlWrapper = (ctrl) => {
  const wrapperTryCatch = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };

  return wrapperTryCatch;
};

module.exports = ctrlWrapper;
