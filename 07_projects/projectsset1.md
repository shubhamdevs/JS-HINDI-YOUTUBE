# Projects related to DOM

## project link
[Click Here](www.google.com)

## Project - 1 


## Project - 2 solution

```javascript
const form = document.querySelector('form')

form.addEventListener("submit", function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  const results = document.querySelector("#results")

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`
  } else {
    const bmi = (weight/ ((height * height)/10000)).toFixed(2)
    if (bmi > 24.9) {
      results.innerHTML = `<span> You are Over weight and your bmi is ${bmi}`
    } else if (bmi > 18.6) {
      results.innerHTML = `<span> You are in Normal Range and your bmi is ${bmi}`
    } else {
      results.innerHTML = `<span> You are Under Weight and your bmi is ${bmi}`
    }
  }
})
```

## Project - 3 Solution Code

```javascript
const clock = document.getElementById("clock")

setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```
