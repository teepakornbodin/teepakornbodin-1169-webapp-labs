curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent" \
  -H 'Content-Type: application/json' \
  -H 'X-goog-api-key: AIzaSyD_tar6-5UcesfVtr2uT6AHTUoI0NnpIXc' \
  -X POST \
  -d '{
    "contents": [
      {
        "parts": [
          {
            "text": "Explain how AI works in a few words"
          }
        ]
      }
    ]
  }'




  curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent" \
  -H 'Content-Type: application/json' \
  -H 'X-goog-api-key: AIzaSyD_tar6-5UcesfVtr2uT6AHTUoI0NnpIXc' \
  -X POST \
  -d '{
    "contents": [
      {
        "parts": [
          {
            "text": "แนะนำที่เที่ยว ที่พัก โรงแรม และคาเฟ่ในขอนแก่น"
          }
        ]
      }
    ]
  }'


  curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent" `
  -H 'Content-Type: application/json' `
  -H 'X-goog-api-key: AIzaSyD_tar6-5UcesfVtr2uT6AHTUoI0NnpIXc' `
  -X POST `
  -d '{"contents":[{"parts":[{"text":"แนะนำที่เที่ยว ที่พัก โรงแรม และคาเฟ่ในขอนแก่น"}]}]}'



  curl.exe "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent" `
  -H "Content-Type: application/json" `
  -H "X-goog-api-key: AIzaSyD_tar6-5UcesfVtr2uT6AHTUoI0NnpIXc" `
  -X POST `
  -d '{"contents":[{"parts":[{"text":"แนะนำที่เที่ยว ที่พัก โรงแรม และคาเฟ่ในขอนแก่น"}]}]}'


  curl.exe "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent" `
    -H "Content-Type: application/json" `
    -H "X-goog-api-key: AIzaSyD_tar6-5UcesfVtr2uT6AHTUoI0NnpIXc" `
    -X POST `
    -d @payload.json