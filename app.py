from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def intro():
    return render_template("intro.html")

@app.route('/product')
def product():
    return render_template("product.html")

@app.route('/api')
def api():
    return render_template("api.html")

@app.route('/demo')
def demo():
    return render_template("demo.html")


if __name__ == '__main__':
    app.run(debug=True, port=8888)
