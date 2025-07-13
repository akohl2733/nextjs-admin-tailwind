from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal, engine, Base
import models, schemas, crud
from fastapi.middleware.cors import CORSMiddleware
import time

# Create DB tables
Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root():
    return {"message": "Backend is live!"}

@app.get("/metrics", response_model=list[schemas.Metric])
def read_metrics(db: Session = Depends(get_db)):
    time.sleep(2)
    return crud.get_metrics(db)

@app.post("/metrics", response_model=schemas.Metric)
def create_metric(metric: schemas.MetricCreate, db: Session = Depends(get_db)):
    return crud.create_metric(db, metric)

@app.delete("/metrics/{metric_id}")
def delete_metric(metric_id: int, db: Session = Depends(get_db)):
    res = crud.delete_metric(db, metric_id)
    if res is None:
        raise HTTPException(status_code=404, detail="Metric not found")
    return {"detail": "Metric deleted"}