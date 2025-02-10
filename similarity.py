import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# ===========================
# Step 1: Load Investor Data
# ===========================
investor_data = pd.DataFrame([
    ["Investor 1", "Renewable Energy", "Green Energy Specialist"],
    ["Investor 2", "Transportation", "Urban Mobility Expert"],
    ["Investor 3", "Agriculture", "Agri-Tech Innovator"],
    ["Investor 4", "Financial Services", "FinTech Investor"],
    ["Investor 5", "Waste Management", "Recycling Solutions Expert"],
    ["Investor 6", "Automotive", "EV Industry Expert"],
    ["Investor 7", "Manufacturing", "Sustainable Materials Expert"],
    ["Investor 8", "Industrial Solutions", "Heavy Industry Consultant"],
    ["Investor 9", "Mining", "Natural Resource Investor"],
    ["Investor 10", "Information Technology", "Cloud & AI Investor"],
    ["Investor 11", "Renewable Energy", "Sustainable Infrastructure"],
    ["Investor 12", "Transportation", "Public Transit Innovator"],
    ["Investor 13", "Agriculture", "Agro-Economist"],
    ["Investor 14", "Financial Services", "Digital Banking Expert"],
    ["Investor 15", "Waste Management", "Plastic Waste Recycling"],
    ["Investor 16", "Automotive", "Autonomous Vehicles Expert"],
    ["Investor 17", "Manufacturing", "Smart Factory Specialist"],
    ["Investor 18", "Industrial Solutions", "Carbon Capture Expert"],
    ["Investor 19", "Mining", "Sustainable Mining Advocate"],
    ["Investor 20", "Information Technology", "Cybersecurity Investor"],
], columns=["Investor Name", "Preferred Industry", "Expertise"])

# ==============================
# Step 2: Load Entrepreneur Data
# ==============================
entrepreneur_data = pd.DataFrame([
    ["GreenTech Energy", "Renewable Energy", "Growth", "Global", "Subscription & Sales", "Solar power generation, energy storage", "Provides clean energy solutions to businesses and homes"],
    ["Urban Mobility", "Transportation", "Early", "Urban commuters", "Rental", "Electric bike sharing", "Improving urban mobility with clean transport options"],
    ["EcoFarms", "Agriculture", "Expansion", "Farmers & retailers", "Direct Sales", "Organic farming, farm-to-market solutions", "Helping farmers grow organic crops and connect with retailers"],
    ["AI FinTech", "Financial Services", "Scaling", "Investors", "Subscription", "AI-driven investment tools", "Providing investment solutions through AI and data analytics"],
    ["Waste2Wealth", "Waste Management", "Early", "Municipalities", "Government contracts", "Waste-to-energy technology", "Helping cities manage waste while generating energy"],
    ["AutoRevive", "Automotive", "Growth", "Car manufacturers", "B2B Sales", "Electric vehicle battery manufacturing", "Supplying batteries to electric vehicle makers"],
    ["TextilePro", "Manufacturing", "Established", "Fashion brands", "B2B & B2C", "Sustainable textiles and fabrics", "Providing eco-friendly fabrics for the fashion industry"],
    ["CarbonCut", "Industrial Solutions", "Early", "Heavy industries", "Licensing", "Carbon capture and storage technology", "Reducing industrial carbon emissions through innovative technology"],
    ["MegaMines Corp", "Mining", "Mature", "Global", "Commodity Sales", "Mineral extraction", "Mining and supplying essential raw materials globally"],
    ["Cloud IT Solutions", "Information Technology", "Scaling", "Businesses", "SaaS", "Cloud computing services", "Providing businesses with scalable cloud-based IT solutions"],
], columns=["Business Name", "Industry Type", "Stage of Development", "Target Market", "Revenue Model", "Product/Service Details", "Business Description"])

# =========================================
# Step 3: Feature Engineering (Text Merging)
# =========================================
investor_data["text"] = investor_data["Preferred Industry"] + " " + investor_data["Expertise"]
entrepreneur_data["text"] = entrepreneur_data["Industry Type"] + " " + entrepreneur_data["Stage of Development"] + " " + entrepreneur_data["Target Market"] + " " + entrepreneur_data["Revenue Model"]

# ================================================
# Step 4: Compute Similarity using TF-IDF & Cosine
# ================================================
vectorizer = TfidfVectorizer(stop_words="english")
tfidf_matrix = vectorizer.fit_transform(pd.concat([investor_data["text"], entrepreneur_data["text"]]))

# Compute cosine similarity
similarity_matrix = cosine_similarity(tfidf_matrix[:len(investor_data)], tfidf_matrix[len(investor_data):])

# Convert similarity matrix into DataFrame
similarity_df = pd.DataFrame(similarity_matrix, index=investor_data["Investor Name"], columns=entrepreneur_data["Business Name"])

# Get top 3 matches per investor
top_matches = similarity_df.apply(lambda x: x.nlargest(3).index.tolist(), axis=1)

# Store results in DataFrame
matching_results = pd.DataFrame({
    "Investor": similarity_df.index,
    "Top 3 Matches": top_matches
})

# ================================
# Step 5: Test Cases for Matching
# ================================
def match_investor_to_entrepreneur(investor_name):
    if investor_name in matching_results["Investor"].values:
        matches = matching_results[matching_results["Investor"] == investor_name]["Top 3 Matches"].values[0]
        print(f"\nInvestor: {investor_name}")
        print(f"Top 3 Matches: {matches}")
    else:
        print(f"Investor '{investor_name}' not found in the dataset.")

# Test with a sample investor name
match_investor_to_entrepreneur("Investor 1")
match_investor_to_entrepreneur("Investor 5")
match_investor_to_entrepreneur("Investor 10")
