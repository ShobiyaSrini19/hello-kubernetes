from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
    return '''
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>DevOps Dashboard</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <style>
            body { background: #f0f2f5; height: 100vh; display: flex; align-items: center; justify-content: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
            .devops-card { background: white; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border-top: 5px solid #0d6efd; width: 100%; max-width: 500px; }
            .status-dot { height: 12px; width: 12px; background-color: #28a745; border-radius: 50%; display: inline-block; margin-right: 5px; }
            .badge-custom { font-size: 0.9rem; padding: 0.5em 1em; }
        </style>
    </head>
    <body>
        <div class="devops-card p-5 text-center">
            <h1 class="display-6 fw-bold text-dark mb-3">🚀 Hello DevOps!</h1>
            <p class="text-secondary mb-4">Pipeline status for Kubernetes Deployment</p>
            
            <div class="d-flex justify-content-center gap-2 mb-4">
                <span class="badge rounded-pill bg-success badge-custom">
                    <span class="status-dot"></span>Build: Successful
                </span>
                <span class="badge rounded-pill bg-primary badge-custom">Env: Minikube</span>
            </div>

            <div class="alert alert-light border border-info-subtle py-3">
                <p class="mb-0 text-info-emphasis fw-semibold">✅ CI/CD Automation Active</p>
                <small class="text-muted">Triggered by Jenkins Webhook</small>
            </div>
            
            <div class="mt-4 pt-3 border-top text-muted small">
                Architecture: Flask + Docker + Jenkins + K8s
            </div>
        </div>
    </body>
    </html>
    '''

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
