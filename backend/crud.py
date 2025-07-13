from sqlalchemy.orm import Session
from models import Metric
from schemas import MetricCreate

def get_metrics(db: Session):
    return db.query(Metric).all()

def create_metric(db: Session, metric: MetricCreate):
    db_metric = Metric(**metric.dict())
    db.add(db_metric)
    db.commit()
    db.refresh(db_metric)
    return db_metric

def delete_metric(db: Session, metric_id: int):
    db_metric = db.query(Metric).filter(Metric.id == metric_id).first()
    if not db_metric:
        return None
    db.delete(db_metric)
    db.commit()
    return db_metric