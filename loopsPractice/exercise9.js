const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]

  
  for (let i = 0; i < posts.length; i++) {
        if (2 == 2) {
            posts.splice(1, 1)  
        } 
  }
  console.log(posts);
