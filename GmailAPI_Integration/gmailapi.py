import os
from google.oauth2 import service_account
from googleapiclient.discovery import build

# Path to your credentials JSON file
credentials_path = ''

# Scopes for accessing Gmail
scopes = ['https://www.googleapis.com/auth/gmail.readonly']

print(type(credentials_path))
# Create a credentials object
credentials = service_account.Credentials.from_service_account_file(
    credentials_path, scopes=scopes)

# Build the Gmail API service
service = build('gmail', 'v1', credentials=credentials)

# List the user's Gmail labels
labels = service.users().labels().list(userId='me').execute()
print("Labels:")
for label in labels['labels']:
    print(label['name'])