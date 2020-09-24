import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../../interfaces/contact.interface';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact: Contact;
  constructor(public contactService: ContactService) { }

  ngOnInit() {
  }

  deleteContact(contact: Contact) {
    if(confirm('¿Estás seguro de que quieres eliminar esta este contacto?')) {
      this.contactService.deleteContact(contact);
    }
  }

}
