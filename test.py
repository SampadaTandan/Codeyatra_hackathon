import pickle
import pandas as pd

# Load the trained models
with open("model_aqi.pkl", "rb") as f:
    loaded_clf_aqi, loaded_aqi_encoder = pickle.load(f)

with open("model_roi.pkl", "rb") as f:
    loaded_regressor_roi = pickle.load(f)

# Get user input
print("Enter business details for ROI and AQI prediction:")
industry_type = input("Industry Type: ")
stage_of_development = input("Stage of Development (Early/Growth/Scaling/Established/Mature): ")
target_market = input("Target Market (Local/Urban/Global/Businesses/Farmers etc.): ")
revenue_model = input("Revenue Model (Subscription/Sales/B2B/Gov Contracts/etc.): ")
profit_margin = float(input("Profit Margin (%): "))
valuation = float(input("Valuation (in Lakh, between 10-100): "))

# Create a DataFrame for the input
user_data = pd.DataFrame([[
    industry_type, stage_of_development, target_market, revenue_model, profit_margin, valuation
]], columns=["Industry Type", "Stage of Development", "Target Market", 
             "Revenue Model", "Profit Margin", "Valuation"])

# Predict AQI category
predicted_aqi = loaded_clf_aqi.predict(user_data)
aqi_category = loaded_aqi_encoder.inverse_transform(predicted_aqi)

# Predict ROI
predicted_roi = loaded_regressor_roi.predict(user_data)

# Display results
print("\n=== Prediction Results ===")
print(f"Predicted AQI Impact: {aqi_category[0]}")
print(f"Predicted ROI: {predicted_roi[0]:.2f}")
