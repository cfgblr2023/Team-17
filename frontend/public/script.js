const button = document.getElementById("button");
button.addEventListener("click", () => {
  const input = document.getElementById("input").value;
  const data = {
    model: "davinci",
    prompt: input + "->",
    max_tokens: 30,
    temperature: 0.1,
  };
  fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer ",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const output = data.choices[0].text;
      document.getElementById("output").innerHTML = input + "<br>" + output;
    });
});
