const preurl = 'https://api.ailab.booling.cn/api/v1/';

export async function getDoc(url: string) {
  const response = await fetch(preurl + url, {
    method: 'GET',
    headers: {},
    mode: 'cors',
  }).catch((error) => console.log('error', error));

  if (response instanceof Response) {
    // 确保response是Response类型后再访问json属性
    return response.json();
  } else {
    console.error('No response received');
    return null;
  }
  //return response.json();
}
