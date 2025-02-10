import pickle
import pandas as pd
from pymongo import MongoClient
import time
from transformers import pipeline

# Load the summarization pipeline
summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

# MongoDB connection
MONGODB_URI = "mongodb+srv://sampada:tandan@sampada.wpoq0ol.mongodb.net/MERN_admin?retryWrites=true&w=majority&appName=sampada"
client = MongoClient(MONGODB_URI)
db = client.get_database()  # Default database (MERN_admin)
business_collection = db["businesses"]  # Collection storing business data

# Function to generate bullet points from a paragraph
def generate_bullet_points(paragraph):
    if not paragraph.strip():
        return []
    
    summary = summarizer(paragraph, max_length=150, min_length=50, do_sample=False)
    summary_text = summary[0]['summary_text']
    bullet_points = summary_text.split(". ")
    
    return [point.strip() for point in bullet_points if point]

# Function to process and update predictions
def process_businesses():
    businesses = business_collection.find({"bulletPoints": {"$exists": False}})  # Fetch only businesses without bullet points

    for business in businesses:
        # Extract fields from MongoDB with default values
        business_name = business.get("businessName", "Unknown")
        business_description = business.get("businessDescription", "")

        # Generate bullet points for business description
        bullet_points = generate_bullet_points(business_description)

        # Update MongoDB with bullet points
        update_data = {
            "bulletPoints": bullet_points
        }

        business_collection.update_one(
            {"_id": business["_id"]},
            {"$set": update_data}
        )

        print(f"Updated business '{business_name}' with bullet points.")

# Run the process every 20 seconds
while True:
    process_businesses()
    time.sleep(20)
