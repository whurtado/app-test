import { Component, OnInit } from '@angular/core';

import { ContactService } from "../../../services/contact.service";
import { Contact } from '../../../interfaces/contact.interface';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  
  contacts: Contact[] = [];

  constructor(public contactService: ContactService) {
    
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  addContact(contact: Contact) {
    console.log(contact);
    this.contactService.addContact(contact);
  }
}
