"""Data visualization of HackerRank submissions over 30 days."""

from flask import Flask, render_template, Response, request
from jinja2 import StrictUndefined
import os
import json

app = Flask(__name__)

# Raise an error if you use an undefined variable in Jinja2
app.jinja_env.undefined = StrictUndefined

@app.route('/')
def index():
    """Homepage."""

    return render_template('hackerrank.html')

@app.route('/data')
def read_data():
    """Load up raw data."""

    with open("data.js") as data_file:
        day_data = data_file.readlines()
        day_data = day_data.split(',')

        days = [day_data[0] for line in day_data]
        submissions = [day_data[1] for line in day_data]
        topics = [day_data[2] for line in day_data]

        data = {
            "days": days,
            "submissions": submissions,
            "topics": topics
        }

    return Response(json.dumps(data), mimetype='application/json')


@app.route('/favicon.ico')
def favicon():
    """Pie chart favicon"""

    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon-pie-chart.ico', mimetype='image/vnd.microsoft.icon')

@app.route("/error")
def error():
    raise Exception("Error!")

if __name__ == "__main__":


    app.debug = True
    app.run()
    # PORT = int(os.environ.get("PORT", 5000))
    # app.debug = True
    # # DEBUG = "NO_DEBUG" not in os.environ
    # app.run(host="0.0.0.0", port=PORT, debug=DEBUG)
