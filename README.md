# React + Vite

TOP project memory-Card:

---

This game will be implemented using _React_ and focusing on the **useEffect** hook.
Will use Api to test my knowledge on the TOP lesson [How to Deal With Side Effects](https://www.theodinproject.com/lessons/node-path-react-new-how-to-deal-with-side-effects 'Visit Lesson')

---

Logic to implement:
When a user clicks on an image and then it shuffles and clicks on the same image, Game should be over.

** Behind the scenes **
Users clicks on an image - Image is checks list of objects to see if image is already there. else image is added to an object.

As long as images are not in the object they will continue to be added.

Object might look something like this.

```JavaScript
imageObject = {
  image1: true,
  image3: true,
  image4: true,
  image9: true
}
```

and the comparison would look something like this.
is image1 in imageObject?
if yes do this
else
do this

---
