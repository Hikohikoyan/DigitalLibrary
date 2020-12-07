# !/usr/bin/python
# -*- coding: UTF-8 -*-
from flask import Flask
from flask import request
from flask.json import jsonify
from flask_cors import CORS
from backend import database
from backend import bp

app = Flask(__name__)
app.register_blueprint(bp, url_prefix='/')
CORS(app, supports_credentials=True)


@app.route('/furni/', methods=['GET'])
def show():
    result = database.showFurni()
    for row in result:
        fname = row[0]
        lname = row[1]
        age = row[2]
        sex = row[3]
        income = row[4]
        # 打印结果
        print("fname=%s,lname=%s,age=%s,sex=%s,income=%s" % \
              (fname, lname, age, sex, income))

    return jsonify(result)


@app.route('/user/', methods=['POST'])
def user():
    data = request.get_json()
    name = data['name']
    result = database.getInfo(name)
    if result:
        return {
            'errcode': 1,
            'errmsg': '用户已存在'
        }
    else:
        username = data['username']
        passwd = data['passwd']
        rowcount = database.insertInfo(name, username, passwd)
        if rowcount > 0:
            return {
                'errcode': 0,
                'errmsg': '填写成功'
            }
        return {
            'errcode': 1,
            'errmsg': '出错了！请检查网络'
        }


@app.route('/')
def hello_world():
    return "<h1 style='color:red'>Something right!<h1>"


if __name__ == '__main__':
    app.debug = True
    app.run(host='localhost', port='90')
