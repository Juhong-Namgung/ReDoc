from flask import Flask, render_template, request, jsonify
import json, urllib.request

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


@app.route('/api/image', methods=['POST'])
def api_image():
	print(request.data)
	req_url = 'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases'
	req = urllib.request.Request(req_url)
	# req_head = {
	# 	'Content-type' : 'application/json',
	# 	'Ocp-Apim-Subscription-Key': 'e53a58d375cd465489d65e0d471dbedb'
	# }
	req.add_header('Content-type', 'application/json')
	req.add_header('Ocp-Apim-Subscription-Key', 'e53a58d375cd465489d65e0d471dbedb')
	req_body = {
			  "documents": [
			    {
			      "language": "en",
			      "id": "1",
			      "text": request.data
			    }
			  ]
			}
	jsondata = json.dumps(req_body)
	jsondataasbytes = jsondata.encode('utf-8')
	req.add_header('Content-Length', len(jsondataasbytes))
	print(jsondataasbytes)
	# req_head = json.dumps(req_head)
	# req_body = jsonify(documents=json.dumps(req_body))

	# print(req_head)
	# print(req_body)
	# res = requests.post(,
	# 			 headers=req_head)
	# , json=req_body)
	res = urllib.request.ulropen(req, jsondataasbytes)
	print(res)
	return jsonify(result=search_image())


def search_image(keywords):
	# code here

	return 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'


if __name__ == '__main__':
    app.run(debug=True, port=8888)
