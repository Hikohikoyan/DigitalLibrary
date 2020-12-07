

# from flask import Flask
# app = Flask(__name__)
# @app.route('/')
# if __name__ == '__main__':
#     app.debug = True # 设置调试模式，生产模式的时候要关掉debug
#     app.run()
# !/usr/bin/python
# -*- coding: UTF-8 -*-
import MySQLdb
from flask import Flask
from flask import render_template
db = MySQLdb.connect(host='localhost', user='root', passwd='', db='library', port=3306)
cur = db.cursor()

try:
   c_sql = '''create table test1(
                   id int(3) zerofill primary key auto_increment,
                   name varchar(15) not null
               )engine=InnoDB,charset=utf8;
           '''
    i_sql = 'insert into test1(name) values("chizer");'
    s_sql = "select * from test1;"

    # 先去查询，查询不需要提交到缓存，所以报错是没有表，因为创建表的事物还没有commit
    # cur.execute(s_sql)
    #cur.execute(c_sql)  # 加入创表
    cur.execute(i_sql)  # 加入插入记录
    db.commit()  # 统一提交

    # 提交之后，再去查询，注意注意！！！该游标对象执行查询时往下并没有commit，
    # 那么可以认为执行查询语句时，并不会添加到缓存，而是直接执行！
    cur.execute(s_sql)  # 执行查询记录

    result = cur.fetchall()  # 得到查询结果
    print(result)

except Exception as e:
    db.rollback()
    print('Failed:', e)

cur.close()
db.close()
