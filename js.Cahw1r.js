
const cars = document.getElementById('carDetails');
const brandInput = document.getElementById('brandInput');
const modelInput = document.getElementById('modelInput');
const colorInput = document.getElementById('colorInput');
const yearInput = document.getElementById('yearInput');
const mileageInput = document.getElementById('mileageInput');
const colorSelect = document.getElementById('colorSelect');







class Car {
    constructor(brand, model, color, year, mileage) {
      this.brand = brand;
      this.model = model;
      this.color = color;
      this.year = year;
      this.mileage = mileage;
    }
  
    updateBrand(newBrand) {
      this.brand = newBrand;
      this.updateCarDetails();
    }
  
    updateModel(newModel) {
      this.model = newModel;
      this.updateCarDetails();
    }
  
    updateColor(newColor) {
      this.color = newColor;
      this.updateCarDetails();
      this.updateCarDrawing();
    }
  
    updateYear(newYear) {
      this.year = newYear;
      this.updateCarDetails();
    }
  
    updateMileage(newMileage) {
      this.mileage = newMileage;
      this.updateCarDetails();
    }
  
    updateCarDetails() {
      cars.innerText = `Brand: ${this.brand}\nModel: ${this.model}\nColor: ${this.color}\nYear: ${this.year}\nMileage: ${this.mileage}`;
    }
  
    updateCarDrawing() {
      cars.className = `car ${this.color}`;
    }
  }
  
  const car = new Car('', '', '', '', '');

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