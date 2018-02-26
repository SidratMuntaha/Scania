import { Component, OnInit, Input } from '@angular/core';
import Vehicle from '../shared/vehicle.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transport-form',
  templateUrl: './transport-form.component.html',
  styleUrls: ['./transport-form.component.css']
})
export class TransportFormComponent implements OnInit {
  // It maintains list of transports
  vehicles: Vehicle[];

  vehicleId: number;

  transportsTypes: string[] = ['Bus', 'Truck'];

  @Input('isEdit') isEdit = false;
  @Input('vehicle') vehicle = new Vehicle();

  constructor(private router: Router,
  private route: ActivatedRoute) { }

  ngOnInit() {
    const dbVehicles = localStorage.getItem('vehiclesList');
    if (dbVehicles) {
      this.vehicles = JSON.parse(dbVehicles);
    } else {
      this.vehicles = [];
    }

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.vehicleId = +id;
      const {type, color, engine, weight, price } = this.vehicles[+id];
      this.vehicle = new Vehicle(type, color, engine, weight, price);
    }
  }

  onChangeTransportType(type: string) {
    // Assign corresponding selected country to model.
    this.vehicle.type = type;
  }

  // This method associate to Save Button.
  onSave() {
    if (this.isEdit) {
      // Update the existing properties values based on model.
      this.vehicles[this.vehicleId] = this.vehicle;
    } else {
      // Push transport model object into transport list.
      this.vehicles.push(this.vehicle);
    }
    this.setLocalStorage();
    this.router.navigate(['']);
  }

  setLocalStorage() {
    if (this.vehicles) {
      localStorage.setItem('vehiclesList', JSON.stringify(this.vehicles));
    }
  }

}
