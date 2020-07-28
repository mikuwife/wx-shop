export const request = (params) => {
  const baseUrl = "http://localhost:5757/heyushuo"
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      url:baseUrl + params.url,
      success:(result) => {
        resolve(result.data);
      },
      fail:(err) => {
        reject(err);
      },
    })
  })
}