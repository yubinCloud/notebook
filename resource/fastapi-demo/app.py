from fastapi import FastAPI

app = FastAPI()


@app.get('/hello')
def hello(name: str = None):
    if name is None:
        name = 'World'
    return {
        'data': f'Hello, {name}!'
    }
