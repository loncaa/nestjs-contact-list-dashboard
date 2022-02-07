import { Button } from "@mui/material";
import React from "react";
import "./App.css";
import { CreateContactDTO } from "./components/contact/contact.dto";
import { Contact } from "./components/contact/contact.interface";

import * as ContactService from "./components/contact/contact.service";
import { ContactListComponent } from "./components/contactList.component";

type AppProps = {};
type AppState = {
  contacts: Contact[];
  currentPage: number;
  totalPages: number;
};

class App extends React.Component<{}, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      currentPage: 0,
      totalPages: 0,
      contacts: [],
    };
  }

  componentDidMount() {
    ContactService.fetchContacts()
      .then((contacts) => {
        this.setState({
          contacts,
        });
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  onUpdateHand = (id: string, payload: CreateContactDTO) => {
    ContactService.updateContact(id, payload).then((updatedContact) => {
      const contacts = [...this.state.contacts];
      const i = contacts.findIndex((c) => c.id === id);

      contacts[i] = updatedContact;
      this.setState({
        contacts,
      });
    });
  };

  ondeleteHandler = (id: string) => {
    ContactService.deleteContact(id).then((contact) => {
      const contacts = [...this.state.contacts];
      const i = contacts.findIndex((c) => c.id === contact.id);

      contacts.splice(i, 1);
      this.setState({
        contacts,
      });
    });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <header className="App-header">
          <Button
            size="small"
            onClick={() => {
              console.log("create");
            }}
          >
            Create Contact
          </Button>
          {this.state.contacts.length === 0 ? (
            <p>Click on a button to create a new contact.</p>
          ) : (
            <ContactListComponent
              currentPage={this.state.currentPage}
              totalPages={this.state.totalPages}
              contacts={this.state.contacts}
              onUpdateHandler={this.onUpdateHand}
              ondeleteHandler={this.ondeleteHandler}
            />
          )}
        </header>
      </div>
    );
  }
}

export default App;
