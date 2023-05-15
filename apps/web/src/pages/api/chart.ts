export default function handler(req, res) {
    if (req.method === 'POST') {
      fetch("https://proxy-worker.pancake-swap.workers.dev/bsc-exchange", { method: 'POST', body: JSON.stringify(req.body), headers: { 'Origin': 'http://localhost:3000' } }).then((r) => r.json()).then(data => res.send(data))
    } else {
      // Handle any other HTTP method
    }
  }