function check(file) {
  const form = new FormData()
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'x-apikey': '1eb68886f218368b174574a3469c425a43c1ba26c98fd3bc3102402462aef5d2',
      'content-type': 'multipart/form-data'
    }
  };
  options.body = form
  fetch('https://www.virustotal.com/api/v3/files', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}
