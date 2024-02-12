import { StatusCodes } from "http-status-codes";
import correlator from "correlation-id";
import { PROBLEM_TYPE_URN, PROBLEM_TYPES } from "../util/problems";


const logLevel = (status) => (status >= 400 ? "error" : "info");

export default (err, req, res, next) => {
  try {
    let problem = {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      type: `${PROBLEM_TYPE_URN}:${PROBLEM_TYPES.UNEXPECTED_ERROR}`,
      title: "An unexpected error has occured",
    };
    console.log(err);
    res
      .status(problem.status)
      .type("application/problem+json")
      .json({ ...problem, instance: `urn:uuid:${correlator.getId()}` });
  } catch (ex) {
    next(ex);
  }
};
