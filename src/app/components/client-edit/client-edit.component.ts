// import { Component } from '@angular/core';

// Mis imports
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule, MatInputModule, MatFormFieldModule],
  templateUrl: './client-edit.component.html',
  styleUrl: './client-edit.component.css'
})
export class ClientEditComponent {

  // Chatgpt
  clientForm: FormGroup;
  clientId!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Cargar el cliente desde el backend (ejemplo de carga)
    this.clientId = this.route.snapshot.paramMap.get('id')!;
    // Aquí deberías hacer una llamada al backend para obtener los datos del cliente
    // Simulamos la carga de un cliente existente
    this.clientForm.setValue({
      name: 'Cliente Ejemplo',
      email: 'cliente@example.com',
      phone: '123456789',
      address: 'Calle Falsa 123'
    });
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      // Lógica para actualizar el cliente en el backend
      console.log(this.clientForm.value);
      this.router.navigate(['/clients']); // Redirigir a la lista de clientes
    }
  }
}
