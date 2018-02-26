import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import Vehicle from '../shared/vehicle.model';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {
  // It maintains list of transports
  vehicles: Vehicle[] = [];
  // It maintains transport Model


  // It maintains table row index based on selection.
  selectedRow: number;
  transportsTypes: string[] = ['Bus', 'Truck'];
  // It maintains Array of countries.

  constructor() {
    // Add default transport data.
    const dbVehicles = localStorage.getItem('vehiclesList');

    if (dbVehicles) {
      this.vehicles = JSON.parse(dbVehicles);
    } else {
      this.vehicles.push(new Vehicle('Bus', 'Yellow', '2.5 CC', 2000, 5000));
    }
  }

  ngOnInit() { }

  // // This method associate to Save Button.
  // onSave() {
  //   if (this.submitType === 'Save') {
  //     // Push transport model object into transport list.
  //     this.vehicles.push(this.vehicleModel);
  //   } else {
  //     // Update the existing properties values based on model.
  //     this.vehicles[this.selectedRow].type = this.vehicleModel.type;
  //     this.vehicles[this.selectedRow].color = this.vehicleModel.color;
  //     this.vehicles[this.selectedRow].engine = this.vehicleModel.engine;
  //     this.vehicles[this.selectedRow].weight = this.vehicleModel.weight;
  //     this.vehicles[this.selectedRow].price = this.vehicleModel.price;
  //   }

  //   this.setLocalStorage();
  //   // Hide transport entry section.
  //   this.showNew = false;
  // }

  // This method associate to Edit Button.
  // onEdit(index: number) {
  //   // Assign selected table row index.
  //   this.selectedRow = index;
  //   // Initiate new transport.
  //   this.vehicleModel = new Vehicles();
  //   // Retrieve selected transport from list and assign to model.
  //   this.vehicleModel = Object.assign({}, this.vehicles[this.selectedRow]);
  //   // Change submitType to Update.
  //   this.submitType = 'Update';
  //   // Display transport entry section.
  //   this.showNew = true;
  // }

  // This method associate to Delete Button.
  onDelete(index: number) {
    // Delete the corresponding transport entry from the list.
    this.vehicles.splice(index, 1);

    this.setLocalStorage();
  }

  setLocalStorage() {
    if (this.vehicles) {
      localStorage.setItem('vehiclesList', JSON.stringify(this.vehicles));
    }
  }
}
