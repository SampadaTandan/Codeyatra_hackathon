import random
import pandas as pd
from faker import Faker

# Initialize Faker for synthetic text data.
fake = Faker()

# Define lists for categorical features.
industry_types = [
    "Renewable Energy", "Agriculture", "Waste Management", "Technology", 
    "Retail", "Healthcare", "Manufacturing", "Education", "Construction", 
    "Financial Services"
]
stages = ["Idea", "Prototype", "Launched", "Scaling", "Established"]
target_markets = ["Local", "Regional", "National", "International", "B2B", "B2C"]
revenue_models = ["Subscription", "One-time Purchase", "Freemium", "Ad-based", "Commission-based", "Licensing"]

# Define mapping functions to simulate numeric factors for AQI and ROI calculations.
def industry_aqi_factor(industry):
    """Assign a factor based on industry type. Lower factor means lower AQI (better environmental performance)."""
    mapping = {
        "Renewable Energy": 0.8,
        "Agriculture": 1.0,
        "Waste Management": 0.9,
        "Technology": 1.1,
        "Retail": 1.2,
        "Healthcare": 1.1,
        "Manufacturing": 1.5,
        "Education": 1.0,
        "Construction": 1.4,
        "Financial Services": 1.0
    }
    return mapping.get(industry, 1.0)

def stage_factor(stage):
    """Assign a factor based on the stage of development."""
    mapping = {
        "Idea": 0.7,
        "Prototype": 0.9,
        "Launched": 1.0,
        "Scaling": 1.1,
        "Established": 1.0
    }
    return mapping.get(stage, 1.0)

def revenue_model_factor(model):
    """Assign a factor based on the revenue model for ROI simulation."""
    mapping = {
        "Subscription": 1.2,
        "One-time Purchase": 1.0,
        "Freemium": 1.1,
        "Ad-based": 0.9,
        "Commission-based": 1.0,
        "Licensing": 1.1
    }
    return mapping.get(model, 1.0)

# Simulate AQI: We assume that a lower AQI is better. We base the simulation on industry and stage factors.
def simulate_aqi(industry, stage):
    base_aqi = random.uniform(30, 100)  # Base random value between 30 and 100.
    factor = industry_aqi_factor(industry) * stage_factor(stage)
    simulated_aqi = base_aqi * factor
    return round(simulated_aqi, 2)

# Simulate ROI: We assume ROI is a percentage return. We use stage and revenue model as factors.
def simulate_roi(stage, revenue_model):
    base_roi = random.uniform(5, 20)  # Base ROI percentage between 5% and 20%.
    factor = stage_factor(stage) * revenue_model_factor(revenue_model)
    simulated_roi = base_roi * factor
    return round(simulated_roi, 2)

# Generate the synthetic dataset.
num_samples = 1000  # Adjust as needed.
data = []

for _ in range(num_samples):
    business_name = fake.company()
    business_description = fake.text(max_nb_chars=200)
    industry = random.choice(industry_types)
    product_service_details = fake.sentence(nb_words=12)
    stage = random.choice(stages)
    target_market = random.choice(target_markets)
    revenue_model = random.choice(revenue_models)
    
    # Compute synthetic target values.
    aqi = simulate_aqi(industry, stage)
    roi = simulate_roi(stage, revenue_model)
    
    # Append the record to the dataset.
    data.append({
        "Business Name": business_name,
        "Business Description": business_description,
        "Industry Type": industry,
        "Product/Service Details": product_service_details,
        "Stage of Development": stage,
        "Target Market": target_market,
        "Revenue Model": revenue_model,
        "AQI": aqi,
        "ROI": roi
    })

# Create a DataFrame and export it to a CSV file.
df = pd.DataFrame(data)
df.to_csv("synthetic_business_sustainability_dataset.csv", index=False)
print("Dataset generated and saved as synthetic_business_sustainability_dataset.csv")
