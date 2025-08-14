// Test script to verify API connections
const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '.env.local') });

const OPENAI_API_KEY = process.env.VITE_OPENAI_API_KEY;
const AIRTABLE_API_KEY = process.env.VITE_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.VITE_AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = process.env.VITE_AIRTABLE_TABLE_NAME;

console.log('🔧 Testing API Connections...\n');

// Test OpenAI API
async function testOpenAI() {
  console.log('📝 Testing OpenAI API...');
  
  if (!OPENAI_API_KEY) {
    console.error('❌ OpenAI API key not found');
    return false;
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: 'Say "API test successful" if you receive this.' }
        ],
        max_tokens: 50,
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('✅ OpenAI API connected successfully!');
    console.log('   Response:', response.data.choices[0].message.content);
    return true;
  } catch (error) {
    console.error('❌ OpenAI API error:', error.response?.data?.error || error.message);
    return false;
  }
}

// Test Airtable API
async function testAirtable() {
  console.log('\n📊 Testing Airtable API...');
  
  if (!AIRTABLE_API_KEY) {
    console.error('❌ Airtable API key not found');
    return false;
  }

  try {
    // First, try to list records to see if table exists
    const listUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;
    
    try {
      const listResponse = await axios.get(listUrl, {
        headers: {
          'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        },
      });
      console.log('✅ Airtable table exists and is accessible!');
    } catch (listError) {
      if (listError.response?.status === 404) {
        console.log('⚠️  Table "Conversations" not found. Creating test record to initialize table...');
      }
    }

    // Try to create a test record
    const response = await axios.post(
      listUrl,
      {
        records: [
          {
            fields: {
              SessionID: `test_${Date.now()}`,
              Messages: JSON.stringify([
                { role: 'user', content: 'Test message' },
                { role: 'assistant', content: 'Test response' }
              ]),
              Timestamp: new Date().toISOString(),
              UserAgent: 'API Test Script',
              Referrer: 'test-script',
            }
          }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('✅ Airtable API connected successfully!');
    console.log('   Test record created with ID:', response.data.records[0].id);
    return true;
  } catch (error) {
    console.error('❌ Airtable API error:', error.response?.data?.error || error.message);
    
    if (error.response?.status === 404) {
      console.log('\n📌 Please create a table named "Conversations" in your Airtable base with these fields:');
      console.log('   - SessionID (Single line text)');
      console.log('   - Messages (Long text)');
      console.log('   - Timestamp (Date time)');
      console.log('   - UserAgent (Single line text)');
      console.log('   - Referrer (Single line text)');
    }
    
    return false;
  }
}

// Run tests
async function runTests() {
  const openAISuccess = await testOpenAI();
  const airtableSuccess = await testAirtable();
  
  console.log('\n' + '='.repeat(50));
  console.log('📋 Test Summary:');
  console.log(`   OpenAI API: ${openAISuccess ? '✅ Working' : '❌ Failed'}`);
  console.log(`   Airtable API: ${airtableSuccess ? '✅ Working' : '❌ Failed'}`);
  
  if (openAISuccess && airtableSuccess) {
    console.log('\n🎉 All APIs are working! VikasGPT is ready to use.');
  } else {
    console.log('\n⚠️  Some APIs need attention. Check the errors above.');
  }
  
  console.log('\n📱 To test in the browser:');
  console.log('   1. Visit http://localhost:5175/vikasgpt');
  console.log('   2. Ask a question to test OpenAI integration');
  console.log('   3. Check your Airtable base for saved conversations');
}

runTests();