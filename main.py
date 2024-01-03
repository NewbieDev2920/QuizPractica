from flask import render_template, Flask

HOST = 'localhost'
PORT = 2204

app = Flask(__name__)

@app.route("/")
def indexReturn():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host= HOST,port = PORT,debug= True)