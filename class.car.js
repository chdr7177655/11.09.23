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