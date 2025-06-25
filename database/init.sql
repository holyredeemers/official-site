CREATE TABLE tbl_feedback (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  year TEXT,
  occupation TEXT,
  comment TEXT,
  isApproved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE tbl_events (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  image1 TEXT,
  image2 TEXT,
  image3 TEXT,
  image4 TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE tbl_carousel (
  id SERIAL PRIMARY KEY,
  image_path TEXT NOT NULL,
  title TEXT,
  description TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  display_order INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);