# Airtable Setup Guide for VikasGPT

## Quick Setup Steps

### 1. Open Your Airtable Base
Go to: https://airtable.com/appTOLDWsdIbz7N7R

### 2. Create the Following Tables

Click the "+" button next to your existing tables to create new tables with these exact names:

## Table 1: Domains
**Table Name:** `Domains` (exact spelling)

**Fields to add:**
1. `domain` (Single line text) - Already exists as primary field, just rename it
2. `project_name` (Single line text) - Click "+" to add field
3. `site_key` (Single line text) - Optional field
4. `status` (Single select) - Add options: "Active", "Paused"

**Add First Record:**
- domain: `vikasbhatia.info`
- project_name: `Portfolio`
- status: `Active`

---

## Table 2: Leads
**Table Name:** `Leads` (exact spelling)

**Fields to add:**
1. `lead_id` (Single line text) - Rename the primary field to this
2. `created_at` (Created time) - Auto-populates when record is created
3. `status` (Single select) - Options: "New", "Qualifying", "Qualified", "Not a Fit", "Abandoned"
4. `contact_name` (Single line text)
5. `role` (Single line text)
6. `email` (Email)
7. `linkedin` (URL)
8. `company_name` (Single line text)
9. `industry` (Single line text)
10. `company_size` (Single line text)
11. `problem_summary` (Long text)
12. `urgency` (Single select) - Options: "This week", "2-4 weeks", "This quarter", "Flexible"
13. `timeline_date` (Date)
14. `decision_makers` (Long text)
15. `budget_context` (Long text)
16. `next_step` (Long text)
17. `ip_address` (Single line text)
18. `abuse_strikes` (Number) - Default value: 0
19. `source` (Single line text) - Default value: "Portfolio Chat"
20. `Domains` (Link to another record) - Link to Domains table

---

## Table 3: Conversations
**Table Name:** `Conversations` (exact spelling)

**Fields to add:**
1. `conv_id` (Single line text) - Rename primary field to this
2. `lead_id` (Single line text)
3. `turn_index` (Number)
4. `role` (Single select) - Options: "user", "assistant"
5. `message` (Long text)
6. `extracted_fields_json` (Long text)
7. `abuse_flag` (Checkbox)
8. `timestamp` (Created time)
9. `Domains` (Link to another record) - Link to Domains table

---

## Table 4: AbuseLogs
**Table Name:** `AbuseLogs` (exact spelling)

**Fields to add:**
1. `lead_id` (Single line text) - Rename primary field to this
2. `turn_index` (Number)
3. `ip_address` (Single line text)
4. `message` (Long text)
5. `strike_number` (Number)
6. `timestamp` (Created time)
7. `Domains` (Link to another record) - Link to Domains table

---

## 3. Verify Setup

After creating all tables:
1. Go to https://airtable.com/appTOLDWsdIbz7N7R/api/docs
2. You should now see all 4 tables listed in the API documentation
3. Each table should show the fields you created

## 4. Test the Integration

1. Go to your VikasGPT page on the deployed site
2. Start a conversation
3. Check the Leads and Conversations tables in Airtable
4. You should see records being created

## Troubleshooting

If records aren't appearing:
1. Check Netlify Function logs in Netlify dashboard
2. Ensure environment variables are set in Netlify:
   - `OPENAI_API_KEY`
   - `AIRTABLE_API_KEY`
   - `AIRTABLE_BASE_ID` (should be `appTOLDWsdIbz7N7R`)
3. Make sure the Domains table has a record for `vikasbhatia.info`

## Important Notes

- Table names must match exactly (case-sensitive)
- Field names should match exactly as shown above
- The primary field (first field) in each table needs to be renamed as specified
- Link fields connect tables together - make sure to select "Link to another record" and choose the correct table