from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal, engine, Base
import models, schemas, crud

# Create DB tables
Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Backend is live!"}

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/metrics", response_model=list[schemas.Metric])
def read_metrics(db: Session = Depends(get_db)):
    return crud.get_metrics(db)

@app.post("/metrics", response_model=schemas.Metric)
def create_metric(metric: schemas.MetricCreate, db: Session = Depends(get_db)):
    return crud.create_metric(db, metric)

@app.delete("/metrics/{metric_id}")
def delete_metric(metric_id: int, db: Session = Depends(get_db)):
    success = crud.delete_metric(db, metric_id)
    if not success:
        raise HTTPException(status_code=404, detail="Metric not found")
    return {"detail": "Metric deleted"}