from app import app
from flask import render_template, request, url_for

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/terms')
def terms():
    return render_template("terms.html")

@app.route('/contact')
def contact():
    return render_template("contact.html")

@app.route('/grindex')
def grindex():
    return render_template('handbook.html')

@app.route('/brands')
def brands():
    return render_template('brands.html')




if __name__ == "__main__":
    app.run()
