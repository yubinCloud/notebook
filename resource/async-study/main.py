from fastapi import FastAPI
import uvicorn
import requests
import httpx

app = FastAPI()

URL = 'https://www.mxnzp.com/api/lottery/common/aim_lottery?expect=18135&code=ssq&app_id=oucyufkcllki6sqk&app_secret=YVJ4TVlTM0kvcXk4QnBLNHYwemhRdz09'

@app.get('/sync')
def sync_req():
    """
    同步方式发送 Request
    """
    resp = requests.get(URL)
    rev_json = resp.json()
    return {
        'status': 0,
        'data': rev_json['data']
    }

@app.get('/async')
async def async_req():
    """
    异步的方式发送 Request
    """
    client = httpx.AsyncClient()
    resp = await client.get(URL)
    await client.aclose()
    rev_json = resp.json()
    return {
        'status': 0,
        'data': rev_json['data']
    }


if __name__ == '__main__':
    uvicorn.run(app,
                host='localhost',
                port=8090)