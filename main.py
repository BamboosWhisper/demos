from flask import Flask,render_template
import pymysql
import json
import logging

 
# conn = pymysql.connect(host='127.0.0.1', port=3306, user='root', passwd='3926', db='collection',charset="utf8")
# cursor = conn.cursor()
# cursor.execute("select * from main") 
# row_all = cursor.fetchall()


app = Flask(__name__)  

@app.route('/')
def hello_world():
	#app.logger.info(row_all)
	return render_template('index.html')

@app.route('/test')
def test():
	return render_template('index2.html')


@app.route('/index.html')
def index_page():
		return 'index'


@app.route('/user/<username>')
def userPage(username):
	username = 'ds' + username
	return data

if __name__ == '__main__':
		app.run(debug=True)