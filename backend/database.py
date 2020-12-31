from backend.config import db
import MySQLdb


def getCursor():
    con = MySQLdb.connect(
        host=db["host"],
        user=db["user"],
        passwd=db["pwd"],
        database=db["database"],
        charset='utf8'
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


# 登录
def login(user, pwd):
    (con, cur) = getCursor()
    cur.execute("SELECT username,passwd FROM reader WHERE username=%s AND passwd=%s", [user, pwd])
    r = cur.fetchone()
    cur.close()
    con.close()
    return r


# 管理员登录
def Slogin(user, pwd):
    (con, cur) = getCursor()
    cur.execute("SELECT username,passwd FROM manager WHERE username=%s AND passwd=%s", [user, pwd])
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


# 查询管理员信息
def getManager(user):
    (con, cur) = getCursor()
    cur.execute("SELECT * FROM manager WHERE username=%s", [user])
    r = cur.fetchone()
    cur.close()
    con.close()
    return r


# 新增管理员
def newManager(username, passwd, permission):
    (con, cur) = getCursor()
    cur.execute("INSERT INTO manager(name, username,passwd,permission) VALUES (%s, %s, %s, %s)",
                [username, username, passwd, permission])
    con.commit()
    cur.close()
    con.close()
    return True


# 搜索家具
# 搜索零件
def Fname(name):
    (con, cur) = getCursor()
    args = '%' + name + '%'
    cur.execute("SELECT * FROM furni WHERE name LIKE %s", [args])
    r = cur.fetchall()
    print(r)
    cur.close()
    con.close()
    return r
# 精准查询家具
def checkname(name):
    (con, cur) = getCursor()
    # args = '%' + name + '%'
    cur.execute("SELECT * FROM furni WHERE name=%s", [name])
    r = cur.fetchall()
    cur.close()
    con.close()
    return r

# 修改家具信息
# 新增家具
def addFurni(name, f_type, pic, intro):
    (con, cur) = getCursor()
    num = 1;
    cur.execute("INSERT INTO `furni` (`storeID`,`name`, `type`,   `img`, `info`, ) VALUES (null,%s, %s, %s, %s)",[num,name, f_type, pic, intro])
    con.commit()
    cur.close()
    con.close()
    return True


# 遍历展示家具
def showFurni():
    (con, cur) = getCursor()
    cur.execute("SELECT * FROM furni ")
    r = cur.fetchall()
    print(r)
    cur.close()
    con.close()
    return r
