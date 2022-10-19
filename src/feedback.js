(function () {
  var x = document.getElementById('username');
  var form = document.getElementById('form');
  var elem = document.createElement('div');
  elem.id = 'notify';
  elem.style.display = 'none';

  form.appendChild(elem);

  x.addEventListener('invalid', function (event) {
    event.preventDefault();
    if (!event.target.validity.valid) {
      x.className = 'invalid animated shake';
      x.placeholder = 'Name';
      elem.textContent = '! Error ';
      elem.className = 'error';
      elem.style.display = 'block';
    }
  });

  x.addEventListener('input', function (event) {
    if ('block' === elem.style.display) {
      x.className = '';
      elem.style.display = 'none';
    }
  });
})();

(function () {
  var input = document.getElementById('email');
  var form = document.getElementById('form-2');
  var elem = document.createElement('div');
  elem.id = 'notify';
  elem.style.display = 'none';

  form.appendChild(elem);

  input.addEventListener('invalid', function (event) {
    event.preventDefault();
    if (!event.target.validity.valid) {
      input.className = 'invalid animated shake';
      input.placeholder = 'e-mail';
      elem.textContent = '! Error ';
      elem.className = 'error';
      elem.style.display = 'block';
    }
  });

  input.addEventListener('input', function (event) {
    if ('block' === elem.style.display) {
      input.className = '';
      elem.style.display = 'none';
    }
  });
})();
