import correlator from "correlation-id";

export default (req, _res, next) => {
  const id = req.get("x-correlation-id");

  if (id) {
    correlator.withId(id, next);
  } else {
    correlator.withId(next);
  }
};
