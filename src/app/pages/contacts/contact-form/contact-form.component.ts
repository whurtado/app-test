import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactService } from '../../../services/contact.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  title: string;
  description: string;

  constructor(public contactService: ContactService) { }

  ngOnInit() {
  }

  addContact(nuevoNombre: HTMLInputElement, nuevoTelefono: HTMLInputElement,  nuevoCorreo: HTMLInputElement) {
    this.contactService.addContact({
      nombre: nuevoNombre.value,
      telefono: nuevoTelefono.value,
      correo: nuevoCorreo.value,
      ocultarContenido: true
    });
    nuevoNombre.value = '';
    nuevoTelefono.value = '';
    nuevoCorreo.value = '';

    return false;
  }

}
