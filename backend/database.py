from backend.config import db
import MySQLdb


def getCursor():
    con = MySQLdb.connect(
        host=db["host"],
        user=db["user"],
        passwd=db["pwd"],
        database=db["database"]
    )
    cur = con.cursor()
    return con, cur


# 是否存在该用户
def getInfo(user):
    (con, cur) = getCursor()
    cur.execute("SELECT username FROM reader WHERE username=%s", [user])
    r = cur.fetchone()
    cur.close()
    con.close()
    return r


# 新增用户信息
def insertInfo(name, username, passwd):
    (con, cur) = getCursor()
    cur.execute("INSERT INTO reader(name, username, passwd) VALUES (%s, %s, %s)",
                [name, username, passwd])
    con.commit()
    cur.close()
    con.close()
    return True
# 新增管理员
def newManager(username,passwd,permission):
    (con, cur) = getCursor()
    cur.execute("INSERT INTO manager(name, username,passwd,permission) VALUES (%s, %s, %s, %s)",
                [username,username,passwd,permission])
    con.commit()
    cur.close()
    con.close()
    return True
# 搜索家具
# 搜索零件
# 修改家具信息
# 遍历展示家具
def showFurni():
    (con, cur) = getCursor()
    cur.execute("SELECT * FROM furni ")
    r = cur.fetchall()
    print(r)
    cur.close()
    con.close()
    return r