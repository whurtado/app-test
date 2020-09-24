import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[] =  [];

  constructor() {}

  getContacts() {
    if(localStorage.getItem('contacts') === null) {
      this.contacts = [];
    } else {
      this.contacts = JSON.parse(localStorage.getItem('contacts'));
    }
    return this.contacts;
  }

  addContact(contact: Contact) {
    console.log("contact", contact);
    this.contacts.push(contact);
    let contacts = [];
    if(localStorage.getItem('contacts') === null) {
      contacts = [];
      contacts.push(contact);
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } else {
      contacts = JSON.parse(localStorage.getItem('contacts'));
      contacts.push(contact); 
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  deleteContact(contact: Contact) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (contact == this.contacts[i]) {
        this.contacts.splice(i, 1);
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
      }
    }
  }


}
