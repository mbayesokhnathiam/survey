import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentStep: number = 0;

  getStepIcon(step: number): string {
    switch (step) {
      case 0:
        return 'home'; // Remplacez 'home' par le nom de l'icône pour la première étape
      case 1:
        return 'info'; // Remplacez 'info' par le nom de l'icône pour la deuxième étape
      case 2:
        return 'favorite'; // Remplacez 'favorite' par le nom de l'icône pour la troisième étape
      case 3:
        return 'done'; // Remplacez 'done' par le nom de l'icône pour la quatrième étape
      default:
        return '';
    }
  }
  
  nextStep() {
    this.currentStep++;
  }

  previousStep() {
    this.currentStep--;
  }

  isLastStep(): boolean {
    return this.currentStep === 3; // Assuming 0-based index for steps, and you have 4 steps
  }

  submit() {
    // Gérer la logique de soumission ici
  }
}
