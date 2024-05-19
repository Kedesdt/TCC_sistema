from consultorio import app

with app.app_context():
    if __name__ == "__main__":
        app.run(host='0.0.0.0', port=int('5000'),debug = True)
