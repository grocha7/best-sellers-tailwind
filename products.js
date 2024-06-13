const products = [
  {
      "id": 1,
      "title": "Outside Vibes T-Shirt Sunshine",
      "price": "$104.95",
      "primary_image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "secondary_image": "https://images.unsplash.com/photo-1559912311-8421ee673ca5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHMlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
      "bestseller": "true",
      "reviews": "1,999"
  },
  {
      "id": 2,
      "title": "Outside Vibes Cap Forest Green",
      "price": "$104.95",
      "primary_image": "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
      "secondary_image": "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWRpZGFzJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D",
      "bestseller": "true",
      "sale": "SAVE 15%",
      "reviews": 211
  },
  {
      "id": 3,
      "title": "Nike Shoes",
      "price": "$104.95",
      "primary_image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww",
      "secondary_image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww",
      "bestseller": "true",
      "reviews": "1,234"
  },
  {
      "id": 4,
      "title": "Headphones",
      "price": "$104.95",
      "primary_image": "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww",
      "secondary_image": "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww",
      "bestseller": "true",
      "sale": "SAVE 15%",
      "reviews": 124
  },
  {
      "id": 5,
      "title": "Smartwatch",
      "price": "$104.95",
      "primary_image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
      "secondary_image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
      "bestseller": "true",
      "reviews": "2,322"
  },
  {
      "id": 6,
      "title": "Backpack",
      "price": "$104.95",
      "primary_image": "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
      "secondary_image": "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWRpZGFzJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D",
      "reviews": 211
  },
  {
      "id": 7,
      "title": "Camera",
      "price": "$104.95",
      "primary_image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
      "secondary_image": "https://images.unsplash.com/photo-1580980379292-082d6126499c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWRpZGFzJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D",
      "reviews": 71
  },
  {
      "id": 8,
      "title": "Laptop",
      "price": "$104.95",
      "primary_image": "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
      "secondary_image": "https://images.unsplash.com/photo-1558191053-c03db2757e3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFkaWRhcyUyMHNob2VzfGVufDB8fDB8fHww",
      "reviews": 37
  },
  {
      "id": 9,
      "title": "Tablet",
      "price": "$104.95",
      "primary_image": "https://images.unsplash.com/photo-1611510338559-2f463335092c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
      "secondary_image": "https://images.unsplash.com/photo-1520256862855-398228c41684?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFkaWRhcyUyMHNob2VzfGVufDB8fDB8fHww",
      "reviews": 19
  },
  {
      "id": 10,
      "title": "Smartphone",
      "price": "$104.95",
      "primary_image": "https://images.unsplash.com/photo-1584735175097-719d848f8449?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
      "secondary_image": "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGFkaWRhcyUyMHNob2VzfGVufDB8fDB8fHww",
      "reviews": 2

  }
]
