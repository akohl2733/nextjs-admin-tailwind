from sqlalchemy.orm import Session
from database import SessionLocal, engine
import crud, schemas
import random
from datetime import datetime

metric_names = [
    "CPU Usage",
    "Memory Usage",
    "API Response Time",
    "Active User",
    "Disk Space Used",
    "Error rate"
]

def seed_metrics():
    db: Session = SessionLocal()
    try:
        for name in metric_names:
            metric_data = schemas.MetricCreate(
                name=name,
                value=round(random.uniform(0, 100), 2)
            )
            crud.create_metric(db, metric_data)
        print(f"Seeded {len(metric_names)} metrics.")
    finally:
        db.close()

if __name__ == "__main__":
    seed_metrics()