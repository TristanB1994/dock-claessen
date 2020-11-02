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

@app.route('/brands')
def brands():
    return render_template('brands.html')

@app.route('/product/<string:target>')
def product(target):
    addr = target+'.html'
    print(addr)
    return render_template(str(addr))

if __name__ == "__main__":
    app.run()
