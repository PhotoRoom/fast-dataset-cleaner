import argparse

from back import app

parser = argparse.ArgumentParser()
parser.add_argument('--port', help='Port to run the app on.', default="1747")
args = parser.parse_args()

if __name__ == "__main__":
    print(args.port)
    app.run(debug=True, use_reloader=True, host='0.0.0.0', port=args.port)