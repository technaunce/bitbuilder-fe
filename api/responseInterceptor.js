var HTTP_STATUS;
(function (HTTP_STATUS) {
  HTTP_STATUS[HTTP_STATUS["SUCCESS"] = 200] = "SUCCESS";
  HTTP_STATUS[HTTP_STATUS["BAD_REQUEST"] = 400] = "BAD_REQUEST";
  HTTP_STATUS[HTTP_STATUS["NOT_FOUND"] = 404] = "NOT_FOUND";
  HTTP_STATUS[HTTP_STATUS["FORBIDDEN"] = 403] = "FORBIDDEN";
  HTTP_STATUS[HTTP_STATUS["SERVER_ERROR"] = 500] = "SERVER_ERROR";
  HTTP_STATUS[HTTP_STATUS["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
})(HTTP_STATUS || (HTTP_STATUS = {}));
export function onResponseError(error) {
  if (error.response?.status === HTTP_STATUS.SERVER_ERROR) {
    return Promise.reject(error.response.data);
  } else if (error.response?.status === HTTP_STATUS.UNAUTHORIZED) {
    return Promise.reject(error.response.data);
  }
  return Promise.reject(error.response);
}
export function onResponse(response) {
  if (response.status === HTTP_STATUS.SUCCESS) {
    return Promise.resolve(response.data);
  }
}
