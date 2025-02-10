import pandas as pd
import numpy as np
import pickle
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, OneHotEncoder, StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.ensemble import RandomForestRegressor, RandomForestClassifier
from sklearn.metrics import accuracy_score, mean_absolute_error

# Sample dataset
data = pd.DataFrame([
    ["GreenTech Energy", "Renewable Energy", "Solar panels & batteries", "Growth", "Global", "Subscription & Sales", 25, 85, "Low", 22],
    ["Urban Mobility", "Transportation", "Electric scooters", "Early", "Urban commuters", "Rental", 15, 40, "Medium", 18],
    ["EcoFarms", "Agriculture", "Organic farming solutions", "Expansion", "Farmers & retailers", "Direct Sales", 30, 75, "Low", 25],
    ["AI FinTech", "Financial Services", "AI-powered trading platform", "Scaling", "Investors", "Subscription", 40, 95, "N/A", 35],
    ["Waste2Wealth", "Waste Management", "Recycling solutions", "Early", "Municipalities", "Government contracts", 20, 55, "Low", 20],
    ["AutoRevive", "Automotive", "EV battery recycling", "Growth", "Car manufacturers", "B2B Sales", 22, 50, "Low", 19],
    ["TextilePro", "Manufacturing", "Sustainable fabrics", "Established", "Fashion brands", "B2B & B2C", 28, 65, "Medium", 24],
    ["CarbonCut", "Industrial Solutions", "Carbon capture tech", "Early", "Heavy industries", "Licensing", 12, 30, "Low", 16],
    ["MegaMines Corp", "Mining", "Coal & mineral extraction", "Mature", "Global", "Commodity Sales", 35, 100, "High", 12],
    ["Cloud IT Solutions", "Information Tech", "Cloud computing services", "Scaling", "Businesses", "SaaS", 45, 90, "N/A", 30],
], columns=["Business Name", "Industry Type", "Product/Service Details", "Stage of Development", 
            "Target Market", "Revenue Model", "Profit Margin", "Valuation (lakh)", "AQI Impact", "ROI"])

# Drop non-useful columns for training
data = data.drop(columns=["Business Name", "Product/Service Details"])

# Encode categorical variables
categorical_features = ["Industry Type", "Stage of Development", "Target Market", "Revenue Model"]
label_features = ["AQI Impact"]  # AQI is categorical

# Preprocessing
preprocessor = ColumnTransformer([
    ("onehot", OneHotEncoder(handle_unknown="ignore"), categorical_features),
    ("scaler", StandardScaler(), ["Profit Margin", "Valuation (lakh)"])
])

# Encode AQI Impact as a classification target
aqi_encoder = LabelEncoder()
data["AQI Impact"] = aqi_encoder.fit_transform(data["AQI Impact"])  # Convert AQI labels to numbers

# Split dataset for AQI classification
X_aqi = data.drop(columns=["ROI", "AQI Impact"])
y_aqi = data["AQI Impact"]
X_train_aqi, X_test_aqi, y_train_aqi, y_test_aqi = train_test_split(X_aqi, y_aqi, test_size=0.2, random_state=42)

# Train AQI classification model
clf_aqi = Pipeline([
    ("preprocessor", preprocessor),
    ("classifier", RandomForestClassifier(n_estimators=100, random_state=42))
])
clf_aqi.fit(X_train_aqi, y_train_aqi)

# Evaluate AQI model
y_pred_aqi = clf_aqi.predict(X_test_aqi)
print("AQI Classification Accuracy:", accuracy_score(y_test_aqi, y_pred_aqi))

# Save AQI model
with open("model_aqi.pkl", "wb") as f:
    pickle.dump((clf_aqi, aqi_encoder), f)

# Split dataset for ROI regression
X_roi = data.drop(columns=["ROI", "AQI Impact"])
y_roi = data["ROI"]
X_train_roi, X_test_roi, y_train_roi, y_test_roi = train_test_split(X_roi, y_roi, test_size=0.2, random_state=42)

# Train ROI regression model
regressor_roi = Pipeline([
    ("preprocessor", preprocessor),
    ("regressor", RandomForestRegressor(n_estimators=100, random_state=42))
])
regressor_roi.fit(X_train_roi, y_train_roi)

# Evaluate ROI model
y_pred_roi = regressor_roi.predict(X_test_roi)
print("ROI Mean Absolute Error:", mean_absolute_error(y_test_roi, y_pred_roi))

# Save ROI model
with open("model_roi.pkl", "wb") as f:
    pickle.dump(regressor_roi, f)

# Load models and test with a new business
with open("model_aqi.pkl", "rb") as f:
    loaded_clf_aqi, loaded_aqi_encoder = pickle.load(f)
with open("model_roi.pkl", "rb") as f:
    loaded_regressor_roi = pickle.load(f)

# Test case: New business details
test_business = pd.DataFrame([[
    "Green Logistics", "Transportation", "Growth", "Urban logistics", "Subscription", 20, 60
]], columns=["Business Name", "Industry Type", "Stage of Development", "Target Market", 
             "Revenue Model", "Profit Margin", "Valuation (lakh)"])

# Drop Business Name for prediction
test_business = test_business.drop(columns=["Business Name"])

# Predict AQI category
predicted_aqi = loaded_clf_aqi.predict(test_business)
aqi_category = loaded_aqi_encoder.inverse_transform(predicted_aqi)
print("Predicted AQI Impact:", aqi_category[0])

# Predict ROI
predicted_roi = loaded_regressor_roi.predict(test_business)
print("Predicted ROI:", predicted_roi[0])
