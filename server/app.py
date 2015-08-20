'''

'''

import importlib, json
import flask
import requests
from flask import request


app = flask.Flask('test')


@app.route('/')
def index():
    return 'hello world'


def simple_form():
    jd = request.json
    map(lambda item: jd.setdefault(item[0], jd.pop(item[0]) + '_tail'), jd.iteritems())
    return json.dumps(jd), 301


@app.route('/forms/<name>', methods=['GET', 'POST', 'PUT', 'DELETE'])
def form_route(name):
    if name:
        try:
            return getattr(importlib.import_module(__name__), name.replace('-', '_'))()
        except AttributeError, e:
            return flask.abort(404, 'form name %s not found' % name)
    else:
        return flask.abort(404, 'form name not given')


@app.route('/app')
@app.route('/app/<path:url>')
def proxy(url):
    req = flask.request
    rep = requests.request(req.method, ''.join([str(req.host_url).replace('2000', '8080'), req.full_path]), **req.form)
    return rep.content, rep.status_code

app.run(host='0.0.0.0', port=2000, debug=True)
