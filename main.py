from flask import render_template, Flask

HOST = 'localhost'
PORT = 2204

app = Flask(__name__)

@app.route("/")
def indexReturn():
    return render_template('index.html')

@app.route("/index.html")
def indexReturn2():
    return render_template("index.html")

@app.route("/create.html")
def createRender():
    return render_template('create.html')

@app.route("/leaderboards.html")
def createLeaderboard():
    return render_template('leaderboards.html')

@app.route("/play.html")
def createPlay():
    return render_template('play.html')

if __name__ == '__main__':
    app.run(host= HOST,port = PORT,debug= True)