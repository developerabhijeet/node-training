const success = (res, data) => {
  return res.status(200).json(data);
};

const error = (res, err) => {
  return res.status(500).json(err);
};

const APIResponce = { success, error };
module.exports = APIResponce;
