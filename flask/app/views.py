from app import app
from flask import render_template, request, url_for

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/terms.html')
def terms():
    return render_template("terms.html")

@app.route('/contact.html')
def contact():
    return render_template("contact.html")

@app.route('/handbook.html')
def pumps():
    return render_template('handbook.html')


if __name__ == "__main__":
    app.run()
