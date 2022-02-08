import React from "react";
import "./App.css";
import { Contact, ContactDTO } from "./components/contact/contact.type";

import * as ContactService from "./components/contact/contact.service";
import { ContactListComponent } from "./components/contactList.component";
import ContactFormDialog from "./components/contactForm.component";

type AppProps = {};
type AppState = {
  contacts: Contact[];
  totalPages: number;
  page: number;
};

class App extends React.Component<{}, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      page: 1,
      totalPages: 0,
      contacts: [],
    };
  }

  async componentDidMount() {
    const { contacts, totalPages } = await ContactService.fetchContacts(
      this.state.page
    );
    this.setState({
      contacts,
      totalPages,
    });
  }

  changeContactsListPage = async (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    const { contacts, totalPages } = await ContactService.fetchContacts(page);
    this.setState({
      contacts,
      totalPages,
      page,
    });
  };

  onCreateHandler = async (payload: ContactDTO) => {
    await ContactService.createContact(payload);
    let { contacts, totalPages } = await ContactService.fetchContacts(
      this.state.page
    );

    this.setState({
      contacts,
      totalPages,
    });
  };

  onUpdateHandler = (id: string) => async (payload: ContactDTO) => {
    const updatedContact = await ContactService.updateContact(id, payload);
    const contacts = [...this.state.contacts];
    const i = contacts.findIndex((c) => c.id === id);

    contacts[i] = updatedContact;
    this.setState({
      contacts,
    });
  };

  onDeleteHandler = async (id: string) => {
    await ContactService.deleteContact(id);
    let { contacts, totalPages } = await ContactService.fetchContacts(
      this.state.page
    );

    let page = this.state.page;
    if (totalPages < page) {
      page = totalPages;
      const refetchResponse = await ContactService.fetchContacts(page);
      contacts = refetchResponse.contacts;
    }

    this.setState({
      contacts,
      totalPages,
      page,
    });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <header className="App-header">
          <ContactFormDialog
            functionHandler={this.onCreateHandler}
            componentAction="Create"
          />
          {this.state.contacts.length === 0 ? (
            <p>Click on a button to create a new contact.</p>
          ) : (
            <ContactListComponent
              page={this.state.page}
              totalPages={this.state.totalPages}
              contacts={this.state.contacts}
              onUpdateHandler={this.onUpdateHandler}
              onDeleteHandler={this.onDeleteHandler}
              changeContactsListPageHandler={this.changeContactsListPage}
            />
          )}
        </header>
      </div>
    );
  }
}

export default App;
