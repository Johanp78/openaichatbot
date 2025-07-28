async function send() {
  const prompt = document.getElementById('prompt').value;
  const res = await fetch('http://localhost:3000/ask', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  });
  const data = await res.json();
  document.getElementById('response').innerText = data.reply;
}
