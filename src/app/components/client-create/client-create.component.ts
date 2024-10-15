import { Component } from '@angular/core';

// Mis imports
import { Router, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-create',
  standalone: true,
  imports: [RouterOutlet,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule, // Importar también los botones de Angular Material
  ],
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css'] // Corregido 'styleUrls' en lugar de 'styleUrl'
})
export class ClientCreateComponent {

  clientForm: FormGroup;

  constructor(private fb: FormBuilder, public router: Router) {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      // Lógica para crear el cliente en el backend
      console.log(this.clientForm.value);
      this.router.navigate(['/clients']); // Redirigir a la lista de clientes
    }
  }

  cancel(): void {
    this.router.navigate(['/clients']); // Redirigir a la lista de clientes
  }
}

/*
import { Component } from '@angular/core';

// Mis imports
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-client-create',
  standalone: true,
  imports: [ReactiveFormsModule, MatSelectModule, MatInputModule, MatFormFieldModule],
  templateUrl: './client-create.component.html',
  styleUrl: './client-create.component.css'
})
export class ClientCreateComponent {

  // Chatgpt
  clientForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      // Lógica para crear el cliente en el backend
      console.log(this.clientForm.value);
      this.router.navigate(['/clients']); // Redirigir a la lista de clientes
    }
  }
}
  */
