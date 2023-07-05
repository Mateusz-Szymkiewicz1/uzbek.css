function preCode(selector) {
		var els = Array.prototype.slice.call(document.querySelectorAll(selector), 0);
		els.forEach(function(el) {
			var txt = el.textContent
				.replace(/^[\r\n]+/, "")	// strip leading newline
				.replace(/\s+$/g, "");		// strip trailing whitespace
			if (/^\S/gm.test(txt)) {
				el.textContent = txt;
				return;
			}
			var mat, str, re = /^[\t ]+/gm, len, min = 1e3;
			while (mat = re.exec(txt)) {
				len = mat[0].length;
				if (len < min) {
					min = len;
					str = mat[0];
				}
			}
			if (min == 1e3)
				return;
			el.textContent = txt.replace(new RegExp("^" + str, 'gm'), "");
		});
	}

document.querySelector(".navbar i").addEventListener('click', function(e){
  if(e.target.className == 'fa fa-sun'){
    e.target.className = 'fa fa-moon';
    document.body.classList.add('dark');
  }else{
    e.target.className = 'fa fa-sun';
    document.body.classList.remove('dark');
  }
})

function toggle_code(code){
  if(document.querySelector(`.${code}_target`).innerText){
    event.target.innerText = 'show code';
    document.querySelector(`.${code}_target`).parentElement.style.display = 'none';
    document.querySelector(`.${code}_target`).innerText = '';
  }else{
    event.target.innerText = 'hide code';
    document.querySelector(`.${code}_target`).parentElement.style.display = 'block';
    let content = document.querySelector(`.${code}`).innerHTML;
    document.querySelector(`.${code}_target`).textContent = content;
    preCode(`.${code}_target`);
    Prism.highlightElement(document.querySelector(`.${code}_target`));
  }
}