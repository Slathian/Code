from flask import Flask, request, render_template

app = Flask(__name__)

@app.route("/")
def home():
	return render_template("home.html")

@app.route("/collection",methods=["POST"])
def collection():
    if request.method == "POST":
        message = request.form["message"]
        return render_template("results.html",result = message)

if __name__ == "__main__":
    app.run(debug=True)
