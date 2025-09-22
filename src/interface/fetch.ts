const preurl = 'https://api.ailab.booling.cn';

// GET
export async function getDocList({
  block,
  group,
}: {
  block: string;
  group: string;
}) {
  const queryString = new URLSearchParams({ block, group }).toString();

  const url = preurl + '/api/v1/visitor/document?' + queryString;

  try {
    // 使用 await 等待异步操作完成
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      redirect: 'follow',
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
