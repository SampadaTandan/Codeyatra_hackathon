import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# ===========================
# Step 1: Load Investor Data
# ===========================
investor_data = pd.DataFrame([
    ["Investor 1", "Renewable Energy", "Green Energy Specialist", "Invested in solar & wind startups"],
    ["Investor 2", "Transportation", "Urban Mobility Expert", "Invested in ride-sharing & EV startups"],
    ["Investor 3", "Agriculture", "Agri-Tech Innovator", "Invested in smart farming solutions"],
    ["Investor 4", "Financial Services", "FinTech Investor", "Focuses on blockchain & AI trading"],
    ["Investor 5", "Waste Management", "Recycling Solutions Expert", "Invested in waste-to-energy startups"],
    ["Investor 6", "Automotive", "EV Industry Expert", "Has invested in EV battery tech"],
    ["Investor 7", "Manufacturing", "Sustainable Materials Expert", "Funds biodegradable packaging projects"],
    ["Investor 8", "Industrial Solutions", "Heavy Industry Consultant", "Focuses on automation & efficiency"],
    ["Investor 9", "Mining", "Natural Resource Investor", "Has experience in coal & metal extraction"],
    ["Investor 10", "Information Technology", "Cloud & AI Investor", "Invests in SaaS & ML startups"],
    ["Investor 11", "Renewable Energy", "Sustainable Infrastructure", "Funds large-scale solar projects"],
    ["Investor 12", "Transportation", "Public Transit Innovator", "Invested in smart transport systems"],
    ["Investor 13", "Agriculture", "Agro-Economist", "Supports food supply chain improvements"],
    ["Investor 14", "Financial Services", "Digital Banking Expert", "Funds mobile banking startups"],
    ["Investor 15", "Waste Management", "Plastic Waste Recycling", "Invested in circular economy models"],
    ["Investor 16", "Automotive", "Autonomous Vehicles Expert", "Invests in self-driving car tech"],
    ["Investor 17", "Manufacturing", "Smart Factory Specialist", "Supports Industry 4.0 startups"],
    ["Investor 18", "Industrial Solutions", "Carbon Capture Expert", "Invests in emission reduction tech"],
    ["Investor 19", "Mining", "Sustainable Mining Advocate", "Funds eco-friendly mining solutions"],
    ["Investor 20", "Information Technology", "Cybersecurity Investor", "Supports AI-based security firms"],
], columns=["Investor Name", "Preferred Industry", "Expertise", "Past Investment History"])

# ==============================
# Step 2: Load Entrepreneur Data
# ==============================
entrepreneur_data = pd.DataFrame([
    ["GreenTech Energy", "Renewable Energy", "Growth", "Global", "Subscription & Sales"],
    ["Urban Mobility", "Transportation", "Early", "Urban commuters", "Rental"],
    ["EcoFarms", "Agriculture", "Expansion", "Farmers & retailers", "Direct Sales"],
    ["AI FinTech", "Financial Services", "Scaling", "Investors", "Subscription"],
    ["Waste2Wealth", "Waste Management", "Early", "Municipalities", "Government contracts"],
    ["AutoRevive", "Automotive", "Growth", "Car manufacturers", "B2B Sales"],
    ["TextilePro", "Manufacturing", "Established", "Fashion brands", "B2B & B2C"],
    ["CarbonCut", "Industrial Solutions", "Early", "Heavy industries", "Licensing"],
    ["MegaMines Corp", "Mining", "Mature", "Global", "Commodity Sales"],
    ["Cloud IT Solutions", "Information Technology", "Scaling", "Businesses", "SaaS"],
], columns=["Business Name", "Industry Type", "Stage of Development", "Target Market", "Revenue Model"])

# =========================================
# Step 3: Feature Engineering (Text Merging)
# =========================================
investor_data["text"] = investor_data["Preferred Industry"] + " " + investor_data["Expertise"] + " " + investor_data["Past Investment History"]
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
