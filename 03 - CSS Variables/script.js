const inputs = document.querySelectorAll('.controls input');



function updateChangeValue(e)
{
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}


inputs.forEach(input => input.addEventListener('change',updateChangeValue))
inputs.forEach(input => input.addEventListener('mousemove',updateChangeValue))
