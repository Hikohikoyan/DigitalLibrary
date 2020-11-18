# This is a sample Python script.

# See PyCharm help at https://www.jetbrains.com/help/pycharm/

# from flask import Flask
# app = Flask(__name__)
# @app.route('/')
# def index():
#     return 'Hello World'
# if __name__ == '__main__':
#     app.debug = True # 设置调试模式，生产模式的时候要关掉debug
#     app.run()


from  flask import  Flask
from  flask import  render_template
app  =  Flask(__name__)
@app.route('/')
@app.route('/<name>')
def  hello(name=None):
    return  render_template('index.html',  name=name)

if  __name__  ==  '__main__':
    app.run(host='127.0.0.1',  debug=True)