import { Component } from '@angular/core';
import { Residence } from 'src/Core/models/Residence';


@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  searchTerm: string = '';
  favorites: Residence[] = [];
  
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpeg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction" }
  ];

  get filteredResidences() {
    return this.listResidences.filter(res => 
      res.address.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  showAddress(address: string) {
    if (address === 'inconnu') {
      alert("L'adresse de cette résidence est inconnue !");
    } else {
      alert(`Adresse : ${address}`);
    }
  }

  addToFavorites(residence: Residence) {
    if (!this.favorites.includes(residence)) {
      this.favorites.push(residence);
    }
  }
}