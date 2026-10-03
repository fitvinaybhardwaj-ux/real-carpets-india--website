import os
import sys
import json
import time
import mimetypes
from http.server import HTTPServer, SimpleHTTPRequestHandler
import random

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(ROOT_DIR, 'data')
os.makedirs(DATA_DIR, exist_ok=True)

# Ensure proper modern mimetypes
mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')
mimetypes.add_type('image/svg+xml', '.svg')
mimetypes.add_type('application/json', '.json')

class RealCarpetsHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT_DIR, **kwargs)

    def log_message(self, format, *args):
        # Clean console log
        sys.stdout.write("[%s] %s - %s %s\n" % (time.strftime('%Y-%m-%d %H:%M:%S'), args[0], args[1], args[2]))

    def end_headers(self):
        # Enable CORS and caching headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length).decode('utf-8') if content_length > 0 else '{}'
        
        try:
            payload = json.loads(post_data)
        except Exception:
            payload = {}

        path = self.path.split('?')[0]

        if path == '/api/quote':
            ref_id = "RCI-QT-%d" % random.randint(1000, 9999)
            payload['refId'] = ref_id
            payload['receivedAt'] = time.time()
            with open(os.path.join(DATA_DIR, 'quotes.jsonl'), 'a', encoding='utf-8') as f:
                f.write(json.dumps(payload) + '\n')
            self._send_json(200, {
                'status': 'success',
                'refId': ref_id,
                'message': 'Quotation request logged successfully at Panipat export desk.'
            })
            return

        elif path == '/api/sample':
            ref_id = "RCI-SMP-%d" % random.randint(1000, 9999)
            payload['refId'] = ref_id
            payload['receivedAt'] = time.time()
            with open(os.path.join(DATA_DIR, 'samples.jsonl'), 'a', encoding='utf-8') as f:
                f.write(json.dumps(payload) + '\n')
            self._send_json(200, {
                'status': 'success',
                'refId': ref_id,
                'message': 'Sample swatch order registered for factory dispatch.'
            })
            return

        elif path == '/api/custom':
            ref_id = "RCI-CR-%d" % random.randint(1000, 9999)
            payload['refId'] = ref_id
            payload['receivedAt'] = time.time()
            with open(os.path.join(DATA_DIR, 'custom_briefs.jsonl'), 'a', encoding='utf-8') as f:
                f.write(json.dumps(payload) + '\n')
            self._send_json(200, {
                'status': 'success',
                'refId': ref_id,
                'message': 'Custom project brief logged for design review.'
            })
            return

        self._send_json(404, {'error': 'Endpoint not found'})

    def _send_json(self, status_code, data):
        body = json.dumps(data).encode('utf-8')
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

def run(port=8080):
    for attempt in range(5):
        target_port = port + attempt
        try:
            server_address = ('', target_port)
            httpd = HTTPServer(server_address, RealCarpetsHandler)
            print("\n=======================================================")
            print(" REAL CARPETS INDIA - B2B EXPORT PLATFORM")
            print(" Local Web Server running at: http://localhost:%d/" % target_port)
            print("=======================================================\n")
            httpd.serve_forever()
            break
        except OSError as e:
            if 'Address already in use' in str(e):
                continue
            raise e

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
    run(port)
