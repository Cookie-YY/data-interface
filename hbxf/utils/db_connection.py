from sqlalchemy import create_engine
from sqlalchemy import MetaData

from app import app

# INDEX_DB = 'mysql+pymysql://root:Beidas0ft@39.107.240.28:3306/pt_dev_dabot'
INDEX_DB = app.config.get("INDEX_DB")
engine = create_engine(INDEX_DB,
                       pool_recycle=-1,
                       pool_size=100,
                       max_overflow=0)

metadata = MetaData()