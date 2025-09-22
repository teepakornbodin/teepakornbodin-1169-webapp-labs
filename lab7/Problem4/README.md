# การทดลองเรียกใช้งาน API JSONPlaceholder  

โปรเจกต์นี้เป็นการทดสอบการเรียกใช้งาน **Web API** โดยใช้ `fetch` และ `POST request` เพื่อเพิ่มโพสต์ใหม่ลงไปที่ [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

---

## 🔹 API นี้เกี่ยวกับอะไร?  
**JSONPlaceholder** เป็น REST API ปลอม (Fake API) ที่ให้บริการฟรี เหมาะสำหรับใช้ทดสอบการทำงานของ Web API และการฝึกเขียนโค้ดเชื่อมต่อ API โดยไม่ต้องมีฐานข้อมูลจริง สามารถส่งหรือดึงข้อมูลจำลอง เช่น posts, comments, users, todos เป็นต้น

---

## 🔹 API URL ที่เรียกใช้  
https://jsonplaceholder.typicode.com/posts

---

## 🔹 ข้อมูลที่ส่งไป (Request Body)  
```json
{
  "userId": 11,
  "title": "Volleyball game this evening!",
  "body": "The game is between Thailand and Vietnam."
}

