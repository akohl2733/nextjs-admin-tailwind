from database import Base, engine

from sqlalchemy import Column, Integer, String

class Dummy(Base):
    __tablename__ = "dummy"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)

# Create tables
Base.metadata.create_all(bind=engine)