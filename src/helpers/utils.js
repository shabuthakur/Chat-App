export function getFormBody(params) {
  let formBody = ['username=shabu', 'password=123123'];
  for (let property of params) {
    let encodedKey = encodeURIComponent(property);
    //'user name' =>'user%20name'
    let encodedValue = encodeURIComponent(params[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }

  return formBody.join('&');
}
