
const cars = document.getElementById('carDetails');
const brandInput = document.getElementById('brandInput');
const modelInput = document.getElementById('modelInput');
const colorInput = document.getElementById('colorInput');
const yearInput = document.getElementById('yearInput');
const mileageInput = document.getElementById('mileageInput');
const colorSelect = document.getElementById('colorSelect');








  
 

  brandInput.addEventListener('input', function() {
    car.updateBrand(brandInput.value);
  });

  modelInput.addEventListener('input', function() {
    car.updateModel(modelInput.value);
  });

  colorInput.addEventListener('input', function() {
    car.updateColor(colorInput.value);
  });

  yearInput.addEventListener('input', function() {
    car.updateYear(yearInput.value);
  });

  mileageInput.addEventListener('input', function() {
    car.updateMileage(mileageInput.value);
  });

  colorSelect.addEventListener('change', function() {
    const selectedColor = colorSelect.value;
    car.updateColor(selectedColor);
  });