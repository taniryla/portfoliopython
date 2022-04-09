from flask import Flask, render_template, request, session, url_for, redirect

app = Flask(__name__)

@app.route('/')
def home():
	return render_template("main.html")

if __name__ == '__main__':
	app.run(host='0.0.0.0', port=8080, debug=True)